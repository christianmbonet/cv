import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, everyone:</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, }}>
    <Image />
    </div>
    <p>My name is Christian.</p>
    <p>Welcome to my new Gatsby site.</p>
    <h2>Projects</h2>
    <a href='https://felina.herokuapp.com/'>Felina (Web App) — felina.herokuapp.com</a>
    <p>An interactive and exploratory Breaking Bad game made using breakingbadapi.com API.</p>
    <a href='https://med-me.herokuapp.com/'>Med-Me (Web App) — med-me.herokuapp.com</a>
    <p>Collaboration with UX/UI for a mobile application that facilitates access to every day health care needs. Used RESTful API design best practices.</p>
    <h2>Experience</h2>
    <a href='https://www.pamm.org/'>Pérez Art Museum Miami</a><br/>
    <p>Coordinating artist travel, managing department budget and expense reports, organizing meeting materials and offering logistical support for curatorial team.</p>
    <p>Granting admission, operating cash register, assisting with data entry, providing information on exhibitions and offering individual support for guests.</p>
    <a href='https://andreupalma.com/'>Andreu, Palma, Lavin, & Solis, PLLC</a>
    <p>Preparing all outgoing mail (USPS, FedEx, & UPS). Scanning physical documents and filing them into their corresponding digital record.</p>
    <h2>Education</h2>
    <a href='https://wyncode.co/'>Wyncode Academy</a><br/>
    <p>Full Stack Web Development - C39</p>
    <a href='https://carta.fiu.edu/'>Florida International University</a>
    <p>Bachelor of Arts in Communication Arts '16</p>
    <h2>Skills</h2>
    <p>Languages: English and Spanish</p>
    <p>Technical skills: Blackbaud, HTML, CSS, JavaScript, GitHub, Node.js, React, MongoDB, Express.js</p>
    <p>Interpersonal skills: attention to detail, public speaking, critical thinking, and active listening</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/"></Link> <br />
    <Link to="/using-typescript/"></Link>
  </Layout>
)

export default IndexPage
