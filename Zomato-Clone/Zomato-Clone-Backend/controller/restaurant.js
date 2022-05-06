const Restaurant=require('../Models/restaursnt');



exports.getRestaurantByLocation = (req, res) => {
    const locationId = req.params.locationId;
    Restaurant.find({ location_id: locationId })
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully", restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


exports.filterRestaurants = (req, res) => {
    const requestBody = req.body;
    const mealtype = requestBody.mealtype;
    const location = requestBody.location;
    const cuisine =requestBody.cuisine;
    const hcost = Number(requestBody.hcost);
    const lcost = Number(requestBody.lcost);
    const sort = requestBody.sort ? requestBody.sort : 1;
    const page = requestBody.page ? requestBody.page : 1;

    let payload = {};

    
    const countPerPage = 2;

    let startIndex;
    let endIndex;

    startIndex = (page * countPerPage) - countPerPage;
    endIndex = (page * countPerPage) - 1;

    if (mealtype) {
        payload = { mealtype: mealtype}
    }
    if (mealtype && location) {
        payload = { mealtype: mealtype, location_id: location }
    }
    if (mealtype && cuisine) {
        payload = { mmealtype: mealtype, Cuisine: {$in:cuisine} }
    }
    if (mealtype && location && cuisine) {
        payload = { mealtype: mealtype, location_id: location, Cuisine:{$in:cuisine} }
    }
    if (mealtype && lcost && hcost) {
        payload = {
            mealtype: mealtype,
            cost: { $lte: hcost, $gte: lcost }
        }
    }
    if (mealtype && location && lcost && hcost) {
        payload = {
            mealtype: mealtype,
            location_id: location,
            cost: { $lte: hcost, $gte: lcost }
        }
    }
    if (mealtype && cuisine && lcost && hcost) {
        payload = {
            mealtype: mealtype,
            Cuisine: {$in:cuisine},
            cost: { $lte: hcost, $gte: lcost }
        }
    }
    if (mealtype && location && cuisine && lcost && hcost) {
        payload = {
            mealtype: mealtype,
            location_id: location,
            Cuisine: {$in:cuisine},
            cost: { $lte: hcost, $gte: lcost }
        }
    }


    Restaurant.find(payload).sort({ cost: sort })
        .then(response => {
            const filteredResponse = response.slice(startIndex, endIndex+1);
            const pageCount = Math.ceil(response.length / countPerPage);
            res.status(200).json({ message: "Restaurant Filtered Successfully", restaurants: filteredResponse,pageCount: pageCount,page:page  })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantDetailsById = (req, res) => {
    const restaurantId = req.params.restaurantId;
    Restaurant.findById(restaurantId)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully by ID", restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}



