const express = require('express');
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".");
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.'+ extension.at(-1);
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })



const app = express();

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.body);
  console.log(req.file)

  return  res.redirect("/products")

})


var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{
    companyName: "XYZ COMPANY",
    founder: "PARAS"
  })
})

app.get("/products",(req,res)=>{
  res.render("products.hbs",{
    products: ["WATCH","SHOES","GLASSES"]
  })
})



app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
