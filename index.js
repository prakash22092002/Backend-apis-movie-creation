import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
app.use(express.json());

// movie routes
app.use(movieRoutes);


app.listen(3000, () => {
    console.log("started")
})