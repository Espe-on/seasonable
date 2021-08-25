import express from "express"
import {getFoodsByType} from "./handlers/GetFoodsByType"
import {foods} from "./data/foods";


const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/foods", ( req, res ) => {
    res.json(foods);
} );

app.get( "/foods/:foodtype", ( req, res ) => {
    res.json(getFoodsByType(foods, req.params.foodtype));
} );


// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
