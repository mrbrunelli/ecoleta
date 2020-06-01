import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de usuários')

    response.json([
        'Matheus',
        'Vinicius',
        'Minhoca',
        'Bruno',
        'Lua',
        'Estrelinha'
    ])
})

app.listen(3333)