import React from "react";
import { upcomecourse } from "../Css/upcomecourse.css"
import { Card } from "react-bootstrap";


  const Upcomecourse = () => {

  const cardInfo = [
    
   
    {
      image:
      "https://d9j7peqsnwrxz.cloudfront.net/public/images/site_content/S.png", 
      title: "Social Media Banners",
      text: "Learn to design catchy and stunning banners and ads for social media platforms, explore thousands of work opportunities online or offline.",
    },
    {
      image:
        "https://d9j7peqsnwrxz.cloudfront.net/public/images/site_content/f2.jpg",
      title: "Facebook Ads & Marketing Campaign",
      text: "Learn ninja techniques of Facebook ads. Learn how to run successful marketing campaign on Facebook for maximum outreach and conversion. Unlock the potential to generate more revenue.",
    },
    {
        image:
        "https://d9j7peqsnwrxz.cloudfront.net/public/images/site_content/E.png", 
        title: "WordPress Theme Customization",
        text: "Learn to design professional websites. Learn how to create stunning page designs using Elementor Pro.",
      },
      {
        image:
          "https://d9j7peqsnwrxz.cloudfront.net/public/images/site_content/c3.png",
        title: "Fundamentals of Responsive Web Design",
        text: "Take your first steps in becoming an accomplished web designer by starting off with the basics.",
      },
  ];

  const renderCard = (card, index) => {
   
    return (
   
  
      <Card style={{ width: "10rem" }} key={index} className="box">
    
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
     
     );
    };

    return <div className="grid">{cardInfo.map(renderCard)}
    </div>
    
  };
  
  
  export default Upcomecourse;
  