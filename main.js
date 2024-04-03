
const clearStorage = document.querySelector("#clearStorage")
clearStorage.addEventListener("click", ()=> {localStorage.clear()})

// =====1=====

const variant1 = document.querySelector("#variant1")
const variant2 = document.querySelector("#variant2")
const variant3 = document.querySelector("#variant3")
const btn = document.querySelector("#checkPets")
const btnClear = document.querySelector("#clear")

variant1.addEventListener("click", ()=> {
    localStorage.setItem("cat", "true")
})
variant2.addEventListener("click", ()=> {
    localStorage.setItem("dog", "true")
})
variant3.addEventListener("click", ()=> {
    localStorage.setItem("ham", "true")
})

let cat = localStorage.getItem("cat")
let dog = localStorage.getItem("dog")
let ham = localStorage.getItem("ham")

if (cat === "true") {
    variant1.setAttribute("checked", "")
} 
if (dog === "true") {
    variant2.setAttribute("checked", "")
} 
if (ham === "true") {
    variant3.setAttribute("checked", "")
}
btnClear.addEventListener("click", ()=> {
    cat = localStorage.getItem("cat")
    dog = localStorage.getItem("dog")
    ham = localStorage.getItem("ham")
    variant1.removeAttribute("checked")
    variant2.removeAttribute("checked")
    variant3.removeAttribute("checked")

    localStorage.clear()
})

// =====2=====

const login = document.querySelector("#login")
const password = document.querySelector("#password")
const btnRegist = document.querySelector("#btnRegist")
const btnCheck = document.querySelector("#btnCheck")

btnRegist.addEventListener("click", addAccount)
btnCheck.addEventListener("click", checkAccount)


function addAccount() {
    localStorage.setItem("login", login.value)
    localStorage.setItem("password", password.value)
}

function checkAccount() {
    
    let l = localStorage.getItem("login")
    let p = localStorage.getItem("password")
    console.log(p);

    if (p === password.value && l === login.value) {
        alert("Вітаю, ви увійшли")
    } else {
        alert("Помилка у логіні чи паролі")
    }
    
}

// =====3=====

const urlName = document.querySelector("#nameOfUrl")
const link = document.querySelector("#url")
const btnAddLink = document.querySelector("#addLink")

btnAddLink.addEventListener("click", addLink)

function addLink() {
    localStorage.setItem(`${urlName.value}`, `${link.value}`)
}

// =====4=====

const name = document.querySelector("#name")
const surname = document.querySelector("#surname")
const phoneNumber = document.querySelector("#phone")
const email = document.querySelector("#email")
const deleteInput = document.querySelector("#deleteKontaktInput")
const btnAddKontakt = document.querySelector("#btnAddKontakt")
const btnDeleteKontakt = document.querySelector("#btnDeleteKontakt")

btnAddKontakt.addEventListener("click", addKontakt)
btnDeleteKontakt.addEventListener("click", deleteKontakt)

function addKontakt() {
    let newKontakt = {
        name: name.value,
        surname: surname.value,
        email: email.value
    }

    localStorage.setItem(`${phoneNumber.value}`, JSON.stringify(newKontakt))
}

function deleteKontakt() {
    console.log(deleteInput.value);
    localStorage.removeItem(deleteInput.value)
}







