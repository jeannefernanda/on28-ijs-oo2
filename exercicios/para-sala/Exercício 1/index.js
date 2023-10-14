class InvoiceItem {
    #id;
    #description;
    #quantity;
    #unityPrice;
  
    constructor(id, description, quantity, unityPrice) {
      this.#id = id;
      this.#description = description;
      this.#quantity = quantity;
      this.#unityPrice = unityPrice;
    }
    
    get id(){
        return this.#id;
    }

    get description(){
        return this.#description;
    }

    get quantity(){
        return this.#quantity;
    }

    set quantity(newQuantity){
        this.#quantity = newQuantity;
    }

    get unityPrice(){
        return this.#unityPrice;
    }

    set unityPrice(unityPrice){
        this.#unityPrice = unityPrice;
    }

    get total(){
        return this.#unityPrice*this.#quantity;
    }

    toString(){
        console.log(`id: ${this.#id}, descrição: ${this.#description}, quantidade: ${this.#quantity}, valor unitário: ${this.#unityPrice}, valor total: ${this.total}`
        );
    }

  }

const conta1 = new InvoiceItem(1, "Sei lá", 3, 20.00)
console.log(conta1)
console.log(conta1.id)
console.log(conta1.description)
console.log(conta1.unityPrice)
console.log(conta1.total)
conta1.unityPrice = 21.99
console.log(conta1.total)
conta1.toString()

