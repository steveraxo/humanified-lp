import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Humanified | 404 Not found" />
    <div className="not__found__page text-center">
      <h1 className="text-center">Oops! We want to make change happen, <br/> but it isn’t going to happen here.</h1>
      <p><a href="/">Back to site</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
