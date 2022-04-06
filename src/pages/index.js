import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Using Gatsby tutorial</p>
      <StaticImage
        alt="Yummy cupcake"
        src="../images/embCupCake.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
