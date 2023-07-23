import BloodTale from "../images/BloodTale_AMurderMystery_.png";
import TechBlog from "../images/tech-blog.png";
import noteTaker from "../images/noteTaker.png";
import readmeGenerator from "../images/README.gif";
import employeeTracker from "../images/employeeTracker.png";
import weatherDashboard from "../images/weatherDashboard.png";
import codingQuiz from "../images/CodeQuiz.gif";
import dayPlanner from "../images/dayPlanner.gif";
import passwordGenerator from "../images/PG.png";
import jate from "../images/jate.png";
import snAPI from "../images/socialNetworkAPI.png";
import portfolio from "../images/portfolio.png";


const projects = [

    {
        name: "BloodTale A MurderMystery",
        description: `HTML, CSS, Javascript, Bulma (CSS framework)`,
        image: BloodTale,
        gitHub: "https://github.com/rethissunstar/BloodTale_AMurderMystery",
        deployed: "https://rethissunstar.github.io/BloodTale_AMurderMystery/"
    },
    {
        name: "PWA: Text Editor",
        description: `Express, IndexedDb, Webpack, babel-loader, style-loader, css-loader, code-mirror-themes...`,
        image: jate,
        gitHub: "https://github.com/renansm93/PWA_Text-Editor",
        deployed: "https://renan-text-editor-6dfeb8705062.herokuapp.com/"
    },
    {
        name: "Basic Portfolio",
        description: "HTML, CSS (flexbox)",
        image: portfolio,
        gitHub: "https://github.com/renansm93/My-Portfolio",
        deployed: "https://renansm93.github.io/My-Portfolio/"
    },
    {
        name: "Tech Blog",
        description: `Node.js, MySQL2, Sequelize, dotenv, bcrypt, handlebars, express-session`,
        image: TechBlog,
        gitHub: "https://github.com/renansm93/Tech_Blog",
        deployed: "https://tech-blog4567-d4dd94adfc8d.herokuapp.com/"
    },
    {
        name: "Note Taker",
        description: `Node.js, Express.js, uuid, JSON to store notes`,
        image: noteTaker,
        gitHub: "https://github.com/renansm93/Note-Taker",
        deployed: "https://notetakerrenan.herokuapp.com/ "
    },
    {
        name: "Professional-README-Generator",
        description: `Node.js, npm Inquirer, Javascript`,
        image: readmeGenerator,
        gitHub: "https://github.com/renansm93/Professional-README-Generator",
        video: ""
    },
    {
        name: "Employee Tracker",
        description: `Node.js, mySQL2, Express.js, dotenv`,
        image: employeeTracker,
        gitHub: "https://github.com/renansm93/Employee-Tracker",
        video: "https://drive.google.com/file/d/1wlm_BKs33GPhZiOvj4UWrKWLC5b9zZNV/view"
    },
    {
        name: "Weather Dashboard",
        description: `HTML, CSS, Javascript, moment.js, Open Weather API`,
        image: weatherDashboard,
        gitHub: "https://github.com/renansm93/Weather-Dashboard",
        deployed: "https://renansm93.github.io/Weather-Dashboard/"
    },
    {
        name: "Coding Quiz",
        description: `HTML, CSS, Javascript using local storage`,
        image: codingQuiz,
        gitHub: "https://github.com/renansm93/Code-Quiz",
        deployed: "https://renansm93.github.io/Code-Quiz/"
    },
    {
        name: "Workday-Scheduler",
        description: `HTML, CSS(Bootstrap), jQuery, Moment.js, local storage`,
        image: dayPlanner,
        gitHub: "https://github.com/renansm93/Workday-Scheduler",
        deployed: "https://renansm93.github.io/Workday-Scheduler/"
    },
    {
        name: "Password Generator",
        description: `HTML, CSS, Javascript`,
        image: passwordGenerator,
        gitHub: "https://github.com/renansm93/Password-Generator",
        deployed: "https://renansm93.github.io/Password-Generator/"
    },
    {
        name: "Social Network API",
        description: `Express, MongoDB, Mongoose, Moment.js`,
        image: snAPI,
        gitHub: "https://github.com/renansm93/NoSQL__Social-Network-API",
        video: "https://drive.google.com/file/d/19kPlHCJs_uMvfAXjDrZ3cMc6X7jv-yEU/view"

    },


];


export default projects;