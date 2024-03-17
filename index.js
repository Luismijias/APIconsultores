const express = require('express');
const server = express();
const port = process.env.PORT || 3000

const vendedoras = ["Ana", "Elizeth", "Luisa", "Carla", "Antonia"];
let indiceVendedor = -1;

server.get('/', (req,res) => {
    indiceVendedor++;
    if (indiceVendedor >= vendedoras.length) {
        indiceVendedor = 0;
      }
      const nomeVendedora = vendedoras[indiceVendedor];
    return res.json({body:{"var_consultor": nomeVendedora}})
});


server.listen(port, () => {
console.log('Servidor está funcionando...')

});