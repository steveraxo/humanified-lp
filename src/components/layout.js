import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Cursor from "./cursor/cursor"
import Header from "./header"
import HumanifiedLogo from "../images/humanifiedlogo.svg"

import "./layout.css"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  // ENDS SMOOTH SCROLLING //
  useEffect(() => {
    setTimeout(function () {
      var linkMont = document.createElement("link")
      linkMont.id = "montserrat__font"
      linkMont.rel = "stylesheet"
      linkMont.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      document.head.appendChild(linkMont)
    }, 100)
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Header siteTitle={data.site.siteMetadata.title} />
      <noscript>
        <img
          height="1"
          width="1"
          src="https://www.facebook.com/tr?id=624158401859448&ev=PageView&noscript=1"
        />
      </noscript>
      <main>{children}</main>
      <Cursor></Cursor>
      <section id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3 left" style={{
                    padding: `0px`,
                  }}>
            <a
                  href="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <HumanifiedLogo style={{
    
                    width: `230px`
                  }} />
                </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9 right ">
              <p>
                © Humanified 2020. Trademarks and brands are the property of
                their respective owners. &nbsp; &nbsp;{" "}
                <span>
                <a href="/privacy-policy"> Privacy Policy</a> &nbsp; |{" "}
                <a href="/terms-and-conditions"> &nbsp; Terms of Use </a>
                </span>
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
