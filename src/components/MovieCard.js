import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  Col
} from "reactstrap";

const MovieCard = ({ film }) => {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);
  return (
    <Col xs="6" md="4" xl="2">
      {/* 
      Col is controlling the width of the card. If screen is at "xs" screensize (< 576px), 
      each Col will be a width of 6th. The maximum width is 12, which would span the entire row. 
      Therefore, at the smallest screensize, we see 12/6 = 2 cards.
      At medium ("md") screensize, we see 12/4 = 3 cards
      At xl screensize we see 12/3 = 4 cards
      */}
      <Card className="pink">
        {/* 
      pass props to Card as declared by its properties in docs. className is a prop of Card to pass in custom styles
      */}
        {/* Card, CardHeader, CardBody, CardTitle, and CardText all on reactstrap "Card" component page*/}
        {/*You can pass in classNames to each component from reactstrap, per their propType documentation.
        These classes can be classes we created in styles.css (pink) or bootstrap CSS (like text-muted) */}

        <CardHeader tag="h3">Film title: {film.title}</CardHeader>
        <CardBody>
          <CardText>{film.description} </CardText>
          <CardText>Director: {film.director}</CardText>
          <CardText>Release Date: {film.release_date}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MovieCard;
