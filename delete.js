const {Article} = require('./models')

Article.destroy({
    where: {
        id: 1
    }
}).then(() => {
    console.log('article destroyed')
})