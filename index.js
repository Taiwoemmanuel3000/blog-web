import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");

});

app.get('/post', (req, res) => {
    res.render('create-post.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.post('/post', (req, res) => {
    let user = req.body['name']
    let blog = req.body['blog']
    res.render("index.ejs",{
        userName: user,
        blogPost: blog
    });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});