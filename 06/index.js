const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const novasCidades = cidades.filter ((cidade) => {
    return cidade.length <= 8;
})

console.log(novasCidades.join(", "))