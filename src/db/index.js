const db = {
  contatos : [
    {
      usuario1: 1, 
      usuario2: 2
    }, 
    {
      usuario1: 2, 
      usuario2: 3
    }, 
  ],
  usuarios : [
    {
      id : 1,
      nome : "José",
      email : "jose@mail.com",
      nomeFile : null,
      perfil_id : 1
    },
    {
      id : 2,
      nome : "Paulo",
      email : "paulo@mail.com",
      nomeFile : null,
      perfil_id : 2
    },
    {
      id : 3,
      nome : "Maria",
      email : "maria@mail.com",
      nomeFile : null,
      perfil_id : 1
    },
  ],
  perfis : [
    {id : 1, descricao : "ADMIN"},
    {id : 2, descricao : "NORMAL"}
  ]   
}

export { db }