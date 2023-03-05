const addproduto = document.getElementById('addproduto')
let carrinho = document.createElement('img')
carrinho.src = "https://cdn-icons-png.flaticon.com/512/6713/6713639.png"

addproduto.setAttribute('href', carrinho)

addproduto.addEventListener('click', ()=>{
    console.log("adicinou")
})