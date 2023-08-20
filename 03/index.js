const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const temCerveja = palavras.some((palavra)=>{
    return palavra === "cerveja";
})

const temVodka = palavras.some((palavra)=>{
    return palavra === "vodka";
})

if(temCerveja || temVodka){
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
} else {
    console.log("tudo certo, vamos as compras!")
}
