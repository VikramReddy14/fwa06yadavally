const express = require('express')

const router = express.Router()



router.get('/', (req, res, next) => {

    console.log(req.query)



    if (Object.keys(req.query).length === 0) {

        console.log("Entered")

        let rand = Math.random()

        res.render(`computation`, { value: `cos applied to ${rand} is ${Math.cos(rand)}` })

    } else

        for (let a in req.query) {

            console.log(a)

            res.render(`computation`, { value: `cos applied to ${req.query[a]} is ${Math.cos(req.query[a])}` })

        }

})



module.exports = router