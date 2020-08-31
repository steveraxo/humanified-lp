import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Cursor  from "./cursor/cursor"
import AOS from "aos"
import Header from "./header"

import "./layout.css"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  // START SMOOTH SCROLLING //
  function init() {
    new SmoothScroll(document, 90, 20)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener("mousewheel", scrolled, { passive: false })
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault() // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
        // Opera
        else return -e.detail / 3 // Firefox
      } else return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5) requestFrame(update)
      else moving = false
    }

    var requestFrame = (function() {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50)
        }
      )
    })()
  }
  // ENDS SMOOTH SCROLLING //
  useEffect(() => {
    if (window.innerWidth > 768) {
      init()
    }

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
            <div className="col-sm-12 col-lg-6 left">
              <p>humanified</p>
            </div>
            <div className="col-sm-12 col-lg-6 right ">
              <p>© Humanified 2020.  Trademarks and brands are the property of their respective owners.</p>
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
