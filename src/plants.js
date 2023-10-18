import {db} from './connectdb.js'

export function getAllPlants(req,res) {
    db.collection('plants').find({}).toArray()
    .then(plants => {
        res.send(plants)
    })
    .catch(err => {
        res.status(500).send({success: false, message: err})
    })
}

export function addPlant(req,res){
    const newPlant = req.body
    db.collection('plants').insertOne(newPlant)
        .then()
            res.status().send({message:"Plant added", success: true})
        .catch(err => {
            res.status(500).send({success:false, message: err})
        })       
}
