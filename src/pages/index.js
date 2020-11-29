import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>

    <Link to="/generativo/">Arte generativo y experimentos con canvas</Link> <br/>
  </Layout>
)

export default IndexPage
