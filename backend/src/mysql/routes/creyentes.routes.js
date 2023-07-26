import {Router} from "express"
import { methodsHTTP } from "../controllers/creyente.controller.js"

const router = Router()

router.get("/all", methodsHTTP.getCreyente);
router.post("/add", methodsHTTP.insertCreyente);
router.delete("/del/:id", methodsHTTP.deleteCreyente);
router.put("/upd/:id", methodsHTTP.updateCreyente);
router.get("/one/:id", methodsHTTP.getOneCreyente);

export default router