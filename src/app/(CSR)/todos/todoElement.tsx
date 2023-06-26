"use client";
import { InputGroup, Button, Form, Card } from "@/components/bootstrap";
//import { Card } from "react-bootstrap";
export default function TodoElement() {
  return (
    <Card style={{ width: "36rem" }}>
      <Card.Body>
        <Card.Title>Todo</Card.Title>
        <Card.Text>
          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                type="checkbox"
                className="text-secondary"
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>

          <div className="input-group mb-3 secondary">
            <button className="btn btn-outline-secondary" type="button">
              +
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Add Item"
              disabled={true}
              aria-describedby="basic-addon2"
            ></input>
            {/* <span className="input-group-text">Add Item</span> */}
          </div>
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
