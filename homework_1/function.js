const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    const item  = document.getElementsByTagName('div')[4]
    console.log(item.innerText)
    item.innerText = 'Arina'

document.getElementsByTagName('div')[3].innerText='Vasileva'

document.getElementsByTagName('div')[5].innerText='Maksimovna'

document.getElementsByTagName('div')[7].innerText='18.09.2023'
}
node_for_click_all.addEventListener("click",find_edit_all)

const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
document.getElementsByTagName('div')[4].innerText='Arina'}
node_for_click_name.addEventListener("click",find_edit_name)

const node_for_click_surname = document.getElementById("for_click_surname")
function find_edit_surname(){
document.getElementsByTagName('div')[3].innerText='Vasileva'
}
node_for_click_surname.addEventListener("click",find_edit_surname)

const node_for_click_middlename = document.getElementById("for_click_middlename")
function find_edit_middlename(){
document.getElementsByTagName('div')[5].innerText='Maksimovna'
}
node_for_click_middlename.addEventListener("click",find_edit_middlename)

const node_for_click_birthday = document.getElementById("for_click_birthday")
function find_edit_birthday(){
document.getElementsByTagName('div')[7].innerText='18.09.2023'
}
node_for_click_birthday.addEventListener("click",find_edit_birthday)