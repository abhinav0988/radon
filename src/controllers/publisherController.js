const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    if(!publisher.publisher_id){return res.send({msg:"valiled author_id required"})}
    
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublishersData= async function (req, res) {
    
    let publishers = await PublisherModel.findById(publisher_id)
    if(!publishers) return res.send("Invalid publisher id")

    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData