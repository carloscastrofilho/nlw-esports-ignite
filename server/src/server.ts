import express  from "express";

const app = express() 

app.get('/ads', (request, response) =>{
    return response.json([
        {'id': 1 , name: ' anuncio1'},
        {'id': 2 , name: ' anuncio2'},
        {'id': 3 , name: ' anuncio3'},
        {'id': 4 , name: 'anuncio 4'}
    ])
})

app.listen(3333)
O arquivo 'd:/carlos/cursos/NLW 2022 setembro/exports/server/interface.ts' não está em 'rootDir' 'd:/carlos/cursos/NLW 2022 setembro/exports/server/src'. Espera-se que 'rootDir' contenha todos os arquivos de origem.
  O arquivo está no programa porque:
    Correspondido por padrão de inclusão padrão '**/*'