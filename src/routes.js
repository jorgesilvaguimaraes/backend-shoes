import { Router } from 'express';


const routes = new Router();


routes.get('/', (req, res)=>{
    return res.json({msg:"agora tudo dividido"});
})

export default routes;