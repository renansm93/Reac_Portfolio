import React from 'react'
import { Icon } from '@iconify/react';
import NavBar from '../layouts/NavBar';
import { Container, Typography, Grid, Link, Box } from '@mui/material'
import Renan from '../../src/images/Renan-PhotoRoom.png'
import { Typewriter } from 'react-simple-typewriter'

export default function About() {

  const skills = [
    { skill: "HTML", icon: "iconoir:html5", href: "https://html.spec.whatwg.org/multipage/" },
    { skill: "CSS", icon: "iconoir:css3", href: "https://www.w3.org/TR/CSS/#css" },
    { skill: "JavaScript", icon: "teenyicons:javascript-outline", href: "https://www.javascript.com/" },
    { skill: "Node.js", icon: "la:node", href: "https://nodejs.org/en/" },
    { skill: "npm", icon: "akar-icons:npm-fill", href: "https://www.npmjs.com/" },
    { skill: "Express", icon: "simple-icons:express", href: "https://expressjs.com/" },
    { skill: "React", icon: "akar-icons:react-fill", href: "https://reactjs.org/" },
    { skill: "Git", icon: "ion:git-branch-outline", href: "https://git-scm.com/" },
    { skill: "Github", icon: "akar-icons:github-outline-fill", href: "https://github.com/" },
    { skill: "RESTful API", icon: "eos-icons:api", href: "https://restfulapi.net/" },
    { skill: "Bootstrap", icon: "tabler:brand-bootstrap", href: "https://getbootstrap.com/" },
    { skill: "MUI", icon: "simple-icons:mui", href: "https://mui.com/" },
    { skill: "MySQL", icon: "cib:mysql", href: "https://www.mysql.com/" },
    { skill: "MongoDB", icon: "teenyicons:mongodb-outline", href: "https://www.mongodb.com/" },
    { skill: "GraphQL", icon: "akar-icons:graphql-fill", href: "https://graphql.org/" },
    { skill: "Handlebars", icon: "simple-icons:handlebarsdotjs", href: "https://handlebarsjs.com/" },
    { skill: "VS Code", icon: "tabler:brand-visual-studio", href: "https://code.visualstudio.com/" },
    { skill: "Insomnia", icon: "simple-icons:insomnia", href: "https://insomnia.rest/" },

  ];
  return (
    <>
      <NavBar />
      <Container>
        <h3>ABOUT</h3>
        <Grid container direction="row" rowSpacing={{ xs: 2, md: 2 }} style={{ backgroundColor: "rgb(24, 24, 24)", borderRadius: "10px" }}>
          <Grid item xs={14} lg={5} sm={14} md={5}>
            <img src={Renan} alt="me" style={{ height: "50vh"}} />
          </Grid>
          <Grid item container xs={14} lg={7} sm={14} md={7} style={{ flexShrink: 1, padding: "5rem", placeItems: "center" }}>
            <Grid item style={{ fontSize: "1.75rem", textAlign: "left" }}>
              <p style={{ fontFamily: "Courier", fontWeight: "bold", fontSize: "1.75rem" }}>
                <Typewriter
                  words={['Hi! My name is Renan.']}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </p>
              <p>
              I always dreamed of becoming an engineer. I chose mechanical engineering, so I could design and build new products. Upon completing my bachelor's degree in mechanical engineering, I worked in different areas such as quality control, design, research, and development.</p>
              <p>When I was hired for the company, I currently work for, my main activity was the installation of a welding robot. For this activity, I had to take some robotics programming courses, which caught my attention and aroused the desire to learn and explore computer coding and web development. 
              This led me to take some online courses, to delve a little deeper into the subject.</p>
              As I got deeper into computer programming, I fell more and more in love with it, which motivated me to take a Full Stack Web Development course at the University of Toronto.
              I love to follow sports, especially basketball and soccer. I am passionate about learning new technologies.
            </Grid>

          </Grid>
        </Grid>

        <Container>
          <h3>Skills</h3>
          <Grid container rowSpacing={3} justifyContent="center" style={{ marginTop: "1vh", padding: "2px", backgroundColor: "rgb(24, 24, 24)", borderRadius: "10px" }}>
            {
              skills.map((skill, i) => (
                <Link key={i} href={skill.href} underline="none" target="_blank">
                  <Box item key={i} md={1} style={{ fontSize: "2rem", color: "wheat", backgroundColor: "inherit", padding: "0.5rem" }}>
                    <Icon icon={skill.icon} />
                    <Typography>{skill.skill}</Typography></Box>
                </Link>
              ))
            }
          </Grid>

        </Container>
      </Container>
    </>

  )
}
