import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Design from "../components/design"
import Skill from "../components/skill"
import { Container } from "react-bootstrap"
import Karya from "../components/karya"
import Kontak from "../components/kontak"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Container fluid className='mid'>
    <Design/>
    <Skill/>
    <Karya/>
    </Container>
    <Kontak/>
  </Layout>
)

export default IndexPage
