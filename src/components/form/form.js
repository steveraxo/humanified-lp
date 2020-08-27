import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
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
        )
    }
}
