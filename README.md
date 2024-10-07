# API com Node.js, Express e Prisma

## Instruções

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Rode o servidor localmente com `npm start`.

### Rotas de Usuários

- `POST /users` - Criar um novo usuário.
  - Exemplo de body: `{ "id": 1, "nome": "João", "email": "joao@email.com" }`
- `GET /users` - Listar todos os usuários.
- `PUT /users/:id` - Atualizar um usuário existente.
- `DELETE /users/:id` - Excluir um usuário.

### Rotas de Documentos

- `POST /documents` - Criar um novo documento.
  - Exemplo de body: `{ "id": 1, "nome": "Documento 1", "status": "ativo", "userId": 1 }`
- `GET /documents` - Listar todos os documentos.
- `PUT /documents/:id` - Atualizar um documento existente.
- `DELETE /documents/:id` - Excluir um documento.
