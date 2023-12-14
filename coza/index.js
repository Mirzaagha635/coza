const products =document.getElementById('productList');
let db
async function getgetir (){
    await axios.get('https://65680fe59927836bd97408d3.mockapi.io/products')
    .then(res =>{
        db = res.data
        db.forEach((item) => {
            let div = document.createElement('div')
            div.className = 'box  col-xl-4 col-lg-4 col-md-6 col-sm-12 '
            div.innerHTML = `
            <img class='productimage' src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price}$</p>
            <button class='btnaddcard' onclick="addToCart(${item.id})">Add to cart</button>
           `
           products.appendChild(div);
        })
    })
}
getgetir();
function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find(item => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart));
}