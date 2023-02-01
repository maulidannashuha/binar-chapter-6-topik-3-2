const {Article} = require('./models')

Article.update({
    approved: false
}, {
    where: {
        id: 1
    }
}).then(() => {
    console.log('article updated successfully')
    process.exit()
}).catch((err) => {
    console.error(err)
    console.log('Article failed to update')
})