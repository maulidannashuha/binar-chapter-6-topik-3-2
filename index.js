const express = require('express');
const app = express();
const port = 3000
const {Article} = require('./models')

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello, world')
})

app.get('/articles', async (req, res) => {
    // Article.findAll().then((articles) => {
    //     res.json(articles)
    // })

    const articles = await Article.findAll()
    res.json(articles)
})

app.get('/articles/:id', (req, res) => {
    Article.findOne({
        where: {
            id: req.params.id
        }
    }).then((article) => {
        res.json(article)
    })
})

app.post('/articles', async(req, res) => {
    const article = await Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    })

    res.status(201).json(article)
})

app.put('/articles/:id', async(req, res) => {
    const id = req.params.id

    const article = await Article.update({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }, {
        where: {
            id: id
        }
    })

    res.json({
        message: 'Updated article'
    })
})

app.delete('/articles/:id', async (req, res) => {
    const id = req.params.id

    const article = await Article.destroy({
        where: {
            id: id
        }
    })

    res.json({
        message: 'Deleted article'
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});