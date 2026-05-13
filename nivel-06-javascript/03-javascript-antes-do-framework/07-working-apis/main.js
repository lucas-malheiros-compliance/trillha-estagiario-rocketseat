/* //fetch com then
fetch("http://localhost:3333/products")
    .then((response) => { response.json() })
    .then((data) => { console.log(data) })
*/

// fetch com async await
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}


async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

// fetchProducts()
// fetchProductById("3")

const form = document.querySelector("form")
const productName = document.getElementById("name")
const productPrice = document.getElementById("price")

addEventListener("submit", async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            productName: productName.value,
            price: Number(productPrice.value),
        })
    })

    await fetchProducts()
})