import {Router} from "express"
import { methodsHTTP } from "../controllers/comuna.controllers.js"

const router = Router()

router.get("/all", methodsHTTP.getComu);
router.post("/add", methodsHTTP.insertComu);
router.delete("/del/:id", methodsHTTP.deleteComu);
router.put("/upd/:id", methodsHTTP.updateComu);
router.get("/one/:id", methodsHTTP.getOneComu);

export default router