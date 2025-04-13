import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", categoriaController.getCategorias)

// router.get("/",(req,res)=>{
//     res.send("aqui toy")
// })
/* hacemos disponible al router en toda la aplicacion */
export default router;