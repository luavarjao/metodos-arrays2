const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

let tamanhoPalavras = palavras.some(function(palavra){
    return palavra.length > 5;
})

if(tamanhoPalavras){
    console.log(`existe palavra inválida`)
} else{
    console.log(`array validado`)
}
