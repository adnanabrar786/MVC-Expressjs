const Product = require("../modal/product")

exports.getproduct = (req, res, next) => {
    res.render("form" , {title : "add product form"});
}

exports.postproduct = (req, res, next) => {
    const products = new Product(req.body.title)
    products.save()
    res.send("saved")
}

exports.fetchAll = (req, res) => { 
    const products = Product.fetchAll()
    // destructing here
    res.render("products" , {products})
}

