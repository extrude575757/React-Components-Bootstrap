import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Container, Row } from "reactstrap";

export default function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then((response) => {
        setFilms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <Container>
      {/* We use Container and Row to create the layout of the MovieCards. To start creating a layout,
      all Row & Col components must be within a Container. To customize the amount of Cards per row 
      based on screensize, put all Cards inside of 1 Row (as shown) and set Col width based on screen size
      in MovieCard
      */}
      <Row>
        {films.map((film) => {
          return <MovieCard film={film} key={film.id} />;
        })}
      </Row>
    </Container>
  );
}
