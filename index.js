import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import customersRoute from './routes/customerRoutes.js';

const app = express();
app.use(express.json());

// movie routes
app.use(movieRoutes);

// customers route
app.use('/customers', customersRoute);

app.listen(3000, () => {
    console.log("started")
})