# 🔳 QRGerenator

> Site gerador de QR Codes personalizados, desenvolvido com **React**, **TypeScript**, **Vite** e apoio do **Gemini / Google AI Studio**.

---

## 📝 Descrição do Projeto

O **QRGerenator** é uma aplicação web para criação, personalização e exportação de QR Codes de forma simples e visual. O usuário pode inserir um link ou texto, visualizar o QR Code em tempo real, alterar cores, estilos, tamanho, margem, cantos e também adicionar uma imagem central personalizada.

O projeto foi desenvolvido com auxílio do **Gemini** e do **Google AI Studio**, utilizando uma estrutura moderna de front-end baseada em componentes, contexto global e integração com Firebase para autenticação e salvamento de configurações na nuvem.

---

## ✨ Funcionalidades

- Geração de QR Codes a partir de links ou textos.
- Pré-visualização atualizada em tempo real.
- Personalização de:
  - cor dos pontos;
  - estilo dos pontos;
  - cor dos cantos;
  - formato dos cantos;
  - cor do fundo;
  - largura, altura e margem.
- Upload de logo ou imagem central no QR Code.
- Download do QR Code em **PNG** e **SVG**.
- Exportação da configuração em **JSON**.
- Login com conta Google.
- Salvamento de configurações na nuvem com Firebase.
- Área “Meus QRs” para carregar ou excluir configurações salvas.
- Suporte a tema claro e escuro.
- Suporte a idioma português e inglês.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Firebase Authentication**
- **Cloud Firestore**
- **qr-code-styling**
- **Lucide React**
- **Motion**
- **Sonner**
- **Gemini / Google AI Studio**

---

## 📁 Estrutura do Projeto

```bash
qr-generator/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── layout/
│   │   ├── qr/
│   │   └── ui/
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── LanguageContext.tsx
│   │   ├── QRContext.tsx
│   │   └── ThemeContext.tsx
│   ├── lib/
│   ├── services/
│   │   ├── firebase.ts
│   │   └── qrService.ts
│   ├── types/
│   │   └── qr.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── firestore.rules
├── firebase-applet-config.json
├── package.json
├── vite.config.ts
└── README.md
```

---

## 📊 Resultados e Aprendizados

Durante o desenvolvimento do **QRGerenator**, foram aplicados conceitos importantes de desenvolvimento web moderno, organização de componentes e integração com serviços externos.

Principais aprendizados:

- Criação de interfaces modernas com React e Tailwind CSS.
- Uso de Context API para gerenciar estados globais, como QR Code, autenticação, tema e idioma.
- Integração com Firebase para login e armazenamento de dados.
- Aplicação de boas práticas de componentização.
- Manipulação de arquivos para upload de imagem no QR Code.
- Exportação de dados em diferentes formatos, como PNG, SVG e JSON.
- Uso do Gemini e Google AI Studio como apoio no desenvolvimento assistido por IA.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- **Node.js**
- **npm**
- Uma conta/configuração Firebase, caso queira usar autenticação e salvamento em nuvem.

---

### 1. Clone o repositório

```bash
git clone https://github.com/erickcliberato/qrgenerator.git
```

---

### 2. Acesse a pasta do projeto

```bash
cd qrgenerator
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env.local` com base no arquivo `.env.example`.

Exemplo:

```env
GEMINI_API_KEY="SUA_CHAVE_GEMINI"
APP_URL="URL_DA_APLICACAO"
```

> Nunca envie chaves privadas ou dados sensíveis diretamente para o GitHub.

---

### 5. Execute o projeto em ambiente local

```bash
npm run dev
```

A aplicação será iniciada em:

```bash
http://localhost:3000
```

---

## 📦 Scripts Disponíveis

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run preview
```

Visualiza localmente a versão final gerada para produção.

```bash
npm run lint
```

Executa a verificação de tipos com TypeScript.

```bash
npm run clean
```

Remove a pasta `dist`.

---

## 🔐 Segurança

O projeto utiliza regras de segurança no Firestore para proteger os dados dos usuários.

Algumas validações aplicadas:

- Apenas usuários autenticados podem acessar suas próprias configurações.
- Cada QR Code salvo fica vinculado ao usuário que o criou.
- Validação de campos obrigatórios.
- Controle de criação, leitura, atualização e exclusão por usuário.
- Proteção contra acesso indevido a documentos de outros usuários.

---

## 🧩 Boas Práticas de Versionamento

Para manter o projeto organizado no GitHub, recomenda-se utilizar mensagens de commit claras e padronizadas.

Exemplos:

```bash
feat: adiciona exportação de QR Code em SVG
fix: corrige salvamento de configurações no Firebase
docs: atualiza README do projeto
style: ajusta layout do painel de customização
refactor: reorganiza contextos da aplicação
```

Sugestão de fluxo:

- `main`: versão estável do projeto.
- `develop`: versão em desenvolvimento.
- `feature/nome-da-funcionalidade`: novas funcionalidades.
- `fix/nome-da-correcao`: correções de bugs.

---

## 📌 Status do Projeto

🚧 Projeto em desenvolvimento e evolução contínua.

Possíveis melhorias futuras:

- Adicionar histórico de QR Codes gerados sem login.
- Criar opção de compartilhamento direto.
- Implementar templates prontos de QR Code.
- Melhorar a responsividade em diferentes tamanhos de tela.
- Adicionar testes automatizados.
- Criar uma página pública de demonstração.

---

## 👨‍💻 Autor

Desenvolvido por **Erick Liberato**.

Projeto criado com apoio de ferramentas de desenvolvimento assistido por IA, como **Gemini** e **Google AI Studio**.

---

## 📄 Licença

Este projeto ainda não possui uma licença definida.

Caso seja publicado como open source, recomenda-se adicionar um arquivo `LICENSE` ao repositório.

---

[Voltar ao início](https://github.com/erickcliberato)
