let objetoCard = [{
        id: 1,
        img: './img/Men-Jacket-Front-Black__15466 1.png',
        categoria: 'Camisetas',
        nome: 'Lightweight Jacket',
        descricao: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        preco: 100.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
    {
        id: 2,
        img: './img/image 1.png',
        categoria: 'Acessórios',
        nome: 'Black Hat',
        descricao: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        preco: 100.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
    {
        id: 3,
        img: './img/Surgical-Mask-Black__89554 1.png',
        categoria: 'Acessórios',
        nome: 'Mask',
        descricao: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        preco: 40.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
    {
        id: 4,
        img: './img/Men-TShirt-Black-Front__70046 1.png',
        categoria: 'Camisetas',
        nome: 'T-Shirt',
        descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        preco: 100.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
    {
        id: 5,
        img: './img/mockup-a0dc2330__62146 1.png',
        categoria: 'Camisetas',
        nome: 'Short-Sleeve T-Shirt',
        descricao: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        preco: 100.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
    {
        id: 6,
        img: './img/mockup-9b9894f1__67347 1.png',
        categoria: 'Camisetas',
        nome: 'Champion Packable Jacket',
        descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        preco: 100.00,
        botaoCarrinho: 'Adicionar ao carrinho',
    },
]



// botao coloca aqui
const carrinho = []

function produtos() {
    objetoCard.forEach(function(item) {

        const card = document.createElement("div")
        card.setAttribute("class", "card")
        const section = document.createElement("section")
        const img = document.createElement("img")

        const button = document.createElement("button")
        button.setAttribute("id", "categoria")
        const h3 = document.createElement("h3")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const button2 = document.createElement("button")
        button2.setAttribute("class", "adicionarCarrinho")
            //
        button2.setAttribute("id", "adicionarCarrinho" + item.id)

        img.src = item.img;
        button.innerText = item.categoria;
        h3.innerText = item.nome;
        h2.innerText = item.descricao;
        p.innerText = 'R$ ' + parseFloat(item.preco).toFixed(2)
        button2.innerText = item.botaoCarrinho;

        vitrine.appendChild(card)
        card.appendChild(section)
        section.appendChild(img)
        card.appendChild(button)
        card.appendChild(h3)
        card.appendChild(h2)
        card.appendChild(p)
        card.appendChild(button2)


        //para cada card meu estou crianod um botao pra ouvir o click
        let socorro = document.getElementById("adicionarCarrinho" + item.id)
        socorro.addEventListener("click", adicionarAoCarrinho.bind(this, item))

    });
}
produtos()
const final = document.createElement("div")





let soma = 0
const carrinhojs = document.querySelector("#carrinhojs")
carrinhojs.appendChild(final)

function renderCarrinhoVazio() {
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')
    final.appendChild(h5)
    final.appendChild(h6)
    h5.innerText = "Carrinho vazio"
    h6.innerText = "Adicionar itens ao carrinho"
    final.setAttribute("class", "carrinhoVazio")

}
renderCarrinhoVazio()


function carregarOCarrinho() {
    // const novaUl = document.createElement("ul")
    // novaUl.setAttribute("class", "informacoesProdutos")
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')
    final.innerHTML = ""
        //novaUl.innerHTML = ""
    soma = 0
    const blocoPrincipal = document.createElement("div")
    blocoPrincipal.setAttribute("id", "vivi")
    const blocoSecundario = document.createElement("div")
    blocoSecundario.setAttribute("id", "iza")
    final.setAttribute("class", "carrinhoCheio")

    carrinho.forEach(function(itemCarrinho, i) {

        let imagem = document.createElement("img")
        let section = document.createElement("section")
        section.setAttribute("class", "classCarrinho")
        imagem.setAttribute("class", "tamanhoImagemAtual")
        imagem.src = itemCarrinho.img
        blocoPrincipal.appendChild(section)
        section.appendChild(imagem)

        let novaLi = document.createElement("p")
        novaLi.setAttribute("class", "palavraLi")

        let novaLa = document.createElement("p")
        novaLa.setAttribute("class", "palavraLa")

        let somaProduct = itemCarrinho.preco
        novaLi.innerText = `${itemCarrinho.nome }`
        novaLa.innerText = `R$${somaProduct.toFixed(2)}`
        section.appendChild(novaLi)
        section.appendChild(novaLa)
        final.appendChild(blocoPrincipal)



        const botaoRemover = document.createElement("button")
        botaoRemover.setAttribute("id", "removerItem")
        botaoRemover.setAttribute("class", "removerItem")
        botaoRemover.innerText = "Remover produto"
        blocoPrincipal.appendChild(botaoRemover)

        botaoRemover.addEventListener("click", removerItem.bind(this, i))




        h5.innerText = ` Quantidade : ${carrinho.length}`
        h5.setAttribute("class", "corTexto")
        let total = soma += itemCarrinho.preco
        h6.innerText = ` Total : R$ ${total.toFixed(2)}`
        h6.setAttribute("class", "corTexto")
        blocoSecundario.appendChild(h5)
        blocoSecundario.appendChild(h6)
        final.appendChild(blocoSecundario)

    })

}

function adicionarAoCarrinho(churros) {

    carrinho.push(churros)
    carregarOCarrinho()

}


function removerItem(remove) {
    console.log(remove)

    carrinho.splice(remove, 1)
    carregarOCarrinho()
    if (carrinho.length === 0) {
        renderCarrinhoVazio()
    }
    console.log(carrinho)

}