import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Summary() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [summaryimages, setsummaryimages] = useState([]);

  const cardimages = async () => {
    const res = await fetch("/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.allcards);
    setsummaryimages(data.allcards);
  };

  return (
    <>
      <Button
        variant="primary"
        style={{ position: "absolute", top: "100px", right: "20px",backgroundColor: "#05386B" }}
        onClick={() => {
          handleShow();
          cardimages();
        }}
      >
        show summary
      </Button>

      {summaryimages && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            style={{ backgroundColor: "#05386B", color: "#EDF5E1" }}
            closeButton
          >
            <Modal.Title>Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: "#696e79",
              border: "3px solid #8EE4AF",
              color: "#05386B",
              fontWeight: "bold",
            }}
          >
            Image clicks
            <p style={{ border: "2px solid #8EE4AF" }}></p>
            {summaryimages.map((click, idx) => (
              <div style={{ color: "black" }} key={click.id}>
                {click.clicked && (
                  <p style={{ color: "#501B1D" }}>{click.title}</p>
                )}
                {click.clicked && <p>{`price : ${click.price}Rs`}</p>}
                {click.clicked && <p>{`image clicked : ${click.clicked}`}</p>}
                {click.clicked && (
                  <p style={{ border: "2px solid #8EE4AF" }}></p>
                )}
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: "#05386B", color: "#EDF5E1" }}
          >
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Summary;
