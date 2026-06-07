# 🔧 Guia de Configuração Detalhada

## Passo 1: Clonar o Repositório

```bash
git clone https://github.com/mcfujoshi/meu-zumitoon.git
cd meu-zumitoon
```

## Passo 2: Configurar MongoDB

### Opção A: MongoDB Atlas (Nuvem - Recomendado)

1. Acesse https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um novo cluster
4. Vá para "Database" → "Connect"
5. Copie a string de conexão
6. Substitua `<password>` pela sua senha

**Resultado:** `mongodb+srv://user:password@cluster.mongodb.net/meu-zumitoon?retryWrites=true&w=majority`

### Opção B: MongoDB Local

1. Baixe em https://www.mongodb.com/try/download/community
2. Instale (aceite padrões)
3. Abra MongoDB Compass (aplicação local)
4. String: `mongodb://localhost:27017/meu-zumitoon`

## Passo 3: Backend Configuration

```bash
cd backend

# Instale dependências
npm install

# Copie arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com seus dados
# No Windows use: notepad .env
# No Mac/Linux use: nano .env
```

### Conteúdo do `.env`:

```env
# Ambiente
NODE_ENV=development

# Servidor
PORT=5000

# Banco de Dados
MONGODB_URI=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/meu-zumitoon

# JWT (Gere uma chave segura)
JWT_SECRET=sua_chave_super_secreta_aqui_minimo_32_caracteres

# Frontend URL
CLIENT_URL=http://localhost:3000

# Email (opcional)
EMAIL_SERVICE=gmail
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_app
```

### Como Gerar JWT_SECRET Seguro:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copie o resultado e cole no `.env`

## Passo 4: Iniciar Backend

```bash
# Ainda em /backend
npm run dev

# Você verá:
# 🚀 Servidor rodando em http://localhost:5000
# 📚 Ambiente: development
# ✅ Conectado ao MongoDB
```

**Deixe rodando!** ⏳

## Passo 5: Frontend Configuration

Abra **outro terminal** (mantenha o backend rodando):

```bash
cd frontend
npm install

# Se receber erro de dependências, use:
npm install --legacy-peer-deps
```

## Passo 6: Iniciar Frontend

```bash
npm start

# Você verá:
# webpack compiled
# Compiled successfully!
# http://localhost:3000
```

**O navegador abrirá automaticamente!** 🎉

## 🧪 Testando a Aplicação

### 1. Página Inicial
- Acesse http://localhost:3000
- Veja a galeria de manhwas
- Teste os filtros

### 2. Criar Conta
- Clique em "Cadastro"
- Preencha: Nome, Email, Senha
- Clique em "Registrar"

### 3. Login
- Clique em "Login"
- Use suas credenciais
- Você entrará logado

### 4. Favoritos
- Clique no coração de um manhwa
- Vá para "Favoritos"
- Veja suas histórias salvas

### 5. Busca
- Use a barra de busca
- Digite um nome
- Veja os resultados

## 🔗 Testando a API (Backend)

Use o Postman ou cURL:

### Listar Manhwas
```bash
curl http://localhost:5000/api/manhwas
```

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Registrar Usuário
```bash
curl -X POST http://localhost:5000/api/auth/registro \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Seu Nome",
    "email": "email@example.com",
    "senha": "senha123"
  }'
```

## 📂 Estrutura de Pastas Importante

```
frontend/
├── src/
│   ├── components/      # Componentes React
│   ├── pages/          # Páginas (Home, Login, etc)
│   ├── services/       # Chamadas API
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada

backend/
├── models/             # Schemas MongoDB
├── routes/             # Rotas da API
├── middleware/         # Autenticação, validação
├── controllers/        # Lógica de negócio
├── server.js           # Aplicação principal
└── .env                # Variáveis de ambiente
```

## 🆘 Troubleshooting

### Erro: "Cannot find module 'react'"
```bash
cd frontend
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Erro: "EADDRINUSE: address already in use :::5000"
```bash
# Mude a porta no .env
PORT=5001

# Ou mate o processo:
# Windows: taskkill /PID <pid> /F
# Mac/Linux: kill -9 <pid>
```

### Erro: "MongoNetworkError"
- Verifique a string MONGODB_URI
- Adicione seu IP em MongoDB Atlas: 0.0.0.0/0
- Verifique internet

### Erro: "jwt malformed"
- Limpe o localStorage do navegador
- Faça login novamente

### Frontend não conecta ao Backend
- Verifique se backend está rodando
- Verifique `CLIENT_URL` no `.env`
- Verifique CORS no `server.js`

## 🌐 Variáveis de Ambiente Completas

### Backend `.env`
```env
# Básico
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/meu-zumitoon

# Security
JWT_SECRET=chave_super_segura_minimo_32_caracteres
JWT_EXPIRE=7d

# CORS
CLIENT_URL=http://localhost:3000

# Email (opcional)
EMAIL_SERVICE=gmail
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Frontend `.env.local` (opcional)
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
```

## ✅ Checklist Pré-Produção

- [ ] Backend rodando sem erros
- [ ] Frontend conectado com sucesso
- [ ] Cadastro funcionando
- [ ] Login funcionando
- [ ] Favoritos salvando
- [ ] Busca retornando resultados
- [ ] Responsividade em mobile OK
- [ ] Não há erros no console
- [ ] Variáveis de ambiente corretas

## 🚀 Próximos Passos

1. Personalize os dados (adicione seus manhwas)
2. Customize as cores (tailwind.config.js)
3. Adicione mais funcionalidades
4. Faça deploy (ver DEPLOYMENT.md)

---

**Tudo funcionando?** 🎉
Parabéns! Seu site está pronto!
