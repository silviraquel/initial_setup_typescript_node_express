import { Router } from "express";
import { testController } from "./app/controller/TestController";

const router: Router = Router()

router.get("/", testController.home)

export { router };