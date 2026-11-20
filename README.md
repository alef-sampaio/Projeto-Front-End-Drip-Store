#  Digital Store

Projeto final de Front-end do curso da Digital College: uma loja virtual de tênis e acessórios, desenvolvida em **React** a partir da documentação oficial do Digital Store e do design no Figma.

 **Deploy:** https://projeto-front-end-drip-store-azure.vercel.app
 **Repositório:** https://github.com/alef-sampaio/Projeto-Front-End-Drip-Store

---

##  Equipe

- Alef Alexandre


##  Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS puro (variáveis CSS e layout com Flexbox e Grid)
- Deploy na [Vercel](https://vercel.com/)

---

##  Funcionalidades

### Página inicial (Home)
- Galeria do hero com setas, bolinhas de paginação e chamada para ação
- Coleções em destaque
- Categorias em destaque com ícones
- Produtos em alta
- Seção de oferta especial

### Listagem de produtos
- Busca pelo campo do cabeçalho (`/products?filter=termo`)
- Filtros por **Marca**, **Categoria**, **Gênero** e **Estado**
- Ordenação por menor e maior preço
- Contador de produtos encontrados

### Visualização do produto
- Galeria com miniaturas e navegação por setas
- Informações do produto: avaliação, preço e preço com desconto
- Seleção de tamanho e de cor
- Seção de produtos relacionados

### Outras páginas
- Categorias
- Login e cadastro (apenas visual, sem back-end)
- Carrinho e Meus Pedidos (páginas informativas)

---

##  Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/products` | Listagem de produtos |
| `/product/:id` | Visualização do produto |
| `/categories` | Categorias |
| `/login` | Entrar |
| `/signup` | Cadastro |
| `/cart` | Carrinho |
| `/orders` | Meus Pedidos |

---

##  Estrutura do projeto

```
drip-store/
├── public/              # Imagens do projeto
├── src/
│   ├── assets/          # Logo
│   ├── components/      # Header, Footer, Gallery, ProductCard, BuyBox...
│   ├── data/            # Lista de produtos (dados fictícios)
│   ├── pages/           # Páginas e Layout
│   ├── App.jsx          # Rotas
│   ├── main.jsx
│   └── styles.css       # Estilos globais
├── index.html
├── vercel.json          # Redirecionamento das rotas do React Router
└── package.json
```

### Componentes principais

| Componente | Função |
|------------|--------|
| `Layout` | Envolve as páginas com Header e Footer |
| `Header` / `Footer` | Cabeçalho com busca e navegação / rodapé |
| `Section` | Título de seção com link opcional |
| `ProductCard` / `ProductListing` | Card e grade de produtos |
| `Gallery` | Galeria de imagens com setas e miniaturas |
| `FilterGroup` | Grupo de filtros (checkbox ou radio) |
| `ProductOptions` | Opções de tamanho e de cor |
| `BuyBox` | Informações e compra do produto |

---

##  Como rodar o projeto

**Pré-requisito:** [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/alef-sampaio/Projeto-Front-End-Drip-Store.git

# 2. Entre na pasta do projeto
cd Projeto-Front-End-Drip-Store

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

### Outros comandos

```bash
npm run build     # Gera a versão de produção na pasta dist
npm run preview   # Visualiza a versão de produção localmente
```

---

##  Design

O layout segue o design do Figma do projeto, com a paleta de cores e a fonte **Inter**:

| Cor | Hex |
|-----|-----|
| Primária | `#C92071` |
| Secundária | `#B5B6F2` |
| Terciária | `#991956` |
| Alerta | `#F6AA1C` |
| Cinza escuro | `#1F1F1F` |
