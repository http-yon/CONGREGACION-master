import {Router} from "express"
import { methodsHTTP } from "../controllers/municipio.controller.js"

const router = Router()

router.get("/all", methodsHTTP.getMuni);
router.post("/add", methodsHTTP.insertMuni);
router.delete("/del/:id", methodsHTTP.deleteMuni);
router.put("/upd/:id", methodsHTTP.updateMuni);
router.get("/one/:id", methodsHTTP.getOneMuni);

export default router