// Para compilar com babel, use npx babel main.js --out-dir dist
// Tambem é possível compilar utilizando npm run build

class User {
    constructor({ email }) {
        this.email = email
    }
    sendMessage() {
        console.log(`Mensagem enviada para: ${this.email}`)
    }
}

let user = new User({ email: "lucas@email.com" })
user.sendMessage()