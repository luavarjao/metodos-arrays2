const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const novosNomes = nomes.filter((nome) =>{
    return nome.slice(0,1) === "A" || nome.slice(0,1) === "a"
  })

  console.log(novosNomes)