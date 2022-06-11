'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempDelivery = {
    data: "teste5",
    horário:"teste5",
    fornecedor:"teste",
    tempo_de_espera:"teste",
    n_nota:"teste",
    vencimentos:"teste",
    recebido:"teste",
}

const getlocalStorage = () => JSON.parse(localStorage.getItem('db_delivery')) ?? []
const setLocalStorage = (dbDelivery) => localStorage.setItem("db_delivery", JSON.stringify(dbDelivery))

// CRUD - create read update delete

// CRUD - DELETE
const deleteDelivery = (index) => {
    const dbDelivery = readDelivery()
    dbDelivery.splice(index,1)
    setLocalStorage(dbDelivery)
}

//CRUD - UPDATE
const updateDelivery = (index, delivery) => {
    const dbDelivery = readDelivery()
    dbDelivery[index] = delivery
    setLocalStorage(dbDelivery)
}

// CRUD - READ
const readDelivery = () => getlocalStorage()

// CRUD - CREATE
const createDelivery = (delivery) => {
    const dbDelivery = getlocalStorage()
    dbDelivery.push(delivery)
    setLocalStorage(dbDelivery)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
}

//Interação com layout
const saveDelivery = () => {
    if (isValidFields()) {
        const delivery = {
            data: document.getElementById('data').value,
            horário: document.getElementById('horario').value,
            fornecedor: document.getElementById('fornecedor').value,
            tempo_de_espera: document.getElementById('tempo_de_espera').value,
            n_nota: document.getElementById('n_nota').value,
            vencimentos: document.getElementById('vencimentos').value,
            recebido: document.getElementById('recebido').value
        }
        createDelivery(delivery)
        clearFields()
        closeModal()
    }   
}

// Eventos
document.getElementById('cadastrarDelivery')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveDelivery)