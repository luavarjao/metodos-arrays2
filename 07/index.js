const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

  let cep = 00222444;

  const endereco = endereços.findIndex ((local) =>{
    return local.cep === cep;
  })


console.log(endereços[endereco].rua)