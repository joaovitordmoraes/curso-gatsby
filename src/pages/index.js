import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <PostItem
        slug="/about/"
        background=""
        category="Misc"
        date="06 de Março de 2020"
        timeToRead="5"
        title="Fazendo meu Portfólio em Gatsby"
        description="Aprendendo a fazer meu portfólio em Gatsby"
      />
  </Layout>
)

export default IndexPage
