import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Humanified | 404 Not found" />
    <div className="not__found__page">
      <h1>PAGE NOT FOUND</h1>
      <p><a href="/">Go Back Home</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
