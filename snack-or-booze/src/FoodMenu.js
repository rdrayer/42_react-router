import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import AddItemForm from "./AddItemForm";
import SnackOrBoozeApi from "./Api";

function FoodMenu({ items, title }) {
  const handleAddItem = async (newItem) => {
    const category = newItem.category;
    await SnackOrBoozeApi.addItem(newItem, category);
    console.log(newItem)
  }
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${title}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <AddItemForm onSubmit={handleAddItem} />
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
