import products from "./products";


function getData(){
    const promiseData = new Promise( (resolve,reject) => {
        setTimeout( () => { resolve(products) }, 1200)
    })
    return promiseData
}

export function getItemData(itemID) {
    return new Promise((resolve, reject) => {
        const itemRequested = products.find(
            item => String(item.id) === itemID
        )

        setTimeout(() => {
            if (itemRequested) {
                resolve(itemRequested)
            } else {
                reject(new Error("Producto no encontrado"))
            }
        }, 1000)
    })
}


export function getCategoryData(categoryID){
    return new Promise( (resolve) => {
        const itemsCategory = products.filter( item => item.category === categoryID)
        setTimeout( () => {resolve(itemsCategory)}, 1200)
    })
}




export default getData