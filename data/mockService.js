import products from "./products";

const miPromise = new Promise( (resolve,reject) => {})


function getData(){
    const promiseData = new Promise( (resolve,reject) => {
        setTimeout( () => { resolve(products) }, 1200)
    })
    return promiseData
}

export default getData