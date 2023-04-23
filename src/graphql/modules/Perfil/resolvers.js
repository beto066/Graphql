import { db } from "../../../db/index.js";

const resolvers = {
  Query : {
    perfis : () => db.perfis
  }
}

export default { resolvers };