const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const Product = require('./models/product');
const { padStart } = require('lodash');
const app = express();
const dbURI = 'mongodb+srv://phil_web:test123@cluster0.wsfgf9o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
.then((result) => {app.listen(3000, () => {console.log('listening at port 3000')})})
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
 app.use(express.urlencoded({extended:true}));

/*app.get('/add-blog', (req, res)=> {
   const newBlog =new Blog({
      title: 'new blog 2',
      snippet: 'About this blog',
      body: 'my new blog'
   });
   newBlog.save()
   .then((result)=>{res.send(result)})
   .catch((err)=> console.log(err));
});
app.get('/all-blogs', (req, res) => {
   Blog.find()
   .then((result)=> res.send(result))
   .catch((err) => console.log(err));
});

app.get('/single-blog', (req, res)=> {
   Blog.findById()
})*/
 app.get('/', (req, res)=>{

    res.render('index');
  //  res.send('<p><b>Home page</b></p>');
 });
 app.get('/home', (req, res) => {
   res.render('index')
});

app.get('/edu', (req, res) => {
   res.render('education');
});

app.get('/products', (req, res) => {
   res.render('product-main');
});

app.get('/makepdt', (req, res) => {
   res.render('add-product');
});

app.get('/checkout', (req, res) => {
   res.render('checkout');
});

app.get('/articlePage', (req, res) => {
   res.render('articleUi');
});

app.get('/add-blogs', (req, res) => {
   res.render('add-blog');
});

app.get('/about', (req, res) => {
   res.render('about');
});

app.post('/product-main',(req, res)=>{
   const prod = new Product(req.body);
   prod.save()
   .then((result) => {
      res.render('product-main', {pdt: result})
    })  
    
    .catch((err) => console.log(err));
    });

    app.get('/product-main', (req, res) => {
      Product.find().sort({createdAt: -1})
     .then((result) =>{ 
       res.render('product-main',{pdt: result})
     })
     .catch((err) => console.log(err));
   });
   

app.post('/blogs',(req, res)=>{
  const create = new Blog(req.body);
  create.save()
  .then((result) => {
   res.render('blogs', {blogs: result})
   })  
   
   .catch((err) => console.log(err));
   });

   app.get('/blogs', (req, res) => {
      Blog.find().sort({createdAt: -1})
     .then((result) =>{ 
       res.render('blogs',{blogs: result})
     })
     .catch((err) => console.log(err));
   });
   
   

 app.get('/about-us', (req, res)=>{
res.redirect('/about');
 });

