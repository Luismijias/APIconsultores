const express = require('express');
const server = express();
const port = process.env.PORT || 3000

const vendedoras = ["Consultor 1", "Consultor 2", "Consultor 3"];
let indiceVendedor = -1;

server.get('/', (req,res) => {
    indiceVendedor++;
    if (indiceVendedor >= vendedoras.length) {
        indiceVendedor = 0;
      }
      const nomeVendedora = vendedoras[indiceVendedor];
    return res.json({"var_consultor": nomeVendedora})
});


server.listen(port, () => {
console.log('Servidor está funcionando...')

});