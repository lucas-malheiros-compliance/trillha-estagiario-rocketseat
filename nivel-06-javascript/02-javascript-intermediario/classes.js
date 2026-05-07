/*
class Person {
    constructor(name) {
        console.log(`Olá, ${name}`);

    }
}

const person = new Person("Lucas");
*/
/*
class Product {
    constructor(name) {
        this.name = name
    }
}

const product1 = new Product("Teclado")
console.log(product1.name)
const product2 = new Product("Mouse")
console.log(product2.name)
*/
/*
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail() {
        console.log(`Enviando email de ${this.name}, através do endereço ${this.email}`);

    }
}

const user = new User("Lucas", "lucas@email.com")
user.sendEmail()
*/
/*
class User {
    static showMessage(mensagem) {
        console.log(mensagem);

    }
}

// const user = new User()
// user.showMessage()

User.showMessage()
User.showMessage("Está é uma mensagem passando parâmetros")
*/
/*
class Animal {
    constructor(name) {
        this.name = name
    }
    makeNoise() {
        console.log("Algum som genperico de animal");

    }
}

class Dog extends Animal {
    makeNoise() {
        console.log("Au au")
    }
}

class Cat extends Animal {
    makeNoise() {
        console.log("Miau");

    }
    run() {
        console.log("Correndo");

    }
}


const dog = new Dog("Jake")
console.log(dog.name);

dog.makeNoise()
const cat = new Cat("Mel")
console.log(cat.name);

cat.makeNoise()
cat.run()
*/
/*
const address = {
    city: "São Paulo",
    country: "Brazil"
}

console.log(address);

const users = ["Lucas", "Rodrigo", "Maria"]
console.log(users);

const userName = "Lucas Malheiros"
console.log(userName.__proto__);
*/
/*
const obj = [17]
let index = 300


try {
    // obj.execute()
    if (!obj.includes(17)) {
        throw new Error("O número 17 não está disponível")
    }

    if (index > 99) {
        throw new RangeError("Número está fora do intervalor escolha um numero de 0 a 99")
    }
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Método indisponível")
    } else if (error instanceof RangeError) {
        console.log(error.message);
    } else {
        console.log("Não foi posível realizar a ação");

    }
}
*/

class MyCustomError {
    constructor(message) {
        this.message = "Classe de Erro Customizada: " + message
    }
}

try {
    throw new Error("Erro genérico")
    throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message);
    } else {
        console.log("Não foi possível executar!");

    }

}





