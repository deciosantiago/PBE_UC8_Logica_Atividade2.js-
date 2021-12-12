var ListaDePecas=["filro de ar","carburador","módulo de ignição"]

if (ListaDePecas.length<10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não é possível cadastrar mais peças")
}

let Peso = 50;
if(Peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}

let NomeDaPeca = "filtro de ar"
if(NomeDaPeca.length>3){
    console.log("Nome da peça adequado para cadastro")
}else{
    console.log("O nome deve ter mais de 3 caracteres")
}
if(NomeDaPeca.length ==0) {
        console.log("O nome da peça não pode ser vazio")
    } else {
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
    }


switch(NomeDaPeca.length) {
    case 0:
        console.log("O nome deve ter 3 ou mais caracteres. Digite novamente")
    case 1:
    
    case 2:
    
    case 3:

    default:
        console.log("Nome da peça adequado para o cadastro!")
}