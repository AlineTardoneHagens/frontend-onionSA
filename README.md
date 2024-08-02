# OnionSA Frontend

Este é o frontend da aplicação OnionSA. O projeto foi construído com React e utiliza Tailwind CSS para o estilo.

## Estrutura das Telas
A aplicação possui duas principais telas:

### Tela de Importação de Pedidos

- Permite o upload de arquivos .xlsx para importar pedidos.
- Inclui um botão para baixar um exemplo de planilha.
- Exibe mensagens de sucesso ou erro dependendo do resultado da importação.

### Tela de Exibição de Dados

- Exibe gráficos de vendas por região e produto.
- Mostra uma lista de pedidos com detalhes como cliente, produto, valor final e data de entrega.

## Estrutura do Projeto

- `src/components/` - Componentes React utilizados na aplicação.
- `src/Services/` - Serviços para interações com APIs.
- `src/App.js` - Componente principal que configura as rotas.
- `public/assets/` - Recursos estáticos, como planilhas e imagens.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes para Node.js)

## Instalação

### 1. **Clone o Repositório**

   Clone este repositório para o seu ambiente local:

   ``
   git clone https://github.com/AlineTardoneHagens/frontend-onionSA.git ``

### 2.Navegue para o Diretório do Projeto
``
cd onion-sa-front
``
### 3. Instale as Dependências

Execute o comando a seguir para instalar todas as dependências do projeto:
``
npm install
``

### 4. Executar a Aplicação
Para iniciar o projeto em modo de desenvolvimento, use o comando:

``
npm start
``
Isso iniciará o servidor de desenvolvimento e a aplicação estará disponível em *http://localhost:3000*.
