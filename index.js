const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            return res.send({
                status: 404,
                error: err
            })
        }
        return res.send(data)
    })
});

// get all movies
app.get("/movies", (req, res) => {
    // res.send("GET all movies endpoint")
    const db_value = fs.readFileSync("./db.json", "utf-8");
    const parsedValue = JSON.parse(db_value);
    res.send(
        {
            status: 200,
            response: "success",
            data: parsedValue["movies"]
        }
    )

})

// post movie
app.post("/movie", (req, res) => {
    try {
        const data = fs.readFileSync("./db.json", "utf-8"); // here the data is been read
        const parsedData = JSON.parse(data);                // once the data is been read then it is ben parsed

        const movieList = parsedData.movies || [];          // once the movie is been parsed then the movies data is been get

        const newMovie = req?.body

        movieList.push(newMovie);

        parsedData.movies = movieList;
        fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2), "utf-8");

        res.json(movieList);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating db.json" });
    }
});

// dynamic routing 
app.get("/movies/:id", (req, res) => {
    try {
        const movieId = req.params;
        const movieQuery = req.query
        res.send(movieQuery)
    }
    catch (err) {
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );


    }
})





app.listen(3000, () => {
    console.log("started")
})