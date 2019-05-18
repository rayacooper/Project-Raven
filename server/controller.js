let products = [];

module.exports = {
    get: function(req, res){
        const db = req.app.get('db');
        db.GET_INVENTORY()
            .then((products) => {
                
                res.status(200).send(products)
            })
    },
    add: function(req, res, next){
        const {name, price, image} = req.body;
        const db = req.app.get('db');
        db.ADD_PRODUCT([name, price, image])
            .then((productsList) => {
                res.status(200).send(productsList)
            })
            .catch((error) => console.log(`Whoops: ${error}`))
        // console.log([name, price, image])
    },
    delete: function(req, res, next){
        const id = req.params.id;
        const db = req.app.get('db');
        db.DELETE_PRODUCT(id)
            .then((productsList) => {
                res.status(200).send(productsList)
            })
            .catch((error) => console.log(`Whoops: ${error}`))
    }
}