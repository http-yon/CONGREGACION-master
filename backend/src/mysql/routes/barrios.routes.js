import {Router} from "express"
import { methodsHTTP } from "../controllers/barrio.controller.js"

const router = Router()

router.get("/all", methodsHTTP.getBarrio);
router.post("/add", methodsHTTP.insertBarrio);
router.delete("/del/:id", methodsHTTP.deleteBarrio);
router.put("/upd/:id", methodsHTTP.updateBarrio);
router.get("/one/:id", methodsHTTP.getOneBarrio);

export default router