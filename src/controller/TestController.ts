import { Request, Response } from "express";

class TestController {
    public home(req:Request, res:Response) {
        return res.json({
            response: 'Hello World'
        });
    }
    
}
export const testController = new TestController();