# 🧠 Laboratório de Classificação Visual com IA

> Experimento prático sobre viés em modelos de classificação de imagens utilizando o Teachable Machine, do Google.

---

## 📝 Descrição do Projeto

Este projeto apresenta um experimento de **classificação visual com Inteligência Artificial**, desenvolvido com o objetivo de observar como um modelo de imagem pode apresentar erros quando é treinado com uma base de dados limitada ou enviesada.

A atividade foi realizada no **Teachable Machine**, ferramenta do Google que permite criar modelos de aprendizado de máquina de forma visual e acessível, sem a necessidade de programação avançada.

No experimento, foram criadas duas classes de classificação:

- **Corinthiano**
- **São Paulino**

A proposta foi treinar o modelo com imagens relacionadas a essas categorias e, em seguida, testar sua capacidade de classificação. Durante o teste, foi possível observar que o modelo apresentou uma classificação incorreta, demonstrando como a escolha restrita dos dados pode influenciar diretamente o resultado gerado pela IA.

---

## 🎯 Objetivo

O principal objetivo do projeto é compreender, na prática, como o viés nos dados de treinamento pode afetar o comportamento de um modelo de Inteligência Artificial.

Além da parte técnica, o projeto também busca refletir sobre os impactos sociais, emocionais e profissionais que sistemas automatizados podem causar quando classificam pessoas de maneira incorreta ou injusta.

---

## 🧪 Etapas do Experimento

### 1. Definição das Categorias

Foram definidas duas classes para o treinamento do modelo:

```text
Classe 1: Corinthiano
Classe 2: São Paulino
```

---

### 2. Alimentação dos Dados

Foram adicionadas imagens em cada classe para que o modelo pudesse identificar padrões visuais entre os exemplos apresentados.

Como o conjunto de imagens utilizado foi limitado, o modelo não teve dados suficientes para compreender a diversidade real das pessoas e acabou aprendendo padrões superficiais.

---

### 3. Treinamento do Modelo

Após a inserção das imagens, o modelo foi treinado dentro do próprio Teachable Machine.

A ferramenta analisou os exemplos fornecidos e criou uma lógica de classificação baseada nos dados disponíveis.

---

### 4. Teste de Inferência

Depois do treinamento, o modelo foi testado utilizando uma nova imagem capturada pela câmera.

Durante o teste, foi possível perceber que a IA realizou uma classificação incorreta, demonstrando uma falha provocada pela limitação dos dados de treinamento.

---

## 🖼️ Evidência Visual

Adicione abaixo o print da tela mostrando o modelo apresentando a falha de classificação:

![Print do modelo no Teachable Machine](./assets/experiencia-02.png)

*Figura 1: Teste do modelo no Teachable Machine apresentando uma classificação incorreta devido à limitação dos dados de treinamento.*

---

## 🔗 Link do Modelo

O modelo desenvolvido no Teachable Machine pode ser acessado pelo link abaixo:

[https://teachablemachine.withgoogle.com/models/aesn4ikTs/](https://teachablemachine.withgoogle.com/models/aesn4ikTs/)

---

## 🚀 Ferramentas Utilizadas

- **Teachable Machine**
- **Google Chrome**
- **Câmera/Webcam**
- **Google Docs ou editor de texto**
- **PDF para entrega final**

---

## 📊 Resultados e Aprendizados

O experimento demonstrou que modelos de Inteligência Artificial dependem diretamente da qualidade e da variedade dos dados usados no treinamento.

Principais aprendizados:

- Uma base de dados pequena limita a capacidade de generalização do modelo.
- Dados enviesados fazem a IA aprender padrões incorretos.
- A classificação automática pode gerar erros quando não representa a realidade de forma ampla.
- A análise humana continua sendo essencial para validar os resultados de sistemas de IA.
- A tecnologia precisa ser desenvolvida com responsabilidade, ética e diversidade nos dados.

---

## ⚖️ Memorial de Impacto e Ética

### Mecanismo do Viés

A seleção restrita de dados corrompe a lógica do algoritmo porque apresenta ao modelo apenas uma parte limitada da realidade. Quando a IA recebe poucos exemplos ou imagens muito parecidas, ela aprende padrões superficiais e passa a classificar novas pessoas com base em características incompletas. Dessa forma, o sistema cria uma visão distorcida e toma decisões incorretas.

### Consequência Social

A classificação errada afeta a forma como uma pessoa é percebida por um sistema automatizado. Quando o modelo marginaliza ou invisibiliza alguém, ele transmite a ideia de que aquela pessoa não pertence a determinado grupo. Isso causa constrangimento, insegurança e pode gerar prejuízos profissionais, principalmente em contextos de seleção, avaliação ou reconhecimento.

### Ação Mitigadora

Uma intervenção de **Human-in-the-loop** garante que pessoas revisem os dados antes da implementação do modelo. Essa equipe avalia se as imagens representam diferentes perfis, aparências e contextos. Com essa curadoria humana, o sistema recebe dados mais diversos, reduz erros de classificação e promove decisões mais justas.

---

## 📁 Estrutura Sugerida do Repositório

```text
laboratorio-classificacao-visual/
├── assets/
│   └── experiencia-02.png
├── docs/
│   └── memorial-impacto-etica.pdf
├── README.md
└── modelo.txt
```

---

## 📄 Critérios de Entrega

- Documento final em **PDF**.
- Print do modelo apresentando falha de classificação.
- Texto reflexivo com até **300 palavras**.
- Uso de verbos no presente do indicativo.
- Relação entre o dado técnico e o impacto humano.

---

## 🗂️ Versionamento

Sugestão de versionamento do projeto:

```text
v1.0.0 - Primeira versão do experimento de classificação visual
```

Sugestão de padrão para commits:

```bash
git commit -m "docs: adiciona memorial de impacto e etica"
git commit -m "docs: adiciona evidencia visual do modelo"
git commit -m "feat: registra link do modelo no Teachable Machine"
```

---

## 👨‍💻 Autor

Desenvolvido por **Erick Costa Liberato**.

- GitHub: [@erickcliberato](https://github.com/erickcliberato)
- LinkedIn: [Erick Liberato](https://www.linkedin.com/in/erick-liberato/)
- E-mail: [erickcliberato@gmail.com](mailto:erickcliberato@gmail.com)

---

[Voltar ao início](https://github.com/erickcliberato)
