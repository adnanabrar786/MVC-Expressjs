const express = require("express")
const app = express()

const path = require("path")
const bodyParser = require("body-parser")
const productsRoutes =  require("./routes/produucts")

// for body show
app.use(bodyParser.urlencoded({extended:false}))

// for static file for style.css
app.use(express.static(path.join(__dirname , "public")))
// folder ka name public hy

//  for ejs
app.set("view engine" , "ejs")
app.set("views" , "views")

app.use("/product" , productsRoutes)

app.use("/" , (req , res , next) => {
    res.render("home" , {user : "ishaq"})
})

app.listen(3000) 