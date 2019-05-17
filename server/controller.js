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
        console.log(`here is ${name}, ${price}, and ${image}`)
        res.status(200).send("Sup loser")
    }
}