import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Humanified | 404 Not found" />
    <div className="not__found__page text-center">
      <h1 className="text-center">Oops! We want to make change happen,<br/> but not on error pages.</h1>
      <p><a href="/">Back to Humanified.org</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
