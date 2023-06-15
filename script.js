const size = document.querySelectorAll('.size-item')
const orderForm = document.querySelector('.orderForm')
const orderList = document.querySelector('.orderList')
const addBtn = document.querySelectorAll('.add')
const removeBtn = document.querySelectorAll('.remove')
let sizeChoice
let ordersCount = 0

size.forEach(e => {
    e.addEventListener('click', (i) => {
        size.forEach(j => {
            j.classList.remove('selected')
        })
        e.classList.add('selected')
        if (e.innerHTML.includes('XL')) {
            sizeChoice = 'XL';
            console.log("XL");
        } else if (e.innerHTML.includes('L')) {
            sizeChoice = 'L';
            console.log("L");
        } else if (e.innerHTML.includes('M')) {
            sizeChoice = 'M';
            console.log("M");
        } else if (e.innerHTML.includes('S')) {
            sizeChoice = 'S';
            console.log("S");
        } else {
            sizeChoice = 'XS';
            console.log("XS");
        }
    })
})

orderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let cap = document.querySelector('#count_cap')
    let cap_count = cap.innerText
    let hoodie = document.querySelector('#count_hoodie')
    let hoodie_count = hoodie.innerText
    let tshirt = document.querySelector('#count_tshirt')
    let tshirt_count = tshirt.innerText
    let pants = document.querySelector('#count_pants')
    let pants_count = pants.innerText
    let socks = document.querySelector('#count_socks')
    let socks_count = socks.innerText
    let underpants = document.querySelector('#count_underpants')
    let underpants_count = underpants.innerText
    let itemsArr = [cap_count, hoodie_count, tshirt_count, pants_count, socks_count, underpants_count]
    let ingNames = ['Кепка', 'Худи', 'Футболка', 'Брюки', 'Носки', 'Трусы']
    if (sizeChoice) {
        orderList.innerHTML += `<div id="order_${ordersCount}" class="order_item">Размер: ${sizeChoice} <br>Позиции:<br></div>`
        let curOrder = document.querySelector(`#order_${ordersCount}`)
        for (let i = 0; i < itemsArr.length; i++){
            if (itemsArr[i] != '0'){
                curOrder.innerHTML += `- ${ingNames[i]}  ${itemsArr[i]}<br>`
            }
        }
        console.log(curOrder)
        if (curOrder.innerHTML == `Размер: ${sizeChoice}<br>модель:<br>`) {
            curOrder.innerHTML += 'Не выбраны'
        }
        ordersCount++
        cap.innerText = '0'
        hoodie.innerText = '0'
        tshirt.innerText = '0'
        pants.innerText = '0'
        socks.innerText = '0'
        underpants.innerText = '0'
    } else {
        alert('Выберите размер!')
    }
    size.forEach(s => {
        s.classList.remove('selected')
    })
})

addBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        let curCount = parseInt(e.target.parentElement.lastElementChild.innerText)
        e.target.parentElement.lastElementChild.innerText = curCount + 1
        if (curCount == 9) {
            e.target.parentElement.lastElementChild.innerText = curCount
        }
    })
})

removeBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        console.log(e.target.parentElement.outerHTML)
        let curCount = parseInt(e.target.parentElement.lastElementChild.innerText)
        if (curCount == 0) {
            
        }  else {
            e.target.parentElement.lastElementChild.innerText = curCount - 1
        }
    })
})