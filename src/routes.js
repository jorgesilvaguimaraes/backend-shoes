const { Router } = require('express');


const routes = new Router();


routes.get('/', (req, res)=>{
    return res.json({msg:"agora tudo dividido"});
})

module.exports = routes;