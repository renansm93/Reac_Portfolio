//Imports
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../React_Portfolio(GITHUB)/src/Resume.pdf";
import NavBar from '../layouts/NavBar'


// Function that renders the downloadable resume, proficiencies & exports
export default function Resume() {
  return (

    <>
      <NavBar />
    
    <Box>
      <div>
        <a
          href={PdfFile}
          download="Renan Resume"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px", 
            textDecoration: "none"           
           
          }}
          rel="noreferrer"
        >
      <Button
        style={{
          backgroundColor: "orange",
          fontSize: "20px",
          fontFamily: "Tahoma",
          fontWeight: "bold",
          color: "rgb(47, 79, 79)"

          
            }}
           >
            DOWNLOAD CV
          </Button>
        </a>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            
          }}
        >
          Front-end Proficiencies
        </h3>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-end Proficiencies
        </h3>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
          
          }}
        >
          - HTML
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
        </p>
      </div>
    </Box>
    
      </>
      );
    }
    