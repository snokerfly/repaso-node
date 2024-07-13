

const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;

//----------------------------------------------------

const { getEquipos, getEquiposById } = require("./controllers/equipos.controllers") //importamo, pasamo la funciona por referencia
// 

app.use(cors());

/*app.get("/" , (req, res ) => {
     return res.json({
        ok:true,
        statusCode:200,
        equipos
     });
 }) */

app.get("/" , getEquipos )

app.get("/:id", getEquiposById)


//-----------------------------------------------------

app.listen( puerto , ()=> {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);

    


});