import React, { Component } from "react"
import loadable from '@loadable/component'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./css/index.css"
import AppleDownload from "../images/apple.svg"
import GoogleDownload from "../images/google.svg"
import PlayButton from "../images/playButton.svg"
import SignButton from "../images/signButton.svg"
import DownArrow from "../images/downArrow.svg"
import TeamTitle from "../images/the_team.svg"
import ATeamTitle from "../images/advisoryboard.svg"
import AOS from "aos"
import { Stream } from "@cloudflare/stream-react";
import Helmet from "react-helmet" 

import TeamTitleMobile from "../images/TheTeam.svg"
import Form from "../components/form/form"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import MouseTooltip from "react-sticky-mouse-tooltip"
import Tilt from "react-parallax-tilt"
import Slider from "react-slick"

 
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMouseTooltipVisible: false,
      pageLoaded: false,
      videoPlaying: false,
    }

    this.playVideo = this.playVideo.bind(this)
    this.showInfo = this.showInfo.bind(this)
    this.hideInfo = this.hideInfo.bind(this)
  }
  showInfoMobile(event) {
    if (
      document
        .getElementById(`${event.target.id}mobile`)
        .classList.contains("show")
    ) {
      ;[...document.querySelectorAll(".team__member__info")].map(element => {
        element.classList.remove("show")
      })
      document
        .getElementById(`${event.target.id}mobile`)
        .classList.remove("show")
    } else {
      ;[...document.querySelectorAll(".team__member__info")].map(element => {
        element.classList.remove("show")
      })
      document.getElementById(`${event.target.id}mobile`).classList.add("show")
    }
  }
  showInfo(event) {
    if (window.innerWidth > 1024) {
      document.getElementById(`${event.target.id}-member`).classList.add("show")
      document.querySelectorAll(".cursor__inner--dot")[0].style.opacity = "0"
      this.setState(prevState => ({
        isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
      }))
    }
  }
  hideInfo(event) {
    if (window.innerWidth > 1024) {
      document
        .getElementById(`${event.target.id}-member`)
        .classList.remove("show")
      document.querySelectorAll(".cursor__inner--dot")[0].style.opacity = "1"
      this.setState(prevState => ({
        isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
      }))
    }
  }
  playVideo() {
    if(!this.state.videoPlaying){
      this.setState({
        videoPlaying: true,
      })
    }else{
      this.setState({
        videoPlaying: false,
      })
    }
    // var mediaVideo = document.getElementById("homepage__header__video")

    // mediaVideo.onended = function () {
    //   mediaVideo.classList.remove("playing")
    //   document
    //     .querySelectorAll(".hero__wrapper")[0]
    //     .classList.remove("fade__out")
    //   document.getElementById("close__video").classList.remove("show")
    // }

    // // if video status is changed to "paused", then change control button to "Continue Play"
    // mediaVideo.onpause = function () {
    //   mediaVideo.classList.remove("playing")
    //   document
    //     .querySelectorAll(".hero__wrapper")[0]
    //     .classList.remove("fade__out")
    //   document.getElementById("close__video").classList.remove("show")
    // }

    // if (mediaVideo.paused) {
    //   mediaVideo.play()
    //   document.querySelectorAll(".hero__wrapper")[0].classList.add("fade__out")
    //   mediaVideo.classList.add("playing")
    //   document.getElementById("close__video").classList.add("show")
    // } else {
    //   mediaVideo.pause()
    //   document
    //     .querySelectorAll(".hero__wrapper")[0]
    //     .classList.remove("fade__out")
    //   mediaVideo.classList.remove("playing")
    //   document.getElementById("close__video").classList.remove("show")
    // }
  }
  activatePulsing() {
    document
      .querySelectorAll(".phone__circle")[0]
      .classList.add("phone__circle--active")
  }
  deactivatePulsing() {
    document
      .querySelectorAll(".phone__circle")[0]
      .classList.remove("phone__circle--active")
  }
  parallaxContainer() {
    window.addEventListener(
      "scroll",
      function () {
        var top =
          (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
        var finalX = top / -7
        var finalXDown = top / +12
        var smallScroll = top / -40

        if (window.innerWidth > 1280) {
          if(top > 1000){
            document.querySelectorAll(".header__wrapper")[0].style.top = "-200px";
          }else{
            document.querySelectorAll(".header__wrapper")[0].style.top = "0px";
          }

          ;[...document.querySelectorAll(".floating__ww__image")].map(
            (image, index) => {
              if (index % 2 === 0) {
                image.style.transform = `translateY(${top / +index / 100}px)`
              } else {
                image.style.transform = `translateY(${top / -index / 100}px)`
              }
            }
          )

          if (document.getElementById("pre__mission__title") !== null) {
            document.getElementById(
              "pre__mission__title"
            ).style.transform = `translateY(${finalX}px)`
          }
          // if (document.getElementById("home__hero__title") !== null) {
          //   document.getElementById(
          //     "home__hero__title"
          //   ).style.transform = `translateY(${finalX}px)`
          // }
          if (document.querySelectorAll(".phone__image")[0] !== null) {
            document.querySelectorAll(
              ".phone__image"
            )[0].style.transform = `translateY(${finalXDown + 20}px)`
          }
          if (document.getElementById("mission__title") !== null) {
            document.getElementById(
              "mission__title"
            ).style.transform = `translateY(${finalXDown + 5}px)`
          }
          if (document.getElementById("founder__data") !== null) {
            document.getElementById(
              "founder__data"
            ).style.transform = `translateY(${smallScroll}px)`
          }
          if (document.getElementById("about__team") !== null) {
            document.getElementById(
              "about__team"
            ).style.transform = `translateX(${smallScroll + 30}px)`
          }
          if (document.getElementById("the__founder") !== null) {
            document.getElementById(
              "the__founder"
            ).style.transform = `translateX(${smallScroll + 40}px)`
          }
          if (document.getElementById("founder__description") !== null) {
            document.getElementById(
              "founder__description"
            ).style.transform = `translateX(${smallScroll + 50}px)`
          }
          if (document.getElementById("team__title") !== null) {
            document.getElementById(
              "team__title"
            ).style.transform = `translateY(${finalXDown - 20}px)`
          }
          if (document.getElementById("wwd__wrapper__title__one") !== null) {
            document.getElementById(
              "wwd__wrapper__title__one"
            ).style.transform = `translateY(${smallScroll}px)`
          }
          if (document.getElementById("wwd__wrapper__title__two") !== null) {
            document.getElementById(
              "wwd__wrapper__title__two"
            ).style.transform = `translateY(${smallScroll + 15}px)`
          }
          if (document.getElementById("down__title") !== null) {
            document.getElementById(
              "down__title"
            ).style.transform = `translateY(${top / +1 / 100}px)`
          }
          if (document.getElementById("down__subtitle") !== null) {
            document.getElementById(
              "down__subtitle"
            ).style.transform = `translateY(${top / -1 / 100}px)`
          }
          if (document.getElementById("www__info__two") !== null) {
            document.getElementById(
              "www__info__two"
            ).style.transform = `translateY(${top / +1 / 100}px)`
          }
        } else {
          if (window.innerWidth < 1280) {
            setTimeout(function(){
              
              [...document.querySelectorAll(".floating__ww__image")].map(
                (image, index) => {
                  if (index % 2 === 0) {
                    image.style.transform = `translateY(0px)`
                  } else {
                    image.style.transform = `translateY(0px)`
                  }
                }
              )
  
              document.getElementById(
                "pre__mission__title"
              ).style.transform = `translateY(0px)`
              // document.getElementById(
              //   "home__hero__title"
              // ).style.transform = `translateY(0px)`
              document.getElementById(
                "phone__image"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "mission__title"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "founder__data"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "about__team"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "the__founder"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "founder__description"
              ).style.transform = `translateX(0px)`
              document.getElementById(
                "team__title"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "wwd__wrapper__title__one"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "wwd__wrapper__title__two"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "down__title"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "down__subtitle"
              ).style.transform = `translateY(0px)`
              document.getElementById(
                "www__info__two"
              ).style.transform = `translateY(0px)`

            }, 1100);
          }
        }
      },
      { passive: true }
    )
  }
  activateElement(id) {
    var distance = document.getElementById(id).offset().top
  }
  showFeature(event) {
    document
      .querySelectorAll(".feature__slide.active")[0]
      .classList.remove("active")

    document
      .querySelectorAll(".phone__slide.active")[0]
      .classList.remove("active")

    event.target.classList.add("active")
    document.querySelectorAll(`.${event.target.id}`)[0].classList.add("active")
  }
  componentDidMount() {
    AOS.init()

    this.parallaxContainer()

    setTimeout(
      function () {
        this.setState({
          pageLoaded: true,
        })

        document.querySelectorAll(".team__advisory__title")[0].style.position = "absolute";

      }.bind(this),
      1000
    )
    
    if (window.innerWidth < 650) {
      setTimeout(
        function () {
          document.querySelectorAll(".team__advisory__title")[0].style.position = "relative";
  
        }.bind(this),
        1300
      )
    }

    ;[...document.querySelectorAll(".navigation__header.mobile")].map(navItem =>
      navItem.addEventListener("click", function () {
        document.getElementById("opened__toggle").classList.remove("show")
        document.getElementById("closed__toggle").classList.add("show")
        document.getElementById("mobile__menu").classList.remove("show")
        document
          .querySelectorAll(".nav__button.mobile")[0]
          .classList.remove("show")
      })
    )

    window.addEventListener("resize", function () {
      if (window.innerWidth < 1280) {
        ;[...document.querySelectorAll(".floating__ww__image")].map(
          (image, index) => {
            if (index % 2 === 0) {
              image.style.transform = `translateY(0px)`
            } else {
              image.style.transform = `translateY(0px)`
            }
          }
        )

        document.getElementById(
          "pre__mission__title"
        ).style.transform = `translateY(0px)`
        // document.getElementById(
        //   "home__hero__title"
        // ).style.transform = `translateY(0px)`
        document.getElementById(
          "phone__image"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "mission__title"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "founder__data"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "about__team"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "the__founder"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "founder__description"
        ).style.transform = `translateX(0px)`
        document.getElementById(
          "team__title"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "wwd__wrapper__title__one"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "wwd__wrapper__title__two"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "down__title"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "down__subtitle"
        ).style.transform = `translateY(0px)`
        document.getElementById(
          "www__info__two"
        ).style.transform = `translateY(0px)`
      }
    })
  }

  render() {
    var images = this.props.data.allImageSharp.nodes

    const isBrowser = typeof window !== `undefined`;
    const videoIdOrSignedUrl = "d3a56948df6a4f0ef80e2960c10d6447";

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      swipeToSlide: true,
      swipe: true,
      afterChange: function (index) {
        document
          .querySelectorAll(".phone__slide.active")[0]
          .classList.remove("active")

        var currentSlideId = document.querySelectorAll(
          ".slick-active .feature__slide"
        )[0].id

        document
          .querySelectorAll(`.${currentSlideId}`)[0]
          .classList.add("active")
      },
    }

    return (
      <Layout>
        <Helmet>

          <SEO title="The Humanified App - Sign up for our Beta!" />
          <title>The Humanified App - Sign up for our Beta!</title>
          <meta name="viewport" content="width=device-width"></meta>
          <meta charset="utf-8"></meta>
          <meta http-equiv="Content-Language" content="en"></meta>
          <meta name="description" content="The social network for social impact. Make real change happen, one tap at a time."></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
          <meta property="og:locale" content="en_US"></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:title" content="The Humanified App"></meta>
          <meta property="og:description" content="The social network for social impact. Make real change happen, one tap at a time."></meta>
          <meta property="og:url" content="https://humanified.org"></meta>
          <meta property="og:site_name" content="Humanified"></meta>
          <meta property="article:publisher" content="https://www.facebook.com/humanified/"></meta>
          <meta property="article:modified_time" content="2020-09-02T17:58:32+00:00"></meta>
          <meta property="og:image" content="https://rx.raxo.dev/wp-content/uploads/2020/09/humanfied.jpg"></meta>
          <meta property="og:image:width" content="2000"></meta>
          <meta property="og:image:height" content="1333"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content="The Humanified App"></meta>
          <meta name="twitter:description" content="The social network for social impact. Make real change happen, one tap at a time."></meta>
          <meta name="twitter:image" content="https://rx.raxo.dev/wp-content/uploads/2020/09/humanfied.jpg"></meta>
          <meta name="twitter:creator" content="@humanifiedapp"></meta>
          <meta name="twitter:site" content="@humanifiedapp"></meta>


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
            `}
          </script>
          <script>
            {
              `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'UA-177238353-1');
              `
            }
          </script>

        </Helmet>

        
        <section className="homepage__header" id="home">
          <div className="top__shadow"> </div>
          {
            this.state.videoPlaying 
            ?<div
                className="close__video"
                id={"close__video"}
                onClick={this.playVideo}
              >
                ╳
              </div>
            :""
          }
          {
            this.state.videoPlaying 
            ?
            <div id={"homepage__header__video"} >
              <Stream controls src={videoIdOrSignedUrl} width="100%" height="100%" autoplay="true" preload="true" controls="true" />
            </div>
            : ""
          }
          {/* <video
            playsInline=""
            controls=""
            preload="none"
            id="homepage__header__video"
            onClick={this.playVideo}
          >
            <source
              src="https://rx.raxo.dev/wp-content/uploads/2020/05/Raxo-Reel-2019.mp4"
              type="video/mp4"
            />
          </video> */}
          <div className="container hero__wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="homepage__hero__header">
                  <div className="wt-hero-header-shape">
                    <div className="wt-hero-header-shape-item -v1"></div>
                    <div className="wt-hero-header-shape-item -v2"></div>
                    <div className="wt-hero-header-shape-item -v3"></div>
                  </div>
                  <div className="wt-hero-header-blend">
                    
                    <div className="play__button">
                      <div
                        className="hover__transition"
                        onClick={this.playVideo}
                        tabIndex={0}
                        aria-label={"Watch Video"}
                      >
                        <PlayButton />

                        <p data-text="#WhatDidYouDo">#WhatDidYouDo</p>
                      </div>
                    </div>
                    <h1 id="home__hero__title">
                      
                      <span>The Social Impact </span>
                      <span> <span className="pink__text">Social Network </span></span>
                    </h1>
                    <div className="coming-soon-button d-flex justify-content-center align-items-center">
                    
                        <div className="">
                          <AnchorLink to="/#contact" className="applink">
                          <SignButton
                            tabIndex="0"
                            alt="Sign Up Button - Coming Soon"
                          />
                          </AnchorLink>
                        </div>
                        {/* <div className="app__store">
                          <AnchorLink to="/#contact" className="applink">
                          <AppleDownload
                            tabIndex="0"
                            alt="Apple Store Badge - Coming Soon"
                          />
                          </AnchorLink>
                        </div>
                        <div className="play__store">
                        <AnchorLink to="/#contact" className="applink">
                          <GoogleDownload
                            tabIndex="0"
                            alt="Googla PlayStore Badge - Coming Soon"
                          />
                        </AnchorLink>
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pre__mission__section" id="pre__mission">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 pre__mission__wrapper">
                <div className="pre__mission__title">
                  <h2 id="pre__mission__title">
                    <span className="desktop">Make Change Happen</span>

                    <span className="mobile">
                      Make Change Happen
                    </span>
                  </h2>
                </div>
                <div
                  className="phone__image"
                  id="phone__image"
                  tabIndex="-1"
                  onMouseEnter={this.activatePulsing}
                  onMouseLeave={this.deactivatePulsing}
                >
                  {images.map((image, index) =>
                    image.fluid.src.includes("phone.png") ? (
                      <Img fluid={image.fluid} key={index} />
                    ) : (
                      ""
                    )
                  )}
                  <div className="phone__circle" tabIndex="-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mobile__mission mobile__anchor"
            id="the-mission"
          ></div>
          <div className="mission__section" id="mission">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-sm-12 col-md-12 col-lg-6 mission__title"
                  id="mission__title"
                >
                  <p>OUR MISSION</p>
                  <h2>
                    <span>We Simplify</span>
                    <span> Social Impact</span>
                  </h2>
                  <div className="down__arrow">
                    <DownArrow id="mission__arrow" alt="Next Section Below" />
                  </div>
                </div>
                <div
                  className="col-sm-12 col-md-12 col-lg-6 mission__description"
                  id="mission__description"
                >
                  <p>
                  The social network for social impact. Make real change happen, one tap at a time.  
                  </p>
                  <p>
                  Humanified is the social media network that is built for doing good.

                  </p>
                  <p >
                  Together, we empower people to show their compassionate side in real time, not just through online activism, but by providing real ways to volunteer, donate, and raise awareness. #WhatDidYouDo?

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mobile__mission mobile__anchor" id="the-team"></div>
        <section className="founder__section" id="team">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 founder">
                {images.map((image, index) =>
                  isBrowser ? (
                    window.innerWidth > 900 ? (
                      image.fluid.src.includes("founder_marla.png") ? (
                        <Img
                          fluid={image.fluid}
                          key={index}
                          alt="Marla Gonzales, Founder"
                        />
                      ) : (
                        ""
                      )
                    ) : image.fluid.src.includes("marlamobile.png") ? (
                      <Img
                        fluid={image.fluid}
                        key={index}
                        alt="Marla Gonzales, Founder"
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    " "
                  )
                )}
                <div className="founder__data" id="founder__data">
                  <h2>
                    <span>Marla</span>
                    <span>González</span>
                  </h2>
                  <h3>FOUNDER &amp; CEO</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 founder__info">
                <p id="about__team">ABOUT THE TEAM</p>
                <h2 id="the__founder">
                  <span>Meet the First </span>
                  <span>Humanifier</span>
                </h2>
                <p className="second" id="founder__description">
                  A communicator, brand builder, and special needs mother, Marla
                  González is the heart and mind behind Humanified. She created
                  the app when she saw the need for a platform that makes it
                  easier to make change in our world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {
          this.state.pageLoaded
          ?
         <>
          <section className="advisory team__section" id="meet-the-team">
            <ATeamTitle id="team__title" className={"team__advisory__title"} />
            <div className="container">
              <div className="row team__row">
                {/* Team members for desktop */}
                <div className="team__row__one">
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Alison Wyatt, Advisory Board Member"
                      id="team__aone"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("alison.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Alison Wyatt, Advisory Board Member"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__aone-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Alison </span>
                            <span>Wyatt</span>
                          </h2>
                          <h3>
                            Angel Investor, <br />
                            Former President, <br /> Girlboss
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Hitha Palepu, Advisory Board Member"
                      id="team__atwo"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("hitha.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Hitha Palepu, Advisory Board Member"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__atwo-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Hitha </span>
                            <span>Palepu</span>
                          </h2>
                          <h3>
                            CEO Rhoshan <br /> Pharmaceuticals, <br />
                            Early-stage Investor
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Steve Lubin, Advisory Board Member"
                      id="team__athree"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("steve.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Steve Lubin, Advisory Board Member"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__athree-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Steve</span>
                            <span>Lubin</span>
                          </h2>
                          <h3>
                            Technology Executive <br /> (Multiple Exits), <br />{" "}
                            Venture Capitalist
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                </div>

                {/* Team members for Mobile */}
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__one-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("alison.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Alison Wyatt, Advisory Board Member"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__one-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Alison </span>
                        <span>Wyatt</span>
                      </h2>
                      <h3>
                        Angel Investor, <br />
                        Former President, <br /> Girlboss
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__two-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("hitha.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Hitha Palepu, Advisory Board Member"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__two-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Hitha </span>
                        <span>Palepu</span>
                      </h2>
                      <h3>
                        CEO Rhoshan <br /> Pharmaceuticals, <br />
                        Early-stage Investor
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__three-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("steve.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Steve Lubin, Advisory Board Member"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__three-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Steve</span>
                        <span>Lubin</span>
                      </h2>
                      <h3>
                        Technology Executive <br /> (Multiple Exits), <br />{" "}
                        Venture Capitalist
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team__section team" id="meet-the-team">
            <TeamTitleMobile id={"team__title__mobile"} className={"mobile"} />
            <TeamTitle id="team__title" className={"desktop"} />
            <div className="container">
              <div className="row team__row">
                {/* Team members for desktop */}
                <div className="team__row__one">
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Neil St.Clair, COO"
                      id="team__oneone"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("neil.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Neil St.Clair, COO"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__oneone-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Neil </span>
                            <span>St. Clair</span>
                          </h2>
                          <h3>
                            Chief Operating <br /> Officer
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Suren Sahaydachny, Chief of Product"
                      id="team__twoone"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("suren.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Suren Sahaydachny, Chief of Product"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__twoone-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Suren </span>
                            <span>Sahaydachny</span>
                          </h2>
                          <h3>
                            Chief Product <br /> Officer
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Natalia Cacheiro, UX/UI Director"
                      id="team__threeone"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("natalia.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Natalia Cacheiro, UX/UI Director"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__threeone-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Natalia</span>
                            <span>Cacheiro</span>
                          </h2>
                          <h3>
                            UX/UI <br /> Director
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Gen Keillor, Associate Account Account"
                      id="team__four"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("gen.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Gen Keillor, Associate Account Account"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__four-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Gen</span>
                            <span>Keillor</span>
                          </h2>
                          <h3>
                         Product <br/> Manager
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                </div>
                <div className="team__row__two">
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Rachel Chada, Strategy Director"
                      id="team__eight"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("rachel.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Rachel Chada, Strategy Director"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__eight-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Rachel </span>
                            <span>Chada</span>
                          </h2>
                          <h3>
                            Strategy <br />
                            Director
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Ornella Castellini, UX/UI  Designer"
                      id="team__five"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("ornella.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Ornella Castellini, UX/UI  Designer"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__five-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Ornella</span>
                            <span>Castellini</span>
                          </h2>
                          <h3>
                            UX/UI <br /> Designer
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Oscar Rivera, Chief Creative Officer"
                      id="team__eleven"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("oscar.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Oscar Rivera, Chief Creative Officer"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__eleven-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Oscar</span>
                            <span>Rivera</span>
                          </h2>
                          <h3>
                            Chief
                            <br /> Creative Officer
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                </div>
                <div className="team__row__three">
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      id="team__six"
                      aria-label="Lillinette Díaz, Content strategist"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("lilinette.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Lillinette Díaz, Content strategist"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__six-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Lillinette </span>
                            <span>Díaz</span>
                          </h2>
                          <h3>
                            Content <br /> strategist
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      id="team__seven"
                      aria-label="Kike Sanchez, Content Manager"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("kike.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Kike Sanchez, Content Manager"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div
                        className="team__member__info "
                        id="team__seven-member"
                      >
                        <div className="team__member__info__name">
                          <h2>
                            <span>Kike </span>
                            <span>Sanchez</span>
                          </h2>
                          <h3>
                            Content <br /> Manager
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      aria-label="Avaz Bokiev, Lead Developer"
                      id="team__nine"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("avaz.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Avaz Bokiev, Lead Developer"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__nine-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Avaz </span>
                            <span>Bokiev</span>
                          </h2>
                          <h3>
                            Lead <br /> Developer
                          </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                  <div className="team__member desktop">
                    <div
                      className="team__member__avatar"
                      tabIndex="0"
                      id="team__ten"
                      aria-label="Gabriela Carde, Jr. Counsel"
                      onClick={this.showInfoMobile}
                      onMouseEnter={this.showInfo}
                      onMouseLeave={this.hideInfo}
                    >
                      {images.map((image, index) =>
                        image.fluid.src.includes("gabriela.png") ? (
                          <img
                            src={image.fluid.src}
                            loading="lazy"
                            alt=""
                            key={index}
                            alt="Gabriela Carde, Jr. Counsel"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={-100}
                      offsetY={-100}
                    >
                      <div className="team__member__info " id="team__ten-member">
                        <div className="team__member__info__name">
                          <h2>
                            <span>Gabriela </span>
                            <span>Carde</span>
                          </h2>
                          <h3>Jr. Counsel </h3>
                        </div>
                      </div>
                    </MouseTooltip>
                  </div>
                </div>

                {/* Team members for Mobile */}
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__onesix-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("neil.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Neil St.Clair, COO"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__onesix-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Neil </span>
                        <span>St. Clair</span>
                      </h2>
                      <h3>
                        Chief Operating <br /> Officer
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__twosix-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("suren.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Suren Sahaydachny, Chief of Product"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__twosix-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Suren </span>
                        <span>Sahaydachny</span>
                      </h2>
                      <h3>
                        Chief Product <br /> Officer
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__threesix-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("natalia.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Natalia Cacheiro, UX/UI Director"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__threesix-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Natalia</span>
                        <span>Cacheiro</span>
                      </h2>
                      <h3>
                        UX/UI <br /> Directorr
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar genevieve"
                    id="team__four-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("gen.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Gen Keillor, Associate Account Account"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__four-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Gen</span>
                        <span>Keillor</span>
                      </h2>
                      <h3>
                     Product <br/> Manager
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__eight-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("rachel.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Rachel Chada, Strategy Director"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__eight-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Rachel </span>
                        <span>Chada</span>
                      </h2>
                      <h3>
                        Strategy <br />
                        Director
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__five-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("ornella.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Ornella Castellini, UX/UI  Designer"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div
                    className="team__member__info "
                    id="team__five-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Ornella</span>
                        <span>Castellini</span>
                      </h2>
                      <h3>
                        UX/UI
                        <br /> Designer
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__eleven-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("oscar.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Oscar Rivera, Chief Creative Officer"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__eleven-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Oscar </span>
                        <span>Rivera</span>
                      </h2>
                      <h3>
                        Chief <br /> Creative Officer{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__six-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("lilinette.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Lillinette Díaz, Content strategist"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__six-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Lillinette </span>
                        <span>Díaz</span>
                      </h2>
                      <h3>
                        Content <br /> strategist
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__seven-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("kike.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Kike Sanchez, Content Manager"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__seven-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Kike </span>
                        <span>Sánchez</span>
                      </h2>
                      <h3>
                        Content <br /> Manager
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__nine-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("avaz.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Avaz Bokiev, Lead Developer"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__nine-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Avaz </span>
                        <span>Bokiev</span>
                      </h2>
                      <h3>
                        Lead <br /> Developer
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="team__member mobile">
                  <div
                    className="team__member__avatar"
                    id="team__ten-member"
                    onClick={this.showInfoMobile}
                    onMouseEnter={this.showInfo}
                    onMouseLeave={this.hideInfo}
                  >
                    {images.map((image, index) =>
                      image.fluid.src.includes("gabriela.png") ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                          alt="Gabriela Carde, Jr. Counsel"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div
                    className="team__member__info "
                    id="team__ten-membermobile"
                  >
                    <div className="team__member__info__name">
                      <h2>
                        <span>Gabriela </span>
                        <span>Carde</span>
                      </h2>
                      <h3>
                        Jr. <br /> Counsel{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mobile__mission mobile__anchor" id="about"></div>
          <section className="about__section" id="what-we-do">
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="4000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask1.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask2.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask3.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask4.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask5.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask6.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask7.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask8.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask9.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>
            <div
              className="floating__ww__image "
              data-aos="fade-up"
              data-aos-duration="3000"
              tabIndex="-1"
            >
              <Tilt>
                {images.map((image, index) =>
                  image.fluid.src.includes(`mask10.png`) ? (
                    <img
                      src={image.fluid.src}
                      loading="lazy"
                      alt=""
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </Tilt>
            </div>

            <div className="container-fluid ">
              <div className="row">
                <div className="col-lg-12 text-center wwd__wrapper">
                  <h5 id="wwd__wrapper__title__one">WHAT WE DO</h5>
                  <h2 id="wwd__wrapper__title__two" className="desktop">
                    <span>Change the </span>
                    <span>world in real time</span>
                  </h2>
                  <h2 id="wwd__wrapper__title__two" className="mobile">
                    Change the world in real time
                  </h2>
                  <DownArrow alt="Next Section Below" />
                </div>
              </div>
            </div>
          </section>

          <section className={"what__we__do__info"} id="www__info">
            <div className="container-fluid wwd__text">
              <div className="row">
                <div className="col-lg-12">
                  <h3 id="www__info__two">
                    Humanified is the purpose-built social network for social impact that not only connects users and non-profits, <span>but creates a space for creative advocacy and meeting other mission-aligned individuals.</span> 

                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section id="features">
            <svg
              width="1763"
              height="1761"
              viewBox="0 0 1763 1761"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="881.5"
                cy="880.5"
                rx="881.5"
                ry="880.5"
                fill="#2C13DD"
              />
            </svg>

            <div className="container-fluid slider">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 left slider__phones__wrapper">
                  <div tabIndex={"-1"} className="phone__slide slide__one active">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phoneone.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div tabIndex={"-1"} className="phone__slide slide__two">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phonetwo.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div tabIndex={"-1"} className="phone__slide slide__three">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phonethree.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div tabIndex={"-1"} className="phone__slide slide__four">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phonefour.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div tabIndex={"-1"} className="phone__slide slide__five">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phonefive.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <div tabIndex={"-1"} className="phone__slide slide__six">
                    {images.map((image, index) =>
                      image.fluid.src.includes(`phonesix.png`) ? (
                        <img
                          src={image.fluid.src}
                          loading="lazy"
                          alt=""
                          key={index}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 right slider__wrapper ">
                  <div className="slider__one">
                    <div
                      className="feature__slide active"
                      tabIndex="0"
                      onFocus={this.showFeature}
                      onClick={this.showFeature}
                      onMouseOver={this.showFeature}
                      id="slide__one"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.6803 9.21974C40.6588 8.19775 39.4459 7.38704 38.111 6.83391C36.7761 6.28079 35.3453 5.99609 33.9003 5.99609C32.4553 5.99609 31.0245 6.28079 29.6896 6.83391C28.3547 7.38704 27.1418 8.19775 26.1203 9.21974L24.0003 11.3397L21.8803 9.21974C19.8169 7.15636 17.0184 5.99716 14.1003 5.99716C11.1822 5.99716 8.38368 7.15636 6.3203 9.21974C4.25691 11.2831 3.09772 14.0817 3.09772 16.9997C3.09772 19.9178 4.25691 22.7164 6.3203 24.7797L8.4403 26.8997L24.0003 42.4597L39.5603 26.8997L41.6803 24.7797C42.7023 23.7582 43.513 22.5454 44.0661 21.2105C44.6193 19.8755 44.904 18.4447 44.904 16.9997C44.904 15.5548 44.6193 14.124 44.0661 12.789C43.513 11.4541 42.7023 10.2413 41.6803 9.21974V9.21974Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3>
                          Impactful <br /> Content
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Create a “Cause” page, post and share content, and
                          engage with people and ideas that support what you care
                          about.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide"
                      tabIndex="0"
                      onFocus={this.showFeature}
                      onClick={this.showFeature}
                      onMouseOver={this.showFeature}
                      id="slide__two"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42 41.9999L33.3 33.2999"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                          Explore <br /> What's Good
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Use the “Discover” section to find new movements, new
                          places to volunteer, or to make new connections with
                          like-minded advocates.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide"
                      tabIndex="0"
                      onFocus={this.showFeature}
                      onClick={this.showFeature}
                      onMouseOver={this.showFeature}
                      id="slide__three"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 46L6 38L14 30"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42 26L42 30C42 32.1217 41.1571 34.1566 39.6569 35.6569C38.1566 37.1571 36.1217 38 34 38L6 38"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M34 2L42 10L34 18"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.00001 22L6.00001 18C6.00001 15.8783 6.84287 13.8434 8.34316 12.3431C9.84345 10.8429 11.8783 10 14 10L42 10"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                        Grab <br/>your Moment

                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                        With our “Moments” feature, you can create or participate in activism every day. Gain traction and go from a Moment to a Movement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slider__two">
                    {/* <div className="feature__slide" onFocus={this.showFeature} onClick={this.showFeature} onMouseOver={this.showFeature} id="slide__four">
                      <div className="feature__title">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                        <path d="M42 30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34H14L6 42V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V30Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        </svg>
                        <h3>Grab <br/>your Moment
</h3>
                      </div>
                      <div className="feature__description">
                        <p>With our “Moments” feature, you can create or participate in activism every day. Gain traction and go from a Moment to a Movement.</p>
                      </div>
                    </div> */}
                    <div
                      className="feature__slide"
                      tabIndex="0"
                      onFocus={this.showFeature}
                      onClick={this.showFeature}
                      onMouseOver={this.showFeature}
                      id="slide__five"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.6803 9.21974C40.6588 8.19775 39.4459 7.38704 38.111 6.83391C36.7761 6.28079 35.3453 5.99609 33.9003 5.99609C32.4553 5.99609 31.0245 6.28079 29.6896 6.83391C28.3547 7.38704 27.1418 8.19775 26.1203 9.21974L24.0003 11.3397L21.8803 9.21974C19.8169 7.15636 17.0184 5.99716 14.1003 5.99716C11.1822 5.99716 8.38368 7.15636 6.3203 9.21974C4.25691 11.2831 3.09772 14.0817 3.09772 16.9997C3.09772 19.9178 4.25691 22.7164 6.3203 24.7797L8.4403 26.8997L24.0003 42.4597L39.5603 26.8997L41.6803 24.7797C42.7023 23.7582 43.513 22.5454 44.0661 21.2105C44.6193 19.8755 44.904 18.4447 44.904 16.9997C44.904 15.5548 44.6193 14.124 44.0661 12.789C43.513 11.4541 42.7023 10.2413 41.6803 9.21974V9.21974Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3>
                          Build
                          <br /> Community
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Connect with your community–find new ways to volunteer or share a special skill. And coming soon, “Cause Groups” allow you to meet and chat directly with those who share your passions.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide"
                      tabIndex="0"
                      onFocus={this.showFeature}
                      onClick={this.showFeature}
                      onMouseOver={this.showFeature}
                      id="slide__six"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26 4L6 28H24L22 44L42 20H24L26 4Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                          Easily <br /> Donate
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Donate to verified organizations quickly and simply, all
                          with a tap.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" slider__mobile">
                  <Slider {...settings} ref={c => (this.slider = c)}>
                    <div
                      className="feature__slide active"
                      id="slide__one"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.6803 9.21974C40.6588 8.19775 39.4459 7.38704 38.111 6.83391C36.7761 6.28079 35.3453 5.99609 33.9003 5.99609C32.4553 5.99609 31.0245 6.28079 29.6896 6.83391C28.3547 7.38704 27.1418 8.19775 26.1203 9.21974L24.0003 11.3397L21.8803 9.21974C19.8169 7.15636 17.0184 5.99716 14.1003 5.99716C11.1822 5.99716 8.38368 7.15636 6.3203 9.21974C4.25691 11.2831 3.09772 14.0817 3.09772 16.9997C3.09772 19.9178 4.25691 22.7164 6.3203 24.7797L8.4403 26.8997L24.0003 42.4597L39.5603 26.8997L41.6803 24.7797C42.7023 23.7582 43.513 22.5454 44.0661 21.2105C44.6193 19.8755 44.904 18.4447 44.904 16.9997C44.904 15.5548 44.6193 14.124 44.0661 12.789C43.513 11.4541 42.7023 10.2413 41.6803 9.21974V9.21974Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3>
                          Impactful <br /> Content
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Create a “Cause” page, post and share content, and
                          engage with people and ideas that support what you care
                          about.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide active"
                      id="slide__two"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42 41.9999L33.3 33.2999"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                          Explore <br /> What's Good
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Use the “Discover” section to find new movements, new
                          places to volunteer, or to make new connections with
                          like-minded advocates.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide active"
                      id="slide__three"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 46L6 38L14 30"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42 26L42 30C42 32.1217 41.1571 34.1566 39.6569 35.6569C38.1566 37.1571 36.1217 38 34 38L6 38"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M34 2L42 10L34 18"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.00001 22L6.00001 18C6.00001 15.8783 6.84287 13.8434 8.34316 12.3431C9.84345 10.8429 11.8783 10 14 10L42 10"
                            stroke="#F0EEFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                        Grab <br/>your Moment


                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                        With our “Moments” feature, you can create or participate in activism every day. Gain traction and go from a Moment to a Movement.

                        </p>
                      </div>
                    </div>
                    {/* <div className="feature__slide active"  id="slide__four__mobile">
                      <div className="feature__title">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                        <path d="M42 30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34H14L6 42V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V30Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        </svg>
                        <h3>Grab <br/>your Moment
</h3>
                      </div>
                      <div className="feature__description">
                        <p>With our “Moments” feature, you can create or participate in activism every day. Gain traction and go from a Moment to a Movement.</p>
                      </div>
                    </div> */}
                    <div
                      className="feature__slide active"
                      id="slide__five"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.6803 9.21974C40.6588 8.19775 39.4459 7.38704 38.111 6.83391C36.7761 6.28079 35.3453 5.99609 33.9003 5.99609C32.4553 5.99609 31.0245 6.28079 29.6896 6.83391C28.3547 7.38704 27.1418 8.19775 26.1203 9.21974L24.0003 11.3397L21.8803 9.21974C19.8169 7.15636 17.0184 5.99716 14.1003 5.99716C11.1822 5.99716 8.38368 7.15636 6.3203 9.21974C4.25691 11.2831 3.09772 14.0817 3.09772 16.9997C3.09772 19.9178 4.25691 22.7164 6.3203 24.7797L8.4403 26.8997L24.0003 42.4597L39.5603 26.8997L41.6803 24.7797C42.7023 23.7582 43.513 22.5454 44.0661 21.2105C44.6193 19.8755 44.904 18.4447 44.904 16.9997C44.904 15.5548 44.6193 14.124 44.0661 12.789C43.513 11.4541 42.7023 10.2413 41.6803 9.21974V9.21974Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3>
                          Build
                          <br /> Community
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                        Connect with your community–find new ways to volunteer or share a special skill. And coming soon, “Cause Groups” allow you to meet and chat directly with those who share your passions.
                        </p>
                      </div>
                    </div>
                    <div
                      className="feature__slide active"
                      id="slide__six"
                    >
                      <div className="feature__title">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26 4L6 28H24L22 44L42 20H24L26 4Z"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <h3>
                          Easily <br /> Donate
                        </h3>
                      </div>
                      <div className="feature__description">
                        <p>
                          Donate to verified organizations quickly and simply, all
                          with a tap.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <div className="mobile__contact mobile__anchor" id="contact-us"></div>
          <section className="download__section" id="download">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 left">
                  <h3 id="down__title">
                    Available for download
                    <span>Coming Soon </span>
                  </h3>
                  <p id="down__subtitle">
                    change the world <br /> around you today.{" "}
                  </p>
                  <div className="app__links d-flex ">
                      <div className="app__store">
                        <AnchorLink to="/#contact" className="applink">
                          <AppleDownload
                            tabIndex="0"
                            alt="Apple Store Badge - Coming Soon"
                          />
                        </AnchorLink>
                      </div>
                      <div className="play__store">
                        <AnchorLink to="/#contact" className="applink">
                          <GoogleDownload
                            tabIndex="0"
                            alt="Google PlayStore Badge - Coming Soon"
                          />
                        </AnchorLink>
                      </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 right">
                  <div id="right__mobile">
                    {images.map((image, index) =>
                      image.fluid.src.includes("mobileend.png") ? (
                        <Img
                          fluid={image.fluid}
                          id={"down__image"}
                          key={index}
                          alt="Floating Phone"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact__section" id="contact">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <h3>Sign Up</h3>

                  <h4>
                    Become an original <br /> Humanifier.
                  </h4>
                  <p>
                    {" "}
                    Start your Humanified journey now. Sign up to get the latest
                    on the launch of the app, and become one of the first to post
                    the causes you're passionate about!{" "}
                  </p>

                  <div className="social__links">
                    <h5>
                      FOLLOW US ON <br /> SOCIAL MEDIA{" "}
                    </h5>
                    <nav>
                      <ul>
                        <li className={"instagram"}>
                          <a
                            href="https://koi-3qnmlpda8k.marketingautomation.services/net/m?md=HkEl1L3NrpRz6DVuxtZsNvVuxkvtvSrx"
                            target="_BLANK"
                          >
                            <svg
                              title="Instagram Icon"
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.0122 5.57323C20.7032 5.57323 20.4011 5.66487 20.1441 5.83658C19.8871 6.00829 19.6868 6.25235 19.5686 6.53789C19.4503 6.82342 19.4193 7.13762 19.4796 7.44075C19.5399 7.74387 19.6887 8.02231 19.9073 8.24085C20.1258 8.45939 20.4042 8.60821 20.7074 8.66851C21.0105 8.7288 21.3247 8.69785 21.6102 8.57958C21.8958 8.46131 22.1398 8.26102 22.3115 8.00404C22.4832 7.74707 22.5749 7.44495 22.5749 7.13589C22.5749 6.72145 22.4103 6.32398 22.1172 6.03092C21.8242 5.73787 21.4267 5.57323 21.0122 5.57323ZM14.0428 7.58906C12.7401 7.58906 11.4667 7.97535 10.3835 8.69909C9.30035 9.42283 8.45613 10.4515 7.9576 11.6551C7.45908 12.8586 7.32865 14.1829 7.5828 15.4606C7.83694 16.7383 8.46424 17.9119 9.38539 18.833C10.3065 19.7542 11.4802 20.3815 12.7578 20.6357C14.0355 20.8898 15.3599 20.7594 16.5634 20.2608C17.7669 19.7623 18.7956 18.9181 19.5194 17.8349C20.2431 16.7518 20.6294 15.4783 20.6294 14.1756C20.6273 12.4294 19.9327 10.7553 18.698 9.5205C17.4632 8.28572 15.789 7.59113 14.0428 7.58906ZM14.0428 18.387C13.208 18.387 12.392 18.1393 11.698 17.6754C11.004 17.2114 10.4632 16.552 10.1441 15.7806C9.82496 15.0092 9.74186 14.1605 9.90529 13.3418C10.0687 12.5232 10.4713 11.7714 11.0622 11.1817C11.653 10.5919 12.4055 10.1907 13.2245 10.0288C14.0434 9.86687 14.892 9.95153 15.6628 10.2721C16.4336 10.5926 17.0921 11.1346 17.5547 11.8295C18.0174 12.5243 18.2635 13.3408 18.262 14.1756C18.2599 15.2933 17.8145 16.3644 17.0234 17.154C16.2324 17.9435 15.1604 18.387 14.0428 18.387ZM27.3254 8.69854C27.3254 6.56831 26.4791 4.52533 24.9728 3.01903C23.4665 1.51273 21.4235 0.666504 19.2933 0.666504H8.69854C6.56831 0.666504 4.52534 1.51273 3.01904 3.01903C1.51274 4.52533 0.666504 6.56831 0.666504 8.69854V19.3011C0.666504 21.4314 1.51274 23.4743 3.01904 24.9806C4.52534 26.4869 6.56831 27.3332 8.69854 27.3332H19.3011C21.4314 27.3332 23.4743 26.4869 24.9806 24.9806C26.4869 23.4743 27.3332 21.4314 27.3332 19.3011L27.3254 8.69854ZM24.8095 19.3011C24.8095 20.7641 24.2283 22.1672 23.1938 23.2017C22.1594 24.2361 20.7563 24.8173 19.2933 24.8173H8.69854C7.23556 24.8173 5.83251 24.2361 4.79803 23.2017C3.76355 22.1672 3.18238 20.7641 3.18238 19.3011V8.69854C3.18238 7.23556 3.76355 5.83251 4.79803 4.79802C5.83251 3.76354 7.23556 3.18236 8.69854 3.18236H19.3011C20.7641 3.18236 22.1672 3.76354 23.2017 4.79802C24.2361 5.83251 24.8173 7.23556 24.8173 8.69854L24.8095 19.3011Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className={"facebook"}>
                          <a
                            href="https://koi-3QNMLPDA8K.marketingautomation.services/net/m?md=m0BcSAUD00Vp8ovttR1hA99OwBpzZVY9"
                            target="_BLANK"
                          >
                            <svg
                              title="Facebook icon"
                              width="15"
                              height="28"
                              viewBox="0 0 15 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.80668 27.3332V15.1692H13.8897L14.501 10.4287H9.80668V7.40208C9.80668 6.02963 10.1878 5.09423 12.1561 5.09423L14.6664 5.09312V0.853296C13.4514 0.724728 12.2303 0.66244 11.0085 0.666709C7.38925 0.666709 4.9114 2.8758 4.9114 6.9329V10.4289H0.817871V15.1694H4.91128V27.3334L9.80668 27.3332Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className={"linkedin"}>
                          <a
                            href="https://koi-3qnmlpda8k.marketingautomation.services/net/m?md=YBlCghapbIzm7KXhow0NyU1lhSW1cYI8"
                            target="_BLANK"
                          >
                            <svg
                              title="Linkedin icon"
                              xmlns="http://www.w3.org/2000/svg"
                              fill={"#ffffff"}
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                          </a>
                        </li>
                        <li className={"twitter"}>
                          <a
                            href="https://koi-3QNMLPDA8K.marketingautomation.services/net/m?md=5JwCQMsuhXa14%2BSmy7hmYqPJHWdaNlzw"
                            target="_BLANK"
                          >
                            <svg
                              title="Twitter icon"
                              width="28"
                              height="22"
                              viewBox="0 0 28 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M27.3332 2.73361C26.331 3.16841 25.2711 3.45583 24.1865 3.58695C25.3307 2.90337 26.1882 1.82799 26.5998 0.560279C25.5246 1.20036 24.3475 1.65134 23.1198 1.89361C22.2992 1.00371 21.2065 0.411341 20.0129 0.209415C18.8194 0.00748825 17.5926 0.207424 16.5249 0.777865C15.4572 1.34831 14.6091 2.25699 14.1135 3.36139C13.6179 4.4658 13.5029 5.70347 13.7865 6.88028C11.6124 6.77031 9.48576 6.20422 7.54471 5.21876C5.60366 4.23331 3.89163 2.85054 2.51984 1.16028C2.03869 2.0005 1.78586 2.95204 1.7865 3.92028C1.7848 4.81946 2.00546 5.7051 2.42884 6.49836C2.85223 7.29163 3.4652 7.96789 4.21317 8.46695C3.34381 8.44329 2.49302 8.21001 1.73317 7.78695V7.85361C1.73969 9.11347 2.18116 10.3324 2.98292 11.3042C3.78468 12.2761 4.89751 12.9411 6.13317 13.1869C5.65751 13.3317 5.16367 13.408 4.6665 13.4136C4.32236 13.4096 3.97907 13.3784 3.63984 13.3203C3.99172 14.404 4.67267 15.3511 5.58794 16.0298C6.50321 16.7085 7.60727 17.085 8.7465 17.1069C6.82277 18.6206 4.44768 19.4468 1.99984 19.4536C1.55415 19.4551 1.10882 19.4284 0.666504 19.3736C3.16574 20.9873 6.07825 21.8439 9.05317 21.8403C11.1061 21.8616 13.1427 21.4736 15.044 20.6991C16.9453 19.9245 18.6732 18.7788 20.1268 17.3289C21.5804 15.8791 22.7305 14.1541 23.5099 12.2548C24.2894 10.3555 24.6826 8.31992 24.6665 6.26695C24.6665 6.04028 24.6665 5.80028 24.6665 5.56028C25.7128 4.78003 26.6151 3.82351 27.3332 2.73361Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        {/* <li className={"youtube"} >
                        <a href="https://" target="_BLANK">
                          <svg title="Youtube icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </a>
                      </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 contact__right">
                  <h6>Join Our Beta Launch</h6>

                  <Form />
                </div>
              </div>
            </div>
          </section>
         </>
         : ""
        }
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query imageQuery {
    allImageSharp {
      nodes {
        id
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
          src
        }
        original {
          src
        }
      }
      totalCount
    }
  }
`