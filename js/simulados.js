(() => {
  "use strict";

  const questions = {
    portugues: [
      {
        prompt: "Em um comunicado lê-se: “A coleta de recicláveis foi ampliada. No entanto, sem a separação correta em casa, parte do material continua indo para o aterro.” Que relação o conectivo destacado estabelece?",
        options: ["Conclusão", "Contraste", "Explicação", "Condição"],
        answer: 1,
        explanation: "“No entanto” introduz uma oposição: o serviço foi ampliado, mas o resultado ainda depende da separação feita pelos moradores."
      },
      {
        prompt: "Uma campanha mostra uma torneira pingando e traz a frase “Cada gota conta. Feche a torneira ao escovar os dentes.” Qual é a finalidade predominante?",
        options: ["Relatar uma descoberta científica", "Instruir o leitor a economizar água", "Narrar uma lembrança pessoal", "Definir o funcionamento de uma torneira"],
        answer: 1,
        explanation: "O imperativo “feche” dirige uma recomendação ao público; o texto busca orientar uma ação."
      },
      {
        prompt: "“O posto instalou uma rampa. Ainda assim, a porta estreita impede a passagem de algumas cadeiras de rodas.” Qual conclusão é sustentada pelo texto?",
        options: ["A rampa eliminou todas as barreiras", "A acessibilidade depende de mais de uma adaptação", "A porta foi alargada", "O posto deixou de atender o público"],
        answer: 1,
        explanation: "O texto informa que uma barreira foi reduzida, mas outra permanece; portanto, uma única adaptação não garantiu acesso completo."
      },
      {
        prompt: "Uma publicação apresenta uma lista de ingredientes e o passo a passo para preparar um alimento. Qual característica desse gênero é mais relevante?",
        options: ["Organizar instruções para realizar uma tarefa", "Defender uma tese por meio de evidências", "Registrar falas de uma entrevista", "Relatar fatos em ordem cronológica"],
        answer: 0,
        explanation: "Receitas orientam uma ação e normalmente combinam ingredientes com instruções sequenciadas."
      },
      {
        prompt: "Em uma conversa familiar, uma personagem usa uma expressão regional. Qual análise linguística é adequada?",
        options: ["A expressão prova que a personagem desconhece a língua", "A variedade linguística pode ser adequada ao contexto da conversa", "Toda fala deve seguir a mesma variedade formal", "A expressão regional não possui significado"],
        answer: 1,
        explanation: "A língua varia conforme região, grupo e situação. Uma variedade não é inferior por ser diferente da norma-padrão."
      }
    ],
    ingles: [
      {
        prompt: "Read: “The community garden is small, but it provides fresh vegetables for many families.” What does “but” indicate?",
        options: ["A contrast between the garden's size and its impact", "A cause for closing the garden", "A sequence of future events", "A comparison between two families"],
        answer: 0,
        explanation: "“But” introduces contrast: despite being small, the garden benefits many families."
      },
      {
        prompt: "Read: “Please bring a reusable bottle to the event.” What is the main purpose of this sentence?",
        options: ["To ask the reader to take an action", "To report a past event", "To describe how bottles are made", "To express uncertainty about the event"],
        answer: 0,
        explanation: "The imperative “bring” addresses the reader and requests an action."
      },
      {
        prompt: "Read: “Maya missed the bus, so she walked to school.” Why did Maya walk?",
        options: ["The bus arrived early", "She missed the bus", "The school was closed", "She wanted to catch another bus"],
        answer: 1,
        explanation: "The connector “so” introduces the result of the preceding event: Maya missed the bus and then walked."
      },
      {
        prompt: "In the sentence “The library extended its hours. This change helped night students,” what does “This change” refer to?",
        options: ["The library's extended hours", "The students' exams", "A new school building", "A change in the weather"],
        answer: 0,
        explanation: "The demonstrative phrase refers back to the immediately preceding information: the extension of library hours."
      },
      {
        prompt: "In “Actually, the museum is open on Mondays,” what is the closest meaning of “actually” in this context?",
        options: ["Currently", "In fact", "Eventually", "Usually"],
        answer: 1,
        explanation: "“Actually” commonly means “in fact” or “na verdade”; it is not a direct equivalent of Portuguese “atualmente.”"
      }
    ],
    espanhol: [
      {
        prompt: "Lee: “El barrio tiene una plaza nueva, pero todavía faltan árboles en las calles.” ¿Qué relación expresa “pero”?",
        options: ["Contraste", "Causa", "Conclusión", "Finalidad"],
        answer: 0,
        explanation: "“Pero” contrapone la existencia de una plaza nueva con la falta de árboles en las calles."
      },
      {
        prompt: "Lee: “Para llegar al centro, toma el autobús número ocho y baja en la segunda parada.” ¿Qué tipo de texto es más probable?",
        options: ["Una instrucción", "Un poema narrativo", "Una noticia sobre el pasado", "Una descripción de un personaje"],
        answer: 0,
        explanation: "Los verbos en imperativo orientan al lector con instrucciones para llegar a un lugar."
      },
      {
        prompt: "Lee: “Lucía llevó un paraguas porque el pronóstico anunciaba lluvia.” ¿Por qué llevó el paraguas?",
        options: ["Porque esperaba que lloviera", "Porque el autobús estaba lleno", "Porque olvidó su abrigo", "Porque la tienda estaba cerrada"],
        answer: 0,
        explanation: "“Porque” introduce la razón explícita: el pronóstico anunciaba lluvia."
      },
      {
        prompt: "En “El museo publicó una guía. Esta explica cómo recorrer la exposición”, ¿a qué se refiere “Esta”?",
        options: ["A la guía", "A la exposición", "A la ciudad", "A una visitante"],
        answer: 0,
        explanation: "“Esta” retoma el sustantivo femenino singular “guía”, mencionado en la oración anterior."
      },
      {
        prompt: "En “Mi hermana está embarazada”, ¿qué significa “embarazada”?",
        options: ["Que está esperando un bebé", "Que siente vergüenza", "Que está de viaje", "Que está confundida"],
        answer: 0,
        explanation: "El falso cognado “embarazada” significa “grávida”; no significa “embaraçada” en portugués."
      }
    ],
    artes: [
      {
        prompt: "Un cartaz usa letras pequenas para anunciar um serviço gratuito e letras grandes para destacar uma taxa. Qual elemento deve ser analisado primeiro?",
        options: ["A hierarquia visual que dá destaque à taxa", "Somente o número de letras", "A biografia completa do leitor", "A gramatura do papel"],
        answer: 0,
        explanation: "Tamanho e posição da tipografia organizam a leitura e podem enfatizar uma informação em detrimento de outra."
      },
      {
        prompt: "Uma charge desenha uma fila tão longa que ela dá a volta no quarteirão para criticar a demora em um serviço. Que recurso expressivo predomina?",
        options: ["Hipérbole visual", "Perspectiva científica", "Citação bibliográfica", "Instrução técnica"],
        answer: 0,
        explanation: "O exagero da extensão da fila amplifica a crítica e caracteriza uma hipérbole visual."
      },
      {
        prompt: "Em uma fotografia, a câmera posicionada muito abaixo de uma estátua faz a figura parecer imponente. Que aspecto contribui para esse efeito?",
        options: ["O ângulo de enquadramento", "O preço da impressão", "A data de nascimento do fotógrafo", "A quantidade de espectadores fora da cena"],
        answer: 0,
        explanation: "O ponto de vista baixo altera a relação de escala e pode conferir imponência ao objeto representado."
      },
      {
        prompt: "Um mural comunitário retrata histórias e símbolos locais. Qual abordagem favorece sua interpretação?",
        options: ["Relacionar elementos visuais ao contexto e à comunidade retratada", "Ignorar os símbolos e considerar apenas as cores", "Supor que toda pessoa interpreta a obra da mesma forma", "Tratar a obra como se não tivesse público"],
        answer: 0,
        explanation: "A leitura considera forma, símbolos, contexto de produção e grupos representados; não reduz o sentido a um único elemento."
      },
      {
        prompt: "Uma campanha coloca a imagem de uma praia limpa ao lado de uma praia coberta de resíduos. Qual recurso ajuda a produzir o argumento?",
        options: ["O contraste entre as duas imagens", "A ausência de qualquer comparação", "A repetição de uma única cor sem contexto", "A omissão do tema ambiental"],
        answer: 0,
        explanation: "A justaposição de situações opostas cria contraste e convida o público a comparar consequências."
      }
    ],
    historia: [
      {
        prompt: "Após a abolição legal da escravidão no Brasil, em 1888, a população liberta não recebeu acesso amplo e imediato a terra e educação. O que essa situação evidencia?",
        options: ["Que a mudança legal não eliminou automaticamente desigualdades sociais", "Que a escravidão continuou legalmente após 1888", "Que todos receberam terras em igualdade", "Que não houve participação de pessoas escravizadas na história"],
        answer: 0,
        explanation: "A abolição extinguiu juridicamente a escravidão, mas não desfez sozinha estruturas de desigualdade nem garantiu inclusão material."
      },
      {
        prompt: "Ao analisar uma carta escrita por um administrador colonial, qual procedimento ajuda a contextualizar a fonte?",
        options: ["Investigar autoria, data, finalidade e público", "Considerar toda afirmação como neutra e completa", "Ignorar o contexto em que foi produzida", "Usar a carta para provar qualquer interpretação"],
        answer: 0,
        explanation: "A crítica de fontes considera quem escreveu, quando, para quem e com qual objetivo, além dos limites do documento."
      },
      {
        prompt: "Uma comunidade escravizada organiza uma fuga coletiva e mantém práticas culturais próprias. Como esses atos podem ser interpretados?",
        options: ["Como formas de resistência e ação histórica", "Como ausência de participação social", "Como prova de que não existiam conflitos", "Como eventos sem relação com o contexto"],
        answer: 0,
        explanation: "Fugas, organização comunitária e preservação cultural são formas de resistência e demonstram agência histórica."
      },
      {
        prompt: "A industrialização atraiu trabalhadores para centros urbanos, mas a infraestrutura de moradia e saneamento cresceu lentamente. Qual consequência pode decorrer desse processo?",
        options: ["Expansão urbana desigual e precariedade em algumas áreas", "Distribuição idêntica de serviços em todo o território", "Fim imediato das migrações internas", "Desaparecimento de todas as atividades rurais"],
        answer: 0,
        explanation: "O crescimento populacional urbano sem infraestrutura proporcional pode ampliar desigualdades territoriais e déficits de serviços."
      },
      {
        prompt: "Uma Constituição amplia direitos políticos e sociais após um período autoritário. O que esse marco pode representar?",
        options: ["Uma etapa de redemocratização e institucionalização de direitos", "A prova de que todos os direitos são exercidos igualmente", "O fim das disputas políticas", "A inexistência de mudanças sociais posteriores"],
        answer: 0,
        explanation: "A Constituição pode marcar a reconstrução democrática e formalizar direitos, embora sua efetivação dependa de processos posteriores."
      }
    ],
    geografia: [
      {
        prompt: "Moradores de bairros periféricos gastam mais tempo para chegar a hospitais e empregos concentrados no centro. Que conceito ajuda a analisar essa situação?",
        options: ["Desigualdade socioespacial e mobilidade urbana", "Rotação da Terra", "Fuso horário", "Erosão costeira"],
        answer: 0,
        explanation: "A distribuição desigual de serviços e transportes afeta o acesso a oportunidades e os deslocamentos na cidade."
      },
      {
        prompt: "Em um mapa de escala 1:100.000, a distância entre duas localidades é 3 cm. Qual é a distância real aproximada?",
        options: ["300 m", "3 km", "30 km", "300 km"],
        answer: 1,
        explanation: "Cada centímetro corresponde a 100.000 cm, ou 1 km. Logo, 3 cm representam 3 km."
      },
      {
        prompt: "Uma semana de frio intenso é usada para afirmar que o clima de uma região mudou. Qual é a principal falha dessa conclusão?",
        options: ["Confundir uma condição momentânea do tempo com tendência climática", "Usar uma escala cartográfica grande", "Considerar a altitude da região", "Observar temperaturas medidas"],
        answer: 0,
        explanation: "Clima é caracterizado por padrões de longo prazo; um episódio curto descreve o tempo atmosférico."
      },
      {
        prompt: "Uma cadeia produtiva fabrica roupas em um país, usa matéria-prima de outro e vende em vários mercados. Que processo essa distribuição ilustra?",
        options: ["Interdependência territorial na economia global", "Isolamento completo das economias", "Fim dos fluxos de mercadorias", "Ausência de divisão do trabalho"],
        answer: 0,
        explanation: "Etapas produtivas em diferentes lugares demonstram fluxos e relações de interdependência entre territórios."
      },
      {
        prompt: "Uma cidade amplia linhas de ônibus para bairros sem acesso próximo a empregos e serviços. Qual objetivo urbano essa medida pode favorecer?",
        options: ["Aumentar a acessibilidade e reduzir barreiras de deslocamento", "Eliminar a necessidade de planejamento", "Impedir qualquer migração", "Reduzir a distância física entre bairros"],
        answer: 0,
        explanation: "Transporte público pode facilitar o acesso a oportunidades; não altera a distância geográfica nem resolve sozinho todos os problemas urbanos."
      }
    ],
    filosofia: [
      {
        prompt: "Uma pessoa afirma: “A proposta deve ser adotada porque reduziu o tempo de espera em um teste.” Qual pergunta avalia melhor a força do argumento?",
        options: ["O teste é confiável e representa as condições reais?", "Qual é a cor do prédio?", "Quem desenhou o logotipo?", "Quantas palavras há na frase?"],
        answer: 0,
        explanation: "A pergunta examina se a evidência é válida e suficiente para sustentar a conclusão."
      },
      {
        prompt: "Duas políticas buscam distribuir vagas públicas: uma prioriza igualdade formal; outra considera desvantagens históricas. Que questão ética está em debate?",
        options: ["Quais critérios de justiça e igualdade devem orientar a distribuição?", "Como ignorar os efeitos das decisões?", "Por que direitos não devem ser discutidos?", "Como substituir argumentos por preferências sem justificativa?"],
        answer: 0,
        explanation: "O caso envolve diferentes concepções de justiça, igualdade e reparação, que devem ser explicitadas e justificadas."
      },
      {
        prompt: "No diálogo, uma pessoa faz perguntas sucessivas para que outra examine contradições em suas próprias ideias. Que prática filosófica essa estratégia representa?",
        options: ["Investigação crítica por meio do diálogo", "Aceitação automática de uma autoridade", "Memorização de uma lista sem reflexão", "Substituição de razões por ameaças"],
        answer: 0,
        explanation: "O questionamento dialogado examina conceitos e pressupostos em vez de aceitar conclusões sem análise."
      },
      {
        prompt: "Uma regra coletiva limita uma ação individual para proteger o direito de outras pessoas. Que análise filosófica é mais adequada?",
        options: ["Examinar direitos envolvidos, justificativa e consequências da regra", "Concluir que toda regra é justa por existir", "Concluir que toda liberdade é ilimitada", "Ignorar as pessoas afetadas"],
        answer: 0,
        explanation: "Uma avaliação ética considera princípios, direitos em conflito, razões e consequências, não apenas a existência da regra."
      },
      {
        prompt: "Uma conclusão é apoiada por uma razão que não tem relação com o tema discutido. Qual é o problema?",
        options: ["A premissa é irrelevante para sustentar a conclusão", "A conclusão necessariamente é verdadeira", "A evidência prova causalidade", "O argumento não contém nenhuma afirmação"],
        answer: 0,
        explanation: "Premissas precisam ser relevantes e oferecer apoio à conclusão; uma razão sem relação não fortalece o argumento."
      }
    ],
    sociologia: [
      {
        prompt: "Uma escola tem horários, regras e papéis que existiam antes da chegada de um novo estudante e influenciam seu comportamento. Que conceito sociológico ajuda a analisar isso?",
        options: ["Instituições e normas sociais", "Reflexo da luz", "Seleção natural", "Reação química"],
        answer: 0,
        explanation: "Instituições e normas organizam práticas coletivas e influenciam indivíduos, embora também possam ser questionadas e transformadas."
      },
      {
        prompt: "Uma criança aprende formas de falar, brincar e conviver em diferentes grupos. Que processo está em curso?",
        options: ["Socialização", "Evaporação", "Urbanização física", "Fotossíntese"],
        answer: 0,
        explanation: "Socialização é a aprendizagem de valores, práticas e formas de convivência em interações e instituições."
      },
      {
        prompt: "Uma pesquisa encontra associação entre renda familiar e acesso a cursos preparatórios. O que se pode concluir com segurança?",
        options: ["Há associação nos dados, mas isso sozinho não prova causalidade", "A renda é a única causa possível", "A pesquisa prova que todos os casos são iguais", "Os dados dispensam análise do método"],
        answer: 0,
        explanation: "Correlação indica associação, não prova que um fator causou o outro nem elimina explicações alternativas."
      },
      {
        prompt: "Trabalhadores de uma plataforma digital têm horários flexíveis, mas renda variável e pouca previsibilidade. Qual análise é sociologicamente pertinente?",
        options: ["Investigar condições de trabalho, proteção social e relações de poder", "Supor que flexibilidade garante todos os direitos", "Concluir que a tecnologia extinguiu o trabalho", "Ignorar a remuneração e a segurança"],
        answer: 0,
        explanation: "A análise considera benefícios e riscos concretos, incluindo remuneração, proteção, autonomia e distribuição de poder."
      },
      {
        prompt: "Uma exposição apresenta tradições de várias comunidades sem classificá-las como superiores ou inferiores. Que princípio orienta essa abordagem?",
        options: ["Reconhecer diversidade cultural e contextualizar práticas", "Aplicar uma única cultura como padrão universal", "Tratar diferenças como erros", "Ignorar os contextos históricos"],
        answer: 0,
        explanation: "A abordagem contextualiza manifestações e evita hierarquizar culturas por uma suposta escala universal de valor."
      }
    ],
    biologia: [
      {
        prompt: "Na cadeia capim → gafanhoto → sapo, qual afirmação descreve corretamente o fluxo?",
        options: ["A seta indica a transferência de alimento e energia do capim ao gafanhoto", "A energia retorna integralmente ao capim a cada etapa", "O sapo é produtor por estar no último nível", "A matéria não circula no ecossistema"],
        answer: 0,
        explanation: "A seta aponta do organismo consumido para o consumidor; produtores formam a base dessa cadeia."
      },
      {
        prompt: "Em um cruzamento Aa × Aa, com segregação mendeliana simples, qual é a probabilidade de descendente aa?",
        options: ["0%", "25%", "50%", "100%"],
        answer: 1,
        explanation: "As combinações equiprováveis são AA, Aa, Aa e aa; uma entre quatro corresponde a aa, ou 25%."
      },
      {
        prompt: "Por que a vacinação pode proteger uma população contra determinada doença?",
        options: ["Estimula respostas imunes e pode reduzir a circulação do agente", "Substitui todas as medidas de saúde pública", "Transforma vírus em bactérias", "Garante que nenhuma pessoa será infectada"],
        answer: 0,
        explanation: "Vacinas treinam o sistema imune; a proteção varia conforme vacina e indivíduo, e a vacinação coletiva pode reduzir a transmissão."
      },
      {
        prompt: "Uma população bacteriana apresenta variação de resistência. Após uso de um antibiótico, aumentam as bactérias resistentes. Qual explicação é mais adequada?",
        options: ["O antibiótico selecionou variantes resistentes que já conseguiam sobreviver", "As bactérias escolheram conscientemente mudar seus genes", "O antibiótico criou sempre a mesma mutação dirigida", "A seleção natural deixou de atuar"],
        answer: 0,
        explanation: "A seleção favorece variantes hereditárias que sobrevivem melhor naquele ambiente; não é uma mudança consciente dirigida pela necessidade."
      },
      {
        prompt: "Durante a fotossíntese, plantas usam luz, água e dióxido de carbono. Qual resultado geral ocorre?",
        options: ["Produção de matéria orgânica e liberação de oxigênio em organismos fotossintetizantes", "Conversão de oxigênio em nitrogênio", "Destruição dos átomos de carbono", "Produção de alimento sem entrada de energia"],
        answer: 0,
        explanation: "A energia luminosa é convertida em energia química armazenada em moléculas orgânicas; em plantas, oxigênio é liberado no processo."
      }
    ],
    fisica: [
      {
        prompt: "Um ciclista percorre 18 km em 1,5 h. Qual é a velocidade média nesse intervalo?",
        options: ["12 km/h", "18 km/h", "27 km/h", "30 km/h"],
        answer: 0,
        explanation: "Velocidade média = distância ÷ tempo = 18 ÷ 1,5 = 12 km/h."
      },
      {
        prompt: "Um aparelho de 2 kW funciona por 3 h. Qual é a energia consumida?",
        options: ["0,67 kWh", "5 kWh", "6 kWh", "6 kW"],
        answer: 2,
        explanation: "E = P · t = 2 kW · 3 h = 6 kWh. kWh mede energia; kW mede potência."
      },
      {
        prompt: "Um resistor de 4 Ω é atravessado por corrente de 2 A. Qual é a tensão, supondo comportamento ôhmico?",
        options: ["2 V", "6 V", "8 V", "16 V"],
        answer: 2,
        explanation: "Pela Lei de Ohm, U = R · i = 4 · 2 = 8 V."
      },
      {
        prompt: "Uma onda se propaga a 12 m/s e tem frequência de 3 Hz. Qual é seu comprimento de onda?",
        options: ["0,25 m", "4 m", "9 m", "36 m"],
        answer: 1,
        explanation: "Usando v = λf, λ = v ÷ f = 12 ÷ 3 = 4 m."
      },
      {
        prompt: "Uma colher metálica e uma colher de madeira ficam no mesmo ambiente. A metálica parece mais fria ao toque. Qual explicação é mais adequada?",
        options: ["O metal conduz calor da mão mais rapidamente", "A madeira está necessariamente mais quente que o ambiente", "A colher metálica não possui temperatura", "O frio passa da colher para a mão como uma substância"],
        answer: 0,
        explanation: "O metal costuma ter maior condutividade térmica e transfere energia da mão mais rapidamente; a sensação não prova que sua temperatura inicial era menor."
      }
    ],
    quimica: [
      {
        prompt: "Qual conjunto de coeficientes balanceia a equação H₂ + O₂ → H₂O?",
        options: ["1, 1, 1", "2, 1, 2", "1, 2, 1", "2, 2, 1"],
        answer: 1,
        explanation: "2 H₂ + O₂ → 2 H₂O contém quatro átomos de hidrogênio e dois de oxigênio em cada lado."
      },
      {
        prompt: "Uma solução contém 15 g de soluto em volume final de 3 L. Qual é a concentração comum?",
        options: ["5 g/L", "12 g/L", "18 g/L", "45 g/L"],
        answer: 0,
        explanation: "C = m/V = 15 g ÷ 3 L = 5 g/L."
      },
      {
        prompt: "Uma amostra de 100 mL de solução é diluída para volume final de 500 mL, sem perda de soluto. Como fica a concentração?",
        options: ["Fica cinco vezes maior", "Fica cinco vezes menor", "Permanece igual", "Torna-se necessariamente zero"],
        answer: 1,
        explanation: "Com a mesma quantidade de soluto em volume cinco vezes maior, a concentração final é um quinto da inicial."
      },
      {
        prompt: "Uma substância dissolvida em água produz solução com pH 2. O que se pode afirmar em condições usuais?",
        options: ["A solução é ácida", "A solução é neutra", "A solução é básica", "O pH não permite classificar"],
        answer: 0,
        explanation: "Em escala aquosa usual, pH abaixo de 7 indica solução ácida; pH 2 é ácido."
      },
      {
        prompt: "Uma pastilha efervescente reage com água e libera bolhas de gás. Qual evidência sugere transformação química?",
        options: ["Formação de gás durante a reação", "Apenas mudança de forma da embalagem", "A separação manual de fragmentos", "O deslocamento da pastilha no recipiente"],
        answer: 0,
        explanation: "A formação de uma nova substância gasosa é indício de reação química, embora evidências devam ser analisadas no contexto."
      }
    ],
    matematica: [
      {
        prompt: "Um produto custa R$ 240 e recebe desconto de 15%. Qual é o preço após o desconto?",
        options: ["R$ 36", "R$ 204", "R$ 225", "R$ 276"],
        answer: 1,
        explanation: "15% de 240 = 0,15 · 240 = 36. Preço final = 240 − 36 = R$ 204."
      },
      {
        prompt: "Uma receita para 4 pessoas usa 300 g de farinha. Mantendo a proporção, quantos gramas são necessários para 10 pessoas?",
        options: ["600 g", "700 g", "750 g", "900 g"],
        answer: 2,
        explanation: "O fator de escala é 10/4 = 2,5; logo, 300 · 2,5 = 750 g."
      },
      {
        prompt: "Para os dados 2, 3, 3, 4 e 18, qual é a mediana?",
        options: ["3", "6", "18", "30"],
        answer: 0,
        explanation: "Os dados já estão ordenados; o valor central do conjunto de cinco elementos é 3."
      },
      {
        prompt: "Uma caixa contém 3 bolas vermelhas e 2 azuis. Retirando uma bola ao acaso, qual é a probabilidade de ser azul?",
        options: ["2/5", "3/5", "1/2", "2/3"],
        answer: 0,
        explanation: "Há 2 resultados favoráveis entre 5 bolas equiprováveis, então a probabilidade é 2/5."
      },
      {
        prompt: "Um terreno retangular mede 12 m por 7 m. Qual é sua área?",
        options: ["19 m²", "38 m²", "84 m²", "168 m²"],
        answer: 2,
        explanation: "A área do retângulo é base · altura = 12 · 7 = 84 m²."
      }
    ]
  };

  const additionalQuestions = {
    portugues: [
      ["“A praça recebeu novos bancos; contudo, continua sem iluminação.” O conectivo “contudo” indica:", ["Conclusão", "Contraste", "Explicação", "Finalidade"], 1, "“Contudo” introduz uma ressalva: a melhoria ocorreu, mas um problema permanece."],
      ["Um texto apresenta dados de uma pesquisa e explica como ela foi realizada. Qual recurso fortalece sua credibilidade?", ["A indicação do método e da fonte", "O uso de uma frase sem autoria", "A repetição de uma opinião", "A ausência de informações verificáveis"], 0, "Método e fonte permitem avaliar a origem e os limites das informações."],
      ["“Embora o trajeto seja longo, o ônibus é acessível.” A oração iniciada por “embora” expressa:", ["Concessão", "Consequência", "Comparação", "Conclusão"], 0, "“Embora” introduz uma concessão: um fato que não impede o que é afirmado na oração principal."],
      ["Um anúncio diz “Últimas unidades!” e usa letras grandes para incentivar a compra. Predomina a intenção de:", ["Persuadir o público consumidor", "Registrar uma memória", "Explicar um fenômeno natural", "Apresentar instruções neutras"], 0, "A chamada e o destaque visual buscam influenciar a decisão do consumidor."],
      ["Em “Joana entregou o relatório à diretora, que o revisou”, o pronome “o” retoma:", ["O relatório", "Joana", "A diretora", "A entrega"], 0, "“O” substitui “o relatório”, evitando repetir o objeto direto."],
      ["Uma notícia informa que uma medida “pode reduzir” o trânsito. Essa expressão indica:", ["Possibilidade, não certeza", "Certeza de resultado", "Uma ordem ao leitor", "Um fato ocorrido no passado"], 0, "O verbo “pode” modaliza a afirmação e apresenta um resultado possível."],
      ["Em um editorial, a tese é mais bem identificada como:", ["A posição central que o texto defende", "A lista de nomes citados", "A informação menos relacionada ao tema", "O título considerado isoladamente"], 0, "A tese sintetiza a posição sustentada pelos argumentos do editorial."],
      ["Uma campanha usa a frase “Doe sangue. Uma atitude pode salvar vidas.” O emprego do imperativo busca:", ["Convocar o leitor a agir", "Descrever uma paisagem", "Narrar uma experiência passada", "Definir um conceito gramatical"], 0, "“Doe” é uma forma verbal que dirige um apelo ao interlocutor."],
      ["Um poema repete o som de /v/ em “vento varre a varanda”. Esse recurso sonoro é:", ["Aliteração", "Hipérbole", "Eufemismo", "Antítese"], 0, "A repetição de um som consonantal caracteriza aliteração."],
      ["Uma tirinha termina com uma fala inesperada que contradiz a expectativa criada nos quadros anteriores. O efeito pode ser de:", ["Humor por quebra de expectativa", "Definição técnica", "Neutralidade informativa", "Instrução de procedimento"], 0, "A mudança inesperada de sentido costuma produzir humor, dependendo do contexto."],
      ["Em “O projeto foi aprovado pelos estudantes”, a construção está na voz:", ["Passiva analítica", "Ativa", "Reflexiva", "Impessoal com “se”"], 0, "O sujeito recebe a ação e a locução “foi aprovado” forma a voz passiva analítica."],
      ["Um texto relata acontecimentos em sequência e apresenta personagens, tempo e espaço. Predomina o tipo:", ["Narrativo", "Injuntivo", "Expositivo", "Argumentativo"], 0, "Narrativas organizam ações e acontecimentos envolvendo personagens em determinado tempo e espaço."],
      ["Na frase “A cidade acordou sob um manto de neblina”, “manto” foi usado principalmente em sentido:", ["Figurado, criando uma imagem", "Literal, como peça de roupa", "Numérico", "Jurídico"], 0, "A neblina é comparada a um manto; trata-se de uso figurado."],
      ["Uma entrevista apresenta perguntas de um jornalista e respostas de uma pesquisadora. A organização serve para:", ["Dar visibilidade às falas dos interlocutores", "Ocultar quem responde", "Transformar o texto em receita", "Eliminar o contexto da conversa"], 0, "A alternância de perguntas e respostas estrutura o gênero entrevista e identifica as vozes."],
      ["Ao comparar duas traduções de um poema, qual análise é mais adequada?", ["Observar escolhas lexicais, ritmo e efeitos de sentido", "Supor que apenas uma palavra por verso é possível", "Ignorar o gênero e o contexto", "Avaliar somente o tamanho dos textos"], 0, "Traduções podem usar soluções diferentes; importa como preservam ou recriam efeitos e sentidos."]
    ],
    ingles: [
      ["Read: “Although the road was wet, the driver slowed down.” What does “although” introduce?", ["A contrast or concession", "A result", "A purpose", "A list"], 0, "“Although” introduces a concession: the road was wet, yet the driver slowed down."],
      ["Read: “The museum closes at six, so visitors should arrive early.” Why should visitors arrive early?", ["Because the museum closes at six", "Because the museum opens at night", "Because tickets are free", "Because the visit is online"], 0, "“So” introduces the recommendation that follows the closing time."],
      ["In “Students planted trees. They will water them weekly,” what does “them” refer to?", ["The trees", "The students", "The weeks", "The school"], 0, "“Them” is plural and refers to the trees, the object being watered."],
      ["Read: “No bicycles are allowed inside the building.” What does the sign communicate?", ["A prohibition", "An invitation", "A past event", "A prediction"], 0, "“No ... are allowed” states that bicycles are prohibited inside."],
      ["In “The report was published yesterday,” the sentence mainly emphasizes:", ["The report and its publication", "The unknown weather", "A future plan", "A direct command"], 0, "The passive construction foregrounds the report; the agent is not specified."],
      ["Read: “Many residents walk to work because the new path is safe.” Why do many residents use the path?", ["They consider it safe", "It is closed", "It is underwater", "They work there"], 0, "The clause introduced by “because” gives the stated reason."],
      ["Choose the correct completion: “If water reaches 100°C at sea level, it usually ___.”", ["boils", "boiled yesterday", "will boiling", "boil yesterday"], 0, "A general scientific condition uses the zero conditional: present simple in both clauses."],
      ["In “The number of users increased gradually,” “gradually” describes:", ["How the increase happened", "Who counted the users", "Where the users live", "When the report was printed"], 0, "The adverb modifies “increased” and describes the manner or pace of change."],
      ["Read: “The library is open to everyone; however, a quiet study room must be booked.” What does “however” signal?", ["A qualification or contrast", "A time sequence", "A cause", "A definition"], 0, "The second clause qualifies the general access statement with a booking requirement."],
      ["In “The city launched a recycling program last year,” the verb phrase is in the:", ["Simple past", "Present perfect", "Future", "Present continuous"], 0, "“Launched” is the simple past, reinforced by “last year.”"],
      ["Read: “Please keep the door closed to reduce noise.” The infinitive phrase “to reduce noise” expresses:", ["Purpose", "Contrast", "Possession", "A past result"], 0, "“To reduce noise” explains the purpose of keeping the door closed."],
      ["In “People who live near the station can walk there,” “who live near the station” identifies:", ["Which people are being discussed", "A future event", "The station's owner", "A reason for closing the station"], 0, "The relative clause modifies “people” and specifies the group."],
      ["Read: “The device uses less energy than the previous model.” The comparison says the device:", ["Consumes a smaller amount of energy", "Consumes no energy", "Is older than the previous model", "Produces more noise"], 0, "“Less ... than” compares amounts and indicates lower energy use."],
      ["In “Despite the rain, the match continued,” “despite” is closest in meaning to:", ["In spite of", "Because of", "Instead of", "According to"], 0, "“Despite” introduces a contrast or concession and is synonymous with “in spite of.”"],
      ["Read: “The survey included 500 people, but it did not represent every region.” What limitation is stated?", ["The sample may not represent all regions", "The survey had no participants", "Every region was represented equally", "The results are a weather forecast"], 0, "The text explicitly limits how broadly the survey can be generalized."]
    ],
    espanhol: [
      ["Lee: “La biblioteca amplió su horario, sin embargo, todavía cierra los domingos.” “Sin embargo” expresa:", ["Contraste", "Causa", "Finalidad", "Semejanza"], 0, "“Sin embargo” introduce una oposición o una limitación."],
      ["Lee: “El tren salió tarde porque había una avería.” ¿Cuál fue la causa del retraso?", ["Una avería", "Una fiesta", "Una estación nueva", "La llegada anticipada"], 0, "“Porque” introduce la causa explícita: una avería."],
      ["En “Las vecinas organizaron la feria y ellas prepararon los puestos”, “ellas” se refiere a:", ["Las vecinas", "La feria", "Los puestos", "La organización"], 0, "“Ellas” es un pronombre femenino plural que retoma “las vecinas”."],
      ["Lee: “No tires basura al río.” ¿Qué intención predomina?", ["Dar una instrucción o prohibición", "Contar una leyenda", "Describir un paisaje pasado", "Presentar una pregunta científica"], 0, "El imperativo negativo formula una recomendación o prohibición."],
      ["En “El edificio tiene cuatro plantas”, “planta” significa:", ["Cada piso del edificio", "Una flor", "Una herramienta", "Una comida"], 0, "En el contexto de un edificio, “planta” significa piso o nivel."],
      ["Lee: “La exposición abre el martes y termina el viernes.” ¿Cuándo puede visitarse?", ["De martes a viernes, según el horario anunciado", "Solo el lunes", "Todo el año sin cierre", "Únicamente el domingo"], 0, "El texto indica el inicio el martes y el cierre el viernes."],
      ["Completa: “Ayer nosotros ___ el museo.”", ["visitamos", "visitaremos", "visitar", "visitan"], 0, "“Ayer” señala pasado; “visitamos” concuerda con “nosotros” en pretérito."],
      ["Lee: “Aunque el viaje fue largo, llegamos contentos.” ¿Qué relación expresa “aunque”?", ["Concesión", "Consecuencia", "Finalidad", "Enumeración"], 0, "“Aunque” introduce un hecho que no impide la llegada contenta."],
      ["En “María dejó su bicicleta junto a la puerta. Allí la encontró al regresar”, “allí” indica:", ["El lugar junto a la puerta", "El momento de la mañana", "La causa del viaje", "La persona que regresó"], 0, "El adverbio de lugar retoma el espacio mencionado en la frase anterior."],
      ["Lee: “Se busca personal con experiencia en atención al público.” El aviso tiene como finalidad:", ["Reclutar trabajadores", "Vender una vivienda", "Narrar una anécdota", "Explicar una receta"], 0, "La fórmula “se busca personal” anuncia una oportunidad laboral."],
      ["“Actualmente” en español significa:", ["En el momento presente", "En realidad", "Con dificultad", "De forma eventual"], 0, "“Actualmente” corresponde a “atualmente”; no debe confundirse con el inglés “actually”."],
      ["Lee: “La campaña es gratuita; por lo tanto, cualquier persona puede inscribirse sin pagar.” “Por lo tanto” introduce:", ["Una conclusión", "Una oposición", "Una condición imposible", "Una pregunta"], 0, "La segunda oración presenta una conclusión derivada de la gratuidad."],
      ["En una noticia, la fecha y el lugar del acontecimiento ayudan principalmente a:", ["Situar el hecho en su contexto", "Cambiar el género a una receta", "Identificar el final de una novela", "Sustituir todas las fuentes"], 0, "Fecha y lugar aportan información contextual relevante para comprender el hecho."],
      ["Lee: “El agua es esencial para la vida, pero su distribución no es igual en todas las regiones.” ¿Qué idea central presenta?", ["La importancia del agua y la desigualdad en su acceso", "La ausencia de agua en el planeta", "La igualdad de distribución", "La inutilidad de conservarla"], 0, "La frase combina la relevancia del recurso con diferencias territoriales de acceso."],
      ["En “El libro que compré ayer tiene mapas”, “que compré ayer”:", ["Describe cuál libro", "Indica quién tiene mapas", "Es una orden", "Expresa una comparación"], 0, "La oración subordinada relativa modifica y especifica “el libro”."]
    ],
    artes: [
      ["Em uma fotografia, uma linha do horizonte inclinada pode transmitir sensação de:", ["Instabilidade ou movimento", "Neutralidade obrigatória", "Som audível", "Escala numérica exata"], 0, "A composição inclinada pode sugerir tensão ou movimento; o efeito depende do conjunto da imagem."],
      ["Uma obra usa materiais descartados para discutir consumo e resíduos. A escolha do material:", ["Participa da construção de sentido", "É sempre irrelevante para a interpretação", "Substitui todo contexto", "Impede qualquer leitura crítica"], 0, "O material pode reforçar o tema e integrar a linguagem da obra."],
      ["Em uma pintura, cores quentes aparecem concentradas no centro e cores frias nas bordas. Isso pode:", ["Orientar o foco visual e criar contraste", "Determinar a data exata da obra", "Provar a intenção sem outras evidências", "Eliminar a composição"], 0, "A distribuição das cores conduz o olhar e estabelece relações visuais."],
      ["Uma performance acontece em uma praça e convida transeuntes a participar. Qual elemento é central para analisá-la?", ["A relação entre ação, espaço público e participantes", "Apenas o preço dos figurinos", "A quantidade de quadros expostos", "A moldura da obra"], 0, "O lugar e a interação com o público integram a experiência da performance."],
      ["Ao observar uma escultura, comparar frente, lateral e verso ajuda a perceber:", ["Volume e relação espacial", "Somente o título", "O texto de uma entrevista", "A duração de um filme"], 0, "Uma escultura tridimensional pode ser percebida por diferentes ângulos e relações com o espaço."],
      ["Uma charge apresenta um personagem dizendo “Está tudo sob controle” enquanto segura um guarda-chuva furado sob uma tempestade. O humor decorre de:", ["Contradição entre fala e situação visual", "Ausência de relação entre imagem e texto", "Uso de uma escala cartográfica", "Repetição de uma instrução"], 0, "A fala contradiz a situação representada, produzindo ironia."],
      ["Em uma obra, a repetição de formas geométricas cria ritmo visual. A repetição funciona como:", ["Elemento de organização da composição", "Prova de que a obra é uma fotografia", "Indicação de uma data", "Substituto do contexto"], 0, "Padrões repetidos organizam o olhar e podem produzir ritmo ou unidade."],
      ["Um grafite ocupa um muro voltado para uma avenida movimentada. Para interpretar sua circulação, é importante considerar:", ["O espaço, o público e a visibilidade da obra", "Apenas o tamanho do pincel", "Somente a opinião de quem não viu a obra", "A ausência de contexto urbano"], 0, "Localização e público influenciam como a obra é vista e compreendida."],
      ["Duas imagens mostram o mesmo local antes e depois de uma intervenção. A comparação permite observar:", ["Mudanças visuais entre os momentos", "A causa única de toda transformação", "O som ambiente exato", "A intenção indiscutível do fotógrafo"], 0, "A comparação revela diferenças observáveis; as causas exigem outras informações."],
      ["Uma peça teatral usa silêncio prolongado antes da fala de uma personagem. Esse recurso pode:", ["Criar expectativa e marcar o ritmo dramático", "Eliminar a comunicação cênica", "Indicar necessariamente o fim da peça", "Transformar a peça em notícia"], 0, "Pausas e silêncios são recursos expressivos que afetam ritmo e expectativa."],
      ["Em uma composição, a figura principal aparece em alto contraste com o fundo. Esse contraste tende a:", ["Destacar a figura", "Apagar a diferença entre figura e fundo", "Definir o idioma da obra", "Informar o preço de entrada"], 0, "O contraste visual ajuda a separar e destacar elementos."],
      ["Uma obra retoma uma imagem histórica conhecida e a modifica para comentar o presente. Essa relação pode ser chamada de:", ["Releitura ou apropriação crítica", "Medição de temperatura", "Tradução literal obrigatória", "Perspectiva linear"], 0, "A obra estabelece diálogo com uma imagem anterior e a ressignifica."],
      ["Um cartaz organiza título, imagem e data em níveis de destaque diferentes. Isso constitui:", ["Hierarquia visual", "Rima externa", "Escala cartográfica", "Narrador em primeira pessoa"], 0, "A hierarquia visual orienta a ordem e a importância percebida das informações."],
      ["Uma fotografia documental é recortada para publicação. O recorte pode:", ["Alterar o contexto e a interpretação do que aparece", "Garantir neutralidade absoluta", "Revelar tudo que ficou fora do quadro", "Substituir a autoria"], 0, "O enquadramento inclui alguns elementos e exclui outros, afetando a leitura."],
      ["Ao comparar uma obra popular e uma obra de museu, uma análise adequada deve:", ["Considerar contextos, funções e linguagens sem hierarquizar automaticamente", "Presumir que só a obra de museu tem valor", "Ignorar quem produziu e para quem", "Aplicar um único critério universal"], 0, "Contextualização permite analisar práticas diversas sem estabelecer uma superioridade automática."]
    ],
    historia: [
      ["A mineração do século XVIII deslocou atividades econômicas para áreas do interior da América portuguesa. Uma consequência foi:", ["Maior ocupação e circulação em regiões interioranas", "O fim imediato da escravidão", "A independência política em 1700", "O desaparecimento do comércio"], 0, "A mineração estimulou ocupação, circulação e articulação econômica no interior."],
      ["A transferência da corte portuguesa para o Rio de Janeiro ocorreu em 1808. Uma mudança associada ao período foi:", ["A abertura dos portos a nações amigas", "A Proclamação da República", "A abolição em todo o Império", "A Constituição de 1988"], 0, "A abertura dos portos em 1808 alterou as relações comerciais da colônia."],
      ["A Independência do Brasil, em 1822, manteve a monarquia sob Pedro I. Isso mostra que:", ["A separação política não significou ruptura imediata de todas as estruturas sociais", "A república foi instaurada no mesmo momento", "A escravidão terminou automaticamente", "Não houve conflitos políticos"], 0, "A independência mudou o vínculo político com Portugal, mas preservou várias estruturas e conflitos."],
      ["A Lei Eusébio de Queirós, de 1850, proibiu:", ["O tráfico transatlântico de pessoas escravizadas para o Brasil", "A imigração europeia", "A circulação de jornais", "A produção de café"], 0, "A lei reprimiu o tráfico transatlântico, sem abolir a escravidão no país."],
      ["A expansão cafeeira no Sudeste esteve relacionada a:", ["Mudanças no trabalho, transporte e ocupação territorial", "A extinção de todas as exportações", "O fim da urbanização", "A ausência de ferrovias"], 0, "A economia cafeeira articulou trabalho, ferrovias, exportações e transformação de áreas produtoras."],
      ["A Revolta da Vacina, no Rio de Janeiro em 1904, envolveu tensões sobre:", ["Reformas urbanas, vacinação obrigatória e participação popular", "A abolição de 1888", "A criação de Brasília", "A independência de 1822"], 0, "A revolta ocorreu em meio a reformas urbanas e à imposição da vacinação obrigatória."],
      ["A política de substituição de importações buscava:", ["Estimular a produção interna de bens antes importados", "Impedir toda industrialização", "Eliminar o mercado interno", "Trocar cidades por áreas rurais"], 0, "A estratégia procurava desenvolver a indústria nacional e reduzir dependência de certos produtos importados."],
      ["A Constituição brasileira de 1988 é frequentemente chamada de cidadã porque:", ["Ampliou a proteção de direitos e a participação democrática", "Restaurou a monarquia", "Proibiu eleições", "Revogou todos os direitos sociais"], 0, "O texto constitucional consolidou direitos e instituições democráticas após a ditadura."],
      ["Uma fonte histórica produzida por um governo pode revelar tanto informações quanto:", ["Interesses e perspectivas de quem a produziu", "Uma descrição completa e imparcial de toda a sociedade", "A ausência de disputas", "A impossibilidade de interpretação"], 0, "Fontes precisam ser contextualizadas; sua autoria e finalidade influenciam o registro."],
      ["A resistência indígena à colonização incluiu:", ["Negociação, conflito, deslocamento e preservação cultural", "A aceitação uniforme da ocupação", "A ausência de ação histórica", "Somente participação em instituições europeias"], 0, "Os povos indígenas atuaram de formas diversas diante da colonização, preservando agência e culturas."],
      ["A abolição da escravidão no Brasil ocorreu em:", ["1888, por meio da Lei Áurea", "1822, no ato de Independência", "1850, pela Lei de Terras", "1889, com a Proclamação da República"], 0, "A Lei Áurea foi promulgada em 1888; a República foi proclamada em 1889."],
      ["A Lei de Terras de 1850 estabeleceu, entre outras disposições, que terras públicas poderiam ser adquiridas principalmente por:", ["Compra, restringindo o acesso de quem não tinha recursos", "Distribuição universal gratuita", "Herança obrigatória a ex-escravizados", "Ocupação sem qualquer regra"], 0, "A compra como via de acesso dificultou a obtenção de terras por grupos sem recursos."],
      ["O movimento Diretas Já, na década de 1980, reivindicava:", ["Eleição direta para a Presidência da República", "Retorno do tráfico escravista", "Fim das eleições municipais", "Implantação do Estado Novo"], 0, "A campanha pressionou pela aprovação de eleições presidenciais diretas no processo de redemocratização."],
      ["Ao comparar dois relatos sobre a mesma greve, o historiador deve:", ["Analisar autoria, posição social, contexto e evidências de cada relato", "Escolher o relato mais longo sem verificar dados", "Somar opiniões como se fossem números", "Descartar toda fonte produzida por trabalhadores"], 0, "Perspectivas distintas ajudam a entender conflitos, desde que as fontes sejam criticamente analisadas."],
      ["A industrialização e a urbanização brasileiras no século XX:", ["Transformaram relações de trabalho e ampliaram a população urbana", "Eliminam automaticamente desigualdades regionais", "Fizeram desaparecer o setor agrícola", "Impediram migrações internas"], 0, "Esses processos alteraram a estrutura produtiva e a distribuição da população, sem eliminar desigualdades."]
    ],
    geografia: [
      ["Em um mapa de escala 1:50.000, 4 cm representam quantos quilômetros no terreno?", ["0,2 km", "2 km", "20 km", "200 km"], 1, "4 cm × 50.000 = 200.000 cm, que correspondem a 2 km."],
      ["Uma pirâmide etária com base estreita e maior proporção de idosos sugere:", ["Redução recente da natalidade e envelhecimento populacional", "Natalidade necessariamente crescente", "Ausência de população adulta", "Impossibilidade de mudança demográfica"], 0, "Base estreita indica menor participação de grupos jovens; o topo relativamente maior é compatível com envelhecimento."],
      ["A impermeabilização do solo urbano tende a:", ["Aumentar o escoamento superficial e o risco de alagamentos", "Aumentar a infiltração em toda área pavimentada", "Eliminar a necessidade de drenagem", "Impedir a formação de ilhas de calor"], 0, "Superfícies impermeáveis reduzem infiltração e podem elevar o volume de água que escoa."],
      ["A latitude influencia o clima porque altera:", ["O ângulo e a intensidade média da radiação solar recebida", "A distância de cada cidade ao centro da Terra para todos os efeitos", "A salinidade dos rios diretamente", "A direção de todos os ventos locais"], 0, "A incidência solar varia com a latitude, contribuindo para diferenças de temperatura e sazonalidade."],
      ["O desmatamento de uma encosta pode aumentar:", ["Erosão e transporte de sedimentos", "A fixação do solo pelas raízes", "A infiltração em qualquer situação", "A estabilidade de todas as vertentes"], 0, "A retirada da cobertura vegetal reduz proteção do solo e pode elevar erosão, dependendo de relevo e chuva."],
      ["O efeito estufa natural é importante porque:", ["Retém parte da energia e mantém temperaturas compatíveis com a vida", "Impede toda radiação solar de chegar à superfície", "É causado exclusivamente por vulcões", "Elimina as variações climáticas"], 0, "Gases atmosféricos absorvem e reemitem parte da radiação infravermelha; sua intensificação pelas atividades humanas aquece o clima."],
      ["Uma empresa distribui etapas da produção por países diferentes para reduzir custos. Isso exemplifica:", ["Divisão internacional do trabalho", "Isolamento econômico", "Autarquia total", "Fim das redes de transporte"], 0, "A produção fragmentada entre territórios é uma característica das cadeias globais de produção."],
      ["O crescimento de cidades próximas e conectadas por fluxos frequentes pode formar:", ["Uma região metropolitana ou aglomeração urbana", "Uma bacia hidrográfica", "Uma fronteira climática", "Uma unidade de conservação automaticamente"], 0, "Integração funcional e continuidade urbana podem compor regiões metropolitanas ou aglomerações."],
      ["A transição demográfica costuma envolver, em diferentes etapas:", ["Queda das taxas de mortalidade e natalidade", "Aumento permanente de natalidade e mortalidade", "Fim da migração", "Redução da expectativa de vida como regra"], 0, "O modelo descreve mudanças históricas nas taxas de mortalidade e natalidade, variando por país e período."],
      ["Em um mapa temático, a legenda serve para:", ["Explicar o significado dos símbolos e cores", "Indicar sempre o norte verdadeiro", "Substituir a escala", "Informar a autoria de cada dado automaticamente"], 0, "A legenda permite decodificar os símbolos e categorias representados."],
      ["A matriz energética de um país descreve:", ["As fontes utilizadas para atender à demanda de energia", "A quantidade de habitantes por quilômetro quadrado", "A distribuição de idiomas", "A taxa de alfabetização"], 0, "A matriz energética mostra a participação de fontes como petróleo, hidrelétrica, eólica e outras."],
      ["A desertificação em áreas suscetíveis pode ser agravada por:", ["Uso inadequado do solo e remoção da cobertura vegetal", "Manejo conservacionista", "Recuperação da vegetação nativa", "Redução da erosão"], 0, "Pressões sobre solo e vegetação em ambientes vulneráveis podem intensificar degradação e desertificação."],
      ["A migração pendular corresponde a deslocamentos:", ["Regulares entre residência e local de trabalho ou estudo", "Definitivos entre países", "Sazonais de aves", "Exclusivamente entre continentes"], 0, "Migração pendular é o deslocamento cotidiano ou frequente entre municípios ou áreas de residência e atividades."],
      ["A globalização amplia fluxos de informação, mas seu acesso é desigual. Isso evidencia:", ["A existência de desigualdade digital", "A universalização completa da internet", "O desaparecimento das fronteiras", "A ausência de infraestrutura"], 0, "A conectividade depende de renda, infraestrutura, território e letramento digital."],
      ["Uma bacia hidrográfica é definida principalmente por:", ["Uma rede de cursos d'água que converge para um rio principal, delimitada por divisores", "Uma divisão política entre países", "Uma área de clima polar", "Um conjunto de cidades costeiras"], 0, "A bacia reúne drenagens que convergem para um curso principal e é delimitada por divisores de água."]
    ],
    filosofia: [
      ["Uma pessoa defende uma conclusão e apresenta razões relevantes para sustentá-la. As razões são chamadas de:", ["Premissas", "Metáforas", "Hipóteses sem relação", "Conclusões alternativas"], 0, "Premissas são as afirmações que oferecem apoio à conclusão de um argumento."],
      ["Uma ação é avaliada considerando suas consequências para o bem-estar coletivo. Essa abordagem se aproxima de:", ["Uma perspectiva consequencialista", "Uma análise apenas da gramática", "Uma prova matemática", "Uma descrição sem avaliação"], 0, "Perspectivas consequencialistas avaliam ações, em especial, pelos resultados que produzem."],
      ["A expressão “penso, logo existo” está associada a:", ["René Descartes", "Aristóteles exclusivamente", "Simone de Beauvoir", "Karl Marx"], 0, "A formulação é associada a Descartes e à busca de uma certeza fundamental."],
      ["Na alegoria da caverna, de Platão, a saída da caverna simboliza principalmente:", ["Uma passagem da aparência ao conhecimento", "A rejeição de toda aprendizagem", "A superioridade da força física", "O fim de qualquer diálogo"], 0, "A alegoria explora a diferença entre aparências e conhecimento, além do processo de educação."],
      ["Para Aristóteles, a virtude ética está ligada ao hábito e à busca de:", ["Um justo meio relativo à situação", "Um extremo fixo em todos os casos", "A ausência de deliberação", "A rejeição da vida em comunidade"], 0, "A virtude envolve disposição formada pelo hábito e equilíbrio prático, não uma média matemática universal."],
      ["Um argumento válido com premissas verdadeiras tende a:", ["Garantir a verdade da conclusão pela forma do raciocínio", "Provar qualquer conclusão escolhida", "Dispensar a relação entre premissas", "Ser inválido por definição"], 0, "Em um argumento dedutivamente válido, se as premissas são verdadeiras, a conclusão decorre delas."],
      ["A dúvida metódica cartesiana consiste em:", ["Colocar crenças à prova para buscar fundamentos seguros", "Negar definitivamente toda possibilidade de saber", "Aceitar qualquer opinião sem exame", "Substituir argumentos por tradição"], 0, "A dúvida é usada como método para examinar crenças e encontrar algo indubitável."],
      ["O Iluminismo valorizou, em diferentes autores:", ["Uso da razão e crítica a autoridades tradicionais", "Proibição do debate público", "Rejeição de toda educação", "Retorno obrigatório ao absolutismo"], 0, "O movimento destacou razão, crítica e debate sobre conhecimento e poder."],
      ["Na ética kantiana, agir moralmente envolve considerar:", ["Princípios que possam ser universalizados e a dignidade das pessoas", "Somente a vantagem pessoal imediata", "A opinião da maioria em todo caso", "A consequência econômica como único critério"], 0, "Kant enfatiza dever, universalização das máximas e pessoas como fins, não apenas meios."],
      ["Em um debate, responder a uma ideia atacando a aparência de quem a defende é:", ["Uma falácia ad hominem", "Uma demonstração causal", "Uma definição operacional", "Uma analogia científica"], 0, "O ataque pessoal não examina as razões do argumento e caracteriza a falácia ad hominem."],
      ["A diferença entre fato e valor é útil porque:", ["Distingue descrição do que ocorre de avaliação do que deveria ocorrer", "Prova que valores não podem ser discutidos", "Torna toda descrição falsa", "Elimina a necessidade de evidências"], 0, "Fatos descrevem ou verificam estados de coisas; valores expressam avaliações normativas."],
      ["O contrato social, em teorias políticas modernas, busca explicar:", ["A origem ou legitimidade da autoridade política por acordos", "A composição química de metais", "A formação dos continentes", "A interpretação de poemas"], 0, "Teorias contratualistas usam a ideia de acordo para discutir autoridade e organização política."],
      ["Uma falácia de falsa dicotomia ocorre quando:", ["Duas opções são apresentadas como únicas, embora haja outras possibilidades", "Uma conclusão decorre corretamente das premissas", "Uma fonte é identificada", "Um conceito é definido com clareza"], 0, "A falsa dicotomia reduz artificialmente as alternativas disponíveis."],
      ["A maiêutica socrática utiliza perguntas para:", ["Levar interlocutores a examinar suas ideias", "Impor uma resposta sem justificativa", "Evitar qualquer diálogo", "Medir a velocidade de um corpo"], 0, "O método de perguntas estimula a investigação e a revisão de crenças."],
      ["Ao comparar duas teorias éticas, é importante:", ["Identificar seus princípios e como cada uma trata casos concretos", "Supor que usam as mesmas premissas", "Ignorar divergências", "Escolher a mais antiga automaticamente"], 0, "Comparar teorias exige explicitar critérios, argumentos e consequências em situações analisadas."]
    ],
    sociologia: [
      ["A socialização primária ocorre principalmente:", ["Nas primeiras relações e grupos, como a família", "Apenas no mercado de trabalho", "Somente após a aposentadoria", "Exclusivamente pela internet"], 0, "A socialização primária começa na infância e envolve interações iniciais significativas."],
      ["Uma norma social é:", ["Uma expectativa coletiva que orienta comportamentos", "Uma lei física da gravidade", "Uma característica genética individual", "Um dado sem relação com a sociedade"], 0, "Normas são expectativas e regras compartilhadas que orientam a convivência."],
      ["O etnocentrismo consiste em:", ["Avaliar outras culturas tomando a própria como padrão superior", "Compreender práticas em seu contexto", "Comparar dados sem hierarquia", "Reconhecer diversidade cultural"], 0, "Etnocentrismo usa a própria cultura como medida e pode hierarquizar outras."],
      ["A mobilidade social refere-se a:", ["Mudanças de posição social de indivíduos ou grupos", "Deslocamento diário de ônibus apenas", "Movimento das placas tectônicas", "Mudança de estação do ano"], 0, "Mobilidade social descreve mudanças na posição social ao longo do tempo ou entre gerações."],
      ["A divisão social do trabalho pode produzir:", ["Especialização e interdependência entre atividades", "Autossuficiência de todos os trabalhadores", "Fim de toda desigualdade", "Desaparecimento de instituições"], 0, "A divisão distribui tarefas e cria interdependência, com efeitos sociais que variam."],
      ["Um indicador de desigualdade de renda deve ser interpretado considerando:", ["Como a renda está distribuída e quais grupos foram medidos", "Somente o valor de uma pessoa", "A cor do gráfico", "A ausência de período de referência"], 0, "Indicadores dependem da população, da métrica e do período observados."],
      ["Movimentos sociais podem ser entendidos como:", ["Ações coletivas organizadas em torno de demandas ou causas", "Grupos sem objetivo comum por definição", "Instituições que não interagem com a sociedade", "Somente partidos políticos"], 0, "Movimentos articulam demandas e identidades e podem buscar mudanças sociais ou defender direitos."],
      ["A pesquisa por amostragem permite estudar uma população quando:", ["A amostra e o método são adequados à pergunta", "Qualquer grupo escolhido representa todos", "Não se conhece o tamanho da amostra", "Os resultados são definidos antes da coleta"], 0, "Representatividade e método determinam o alcance das inferências de uma pesquisa."],
      ["O conceito de cultura inclui:", ["Práticas, valores, símbolos e significados aprendidos socialmente", "Somente obras expostas em museus", "Apenas características biológicas", "Um conjunto imutável igual em todos os grupos"], 0, "Cultura abrange significados e práticas compartilhados, que podem variar e mudar."],
      ["O trabalho informal caracteriza-se, em geral, por:", ["Ausência ou insuficiência de registro e proteção formal", "Garantia automática de todos os direitos", "Inexistência de atividade econômica", "Remuneração sempre fixa"], 0, "A informalidade envolve formas de trabalho sem registro ou proteção formal suficiente, com grande diversidade."],
      ["A cidadania social relaciona-se a direitos como:", ["Educação, saúde e proteção social", "Somente a compra de produtos", "Apenas a propriedade de empresas", "Exclusivamente a circulação internacional"], 0, "Direitos sociais incluem condições e serviços ligados ao bem-estar e à participação social."],
      ["Uma instituição social, como a escola, contribui para:", ["Organizar práticas, papéis e formas de socialização", "Determinar biologicamente todos os comportamentos", "Eliminar qualquer conflito", "Impedir a transmissão de conhecimentos"], 0, "Instituições organizam relações e transmitem saberes e normas, sem determinar completamente as ações."],
      ["A discriminação estrutural refere-se a:", ["Desvantagens reproduzidas por práticas e instituições ao longo do tempo", "Um episódio sem relação com padrões sociais", "Diferenças individuais sem contexto", "Uma lei da natureza"], 0, "Desigualdades podem ser reproduzidas por regras, práticas e estruturas, mesmo sem intenção individual explícita."],
      ["Na pesquisa qualitativa, entrevistas podem ajudar a compreender:", ["Experiências, sentidos e interpretações dos participantes", "Apenas a massa de um objeto", "Toda a população com certeza estatística", "A velocidade de uma reação química"], 0, "Entrevistas permitem investigar significados e experiências; não substituem automaticamente inferência estatística."],
      ["A estratificação social descreve:", ["A organização desigual de grupos em posições sociais", "A camada de ozônio", "A divisão dos rios em bacias", "A classificação de espécies biológicas"], 0, "Estratificação analisa hierarquias e desigualdades entre grupos sociais."]
    ],
    biologia: [
      ["A mitocôndria está associada principalmente a:", ["Respiração celular e produção de ATP", "Armazenamento exclusivo de informação hereditária em plantas", "Digestão extracelular no solo", "Formação da parede celular vegetal"], 0, "Mitocôndrias participam da respiração celular aeróbia e da produção de ATP."],
      ["A membrana plasmática é descrita como seletivamente permeável porque:", ["Controla a passagem de substâncias entre célula e ambiente", "Impede toda troca", "Produz diretamente todos os genes", "Existe somente em células vegetais"], 0, "A membrana regula transportes, permitindo algumas passagens e limitando outras."],
      ["Na fotossíntese, a principal fonte de energia que impulsiona o processo é:", ["Luz", "Som", "Gravidade", "Energia nuclear do solo"], 0, "A energia luminosa é convertida em energia química durante a fotossíntese."],
      ["A meiose é importante porque:", ["Reduz à metade o número de cromossomos nos gametas", "Duplica permanentemente o número cromossômico em toda célula", "Produz apenas células idênticas para crescimento", "Não envolve material genético"], 0, "A meiose forma células haploides e contribui para a variabilidade genética."],
      ["Uma mutação é:", ["Uma alteração no material genético", "Sempre uma mudança prejudicial", "Uma escolha consciente do organismo", "A reprodução de uma célula sem DNA"], 0, "Mutações são alterações genéticas; seus efeitos podem ser neutros, prejudiciais ou, em certos contextos, vantajosos."],
      ["Em uma teia alimentar, decompositores são importantes porque:", ["Reciclam nutrientes ao degradar matéria orgânica", "Produzem toda energia do ecossistema", "Impedem os ciclos biogeoquímicos", "Comem somente produtores vivos"], 0, "Decompositores transformam matéria orgânica e devolvem nutrientes ao ambiente."],
      ["A seleção natural tende a favorecer indivíduos que:", ["Deixam mais descendentes em determinado ambiente", "São sempre os maiores", "Mudam porque precisam", "Não apresentam variação"], 0, "O sucesso reprodutivo relativo em um ambiente influencia a frequência de características hereditárias."],
      ["O sistema circulatório humano transporta:", ["Substâncias como gases, nutrientes e resíduos pelo organismo", "Apenas impulsos nervosos", "Somente ar para os pulmões", "Informações genéticas entre espécies"], 0, "O sangue transporta gases, nutrientes, hormônios e resíduos entre tecidos."],
      ["A insulina contribui para:", ["Regular a glicose no sangue", "Transportar oxigênio dentro dos alvéolos", "Produzir bile no estômago", "Formar impulsos na retina exclusivamente"], 0, "A insulina ajuda a regular a glicemia, favorecendo a captação e o armazenamento de glicose."],
      ["Uma vacina estimula o organismo a:", ["Desenvolver resposta imune e memória contra um agente ou antígeno", "Substituir permanentemente todos os leucócitos", "Tratar qualquer doença infecciosa", "Impedir toda mutação do patógeno"], 0, "A vacinação prepara o sistema imune; a proteção depende da vacina e da resposta individual."],
      ["Em um ecossistema, fatores abióticos incluem:", ["Luz, temperatura e disponibilidade de água", "Somente animais e plantas", "Apenas predadores", "Exclusivamente decompositores"], 0, "Fatores abióticos são componentes não vivos que afetam os organismos."],
      ["A respiração celular aeróbia utiliza geralmente:", ["Oxigênio na cadeia transportadora de elétrons", "Nitrogênio como único combustível", "Luz diretamente em todas as etapas", "Clorofila em células animais"], 0, "Na respiração aeróbia, oxigênio atua como aceptor final de elétrons."],
      ["A variabilidade genética de uma população pode aumentar por:", ["Mutações e recombinação durante a reprodução", "Reprodução sem qualquer variação em todos os casos", "Ausência de material genético", "Uso de antibióticos por indivíduos"], 0, "Mutações criam novas variantes e a recombinação reorganiza alelos."],
      ["A capacidade de suporte de um ambiente está relacionada:", ["À população que os recursos conseguem sustentar ao longo do tempo", "Ao número de planetas no sistema solar", "À velocidade de um único animal", "A um valor que nunca muda"], 0, "Recursos e condições ambientais limitam populações; a capacidade de suporte pode variar."],
      ["Na reprodução sexuada, a fecundação normalmente:", ["Une gametas e combina material genético dos progenitores", "Produz descendentes sempre idênticos", "Elimina toda variabilidade", "Ocorre sem células reprodutivas"], 0, "A união dos gametas combina material genético e contribui para a variabilidade."]
    ],
    fisica: [
      ["Um objeto percorre 150 m em 30 s. Sua velocidade média é:", ["5 m/s", "30 m/s", "120 m/s", "180 m/s"], 0, "v = Δs/Δt = 150/30 = 5 m/s."],
      ["Um corpo de massa 2 kg sofre aceleração de 3 m/s². Qual força resultante atua nele?", ["6 N", "1,5 N", "5 N", "9 N"], 0, "Pela segunda lei de Newton, F = m·a = 2·3 = 6 N."],
      ["Uma força de 20 N desloca um objeto 4 m na mesma direção. O trabalho realizado é:", ["80 J", "24 J", "5 J", "16 J"], 0, "W = F·d = 20·4 = 80 J, pois força e deslocamento têm a mesma direção."],
      ["Um objeto de 2 kg está a 5 m de altura. Usando g = 10 m/s², sua energia potencial gravitacional é:", ["100 J", "25 J", "50 J", "200 J"], 0, "Ep = mgh = 2·10·5 = 100 J."],
      ["Ao passar de um meio para outro, a frequência de uma onda permanece constante. Se sua velocidade diminui, seu comprimento de onda:", ["Diminui", "Aumenta necessariamente", "Permanece infinito", "Torna-se igual à frequência"], 0, "Como v = λf e f permanece, uma velocidade menor implica menor comprimento de onda."],
      ["Uma força de 100 N atua sobre uma área de 2 m². A pressão média é:", ["50 Pa", "200 Pa", "102 Pa", "0,02 Pa"], 0, "P = F/A = 100/2 = 50 Pa."],
      ["O calor passa espontaneamente, em condições usuais, de:", ["Um corpo de maior temperatura para outro de menor temperatura", "Um corpo frio para um quente sem trabalho", "Um corpo sem temperatura para outro", "Uma massa maior para uma menor sempre"], 0, "A transferência espontânea de calor ocorre no sentido de maior para menor temperatura."],
      ["A luz refletida por um espelho plano obedece à relação:", ["Ângulo de incidência igual ao ângulo de reflexão", "Ângulo de incidência sempre igual a 90°", "A luz não muda de direção", "Ângulo de reflexão depende da massa do espelho"], 0, "Na reflexão especular, os ângulos são medidos em relação à normal e são iguais."],
      ["Dois resistores de 2 Ω e 3 Ω estão em série. A resistência equivalente é:", ["5 Ω", "1 Ω", "6 Ω", "2,5 Ω"], 0, "Em série, as resistências se somam: 2 + 3 = 5 Ω."],
      ["Se a velocidade de um objeto dobra, sua energia cinética, mantida a massa, fica:", ["Quatro vezes maior", "Duas vezes maior", "Metade", "Inalterada"], 0, "Ec = mv²/2; dobrar v multiplica v² por quatro."],
      ["Um carro freia e reduz sua velocidade. A energia cinética do carro:", ["Diminui, sendo transferida e dissipada em outras formas", "Aumenta necessariamente", "Desaparece sem transformação", "Vira massa em todos os casos"], 0, "A energia cinética diminui; energia é transferida, por exemplo, como calor nos freios e pneus."],
      ["Um som mais agudo que outro geralmente possui:", ["Maior frequência", "Menor velocidade em qualquer meio", "Maior amplitude obrigatoriamente", "Comprimento de onda sempre maior"], 0, "A altura sonora está relacionada à frequência: sons mais agudos têm frequência maior."],
      ["Um aparelho de 1.000 W ligado por 2 h consome:", ["2 kWh", "0,5 kWh", "1.000 kWh", "2 kW"], 0, "1.000 W = 1 kW; energia = 1 kW·2 h = 2 kWh."],
      ["Um objeto flutua em equilíbrio na água quando:", ["O empuxo equilibra seu peso", "Seu peso é nulo", "Não há força gravitacional", "A água não exerce pressão"], 0, "Em equilíbrio, a força de empuxo para cima iguala o peso para baixo."],
      ["Em uma usina hidrelétrica, a energia potencial da água é convertida principalmente em:", ["Energia elétrica, passando por energia mecânica das turbinas", "Energia química dos rios", "Energia nuclear da barragem", "Massa sem transferência de energia"], 0, "A água movimenta turbinas e geradores, convertendo energia potencial em mecânica e depois elétrica."]
    ],
    quimica: [
      ["O número atômico de um elemento corresponde ao número de:", ["Prótons no núcleo", "Nêutrons mais elétrons", "Moléculas no recipiente", "Camadas eletrônicas ocupadas"], 0, "O número atômico Z é definido pela quantidade de prótons."],
      ["Isótopos de um mesmo elemento possuem:", ["Mesmo número de prótons e diferente número de nêutrons", "Mesmo número de nêutrons e prótons diferentes", "Sempre massas idênticas", "Cargas nucleares diferentes"], 0, "Isótopos têm mesmo Z e diferem no número de nêutrons."],
      ["Uma ligação iônica é formada tipicamente por:", ["Transferência de elétrons e atração entre íons", "Compartilhamento igual de prótons", "Fusão de núcleos", "Atração entre moléculas sem íons"], 0, "A transferência de elétrons forma cátions e ânions que se atraem eletrostaticamente."],
      ["Uma substância com pH 11, em solução aquosa usual, é:", ["Básica", "Ácida", "Neutra", "Necessariamente um sal insolúvel"], 0, "Valores de pH acima de 7 indicam meio básico em condições usuais."],
      ["Na tabela periódica, elementos de uma mesma família tendem a apresentar propriedades semelhantes por terem:", ["Configurações de elétrons de valência relacionadas", "Mesmo número de massa", "Idêntico número de nêutrons", "O mesmo estado físico sempre"], 0, "Elementos de uma família compartilham padrões de elétrons de valência que influenciam propriedades químicas."],
      ["A combustão completa de um hidrocarboneto produz principalmente:", ["Dióxido de carbono e água", "Cloreto de sódio e oxigênio", "Amônia e ferro", "Hidrogênio e nitrogênio"], 0, "Na combustão completa com oxigênio suficiente, carbono forma CO₂ e hidrogênio forma H₂O."],
      ["Em uma reação exotérmica, o sistema:", ["Libera energia para o entorno", "Absorve calor obrigatoriamente", "Não troca energia", "Destrói matéria"], 0, "Reações exotérmicas transferem energia do sistema para o entorno, muitas vezes como calor."],
      ["Uma mistura de água e óleo em repouso é geralmente:", ["Heterogênea, com mais de uma fase", "Uma substância pura", "Uma solução gasosa", "Um elemento químico"], 0, "Água e óleo são imiscíveis em condições usuais e formam fases distintas."],
      ["Filtração é um método adequado para separar:", ["Um sólido não dissolvido de um líquido", "Dois líquidos miscíveis com pontos de ebulição próximos", "Sal dissolvido da água sem evaporação", "Gases por diferença de carga"], 0, "A filtração retém partículas sólidas insolúveis e deixa o fluido atravessar o filtro."],
      ["Em uma reação química, a massa total se conserva em sistema fechado porque:", ["Os átomos se reorganizam, sem serem criados ou destruídos", "Os reagentes deixam de existir sem produtos", "A energia vira matéria em todo caso", "Os elementos mudam de número atômico"], 0, "A conservação da matéria decorre da reorganização dos átomos nas reações químicas."],
      ["Uma solução saturada, a certa temperatura, contém:", ["A quantidade máxima de soluto dissolvida nas condições dadas", "Nenhum solvente", "Somente soluto sólido", "Concentração sempre igual a zero"], 0, "Saturação depende da solubilidade nas condições, especialmente temperatura e pressão."],
      ["O aumento da temperatura costuma acelerar muitas reações porque:", ["Eleva a frequência de colisões eficazes entre partículas", "Reduz a energia de todas as partículas a zero", "Elimina os reagentes", "Altera sempre o número de prótons"], 0, "Maior energia cinética aumenta colisões e a fração de partículas com energia suficiente para reagir."],
      ["A ferrugem do ferro é um exemplo de:", ["Oxidação", "Neutralização ácido-base", "Destilação", "Dissolução sem reação"], 0, "A corrosão envolve oxidação do ferro, geralmente na presença de água e oxigênio."],
      ["Na diluição de uma solução, sem perda de soluto:", ["A quantidade de soluto permanece e a concentração diminui", "A massa de soluto aumenta automaticamente", "O solvente desaparece", "A concentração sempre dobra"], 0, "Adicionar solvente aumenta o volume e reduz a concentração, mantendo a quantidade de soluto."],
      ["Uma molécula de água apresenta ligações covalentes porque os átomos:", ["Compartilham pares de elétrons", "Transferem todos os prótons", "Fundem seus núcleos", "Não interagem eletronicamente"], 0, "As ligações O–H são covalentes: há compartilhamento de pares de elétrons."]
    ],
    matematica: [
      ["Quanto é 35% de 200?", ["70", "35", "100", "135"], 0, "0,35 · 200 = 70."],
      ["Um mapa usa escala 1:25.000. Uma rua mede 8 cm no mapa. Qual é seu comprimento real?", ["2 km", "200 m", "20 km", "20 m"], 0, "8·25.000 = 200.000 cm, ou 2.000 m = 2 km."],
      ["Resolva 3x + 7 = 22.", ["x = 5", "x = 7", "x = 9", "x = 15"], 0, "3x = 22 − 7 = 15; dividindo por 3, x = 5."],
      ["Um triângulo tem base 10 cm e altura 6 cm. Sua área é:", ["30 cm²", "60 cm²", "16 cm²", "32 cm²"], 0, "A = base·altura/2 = 10·6/2 = 30 cm²."],
      ["A média aritmética de 5, 7 e 12 é:", ["8", "7", "9", "24"], 0, "(5 + 7 + 12)/3 = 24/3 = 8."],
      ["Em um dado honesto, a probabilidade de obter um número menor que 3 é:", ["1/3", "1/2", "2/3", "5/6"], 0, "Os resultados favoráveis são 1 e 2: 2/6 = 1/3."],
      ["Uma torneira enche 12 L em 3 min a vazão constante. Em 8 min, enche:", ["32 L", "20 L", "36 L", "96 L"], 0, "A vazão é 12/3 = 4 L/min; em 8 min: 4·8 = 32 L."],
      ["O perímetro de um quadrado de lado 9 cm é:", ["36 cm", "81 cm²", "18 cm", "27 cm"], 0, "O perímetro é 4·9 = 36 cm; área e perímetro têm unidades diferentes."],
      ["Se f(x) = 2x + 1, então f(4) é:", ["9", "8", "7", "10"], 0, "Substituindo x = 4: f(4) = 2·4 + 1 = 9."],
      ["Uma população passa de 800 para 1.000 indivíduos. O aumento percentual foi:", ["25%", "20%", "15%", "200%"], 0, "O aumento é 200; 200/800 = 0,25 = 25%."],
      ["Qual é a mediana dos valores 1, 4, 6, 9 e 20?", ["6", "4", "8", "9"], 0, "Em cinco valores ordenados, a mediana é o terceiro valor: 6."],
      ["Um produto de R$ 150 recebe acréscimo de 12%. Qual é o novo preço?", ["R$ 168", "R$ 162", "R$ 180", "R$ 138"], 0, "12% de 150 = 18; o novo valor é 150 + 18 = R$ 168."],
      ["Em um triângulo retângulo com catetos 6 e 8, a hipotenusa mede:", ["10", "14", "48", "100"], 0, "Pelo teorema de Pitágoras, c² = 6² + 8² = 100; c = 10."],
      ["Uma urna tem 4 fichas verdes e 6 amarelas. A probabilidade de retirar uma verde é:", ["2/5", "3/5", "1/4", "4/6"], 0, "4 entre 10 fichas: 4/10 = 2/5."],
      ["Um cilindro tem raio 2 cm e altura 5 cm. Seu volume é:", ["20π cm³", "10π cm³", "25π cm³", "40π cm³"], 0, "V = πr²h = π·2²·5 = 20π cm³."]
    ]
  };

  Object.keys(additionalQuestions).forEach((subject) => {
    questions[subject].push(...additionalQuestions[subject].map(([prompt, options, answer, explanation], questionIndex) => {
      const offset = questionIndex % options.length;
      return {
        prompt,
        options: [...options.slice(offset), ...options.slice(0, offset)],
        answer: (answer - offset + options.length) % options.length,
        explanation
      };
    }));
  });

  const subjects = {
    portugues: "Língua Portuguesa",
    ingles: "Inglês",
    espanhol: "Espanhol",
    artes: "Artes",
    historia: "História",
    geografia: "Geografia",
    filosofia: "Filosofia",
    sociologia: "Sociologia",
    biologia: "Biologia",
    fisica: "Física",
    quimica: "Química",
    matematica: "Matemática"
  };

  window.enemQuestionBank = { questions, subjects };

  const select = document.querySelector("#practice-subject");
  const form = document.querySelector("#practice-form");
  const status = document.querySelector("#practice-status");
  const result = document.querySelector("#practice-result");
  const gradeButton = document.querySelector("#grade-practice");
  const retryButton = document.querySelector("#retry-practice");

  if (!select || !form || !status || !result || !gradeButton || !retryButton) return;

  let graded = false;

  function renderQuestions() {
    const selectedSubject = select.value;
    const subjectQuestions = questions[selectedSubject];
    if (!subjectQuestions || subjectQuestions.length < 20) {
      throw new Error(`O banco de questões de ${subjects[selectedSubject] || selectedSubject} precisa ter pelo menos vinte questões.`);
    }

    form.replaceChildren();
    result.textContent = "";
    retryButton.hidden = true;
    gradeButton.disabled = false;
    graded = false;
    status.textContent = `${subjectQuestions.length} questões autorais de ${subjects[selectedSubject]}.`;

    subjectQuestions.forEach((question, questionIndex) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "practice-question";
      fieldset.dataset.questionIndex = String(questionIndex);

      const legend = document.createElement("legend");
      legend.textContent = `Questão ${questionIndex + 1}`;
      fieldset.append(legend);

      const prompt = document.createElement("p");
      prompt.textContent = question.prompt;
      fieldset.append(prompt);

      const groupName = `practice-${selectedSubject}-${questionIndex}`;
      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = groupName;
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
    const subjectQuestions = questions[select.value];
    const fieldsets = Array.from(form.querySelectorAll(".practice-question"));
    const unansweredIndex = fieldsets.findIndex((fieldset) => !fieldset.querySelector('input[type="radio"]:checked'));

    if (unansweredIndex !== -1) {
      result.textContent = `Responda às ${subjectQuestions.length} questões antes de corrigir.`;
      const firstInput = fieldsets[unansweredIndex].querySelector('input[type="radio"]');
      if (firstInput) firstInput.focus();
      return;
    }

    let correctCount = 0;
    fieldsets.forEach((fieldset, index) => {
      const question = subjectQuestions[index];
      const inputs = Array.from(fieldset.querySelectorAll('input[type="radio"]'));
      const selected = inputs.find((input) => input.checked);
      const correctInput = inputs[question.answer];
      const explanation = fieldset.querySelector(".practice-explanation");
      const correctLetter = String.fromCharCode(65 + question.answer);
      const isCorrect = Number(selected.value) === question.answer;

      if (isCorrect) correctCount += 1;
      fieldset.querySelectorAll("label").forEach((label) => label.classList.remove("is-correct", "is-incorrect"));

      const correctLabel = correctInput.closest("label");
      correctLabel.classList.add("is-correct");
      if (!isCorrect) selected.closest("label").classList.add("is-incorrect");

      explanation.textContent = `${isCorrect ? "Correta." : `Incorreta. A alternativa correta é ${correctLetter}.`} ${question.explanation}`;
      explanation.hidden = false;
    });

    result.textContent = `Resultado: ${correctCount} de ${subjectQuestions.length} questões corretas em ${subjects[select.value]}. Use os comentários para revisar o raciocínio.`;
    gradeButton.disabled = true;
    retryButton.hidden = false;
    graded = true;
  }

  function retryQuestions() {
    form.reset();
    form.querySelectorAll(".practice-explanation").forEach((explanation) => {
      explanation.hidden = true;
      explanation.textContent = "";
    });
    form.querySelectorAll("label").forEach((label) => label.classList.remove("is-correct", "is-incorrect"));
    result.textContent = "";
    retryButton.hidden = true;
    gradeButton.disabled = false;
    graded = false;
    const firstInput = form.querySelector('input[type="radio"]');
    if (firstInput) firstInput.focus();
  }

  select.addEventListener("change", renderQuestions);
  gradeButton.addEventListener("click", gradeQuestions);
  retryButton.addEventListener("click", retryQuestions);
  renderQuestions();
})();
