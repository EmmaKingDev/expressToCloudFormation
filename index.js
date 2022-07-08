import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3000

//text based JSON to JS-accesible variables in req.body
app.use(bodyParser.json())
//req.body will be an object that contains values of any type
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/assesment', (req, res) => {
    res.send({ message: 'Can this actually work? Ihmettelen vaan. T. Emma' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
