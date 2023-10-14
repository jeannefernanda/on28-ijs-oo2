class Ingresso{
    lote;
    promocional;
    primeiro;
    segundo;
    terceiro;
    preco = 0;
    
    mostrarPreco(){
        console.log(`O preço do ingresso é: R$ ${this.preco}`)
    }
}

class IngressoNormal extends Ingresso{

}

class IngressoVIP extends Ingresso{
    preco = 1;
}

const ingresso1 = new Ingresso()
ingresso1.mostrarPreco()
const ingressoNormal1 = new IngressoNormal()
ingressoNormal1.mostrarPreco()
const ingressoVip1 = new IngressoVIP()
ingressoVip1.mostrarPreco()