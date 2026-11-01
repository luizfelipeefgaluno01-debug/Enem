(() => {
  "use strict";

  const bank = window.enemQuestionBank;
  const select = document.querySelector("#review-question-subject");
  const form = document.querySelector("#review-question-form");
  const status = document.querySelector("#review-question-status");
  const result = document.querySelector("#review-question-result");
  const gradeButton = document.querySelector("#grade-review-questions");
  const retryButton = document.querySelector("#retry-review-questions");

  if (!bank || !select || !form || !status || !result || !gradeButton || !retryButton) return;

  Object.entries(bank.subjects).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.append(option);
  });

  let currentQuestions = [];
  let graded = false;

  function renderQuestions() {
    const subject = select.value;
    currentQuestions = bank.questions[subject].slice(0, 19);
    if (currentQuestions.length !== 19) {
      throw new Error(`A matéria ${bank.subjects[subject]} precisa ter 19 questões para revisão.`);
    }

    form.replaceChildren();
    result.textContent = "";
    status.textContent = `19 questões de ${bank.subjects[subject]}. Marque uma alternativa em cada questão.`;
    gradeButton.disabled = false;
    retryButton.hidden = true;
    graded = false;

    currentQuestions.forEach((question, questionIndex) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "practice-question";

      const legend = document.createElement("legend");
      legend.textContent = `Questão ${questionIndex + 1}`;
      fieldset.append(legend);

      const prompt = document.createElement("p");
      prompt.textContent = question.prompt;
      fieldset.append(prompt);

      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `review-${subject}-${questionIndex}`;
        input.value = String(optionIndex);
        label.append(input, document.createTextNode(` ${String.fromCharCode(65 + optionIndex)}) ${option}`));
        fieldset.append(label);
      });

      const explanation = document.createElement("p");
      explanation.className = "practice-explanation";
      explanation.hidden = true;
      fieldset.append(explanation);
      form.append(fieldset);
    });
  }

  function gradeQuestions() {
    if (graded) return;

    const fieldsets = Array.from(form.querySelectorAll(".practice-question"));
    const unanswered = fieldsets.findIndex((fieldset) => !fieldset.querySelector('input[type="radio"]:checked'));
    if (unanswered !== -1) {
      result.textContent = `Responda às 19 questões antes de corrigir.`;
      fieldsets[unanswered].querySelector('input[type="radio"]')?.focus();
      return;
    }

    let correctCount = 0;
    fieldsets.forEach((fieldset, questionIndex) => {
      const question = currentQuestions[questionIndex];
      const inputs = Array.from(fieldset.querySelectorAll('input[type="radio"]'));
      const selected = inputs.find((input) => input.checked);
      const correctInput = inputs[question.answer];
      const correctLabel = correctInput.closest("label");
      const selectedLabel = selected.closest("label");
      const isCorrect = Number(selected.value) === question.answer;
      const explanation = fieldset.querySelector(".practice-explanation");

      if (isCorrect) correctCount += 1;
      correctLabel.classList.add("is-correct");
      if (!isCorrect) selectedLabel.classList.add("is-incorrect");
      explanation.textContent = `${isCorrect ? "Correta." : `Incorreta. A alternativa correta é ${String.fromCharCode(65 + question.answer)}.`} ${question.explanation}`;
      explanation.hidden = false;
    });

    result.textContent = `Resultado: ${correctCount} de 19 questões corretas em ${bank.subjects[select.value]}. Confira os comentários para revisar.`;
    gradeButton.disabled = true;
    retryButton.hidden = false;
    graded = true;
  }

  function retryQuestions() {
    renderQuestions();
    form.querySelector('input[type="radio"]')?.focus();
  }

  select.addEventListener("change", renderQuestions);
  gradeButton.addEventListener("click", gradeQuestions);
  retryButton.addEventListener("click", retryQuestions);
  renderQuestions();
})();
