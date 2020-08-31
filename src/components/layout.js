import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Cursor  from "./cursor/cursor"
import AOS from "aos"
import Header from "./header"
import { Link } from "gatsby"

import "./layout.css"
import "aos/dist/aos.css"

const Layout = ({ children }) => {

  // ENDS SMOOTH SCROLLING //
  useEffect(() => {


    AOS.init({
      disable: "mobile",
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    })
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <script>
        {`
          var _ss = _ss || [];
          _ss.push(['_setDomain', 'https://koi-3QNMLPDA8K.marketingautomation.services/net']);
          _ss.push(['_setAccount', 'KOI-4AUKC53J2G']);
          _ss.push(['_trackPageView']);
          (function() {
          var ss = document.createElement('script');
          ss.type = 'text/javascript'; ss.async = true;
          ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNMLPDA8K.marketingautomation.services/client/ss.js?ver=2.4.0';
          var scr = document.getElementsByTagName('script')[0];
          scr.parentNode.insertBefore(ss, scr);
          })();


          var callThisOnReturn = function(resp) {
            if (resp) {
                var SharpSpringTracking = resp.trackingID;
            }
          };
          _ss.push(['_setResponseCallback', callThisOnReturn]); 
        `
        }
      </script>
      <script>
        {`
        <!-- Global site tag (gtag.js) - Google Ads: 598312411 --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-598312411"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-598312411'); </script>
        `
        }
      </script>
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '624158401859448');
          fbq('track', 'PageView');
          `
        }
      </script>
      <Header siteTitle={data.site.siteMetadata.title} />
      <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=624158401859448&ev=PageView&noscript=1"/>
      </noscript>
      <main>{children}</main>
      <Cursor></Cursor>
      <section id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-3 left">
            <a
                    href="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                  <p>humanified</p>
                  </a> 
            </div>
            <div className="col-sm-12 col-lg-9 right ">
              <p>© Humanified 2020.  Trademarks and brands are the property of their respective owners. &nbsp;   
                &nbsp;  <a href="/privacy-policy"> Privacy Policy</a> &nbsp;  | <a href="/privacy-policy"> &nbsp; Terms of Use </a>
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
