const item=require('../Models/items');



exports.getMenuItemsByRestaurant = (req, res) => {
    const restaurantId = req.params.restaurantID;
    item.find({restaurantId:restaurantId})
        .then(response => { res.status(200).json({ message: "items Fetched Successfully", item:response}) }
        )
        .catch(err => console.log(err)
        )
}