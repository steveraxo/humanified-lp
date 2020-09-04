import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Cursor from "./cursor/cursor"
import Header from "./header"
import HumanifiedLogo from "../images/humanifiedlogo.svg"
import CookieConsent from "react-cookie-consent";

import "./layout.css"
import "aos/dist/aos.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function getCookieValue(a) {
    if (typeof window !== "undefined") {
      var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    }
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center extra__footer">
              <p style={{"color" : "white"}}> <span style={{"opacity" : "0.7"}}>Contact us at</span>   <a href="mailto:info@humanified.org" >info@humanified.org</a></p>

              <p style={{"color" : "white"}} > <span style={{"opacity" : "0.7"}}>Designed by </span><a href="https://raxo.tv" target="_BLANK">Raxo</a></p>
            </div>
          </div>
        </div>
      </section>
      {
        !getCookieValue('consentGDPR')
        ?
          <CookieConsent
              containerClasses={"consent__cookies"}
              buttonClasses={"consent__cookies__button"}
              location="bottom"
              buttonText="Yes, I accept cookies"
              declineButtonText="Decline"
              onAccept={({ acceptedByScrolling }) => {
                if (acceptedByScrolling) {
                  document.cookie = "consentGDPR=True";
                } else {
                  document.cookie = "consentGDPR=True";
                }
              }}
          >
          <strong>This website uses cookies</strong> <br/>
          We use cookies to personalize content and ads and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them.
          </CookieConsent>
        : ""
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
