const {Article} = require('./models');

// select * from articles where category in ('hotel', 'otomotif', 'fashion')
Article.findAll({
    where: {category: ['hotel', 'fashion']}
})
    .then((articles) => {
        console.log(articles)
    })

// select * from articles limit 1 where id = 1
Article.findOne({
    where: {
        id: 1
    }
})
    .then((article) => {
        console.log(article)
    })