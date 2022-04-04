import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function Cards() {
  const [isloading, setisloading] = useState(true);

  const [cardimage, setcardimage] = useState([]);

  const cardimages = async () => {
    const res = await fetch("/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.allcards);

    setcardimage(data.allcards);
     setisloading(false);
  };

  useEffect(() => {
    cardimages();
  }, []);

  async function handleclick(id) {
    console.log(id);
    try {
      const res = await fetch(`/cards/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  const content = isloading ? (
    <div>loading....</div>
  ) : (
    <div>
      <Row xs={3} md={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              onClick={() => handleclick(cardimage[idx]._id)}
              style={{
                boxShadow: "8px 8px 8px burlywood",
                backgroundColor: "beige",
                color: "#14526e",
              }}
            >
              <Card.Img variant="top" src={cardimage[idx].image} height={250} />
              <Card.Body>
                <Card.Title
                  style={{
                    width: "200px",
                    height: "135px",
                    fontWeight: "bolder",
                  }}
                >
                  {cardimage[idx].title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "20px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: "#FF4F58FF",
                  }}
                >
                  {cardimage[idx].category}
                  <br></br>
                  {`price : ${cardimage[idx].price} Rs`}
                  {/* rating:{cardimage[idx].rating} */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  return <div>{content}</div>;
}

export default Cards;
