const {request , response} = require("express")
const { equipos } = require("../equipos");
const getEquipos =  (req, res)=> {
    return res.json({
        ok:true,
        statusCode:200,
        equipos
    });
}

const getEquiposById =  (req = request, res = response )=> {
    
    let id = parseInt(req.params.id);

    let equipoAbuscar = "";

    equipoAbuscar = equipos.find(( equipo )=> {
        return equipo.id === id;
    });

    if(equipoAbuscar){
        return res.json({
            ok:true,
            statusCode:200,
            equipoAbuscar
        });
     }  else {
        return res.json({
            ok:true,
            statusCode:404,
            msg:"no hay equipos con ese id"
        });
     }

}

module.exports = {
    getEquipos,
    getEquiposById

}