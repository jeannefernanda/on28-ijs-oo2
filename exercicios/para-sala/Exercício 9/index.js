class Funcionario{
    nome;
    cpf;
    salario;
    aumento = 0.10;

    constructor(nome, cpf, salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;    
    }

    receberAumento(){
        this.salario += this.salario * this.aumento;
        console.log(`Salário após aumento de ${this.aumento*100}%: R$ ${this.salario}`)
    }
    
    exibirDados(){
        console.log(`\n---- DADOS DO FUNCIONÁRIO ----\nNome: ${this.nome} \nCPF: ${this.cpf}\n`)
    }
}

class Gerente extends Funcionario{
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia){
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados(){
        console.log(`\n---- DADOS DO GERENTE ----\nNome: ${this.nome} \nCPF: ${this.cpf}\nNivel: ${this.nivelGerencia}\n`)
    }
}


class Assistente extends Funcionario{
    matricula;

    constructor(nome, cpf, salario, matricula){
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados(){
        console.log(`\n---- DADOS DO ASSISTENTE ----\nNome: ${this.nome} \nCPF: ${this.cpf}\nMatrícula: ${this.matricula}\n`)
    }
}

class AssistenteTecnico extends Assistente{
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados(){
        console.log(`\n---- DADOS DO ASSISTENTE TECNICO ----\nNome: ${this.nome} \nCPF: ${this.cpf}\nMatrícula: ${this.matricula}\nBônus Salarial: ${this.bonusSalarial}\n`)
    }
}

class AssistenteAdministrativo extends Assistente{
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno){
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        if(turno === "noite")
            this.adicionalNoturno = adicionalNoturno;

    }

    exibirDados(){
        if(this.turno === "dia")
            console.log(`\n---- DADOS DO ASSISTENTE ADMINISTRATIVO ----\nNome: ${this.nome} \nCPF: ${this.cpf}\nMatrícula: ${this.matricula}\nTurno: ${this.turno}\n`)
        else
            console.log(`\n---- DADOS DO ASSISTENTE ADMINISTRATIVO ----\nNome: ${this.nome} \nCPF: ${this.cpf}\nMatrícula: ${this.matricula}\nTurno: ${this.turno}\nAdicional Noturno: ${this.adicionalNoturno}\n`)
    }
}

const funcionario1 = new Funcionario("Jorge", "84733354744", 1800)
funcionario1.exibirDados()
funcionario1.receberAumento()
funcionario1.exibirDados()

const gerente1 = new Gerente("Mateus", "57689432955", 5000, "Junior")
gerente1.exibirDados()

const assistente1 = new Assistente("André", "23456789054", 3000, 56432)
assistente1.exibirDados()

const assistenteTecnico1 = new AssistenteTecnico("André", "23456789054", 3000, 56788, 1000)
assistenteTecnico1.exibirDados()

const assistenteAdministrativo1 = new AssistenteAdministrativo("Patricia", "23476843267", 4000, 43215, "noite", 1005)
assistenteAdministrativo1.exibirDados()
const assistenteAdministrativo2 = new AssistenteAdministrativo("Carlos", "34565478900", 4000, 45377, "dia")
assistenteAdministrativo2.exibirDados()