/*Creación de variable que nos da la ruta del URL según el puerto*/
const URL_BASE = 'localhost:8080/'

export let end_ponits = {
    /*localhost:8080/user/ */
    user: URL_BASE + "user",
    merchants: URL_BASE + "merchants/",
    expenses: URL_BASE + "expense/",
    payment_methos: URL_BASE + "payment_methos/",
    category: URL_BASE + "category/",

}

