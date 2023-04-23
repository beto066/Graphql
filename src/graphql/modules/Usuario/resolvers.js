import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { db } from  './../../../db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolvers = {
  Query: {
    usuario(obj, args) {
        return db.usuarios.find((db) => db.id === args.id);
    },
    usuarios : () => db.usuarios,
  },

  Usuario : {
    perfil(obj) {
      return db.perfis.find((perfil) => obj.perfil_id === perfil.id).descricao;
    }
  },

  Mutation : {
    cadastrarUsuario(_, { data }) {
      const { email } = data;

      const usuarioExistente = db.usuarios.some((u) => u.email === email);

      if (usuarioExistente){
        throw new Error(`Email já cadastrado: ${ email }`)
      }

      const novoUsuario = {
        ...data,
        id : geradorId(db.usuarios),
        perfil_id : 2
      }

      db.usuarios.push(novoUsuario);

      return novoUsuario;
    },

    atualizarUsuario(_, { id, data }){
      const usuario = db.usuarios.find((u) => u.id == id);
      const index = db.usuarios.findIndex((u) => u.id == id);

      const novoUsuario = {
        ...usuario,
        ...data
      }

      console.log(novoUsuario);

      db.usuarios.splice(index, 1, novoUsuario);

      return novoUsuario;
    },

    deletarUsuario(_, { id }){
      const index = db.usuarios.findIndex((u) => u.id == id);
      const usuarioEncontrado = db.usuarios.find((u) => u.id == id);

      if (index >= 0) {
        db.usuarios.splice(index, 1);
      }

      console.log(!!usuarioEncontrado);

      return !!usuarioEncontrado;
    },
  }
}

function geradorId(lista){
  let maior = 0;

  for (let i = 0; i < lista.length; i++){
    if (lista[i].id >= maior)
      maior = lista[i].id;
  }

  return ++maior;
}

console.log(geradorId(db.usuarios))

export default { resolvers };
