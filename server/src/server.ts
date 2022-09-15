import express, { response } from 'express'

const app = express()

app.get('/games', (req,res) => {
    return response.json([])
})

app.post('/ads', (req, res) => {
    return response.json([])
})

app.get('/ads', (req, res) => {
    return res.json([
        {id: 1, name: 'Anuncio'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 5'}
    ])
})

app.listen(3333)