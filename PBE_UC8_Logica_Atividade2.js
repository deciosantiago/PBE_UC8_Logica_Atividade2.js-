var ListaDePecas=["filro de ar","carburador","módulo de ignição"]

if (ListaDePecas.length<10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não é possível cadastrar mais peças")
}

let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}

let nomedapeca = "filtro de ar"
if(nomedapeca.length>3){
    console.log("Nome da peça adequado para cadastro")
}else{
    console.log("O nome deve ter mais de 3 caracteres")
}