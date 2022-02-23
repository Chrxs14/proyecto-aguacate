const url = 'https://platzi-avo.vercel.app'
const container = document.querySelector('#container')

const formatPrice = (price)=>{
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
    
    return newPrice
}

window.fetch(`${url}/api/avo`)
.then((respuesta) => respuesta.json())
.then(element=>{
    const allElements  = []
    element.data.forEach(item => {
        const create_img = document.createElement('img')
        create_img.src = url + item.image

        const create_title = document.createElement('h2')
        create_title.textContent = item.name

        const price = document.createElement('p')
        price.textContent = formatPrice(item.price)

        const create_container = document.createElement('div')
        const create_textContainer = document.createElement('div')
        create_textContainer.append(create_title, price)
        create_container.append(create_img, create_textContainer)
        
        allElements.push(create_container)
        
        // Styles
        create_container.className = 'card'
        create_img.className = 'card-img'

    })
    container.append(...allElements)
    container.className = 'main'
})