import {Router} from "express"
import { methodsHTTP } from "../controllers/departamentos.controllers.js"

const router = Router()

router.get("/all", methodsHTTP.getDepa);
router.post("/add", methodsHTTP.insertDepa);
router.delete("/del/:id", methodsHTTP.deleteDepa);
router.put("/upd/:id", methodsHTTP.updateDepa);
router.get("/one/:id", methodsHTTP.getOneDepa);

export default router