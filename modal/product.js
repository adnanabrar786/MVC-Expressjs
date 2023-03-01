// modal k andr database say batein hogi
// constructor bana sakty hy 
// classes bana sakty hy 
// sinmple function ban sakty hy
//  modal mai apki marzi y



const products = [];

class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        products.push({ title: this.title })
    }

    static fetchAll() {
        return products
    }
    // static mai jo function hota hy usko new say call nahi karwaty otherwise karwana parta hy hy 
}

module.exports = Product ;