import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "./indexStyles.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={`${styles.content} bp3-running-text bp3-text-large`}>
      <h1>Pagina Personal de Javier Rotelli</h1>
      <p>
        La idea de este lugar es ir subiendo algunas cosas que cada tanto se me
        ocurre programar y que no tienen otro lugar donde habitar.
      </p>
      <p>
        Por ahora solo hay una serie de experimentos con canvas y arte
        generativo. Los mismos que se pueden ver en el fondo de la pagina
      </p>
    </div>
  </Layout>
)

export default IndexPage
