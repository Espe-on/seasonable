import express from "express"
import {getFoodsByType} from "./handlers/GetFoodsByType"
import {getGoodsByStorage} from "./handlers/GetFoodsByStorage"
import {getFoodsByMonth} from "./handlers/GetFoodsByMonth"
import {lastsLessThan, lastsLongerThan} from "./handlers/GetFoodsByDays"
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

app.get( "/foods/type/:foodType", ( req, res ) => {
    res.json(getFoodsByType(foods, req.params.foodType));
} );

app.get( "/foods/storage/:storageType", ( req, res ) => {
    res.json(getGoodsByStorage(foods, req.params.storageType));
} );

app.get( "/foods/month/:month", ( req, res ) => {
    res.json(getFoodsByMonth(foods, req.params.month));
} );

app.get( "/foods/lessthan/:days", ( req, res ) => {
    res.json(lastsLessThan(foods, req.params.days));
} );

app.get( "/foods/longerthan/:days", ( req, res ) => {
    res.json(lastsLongerThan(foods, req.params.days));
} );


// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
