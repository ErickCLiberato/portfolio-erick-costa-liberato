# 🔲 QR Code Styling

> Recriação educacional de um gerador de QR Code estilizado, inspirada no site [QR Code Styling](https://qr-code-styling.com/).

---

## 📝 Descrição do Projeto

O **QR Code Styling** é uma aplicação web desenvolvida para gerar QR Codes personalizados de forma simples, visual e interativa. O usuário pode inserir um link ou texto, alterar cores, estilos dos pontos, cantos, fundo, tamanho, margem, nível de correção de erro e ainda adicionar uma imagem ao centro do QR Code.

Este projeto foi desenvolvido com auxílio do **Gemini** e do **Google AI Studio**, com foco em praticar desenvolvimento frontend moderno, componentização com React e personalização visual de interfaces.

A aplicação é uma recriação com finalidade de estudo do site **QR Code Styling**, buscando reproduzir a ideia principal da ferramenta: gerar QR Codes customizados com preview em tempo real e opções de exportação.

> ⚠️ Este projeto possui finalidade acadêmica/educacional e não tem vínculo oficial com o site original QR Code Styling.

---

## 🖼️ Demonstração

Adicione abaixo uma captura de tela do projeto em funcionamento:

![Preview do QR Code Styling](./assets/preview.png)

*Figura 1: Interface principal do gerador de QR Code com painel de personalização e visualização em tempo real.*

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React**
- **Motion**
- **QR Code Styling**
- **Google AI Studio**
- **Gemini**

---

## ⚙️ Funcionalidades

- Inserção de texto ou URL para geração do QR Code.
- Preview do QR Code em tempo real.
- Upload de imagem para inserir no centro do QR Code.
- Personalização de largura, altura e margem.
- Alteração da cor dos pontos do QR Code.
- Seleção de estilos dos pontos:
  - Square
  - Dots
  - Rounded
  - Extra Rounded
  - Classy
  - Classy Rounded
- Personalização dos cantos externos e internos.
- Alteração da cor de fundo.
- Configuração do nível de correção de erro.
- Download do QR Code nos formatos:
  - PNG
  - SVG
- Exportação das configurações em arquivo JSON.

---

## 📁 Estrutura do Projeto

```text
qr-code-styling/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── qr/
│   │   │   ├── CustomizationPanel.tsx
│   │   │   └── QRPreview.tsx
│   │   └── ui/
│   ├── context/
│   │   └── QRContext.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── qr.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── components.json
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📊 Resultados e Aprendizados

Durante o desenvolvimento do projeto, foi possível praticar conceitos importantes de desenvolvimento frontend moderno, como componentização, uso de estados globais, tipagem com TypeScript e integração com bibliotecas externas.

Principais aprendizados:

- Criação de interfaces dinâmicas com **React**.
- Organização de componentes por responsabilidade.
- Uso de **Context API** para controlar as configurações do QR Code.
- Manipulação de arquivos enviados pelo usuário.
- Integração com a biblioteca **qr-code-styling**.
- Exportação de arquivos em diferentes formatos.
- Aplicação de boas práticas visuais com **Tailwind CSS** e componentes reutilizáveis.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm ou outro gerenciador de pacotes compatível

---

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/erickcliberato/qr-code-styling.git
```

2. Acesse a pasta do projeto:

```bash
cd qr-code-styling
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```text
http://localhost:3000
```

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica erros de tipagem com TypeScript |
| `npm run clean` | Remove a pasta `dist` |

---

## 🧪 Boas Práticas Aplicadas

- Estrutura de pastas organizada.
- Separação entre layout, componentes de QR Code e componentes de interface.
- Uso de tipagem com TypeScript.
- Componentes reutilizáveis.
- Código preparado para versionamento com Git.
- Documentação clara para instalação e execução.
- Nomeação de arquivos e componentes de forma descritiva.

---

## 🗂️ Versionamento

Este projeto pode seguir o padrão de versionamento semântico:

```text
v1.0.0 - Primeira versão funcional do gerador de QR Code
```

Sugestão de padrão para commits:

```text
feat: adiciona nova funcionalidade
fix: corrige um erro
docs: altera documentação
style: altera estilos visuais
refactor: melhora o código sem mudar comportamento
```

Exemplos:

```bash
git commit -m "feat: adiciona exportação do QR Code em SVG"
git commit -m "docs: atualiza instruções do README"
```

---

## 📌 Referência

Este projeto foi inspirado no site:

[QR Code Styling](https://qr-code-styling.com/)

---

## 👨‍💻 Autor

Desenvolvido por **Erick Costa Liberato**.

- GitHub: [@erickcliberato](https://github.com/erickcliberato)
- LinkedIn: [Erick Liberato](https://www.linkedin.com/in/erick-liberato/)
- E-mail: [erickcliberato@gmail.com](mailto:erickcliberato@gmail.com)

---

[Voltar ao início](https://github.com/erickcliberato)




<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/79754f11-a7c9-4338-ab1d-c0278885f111

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
