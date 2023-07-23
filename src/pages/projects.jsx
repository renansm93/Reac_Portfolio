import React from 'react'
import projects from '../data/projects';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GitHub, Computer } from '@mui/icons-material';
import NavBar from '../layouts/NavBar';

const fontFamily = [
    'Nunito',
    'Comforter',
    'Roboto'
].join(',');

const styles = {
    mainContainer: {
        background: "rgb(32, 33, 36)",
        height: "100%"
    },
    cardContainer: {
        maxWidth: "80%",
        margin: "3rem auto",
        background: "inherit",
    },
    wheat: {
        color: "wheat",
        border: "none",
        fontWeight: "bold",
        fontFamily: fontFamily
    },
    green: {
        color: "rgba(150, 202, 27, 0.911)",
        fontFamily: fontFamily,
        fontWeight: "Bold"
    },
    img: {
        background: "rgb(32, 33, 36)",
        maxWidth: "100%",
        objectFit: "cover top"
    }
};

export default function Projects() {
    return (
        <>
            <NavBar />
            <Box component="div" style={styles.mainContainer}>
                <h3>PROJECTS</h3>
                <Grid container justify="center">
                    {projects.map((project, i) => (
                        <Grid item xs={12} sm={6} md={4} xl={3} key={i} >
                            <Card style={styles.cardContainer} elevation="8" className="project">
                                <CardActionArea href={project.gitHub} target="_blank">
                                    <CardMedia
                                        component="img"
                                        alt="project"
                                        height="300vh"
                                        image={project.image}
                                        style={styles.img}

                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom style={styles.green}>
                                            {project.name}
                                        </Typography>
                                        <Typography style={styles.wheat}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                    <Button variant="outlined" style={styles.wheat} startIcon={<GitHub />} href={project.gitHub} target="_blank" >Github</Button>
                                    {project.deployed && <Button variant="outlined" style={styles.wheat} startIcon={<Computer />} href={project.deployed} target="_blank">Deployed App</Button>}
                                    {project.video && <Button variant="outlined" style={styles.wheat} startIcon={<Computer />} href={project.video} target="_blank">Video</Button>}

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box >
            <h3>More Projects Coming Soon...</h3>
        </>
    )
}
