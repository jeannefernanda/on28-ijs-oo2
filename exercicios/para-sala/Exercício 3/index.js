class Mae{
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo){
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracterísticas(){
        console.log(`nacionalidade: ${this.nacionalidade}, cor dos olhos: ${this.corDosOlhos}, cor dos cabelos: ${this.corDoCabelo}`);
    }
}

class Filha extends Mae{

}

const mae1 = new Mae("brasileira", "castanho", "castanho")
mae1.mostrarCaracterísticas()
const filha1 = new Filha("francesa", "verde", "castanho")
filha1.mostrarCaracterísticas()