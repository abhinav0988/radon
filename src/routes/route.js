const express = require('express');



const lodash = require("lodash")

const router = express.Router();

router.get('/hello', function (req, res) {
    let arr1 =['January',"February","March","april","may","june","july","August","September"," October","november","December"];
    console.log(lodash.chunk(arr1,4))
    let arr2=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arr2))
    let pair =[
        ["horror","The Shining"],
        ["drama","Titanic"],
        ["thriller","Shutter Island"],
        ["fantasy","Pans Labyrinth"]

    ]
    console.log(lodash.fromPairs(pair))
    let uni = lodash.union(
        [2,3,5,6,7],
        [4,5,8,9,10],
        [8,11,12,5,10,13],
        [15,16,17,18,10],
        [20,21,22,10,8]
    );
    console.log(uni)
   
   

    res.send('this is your api code!')
});


module.exports = router;
// adding this comment for no reason