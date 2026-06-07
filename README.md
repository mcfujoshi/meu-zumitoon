# 🎭 Meu Zumitoon - Plataforma de Manhwas

Um site moderno, seguro e prático para explorar e acompanhar manhwas, mangás e webtoons.

## ✨ Funcionalidades Principais

- 📚 **Galeria de Histórias** - Navegue por manhwas com filtros avançados
- 🔍 **Sistema de Busca** - Encontre histórias rapidamente
- ❤️ **Lista de Favoritos** - Salve suas histórias favoritas
- 👤 **Autenticação** - Login e cadastro seguro
- 🔐 **Segurança Total** - Senhas criptografadas, JWT Auth
- 📱 **Responsivo** - Design perfeito em mobile e desktop
- ⚡ **Performance** - Carregamento rápido e otimizado
- 🎨 **UI/UX Moderna** - Interface intuitiva e agradável
- 💾 **Histórico** - Acompanhe sua jornada de leitura

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js 18** - Biblioteca de componentes
- **Tailwind CSS** - Estilização moderna
- **React Router v6** - Navegação SPA
- **Axios** - Requisições HTTP
- **Context API** - Gerenciamento de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticação segura
- **Bcryptjs** - Criptografia de senhas
- **CORS** - Controle de origem
- **Helmet** - Segurança HTTP

## 📦 Estrutura do Projeto

```
meu-zumitoon/
│
├── frontend/                 # React Application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── ManhwaCard.js
│   │   │   ├── LoginForm.js
│   │   │   └── SearchBar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Favoritos.js
│   │   │   └── Detalhes.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                  # Express API
│   ├── models/
│   │   ├── User.js
│   │   ├── Manhwa.js
│   │   └── Avaliacao.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── manhwas.js
│   │   ├── usuarios.js
│   │   └── favoritos.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── manhwaController.js
│   │   └── usuarioController.js
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
├── README.md
├── SETUP.md
└── DEPLOYMENT.md
```

## 🚀 Como Instalar e Rodar

### Pré-requisitos
- Node.js v14+ (https://nodejs.org)
- MongoDB Atlas ou Local (https://www.mongodb.com)
- Git

### 1️⃣ Backend Setup

```bash
# Entre na pasta backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Edite o .env com suas credenciais
# MONGODB_URI=seu_link_mongodb
# JWT_SECRET=sua_chave_secreta

# Inicie o servidor
npm run dev
# Servidor rodará em http://localhost:5000
```

### 2️⃣ Frontend Setup (em outro terminal)

```bash
# Entre na pasta frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start
# Aplicação abrirá em http://localhost:3000
```

## 📱 Como Usar

### 1. Cadastro
- Clique em "Cadastro" na página inicial
- Preencha: Nome, Email, Senha
- Pronto! Você está logado

### 2. Explorar Manhwas
- Veja a galeria na Home
- Use os filtros por gênero
- Clique em "Ler" para abrir detalhes

### 3. Favoritos
- Clique no coração para adicionar aos favoritos
- Acesse "Favoritos" na navegação
- Remova com um clique

### 4. Buscar
- Use a barra de busca no topo
- Digite o nome do manhwa
- Resultados aparecem instantaneamente

## 🔐 Segurança

✅ **Senhas** - Hash com bcrypt (10 rounds)
✅ **Autenticação** - JWT com expiração de 7 dias
✅ **CORS** - Configurado apenas para seu frontend
✅ **Helmet** - Headers de segurança HTTP
✅ **Validação** - Todas as entradas validadas
✅ **Proteção CSRF** - Em desenvolvimento
✅ **Rate Limiting** - Contra força bruta

## 🗄️ Banco de Dados

### Coleções MongoDB

**Users**
```json
{
  "_id": ObjectId,
  "nome": "string",
  "email": "string (unique)",
  "senha": "hash",
  "avatar": "url",
  "favoritos": [ObjectId],
  "criadoEm": Date,
  "atualizadoEm": Date
}
```

**Manhwas**
```json
{
  "_id": ObjectId,
  "titulo": "string",
  "descricao": "string",
  "autor": "string",
  "genero": ["string"],
  "imagem": "url",
  "status": "Ongoing|Completado|Hiatus",
  "capitulos": "number",
  "avaliacaoMedia": "number",
  "visualizacoes": "number",
  "criadoEm": Date
}
```

## 🔌 API Endpoints

### Autenticação
- `POST /api/auth/registro` - Novo usuário
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Manhwas
- `GET /api/manhwas` - Listar todos
- `GET /api/manhwas/:id` - Detalhes
- `GET /api/manhwas/search?q=termo` - Buscar

### Usuário
- `GET /api/usuarios/perfil` - Dados do usuário
- `PUT /api/usuarios/perfil` - Atualizar
- `GET /api/usuarios/favoritos` - Meus favoritos
- `POST /api/usuarios/favoritos/:id` - Adicionar favorito
- `DELETE /api/usuarios/favoritos/:id` - Remover favorito

## 🎨 Customização

### Cores
Edite `frontend/tailwind.config.js`:
```js
colors: {
  primary: '#e94560',   // Vermelho
  secondary: '#1a1a2e', // Azul escuro
  dark: '#0f0f0f'       // Preto
}
```

### Dados de Exemplo
Edite `frontend/src/pages/Home.js` para adicionar seus próprios manhwas.

## 🧪 Testes

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 🚀 Deploy

### Frontend - Vercel
```bash
cd frontend
vercel
```

### Backend - Render
1. Conecte seu repositório ao Render
2. Configure variáveis de ambiente
3. Deploy automático a cada push

Veja `DEPLOYMENT.md` para detalhes completos.

## 📚 Documentação Adicional

- [SETUP.md](SETUP.md) - Guia detalhado de configuração
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy em produção
- [API.md](API.md) - Documentação completa da API

## 🐛 Problemas Comuns

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Error
- Verifique a URI no `.env`
- Adicione seu IP no MongoDB Atlas
- Verifique as credenciais

### CORS Error
- Altere `CLIENT_URL` no `.env` do backend
- Reinicie o servidor

### Porta já em uso
```bash
# Mudar porta no .env
PORT=5001
```

## 📞 Suporte

- Abra uma issue no GitHub
- Verifique a documentação
- Cheque os logs do console

## 📝 Licença

Privado - Uso pessoal

## 👨‍💻 Desenvolvido por

**mcfujoshi**

---

**Versão:** 2.0.0
**Última atualização:** 2026-06-07
**Status:** ✅ Pronto para Produção
