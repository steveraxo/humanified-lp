import { Link } from "gatsby"
import React, { Component } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./header.css"
import ArrowDown from "../images/arrow-down.svg"

export default class header extends Component {
  toggleMenu(event) {
    if (event.target.classList.contains("show")) {
      document.getElementById("opened__toggle").classList.remove("show")
      document.getElementById("closed__toggle").classList.add("show")
      document.getElementById("mobile__menu").classList.remove("show")
      event.target.classList.remove("show")
    } else {
      document.getElementById("opened__toggle").classList.add("show")
      document.getElementById("closed__toggle").classList.remove("show")
      document.getElementById("mobile__menu").classList.add("show")
      event.target.classList.add("show")
    }
  }

  render() {
    return (
      <header>
        <div className="header__wrapper">
          <div className="container-fluid header__container">
            <div className="nav__button mobile" onClick={this.toggleMenu}>
              <svg
                width="24"
                className={"show"}
                id="closed__toggle"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="24"
                id="opened__toggle"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="row header__row">
              <div className="col-lg-5 logo__column">
                <a
                  href="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  humanified
                </a>
              </div>
              <div className="col-lg-7 menu__column desktop">
                <nav role="navigation" className="navigation__header ">
                  <ul>
                    <li>
                      <AnchorLink to="/#mission" title="Mission">
                        Mission
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/#team" title="Meet the team">
                        Meet the team
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/#what-we-do" title="What we do">
                        What we do
                      </AnchorLink>
                    </li>
                    {/* <li>
                        <AnchorLink to="/#contact" title="Contact">
                          Contact
                        </AnchorLink>
                      </li> */}
                    <li>
                      <AnchorLink
                        to="/#contact"
                        className="download__button"
                        title="Download"
                      >
                        Sign Up
                        <ArrowDown />
                      </AnchorLink>
                    </li>

                    {/* <li><a onClick={() => scrollTo('#team')}>Meet the team</a></li>
                      <li><a onClick={() => scrollTo('#what-we-do')}>What we do</a></li>
                      <li><a onClick={() => scrollTo('#contact')}>Contact</a></li>
                      <li><a class="primary__btn" onClick={() => scrollTo('#signup')}>Download</a></li> */}
                  </ul>
                </nav>
              </div>

              <div className="col-lg-12 menu__column mobile" id="mobile__menu">
                <nav role="navigation" className="navigation__header mobile">
                  <ul>
                    <li>
                      <AnchorLink to="/#the-mission" title="Mission">
                        Mission
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/#the-team" title="Meet the team">
                        Meet the team
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/#about" title="What we do">
                        What we do
                      </AnchorLink>
                    </li>
                    {/* <li>
                        <AnchorLink to="/#contact" title="Contact">
                          Contact
                        </AnchorLink>
                      </li> */}
                    <li>
                      <AnchorLink
                        to="/#contact-us"
                        className="download__button"
                        title="Download"
                      >
                        Sign Up
                        <ArrowDown />
                      </AnchorLink>
                    </li>

                    {/* <li><a onClick={() => scrollTo('#team')}>Meet the team</a></li>
                      <li><a onClick={() => scrollTo('#what-we-do')}>What we do</a></li>
                      <li><a onClick={() => scrollTo('#contact')}>Contact</a></li>
                      <li><a class="primary__btn" onClick={() => scrollTo('#signup')}>Download</a></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
