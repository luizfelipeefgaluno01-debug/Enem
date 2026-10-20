(() => {
  "use strict";

  const memoryStore = new Map();
  let liveRegion;
  let storageWarningShown = false;

  function announce(message) {
    if (!liveRegion) {
      liveRegion = document.createElement("div");
      liveRegion.className = "sr-only";
      liveRegion.setAttribute("role", "status");
      liveRegion.setAttribute("aria-live", "polite");
      document.body.append(liveRegion);
    }

    liveRegion.textContent = message;
  }

  function showStorageWarning(message) {
    announce(message);
    if (storageWarningShown) return;

    storageWarningShown = true;
    const main = document.querySelector("main");
    if (!main) return;

    const warning = document.createElement("p");
    warning.className = "storage-warning";
    warning.setAttribute("role", "status");
    warning.textContent = message;
    const pageHeading = main.querySelector(":scope > .page-heading");
    main.insertBefore(warning, pageHeading ? pageHeading.nextSibling : main.firstChild);
  }

  function readStored(key, fallback, isValid = () => true) {
    let rawValue;
    try {
      rawValue = window.localStorage.getItem(key);
    } catch (error) {
      if (memoryStore.has(key)) return memoryStore.get(key);
      showStorageWarning("O armazenamento local não está disponível. As alterações desta sessão não serão mantidas após fechar a página.");
      return fallback;
    }

    if (rawValue === null) {
      return memoryStore.has(key) ? memoryStore.get(key) : fallback;
    }

    try {
      const value = JSON.parse(rawValue);
      if (isValid(value)) {
        memoryStore.set(key, value);
        return value;
      }
    } catch (error) {
      showStorageWarning("Um registro local estava inválido e foi ignorado. Você pode continuar usando a página.");
      return fallback;
    }

    showStorageWarning("Um registro local tinha um formato incompatível e foi ignorado. Você pode continuar usando a página.");
    return fallback;
  }

  function writeStored(key, value) {
    memoryStore.set(key, value);
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      showStorageWarning("Não foi possível salvar no armazenamento local. As alterações ficam disponíveis apenas enquanto esta página permanecer aberta.");
      return false;
    }
  }

  function removeStored(key) {
    memoryStore.delete(key);
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      showStorageWarning("Não foi possível limpar o armazenamento local. Tente novamente nas configurações do navegador.");
      return false;
    }
  }

  function isRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function createStatus(container, className = "interaction-status") {
    const status = document.createElement("p");
    status.className = className;
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    container.append(status);
    return status;
  }

  function observeContent() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll(".feature-card, .study-card, main > section");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    targets.forEach((target) => observer.observe(target));
  }

  function bindPersistentCheckboxes(inputs, storageKey, onChange) {
    const saved = readStored(storageKey, {}, isRecord);
    inputs.forEach((input) => {
      if (Object.prototype.hasOwnProperty.call(saved, input.id)) {
        input.checked = saved[input.id] === true;
      }
    });

    const persist = () => {
      const values = {};
      inputs.forEach((input) => {
        values[input.id] = input.checked;
      });
      writeStored(storageKey, values);
      if (onChange) onChange();
    };

    inputs.forEach((input) => input.addEventListener("change", persist));
    return { persist };
  }

  function setupTaskProgress() {
    const section = document.querySelector('main section[aria-labelledby="tasks-title"]');
    if (!section) return;

    const inputs = Array.from(section.querySelectorAll('input[type="checkbox"]'));
    if (inputs.length === 0) return;

    const progressPanel = document.createElement("div");
    progressPanel.className = "dynamic-progress";
    const label = document.createElement("p");
    label.className = "dynamic-progress-label";
    const progress = document.createElement("progress");
    progress.max = inputs.length;
    progress.setAttribute("aria-label", "Progresso das tarefas do cronograma");
    progressPanel.append(label, progress);
    const heading = section.querySelector("h2");
    if (heading) heading.insertAdjacentElement("afterend", progressPanel);

    const status = createStatus(progressPanel);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "clear-data-button";
    button.textContent = "Redefinir tarefas";
    progressPanel.append(button);

    let previouslyComplete = false;
    const update = () => {
      const completeCount = inputs.filter((input) => input.checked).length;
      progress.value = completeCount;
      label.textContent = `${completeCount} de ${inputs.length} tarefas concluídas`;
      const complete = completeCount === inputs.length;
      status.textContent = complete && !previouslyComplete
        ? "Parabéns por concluir todas as tarefas planejadas. Reserve um tempo para descansar."
        : "";
      previouslyComplete = complete;
    };

    bindPersistentCheckboxes(inputs, "rumoEnem.cronograma", update);
    update();
    button.addEventListener("click", () => {
      if (!window.confirm("Deseja desmarcar todas as tarefas deste cronograma?")) return;
      inputs.forEach((input) => { input.checked = false; });
      writeStored("rumoEnem.cronograma", {});
      previouslyComplete = false;
      update();
      announce("As tarefas do cronograma foram redefinidas.");
    });
  }

  function setupReview() {
    const section = document.querySelector('main section[aria-labelledby="today-title"]');
    if (section) {
      const inputs = Array.from(section.querySelectorAll('input[type="checkbox"]'));
      if (inputs.length > 0) {
        const panel = document.createElement("div");
        panel.className = "dynamic-progress";
        const label = document.createElement("p");
        const progress = document.createElement("progress");
        progress.max = inputs.length;
        progress.setAttribute("aria-label", "Progresso dos tópicos revisados");
        panel.append(label, progress);
        const heading = section.querySelector("h2");
        if (heading) heading.insertAdjacentElement("afterend", panel);

        const update = () => {
          const count = inputs.filter((input) => input.checked).length;
          label.textContent = `${count} de ${inputs.length} tópicos revisados`;
          progress.value = count;
        };
        bindPersistentCheckboxes(inputs, "rumoEnem.revisao", update);
        update();
      }
    }

    const notes = document.querySelector("#review-notes");
    if (!notes) return;

    const key = "rumoEnem.anotacoesRevisao";
    const savedNotes = readStored(key, "", (value) => typeof value === "string");
    notes.value = savedNotes;
    const status = createStatus(notes.parentElement);
    let timer;
    notes.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const saved = writeStored(key, notes.value);
        status.textContent = saved
          ? "Anotações salvas localmente neste navegador."
          : "Anotações mantidas apenas enquanto esta página permanecer aberta.";
      }, 300);
    });
  }

  function setupEssay() {
    const textarea = document.querySelector("#essay-draft");
    if (textarea) {
      const key = "rumoEnem.redacao";
      const savedEssay = readStored(key, "", (value) => typeof value === "string");
      textarea.value = savedEssay;

      const counters = document.createElement("div");
      counters.className = "essay-counts";
      const wordCount = document.createElement("p");
      const characterCount = document.createElement("p");
      const lineCount = document.createElement("p");
      counters.append(wordCount, characterCount, lineCount);
      textarea.insertAdjacentElement("afterend", counters);
      const status = createStatus(counters);
      let timer;

      const updateCounts = () => {
        const text = textarea.value;
        const trimmed = text.trim();
        const words = trimmed ? trimmed.split(/\s+/u).length : 0;
        const characters = [...text].length;
        const lines = trimmed ? text.split(/\r\n|\r|\n/u).length : 0;
        wordCount.textContent = `Palavras: ${words}`;
        characterCount.textContent = `Caracteres: ${characters}`;
        lineCount.textContent = `Linhas: ${lines}`;
      };

      updateCounts();
      textarea.addEventListener("input", () => {
        updateCounts();
        status.textContent = "";
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          const saved = writeStored(key, textarea.value);
          status.textContent = saved
            ? "Rascunho salvo localmente neste navegador."
            : "Rascunho mantido apenas enquanto esta página permanecer aberta.";
        }, 350);
      });

      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.className = "clear-data-button";
      clearButton.textContent = "Limpar rascunho";
      counters.append(clearButton);
      clearButton.addEventListener("click", () => {
        if (!window.confirm("Deseja apagar o rascunho salvo neste navegador?")) return;
        window.clearTimeout(timer);
        textarea.value = "";
        const removed = removeStored(key);
        updateCounts();
        status.textContent = removed
          ? "O rascunho local foi removido."
          : "Não foi possível remover o rascunho salvo no navegador.";
      });
    }

    const checklist = document.querySelector('main section[aria-labelledby="checklist-title"]');
    if (!checklist) return;
    const inputs = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
    if (inputs.length === 0) return;
    const panel = document.createElement("div");
    panel.className = "dynamic-progress";
    const label = document.createElement("p");
    const progress = document.createElement("progress");
    progress.max = inputs.length;
    progress.setAttribute("aria-label", "Progresso do checklist de redação");
    panel.append(label, progress);
    const heading = checklist.querySelector("h2");
    if (heading) heading.insertAdjacentElement("afterend", panel);

    const update = () => {
      const count = inputs.filter((input) => input.checked).length;
      label.textContent = `${count} de ${inputs.length} itens do checklist concluídos`;
      progress.value = count;
    };
    bindPersistentCheckboxes(inputs, "rumoEnem.checklistRedacao", update);
    update();
  }

  function setupMotivationReflection() {
    const textarea = document.querySelector("#personal-reason");
    if (!textarea) return;
    const key = "rumoEnem.motivoPessoal";
    textarea.value = readStored(key, "", (value) => typeof value === "string");
    const status = createStatus(textarea.parentElement);
    let timer;
    textarea.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const saved = writeStored(key, textarea.value);
        status.textContent = saved
          ? "Sua reflexão foi salva localmente neste navegador."
          : "Sua reflexão está disponível apenas enquanto esta página permanecer aberta.";
      }, 350);
    });
  }

  function setupFutureGoal() {
    const textarea = document.querySelector("#future-goal");
    if (!textarea) return;
    const key = "rumoEnem.metaFutura";
    textarea.value = readStored(key, "", (value) => typeof value === "string");
    const status = createStatus(textarea.parentElement);
    let timer;
    textarea.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const saved = writeStored(key, textarea.value);
        status.textContent = saved
          ? "Meta salva localmente neste navegador. Os indicadores demonstrativos não foram alterados."
          : "Meta disponível apenas enquanto esta página permanecer aberta.";
      }, 350);
    });
  }

  function setupProfile() {
    const nameField = document.querySelector("#student-name");
    const form = nameField ? nameField.closest("form") : null;
    if (!form) return;

    const key = "rumoEnem.perfil";
    const fields = Array.from(form.querySelectorAll('input:not([type="checkbox"])'));
    const preferences = Array.from(form.querySelectorAll('input[type="checkbox"][name="preferences"]'));
    const saveButton = form.querySelector('button[type="button"]');
    if (!saveButton) return;

    const saved = readStored(key, null, (value) => isRecord(value) && isRecord(value.fields) && Array.isArray(value.preferences));
    if (saved) {
      fields.forEach((field) => {
        if (typeof saved.fields[field.name] === "string") field.value = saved.fields[field.name];
      });
      preferences.forEach((input) => {
        input.checked = saved.preferences.includes(input.value);
      });
    }

    const status = createStatus(form);
    const saveProfile = () => {
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Revise os campos destacados antes de salvar.";
        return;
      }

      const fieldValues = {};
      fields.forEach((field) => { fieldValues[field.name] = field.value.trim(); });
      const selectedPreferences = preferences.filter((input) => input.checked).map((input) => input.value);
      const savedSuccessfully = writeStored(key, { fields: fieldValues, preferences: selectedPreferences });
      status.textContent = savedSuccessfully
        ? "Perfil salvo localmente neste navegador. Ele não é sincronizado com outros dispositivos."
        : "Perfil disponível apenas enquanto esta página permanecer aberta.";
    };

    saveButton.addEventListener("click", saveProfile);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      saveProfile();
    });

    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "clear-data-button";
    clearButton.textContent = "Limpar perfil salvo";
    saveButton.insertAdjacentElement("afterend", clearButton);
    clearButton.addEventListener("click", () => {
      if (!window.confirm("Deseja apagar o perfil salvo neste navegador?")) return;
      form.reset();
      const removed = removeStored(key);
      status.textContent = removed
        ? "O perfil local foi removido."
        : "Não foi possível remover o perfil salvo no navegador.";
    });
  }

  const correctAnswers = {
    "sample-answer": "b",
    "sample-humanas": "a"
  };

  function setupQuiz() {
    const sections = Array.from(document.querySelectorAll("main section")).filter((section) =>
      section.querySelector('fieldset input[type="radio"]')
    );
    if (sections.length === 0) return;

    const questions = sections.map((section) => {
      const inputs = Array.from(section.querySelectorAll('fieldset input[type="radio"]'));
      const fieldset = inputs[0].closest("fieldset");
      const name = inputs[0].name;
      const feedback = document.createElement("p");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      fieldset.insertAdjacentElement("afterend", feedback);

      inputs.forEach((input) => {
        input.addEventListener("change", () => {
          fieldset.querySelectorAll("label").forEach((label) => label.classList.remove("is-selected"));
          const selectedLabel = input.closest("label");
          if (selectedLabel) selectedLabel.classList.add("is-selected");
        });
      });

      return { section, fieldset, inputs, name, feedback };
    }).filter((question) => Object.prototype.hasOwnProperty.call(correctAnswers, question.name));

    if (questions.length === 0) return;

    const controls = document.createElement("div");
    controls.className = "dynamic-controls";
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Corrigir respostas demonstrativas";
    const retryButton = document.createElement("button");
    retryButton.type = "button";
    retryButton.className = "clear-data-button";
    retryButton.textContent = "Tentar novamente";
    retryButton.hidden = true;
    controls.append(submitButton, retryButton);
    questions[questions.length - 1].section.append(controls);

    const result = createStatus(controls);
    let submitted = false;

    submitButton.addEventListener("click", () => {
      if (submitted) return;
      const unanswered = questions.find((question) => !question.inputs.some((input) => input.checked));
      if (unanswered) {
        result.textContent = "Responda às duas questões demonstrativas antes de conferir o resultado.";
        const firstAvailable = unanswered.inputs[0];
        if (firstAvailable) firstAvailable.focus();
        return;
      }

      let correctCount = 0;
      questions.forEach((question) => {
        const answer = correctAnswers[question.name];
        const selected = question.inputs.find((input) => input.checked);
        const isCorrect = selected.value === answer;
        if (isCorrect) correctCount += 1;

        question.fieldset.querySelectorAll("label").forEach((label) => label.classList.remove("is-correct", "is-incorrect"));
        const correctInput = question.inputs.find((input) => input.value === answer);
        const correctLabel = correctInput ? correctInput.closest("label") : null;
        const selectedLabel = selected.closest("label");
        if (correctLabel) correctLabel.classList.add("is-correct");
        if (!isCorrect && selectedLabel) selectedLabel.classList.add("is-incorrect");

        question.feedback.textContent = isCorrect
          ? "Resposta correta."
          : `Resposta incorreta. A alternativa correta é ${answer.toUpperCase()}.`;
        const details = question.section.querySelector("details");
        if (details) details.open = true;
      });

      const answeredCount = questions.length;
      const statsKey = "rumoEnem.resultadosSimulados";
      const previous = readStored(statsKey, { answered: 0, correct: 0 }, (value) =>
        isRecord(value) && Number.isInteger(value.answered) && Number.isInteger(value.correct)
        && value.answered >= 0 && value.correct >= 0 && value.correct <= value.answered
      );
      writeStored(statsKey, {
        answered: previous.answered + answeredCount,
        correct: previous.correct + correctCount
      });

      const encouragement = correctCount === questions.length
        ? "Ótimo trabalho! Revise o raciocínio e siga no seu ritmo."
        : correctCount > 0
          ? "Você já identificou parte do caminho. Use os comentários para revisar o que faltou."
          : "Tudo bem errar durante o treino. Reveja as explicações e tente novamente quando quiser.";
      result.textContent = `Resultado demonstrativo: ${correctCount} de ${questions.length} acertos. ${encouragement} Este resultado não é uma nota oficial do ENEM.`;
      submitted = true;
      submitButton.disabled = true;
      retryButton.hidden = false;
    });

    retryButton.addEventListener("click", () => {
      questions.forEach((question) => {
        question.inputs.forEach((input) => { input.checked = false; });
        question.fieldset.querySelectorAll("label").forEach((label) =>
          label.classList.remove("is-selected", "is-correct", "is-incorrect")
        );
        question.feedback.textContent = "";
        const details = question.section.querySelector("details");
        if (details) details.open = false;
      });
      result.textContent = "";
      submitted = false;
      submitButton.disabled = false;
      retryButton.hidden = true;
      questions[0].inputs[0].focus();
    });
  }

  function readProgressSnapshot() {
    const tasks = readStored("rumoEnem.cronograma", null, isRecord);
    const reviews = readStored("rumoEnem.revisao", null, isRecord);
    const quiz = readStored("rumoEnem.resultadosSimulados", null, (value) =>
      isRecord(value) && Number.isInteger(value.answered) && Number.isInteger(value.correct)
    );
    return { tasks, reviews, quiz };
  }

  function addPersonalProgressSummary(target, headingText) {
    const { tasks, reviews, quiz } = readProgressSnapshot();
    const summary = document.createElement("section");
    summary.className = "personal-data-summary";
    const heading = document.createElement("h2");
    heading.textContent = headingText;
    summary.append(heading);

    const hasRecords = tasks !== null || reviews !== null || quiz !== null;
    const message = document.createElement("p");
    if (!hasRecords) {
      message.textContent = "Ainda não há registros locais. Marque tarefas, faça revisões ou pratique as questões demonstrativas para começar.";
      summary.append(message);
    } else {
      message.textContent = "Estes dados são registros locais do navegador e ficam separados dos exemplos fictícios apresentados nesta página.";
      summary.append(message);
      const list = document.createElement("ul");
      if (tasks !== null) {
        const completed = Object.values(tasks).filter((value) => value === true).length;
        const item = document.createElement("li");
        item.textContent = `Tarefas do cronograma concluídas: ${completed} de 4.`;
        list.append(item);
      }
      if (reviews !== null) {
        const completed = Object.values(reviews).filter((value) => value === true).length;
        const item = document.createElement("li");
        item.textContent = `Tópicos de revisão marcados: ${completed} de 3.`;
        list.append(item);
      }
      if (quiz !== null) {
        const item = document.createElement("li");
        item.textContent = `Questões demonstrativas respondidas: ${quiz.answered}; acertos: ${quiz.correct}.`;
        list.append(item);
      }
      summary.append(list);
    }

    target.insertAdjacentElement("afterend", summary);
  }

  function setupPersonalProgress() {
    if (document.querySelector("#personal-reason")) {
      setupMotivationReflection();
    }
    setupFutureGoal();

    const dashboardHeading = document.querySelector("main > .page-heading");
    if (dashboardHeading && document.title.includes("Painel do estudante")) {
      addPersonalProgressSummary(dashboardHeading, "Seus registros neste navegador");
    }

    const performanceHeading = document.querySelector("main > .page-heading");
    if (performanceHeading && document.title.includes("Meu desempenho")) {
      addPersonalProgressSummary(performanceHeading, "Atividades registradas localmente");
    }
  }

  observeContent();
  setupTaskProgress();
  setupReview();
  setupEssay();
  setupProfile();
  setupQuiz();
  setupPersonalProgress();
})();
