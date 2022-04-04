import { Carousel } from 'react-carousel-minimal';
import React, { useState, useEffect } from "react"

import AllinOne from "../images/AllinOne.jpg";
import mensFootware from "../images/mensFootware.jpg";
import schoolbag from "../images/schoolbag.jpg";
import watch from "../images/watch.jpg";
function Carouselimage() {
  const [currImg, setCurrImg] = useState(0);
  const cardimages = async () => {
    const res = await fetch("/carousel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.allcarousels);

    setCurrImg(data.allcarousels);
  
  };

  useEffect(() => {
    cardimages();
  }, []);
  async function handleclick(id) {
    console.log(id);
    try {
      const res = await fetch(`/carousel/${id}`, {
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

 const data = [
    {
      image: AllinOne,
      caption: "All in One"
    },
    {
      image: mensFootware ,
      caption: "Best Seller Now"
    },
    {
      image:schoolbag,
      caption: "Best Design School bag"
    },
    {
      image: watch,
      caption: "Attractive Watches"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "left",marginLeft:"20px",marginTop:"20px" }}>
        <h2>Recent New update....</h2>
        <div style={{
          padding: "0 20px"
        }}><div>
          <Carousel
          data={data}
            time={3000}
            width="1200px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1100px",
              maxHeight: "550px",
              margin: "10px auto",
            }}
          />
          </div>
        </div>
      </div>
    </div>

  );
}
export default Carouselimage;
