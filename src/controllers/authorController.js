const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    if(!author.author_id){return res.send({msg:"valild author_id required"})}
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    
    let authors = await AuthorModel.findById(author_id)
    if(!authors) return res.send("Invalid author id")

    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData