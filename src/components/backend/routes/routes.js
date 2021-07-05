const { response } = require('express')
const express = require('express')
const router = express.Router()
const contactTemplateCopy = require('../models/contactmodels')

router.post('/contact', (req, res) => {
    const contactFilledForm = new contactTemplateCopy({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    contactFilledForm.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router
