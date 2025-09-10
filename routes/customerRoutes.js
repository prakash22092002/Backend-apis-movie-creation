import { Router } from "express";

const customersRoute = Router();

customersRoute.get("/customers", (req, res) => {
    try {
        res.send({
            status: 200,
            message: "This is the customers route"
        })
    }
    catch (err) {
        res.send({
            status: 500,
            message: "Internal server error"
        })
    }
});



export default customersRoute;