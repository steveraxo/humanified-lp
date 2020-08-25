import React, { Component } from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./css/index.css"
import AppleDownload from "../images/apple.svg";
import GoogleDownload from "../images/google.svg";
import PlayButton from "../images/playButton.svg"
import DownArrow from "../images/downArrow.svg"
import TeamTitle from "../images/the_team.svg"
import TeamTitleMobile from "../images/TheTeam.svg"

import MouseTooltip from 'react-sticky-mouse-tooltip';
import Tilt from 'react-parallax-tilt';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseTooltipVisible: false,
    };


    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);

    
  }
  showInfoMobile(event){
    

    if(document.getElementById(`${event.target.id}mobile`).classList.contains("show")){
      [...document.querySelectorAll(".team__member__info")].map((element) => {
        element.classList.remove("show");
      })
      document.getElementById(`${event.target.id}mobile`).classList.remove("show");
    }else{
      [...document.querySelectorAll(".team__member__info")].map((element) => {
        element.classList.remove("show");
      })
      document.getElementById(`${event.target.id}mobile`).classList.add("show");
    }
    

  }

  showInfo(event){
    if (window.innerWidth > 1024) {
      document.getElementById(`${event.target.id}-member`).classList.add("show");
      document.querySelectorAll(".cursor__inner--dot")[0].style.opacity = "0"; 
      this.setState(prevState => ({ isMouseTooltipVisible: !prevState.isMouseTooltipVisible }));
    }
  }

  hideInfo(event){
    if (window.innerWidth > 1024) {
      document.getElementById(`${event.target.id}-member`).classList.remove("show");
      document.querySelectorAll(".cursor__inner--dot")[0].style.opacity = "1"; 
      this.setState(prevState => ({ isMouseTooltipVisible: !prevState.isMouseTooltipVisible }));
    }
  }

  playVideo(){
    var mediaVideo = document.getElementById("homepage__header__video");

    if (mediaVideo.paused) {
      mediaVideo.play();
      document.querySelectorAll(".hero__wrapper")[0].classList.add("fade__out");
      mediaVideo.classList.add("playing");
    } else {
      mediaVideo.pause();
      document.querySelectorAll(".hero__wrapper")[0].classList.remove("fade__out");
      mediaVideo.classList.remove("playing")
    }

  }
  activatePulsing(){
    document.querySelectorAll(".phone__circle")[0].classList.add("phone__circle--active");
  }
  deactivatePulsing(){
    document.querySelectorAll(".phone__circle")[0].classList.remove("phone__circle--active");
  }
  parallaxContainer() {
    if (window.innerWidth > 768) {
      window.addEventListener(
        "scroll",
        function() {
          var top =
            (window.pageYOffset || document.scrollTop) -
            (document.clientTop || 0)
          var finalX = top / -7
          var finalXDown = top / +12;
          var smallScroll = top / - 40;

          [...document.querySelectorAll(".floating__ww__image")].map((image, index) => {
            
            if(index % 2 === 0){
              image.style.transform = `translateY(${(top / + index) / 100 }px)`
            }else{
              image.style.transform = `translateY(${(top / - index) / 100 }px)`
            }
          })

          if (document.getElementById("pre__mission__title") !== null) {
            document.getElementById(
              "pre__mission__title"
            ).style.transform = `translateY(${finalX}px)`
          }
          if (document.getElementById("home__hero__title") !== null) {
            document.getElementById(
              "home__hero__title"
            ).style.transform = `translateY(${finalX}px)`
          }
          if (document.querySelectorAll(".phone__image")[0] !== null) {
            document.querySelectorAll(".phone__image")[0].style.transform = `translateY(${finalXDown + 20}px)`
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
            ).style.transform = `translateY(${(top / + 1) / 100 }px)`
          }
          if (document.getElementById("down__subtitle") !== null) {
            document.getElementById(
              "down__subtitle"
            ).style.transform = `translateY(${(top / - 1) / 100 }px)`
          }

          if (document.getElementById("www__info__two") !== null) {
            document.getElementById(
              "www__info__two"
            ).style.transform = `translateY(${(top / + 1) / 100 }px)`
          }
          
        },
        { passive: true }
      )
    }
  }

  componentDidMount(){
    this.parallaxContainer();

    if(window.innerWidth <= 1024){

    }
  }


  render() {
 
    var images  = this.props.data.allImageSharp.nodes;
    const isBrowser = typeof window !== `undefined`

    return (
      <Layout>
      <SEO title="Home" />
      <section className="homepage__header">
        <div className="top__shadow"> </div>
        <video playsInline="" controls="" preload="none"  id="homepage__header__video" onClick={this.playVideo} >
          <source src="https://rx.raxo.dev/wp-content/uploads/2020/05/Raxo-Reel-2019.mp4" type="video/mp4" />
        </video>
        <div className="container hero__wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="homepage__hero__header">
                <div className="wt-hero-header-shape">
                  <div className="wt-hero-header-shape-item -v1" ></div>
                  <div className="wt-hero-header-shape-item -v2" ></div>
                  <div className="wt-hero-header-shape-item -v3"></div>
                </div>
                <div className="wt-hero-header-blend">
                  <h1 id="home__hero__title">
                    <span>We are the first</span>
                    <span>social impact </span>
                    <span>social network</span>
                  </h1>
                  <div className="play__button">
                    <div className="hover__transition" onClick={this.playVideo} >
                      <PlayButton />

                      <p data-text="Watch video">Watch video</p>
                    </div>
                  </div>
            
                  <div className="app__links d-flex justify-content-center align-items-center">
                    <div className="app__store">
                      <AppleDownload/>
                    </div>
                    <div className="play__store">
                      <GoogleDownload/>
                    </div>
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
                  <span className="desktop">Make a real difference, </span>
                  <span className="desktop">one tap at a time.</span>

                  <span className="mobile">Make a real difference, one tap at a time.</span>
                </h2>
              </div>
              <div className="phone__image" onMouseEnter={this.activatePulsing} onMouseLeave={this.deactivatePulsing}>
                {
                  images.map((image, index) =>
                    image.fluid.src.includes("phone.png")
                    ?<Img fluid={image.fluid} key={index}/>
                    : ""
                  )
                }
                <div className="phone__circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission__section" id="mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mission__title" id="mission__title">
              <p >OUR MISION</p>
              <h2>
                
                <span>We simply </span>
                <span>simplify social </span>
                <span>consciousness</span>
              </h2>
              <div className="down__arrow">
                <DownArrow id="mission__arrow" />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mission__description" id="mission__description">
              <p >
                There is a huge empty market for innovation in the social impact space. The Unicorn for Impact just doesn’t exist - leaving millions of people looking for a single platform to find resources, create feel good content, engage with others, donate, and become influencers in this area by seeing their content change people’s lives in real time. 
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="founder__section" id="meet-the-founder">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 founder">
              {
                images.map((image, index) =>
                  isBrowser
                  ? window.innerWidth > 900
                    ?
                      image.fluid.src.includes("founder_marla.png")
                      ? <Img fluid={image.fluid} key={index}/>
                      : ""
                    : image.fluid.src.includes("marlamobile.png")
                      ? <Img fluid={image.fluid} key={index}/>
                      : ""
                  : " " 
                  
                )
              }
              <div className="founder__data" id="founder__data">
                <h4>
                  <span>Marla</span>
                  <span>González</span>
                </h4>
                <h5>FOUNDER & CEO</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 founder__info">
              <p id="about__team">
                ABOUT THE TEAM
              </p>
              <h2 id="the__founder">
                <span>Meet the </span>
                <span>founder</span>
              </h2>
              <p className="second" id="founder__description">
                A communicator, brand builder, strategist, mother, and doer of good, Marla González is the heart and brain behind Humanified. She created the app when she saw the need for a platform that makes it easy to make a change in our world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team__section" id="meet-the-team">
        <TeamTitleMobile id={"team__title__mobile"} className={"mobile"} />
        <TeamTitle id="team__title" className={"desktop"}  />
        <div className="container">
          <div className="row">
              {/* Team members for desktop */}
              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__one" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("neil.png")
                      ? <img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__one-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
                
              </div>

              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__two" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("suren.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__two-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Suren</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
                
              </div>

              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__three" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("natalia.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__three-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
              </div>
                
              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__four" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("gen.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__four-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
                
              </div>

              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__five" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("ornella.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__five-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
                
              </div>

              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__six" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("kike.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__six-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
               
              </div>

              <div className="team__member desktop">
                <div className="team__member__avatar" id="team__seven" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("lilinette.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-100}
                  offsetY={-100}
                >
                  <div className="team__member__info " id="team__seven-member">
                    <div className="team__member__info__name">
                      <h5>
                        <span>Genevieve</span>
                        <span>Keillor</span>
                      </h5>
                      <h6>Associate <br/> Account Director</h6>
                    </div>
                  
                  </div>
                </MouseTooltip>
                
              </div>
              
              {/* Team members for Mobile */}
              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__one-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("neil.png")
                      ? <img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__one-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
                
              </div>

              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__two-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("suren.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__two-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Suren</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
                
              </div>

              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__three-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("natalia.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__three-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
              </div>
                
              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__four-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("gen.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__four-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
                
              </div>

              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__five-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("ornella.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>
                <div className="team__member__info " id="team__five-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
                
              </div>

              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__six-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("kike.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__six-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
               
              </div>

              <div className="team__member mobile">
                <div className="team__member__avatar" id="team__seven-member" onClick={this.showInfoMobile}  onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}  >
                  {
                    images.map((image, index) =>
                      image.fluid.src.includes("lilinette.png")
                      ?<img src={image.fluid.src} alt="" key={index}/>
                      : ""
                    )
                  }
                </div>

                <div className="team__member__info " id="team__seven-membermobile">
                  <div className="team__member__info__name">
                    <h5>
                      <span>Genevieve</span>
                      <span>Keillor</span>
                    </h5>
                    <h6>Associate <br/> Account Director</h6>
                  </div>
                
                </div>
                
              </div>
          </div>
        </div>
      </section>

      <section className="about__section" id="what-we-do">
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask1.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask2.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask3.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask4.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask5.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask6.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask7.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask8.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask9.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
          </Tilt>
        </div>
        <div className="floating__ww__image">
          <Tilt>
            {
              images.map((image, index) =>
                image.fluid.src.includes(`mask10.png`)
                ?<img src={image.fluid.src} alt="" key={index}/>
                : ""
              )
            }
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
                Change the 
                world in real time
              </h2>
              <DownArrow />
            </div>
          </div>
        </div>
      </section>

      <section className={"what__we__do__info"} id="www__info">
        <div className="container-fluid wwd__text">
          <div className="row">
            <div className="col-lg-12">
              <h3 id="www__info__two">
                Humanified is the first purpose-built social network for social impact <span> that not only connects users and non-profits, but creates a space for creative advocacy and meeting other mission-aligned individuals. </span>
<br/> Make a real difference, one tap at a time.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <svg width="1920" height="2493" viewBox="0 0 1920 2493" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="959.5" cy="1246.5" rx="1247.5" ry="1246.5" fill="#2C13DD"/>
        </svg>

      </section>


      <section className="download__section" id="download">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 left">
              <h3 id="down__title">Available to 
                <span>Download </span>
              </h3>
              <p id="down__subtitle">and change the world <br/> around you today. </p>
              <div className="app__links d-flex ">
                <div className="app__store">
                  <AppleDownload/>
                </div>
                <div className="play__store">
                  <GoogleDownload/>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 right">
              <div id="right__mobile">
                {
                  images.map((image, index) =>
                    image.fluid.src.includes("mobileend.png")
                    ?<Img fluid={image.fluid} id={"down__image"} key={index}/>
                    : ""
                  )
                }
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="contact__section" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h3>CONTACT US </h3>
              <h4>Join us and be <br/> a changemaker!</h4>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elit </p>

              <div className="social__links">
                <h5>FOLLOW US ON <br/> SOCIAL MEDIA </h5>
                <nav>
                  <ul>
                    <li>
                      <a href="https://">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0122 5.57323C20.7032 5.57323 20.4011 5.66487 20.1441 5.83658C19.8871 6.00829 19.6868 6.25235 19.5686 6.53789C19.4503 6.82342 19.4193 7.13762 19.4796 7.44075C19.5399 7.74387 19.6887 8.02231 19.9073 8.24085C20.1258 8.45939 20.4042 8.60821 20.7074 8.66851C21.0105 8.7288 21.3247 8.69785 21.6102 8.57958C21.8958 8.46131 22.1398 8.26102 22.3115 8.00404C22.4832 7.74707 22.5749 7.44495 22.5749 7.13589C22.5749 6.72145 22.4103 6.32398 22.1172 6.03092C21.8242 5.73787 21.4267 5.57323 21.0122 5.57323ZM14.0428 7.58906C12.7401 7.58906 11.4667 7.97535 10.3835 8.69909C9.30035 9.42283 8.45613 10.4515 7.9576 11.6551C7.45908 12.8586 7.32865 14.1829 7.5828 15.4606C7.83694 16.7383 8.46424 17.9119 9.38539 18.833C10.3065 19.7542 11.4802 20.3815 12.7578 20.6357C14.0355 20.8898 15.3599 20.7594 16.5634 20.2608C17.7669 19.7623 18.7956 18.9181 19.5194 17.8349C20.2431 16.7518 20.6294 15.4783 20.6294 14.1756C20.6273 12.4294 19.9327 10.7553 18.698 9.5205C17.4632 8.28572 15.789 7.59113 14.0428 7.58906ZM14.0428 18.387C13.208 18.387 12.392 18.1393 11.698 17.6754C11.004 17.2114 10.4632 16.552 10.1441 15.7806C9.82496 15.0092 9.74186 14.1605 9.90529 13.3418C10.0687 12.5232 10.4713 11.7714 11.0622 11.1817C11.653 10.5919 12.4055 10.1907 13.2245 10.0288C14.0434 9.86687 14.892 9.95153 15.6628 10.2721C16.4336 10.5926 17.0921 11.1346 17.5547 11.8295C18.0174 12.5243 18.2635 13.3408 18.262 14.1756C18.2599 15.2933 17.8145 16.3644 17.0234 17.154C16.2324 17.9435 15.1604 18.387 14.0428 18.387ZM27.3254 8.69854C27.3254 6.56831 26.4791 4.52533 24.9728 3.01903C23.4665 1.51273 21.4235 0.666504 19.2933 0.666504H8.69854C6.56831 0.666504 4.52534 1.51273 3.01904 3.01903C1.51274 4.52533 0.666504 6.56831 0.666504 8.69854V19.3011C0.666504 21.4314 1.51274 23.4743 3.01904 24.9806C4.52534 26.4869 6.56831 27.3332 8.69854 27.3332H19.3011C21.4314 27.3332 23.4743 26.4869 24.9806 24.9806C26.4869 23.4743 27.3332 21.4314 27.3332 19.3011L27.3254 8.69854ZM24.8095 19.3011C24.8095 20.7641 24.2283 22.1672 23.1938 23.2017C22.1594 24.2361 20.7563 24.8173 19.2933 24.8173H8.69854C7.23556 24.8173 5.83251 24.2361 4.79803 23.2017C3.76355 22.1672 3.18238 20.7641 3.18238 19.3011V8.69854C3.18238 7.23556 3.76355 5.83251 4.79803 4.79802C5.83251 3.76354 7.23556 3.18236 8.69854 3.18236H19.3011C20.7641 3.18236 22.1672 3.76354 23.2017 4.79802C24.2361 5.83251 24.8173 7.23556 24.8173 8.69854L24.8095 19.3011Z" fill="white"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://">
                        <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.80668 27.3332V15.1692H13.8897L14.501 10.4287H9.80668V7.40208C9.80668 6.02963 10.1878 5.09423 12.1561 5.09423L14.6664 5.09312V0.853296C13.4514 0.724728 12.2303 0.66244 11.0085 0.666709C7.38925 0.666709 4.9114 2.8758 4.9114 6.9329V10.4289H0.817871V15.1694H4.91128V27.3334L9.80668 27.3332Z" fill="white"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://">
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.3332 2.73361C26.331 3.16841 25.2711 3.45583 24.1865 3.58695C25.3307 2.90337 26.1882 1.82799 26.5998 0.560279C25.5246 1.20036 24.3475 1.65134 23.1198 1.89361C22.2992 1.00371 21.2065 0.411341 20.0129 0.209415C18.8194 0.00748825 17.5926 0.207424 16.5249 0.777865C15.4572 1.34831 14.6091 2.25699 14.1135 3.36139C13.6179 4.4658 13.5029 5.70347 13.7865 6.88028C11.6124 6.77031 9.48576 6.20422 7.54471 5.21876C5.60366 4.23331 3.89163 2.85054 2.51984 1.16028C2.03869 2.0005 1.78586 2.95204 1.7865 3.92028C1.7848 4.81946 2.00546 5.7051 2.42884 6.49836C2.85223 7.29163 3.4652 7.96789 4.21317 8.46695C3.34381 8.44329 2.49302 8.21001 1.73317 7.78695V7.85361C1.73969 9.11347 2.18116 10.3324 2.98292 11.3042C3.78468 12.2761 4.89751 12.9411 6.13317 13.1869C5.65751 13.3317 5.16367 13.408 4.6665 13.4136C4.32236 13.4096 3.97907 13.3784 3.63984 13.3203C3.99172 14.404 4.67267 15.3511 5.58794 16.0298C6.50321 16.7085 7.60727 17.085 8.7465 17.1069C6.82277 18.6206 4.44768 19.4468 1.99984 19.4536C1.55415 19.4551 1.10882 19.4284 0.666504 19.3736C3.16574 20.9873 6.07825 21.8439 9.05317 21.8403C11.1061 21.8616 13.1427 21.4736 15.044 20.6991C16.9453 19.9245 18.6732 18.7788 20.1268 17.3289C21.5804 15.8791 22.7305 14.1541 23.5099 12.2548C24.2894 10.3555 24.6826 8.31992 24.6665 6.26695C24.6665 6.04028 24.6665 5.80028 24.6665 5.56028C25.7128 4.78003 26.6151 3.82351 27.3332 2.73361Z" fill="white"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://">
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.3868 21.9998C13.7006 22.2835 12.969 22.4416 12.2268 22.4665C11.8718 22.5052 11.5127 22.4618 11.177 22.3398C10.8414 22.2178 10.5383 22.0204 10.291 21.7628C10.0437 21.5052 9.85878 21.1942 9.75057 20.8539C9.64236 20.5136 9.61371 20.153 9.66683 19.7998V11.4932H15.0002V7.49317H9.66683V0.666504H5.7735C5.7228 0.669891 5.67529 0.692449 5.64062 0.729596C5.60595 0.766742 5.58672 0.815692 5.58683 0.866504C5.50277 2.4449 4.96135 3.96476 4.02857 5.24082C3.09579 6.51689 1.81193 7.49404 0.333496 8.05317V11.4932H3.00016V20.2132C3.00016 23.1865 5.20016 27.4265 11.0002 27.3332C12.9602 27.3332 15.1468 26.4798 15.6268 25.7732L14.3868 21.9998Z" fill="white"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 contact__right">
              <h6>Tell us about you </h6>

              <form name="contact" netlify>
                <div className={'input__fields'}>
                  <label htmlFor="name"> Name: </label> 
                  <input type="text" id="name" name="name" />   
                </div>
                <div className={'input__fields'}>
                  <label htmlFor="email">Email: </label> 
                  <input type="email" id="email" name="email" />
                </div>
                <div className={'input__fields'}>
                  <label htmlFor="cause">Favorite Cause: </label>
                  <select id="cause" name="cause[]">
                    <option value="option-1">Option 1</option>
                    <option value="option-2">Option 2</option>
                  </select>
                </div>
                <div className={'input__fields input__textarea'}>
                  <label htmlFor="message">Message:</label> 
                  <textarea id="message" name="message" placeholder="Write your message here"></textarea>
                </div>
                <div>
                  <button className={"form__submit"} type="submit">
                    <svg width="129" height="58" viewBox="0 0 129 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.512 36.288C12.312 36.288 14.64 33.888 14.64 31.08C14.64 24.912 4.872 27.048 4.872 23.952C4.872 22.896 5.76 22.032 8.064 22.032C9.552 22.032 11.16 22.464 12.72 23.352L13.92 20.4C12.36 19.416 10.2 18.912 8.088 18.912C3.312 18.912 1.008 21.288 1.008 24.144C1.008 30.384 10.776 28.224 10.776 31.368C10.776 32.4 9.84 33.168 7.536 33.168C5.52 33.168 3.408 32.448 1.992 31.416L0.672 34.344C2.16 35.496 4.848 36.288 7.512 36.288ZM29.6807 29.592C29.6807 25.44 26.7527 22.896 22.9607 22.896C19.0247 22.896 16.0727 25.68 16.0727 29.544C16.0727 33.384 18.9767 36.192 23.4407 36.192C25.7687 36.192 27.5687 35.472 28.7687 34.104L26.7767 31.944C25.8887 32.784 24.9047 33.192 23.5367 33.192C21.5687 33.192 20.2007 32.208 19.8407 30.6H29.6087C29.6327 30.288 29.6807 29.88 29.6807 29.592ZM22.9847 25.728C24.6647 25.728 25.8887 26.784 26.1527 28.416H19.7927C20.0567 26.76 21.2807 25.728 22.9847 25.728ZM40.0213 22.896C38.2693 22.896 36.7573 23.496 35.7493 24.6V23.088H32.1733V36H35.9173V29.616C35.9173 27.24 37.2133 26.136 39.0133 26.136C40.6693 26.136 41.6293 27.096 41.6293 29.184V36H45.3733V28.608C45.3733 24.672 43.0693 22.896 40.0213 22.896ZM58.3157 18.192V24.456C57.3797 23.4 56.0357 22.896 54.4517 22.896C50.8037 22.896 47.9957 25.488 47.9957 29.544C47.9957 33.6 50.8037 36.192 54.4517 36.192C56.1797 36.192 57.5477 35.64 58.4837 34.512V36H62.0597V18.192H58.3157ZM55.0997 33.12C53.2277 33.12 51.7877 31.776 51.7877 29.544C51.7877 27.312 53.2277 25.968 55.0997 25.968C56.9477 25.968 58.3877 27.312 58.3877 29.544C58.3877 31.776 56.9477 33.12 55.0997 33.12Z" fill="#FFC4DD"/>
                      <circle cx="100" cy="29" r="29" fill="#FFC4DD"/>
                      <path d="M83.0001 29.333L116.881 29.333" stroke="#1C1A1B" stroke-width="2"/>
                      <path d="M107.815 20.0146L117 29.3337L107.815 38.6527" stroke="#1C1A1B" stroke-width="2"/>
                    </svg>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </section>


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
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          src
        }
      }
      totalCount
    }
  }
`