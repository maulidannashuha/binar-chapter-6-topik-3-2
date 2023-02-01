const {Article} = require('./models')

Article.create({
    title: 'ini title',
    body: 'ini body',
    approved: true,
}).then(article => {
    console.log(article)
})