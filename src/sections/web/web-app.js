import React, { useState } from 'react'


export const WebApp = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [partySize, setPartySize] = useState(2);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState('November 12, 2023');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTime, setSelectedTime] = useState('5:00 PM');
  
    // Example function to handle changes to party size
    const handlePartySizeChange = (newSize) => {
      setPartySize(newSize);
    };
  
    // Example function to handle changes to selected date
    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);
    };
  
    // Example function to handle changes to selected time
    const handleTimeChange = (newTime) => {
      setSelectedTime(newTime);
    };
  return (
    <div className="ember-view" id="ember5"><div id="ember6" className="loading-slider ember-view" />
    <div id="ember7" className="ember-view">
      <div className="flash-message-wrap sticky">
        {/**/}</div>
    </div>
    <div>
      <div id="ember12" className="ember-view"><section className="header">
          {/**/}
        </section>
      </div>
      <div id="ember13" className="ember-view">
      </div>
      <section className="container with-side-details with-image-carousel">
        <section className="main-panel">
          <section className="content seat-browse">
            {/**/}
            <div className="restaurant-details">
              <img className="logo" src="https://d90cvcqfgkok9.cloudfront.net/ut78m3sdset81tfdi8adbh6plzel" />
              <form><fieldset>
                  <label className="restaurant-switcher">
                    <div className="ember-basic-dropdown-trigger




 ember-power-select-trigger " role="button" tabIndex={0} data-ebd-id="ember14-trigger" aria-owns="ember-basic-dropdown-content-ember14" aria-expanded="false">
                      <span className="ember-power-select-selected-item">
                        Ciel! Bistro-bar
                      </span>
                      {/**/}<span className="ember-power-select-status-icon" />
                    </div>
                    <div id="ember-basic-dropdown-content-ember14" className="ember-basic-dropdown-content-placeholder" style={{display: 'none'}} />
                  </label>
                </fieldset></form>
              <address>
                <div className="address"><a href="http://maps.google.com/?q=1225 Cours du Général de Montcalm,Québec,QC,Canada,G1R 4W6" target="_blank" rel="noreferrer">1225 Cours du Général de Montcalm, Québec, QC</a></div>
                <div className="phone"><a href="tel:+14186405802">+1 (418) 640-5802</a></div>
              </address>
            </div>
            <form className="seat-browse-form">
              <fieldset>
                <p className="message">Please select the party size, date and time.</p>
                <div className="group setup-inputs">
                  <label>
                    <span>{partySize}</span>
                    <div className="ember-basic-dropdown-trigger ember-power-select-trigger " role="button" tabIndex={0} data-ebd-id="ember15-trigger" aria-owns="ember-basic-dropdown-content-ember15" aria-expanded="false">
                      <span className="ember-power-select-selected-item">
                        2
                      </span>
                      {/**/}<span className="ember-power-select-status-icon" />
                    </div>
                    <div id="ember-basic-dropdown-content-ember15" className="ember-basic-dropdown-content-placeholder" style={{display: 'none'}} />
                  </label>
                  <label>
                    <span>Date</span>
                    <div className="selected-date">
                    {selectedDate}{' '} <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="calendar-plus" data-prefix="far" id="ember16" className="svg-inline--fa fa-calendar-plus fa-w-14 ember-view"><path fill="currentColor" d="M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="seat-calendars-navigation">
                  <div className="legend">
                    <span className="available"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="square" data-prefix="far" id="ember17" className="svg-inline--fa fa-square fa-w-14 ember-view"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" />
                      </svg>&nbsp;Available</span>
                    <span className="full"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="square" data-prefix="far" id="ember18" className="svg-inline--fa fa-square fa-w-14 ember-view"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" />
                      </svg>&nbsp;Full</span>
                    {/* <span class="unavailable">{{fa-icon 'square'}}&nbsp;{{t 'seat.legend.unavailable'}}</span> */}
                    <span className="closed"><span className="strike">—&nbsp;</span>Closed</span>
                  </div>
                  <div className="week-calendar">
                    <a className="week-nav today" data-ember-action data-ember-action-19={19}><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="backward" data-prefix="fas" id="ember20" className="svg-inline--fa fa-backward fa-w-16 ember-view"><path fill="currentColor" d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z" />
                      </svg></a>
                    <a className="week-nav prev" data-ember-action data-ember-action-21={21}><svg viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="caret-left" data-prefix="fas" id="ember22" className="svg-inline--fa fa-caret-left fa-w-6 ember-view"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" />
                      </svg></a>
                    <span className="date-wrap   pending">
                      <span className="week-day">Mo</span>
                      <button className="date" disabled data-ember-action data-ember-action-56={56}>6</button>
                    </span>
                    <span className="date-wrap   pending">
                      <span className="week-day">Tu</span>
                      <button className="date" disabled data-ember-action data-ember-action-57={57}>7</button>
                    </span>
                    <span className="date-wrap   pending">
                      <span className="week-day">We</span>
                      <button className="date" disabled data-ember-action data-ember-action-58={58}>8</button>
                    </span>
                    <span className="date-wrap   pending">
                      <span className="week-day">Th</span>
                      <button className="date" disabled data-ember-action data-ember-action-59={59}>9</button>
                    </span>
                    <span className="date-wrap   pending">
                      <span className="week-day">Fr</span>
                      <button className="date" disabled data-ember-action data-ember-action-60={60}>10</button>
                    </span>
                    <span className="date-wrap   pending">
                      <span className="week-day">Sa</span>
                      <button className="date" disabled data-ember-action data-ember-action-61={61}>11</button>
                    </span>
                    <span className="date-wrap is-today is-selected ">
                      <span className="week-day">Su</span>
                      <button className="date" data-ember-action data-ember-action-62={62}>12</button>
                    </span>
                    <a className="week-nav next" data-ember-action data-ember-action-30={30}><svg viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="caret-right" data-prefix="fas" id="ember31" className="svg-inline--fa fa-caret-right fa-w-6 ember-view"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                      </svg></a>
                    <a className="week-nav month-nav"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="calendar-plus" data-prefix="fas" id="ember32" className="svg-inline--fa fa-calendar-plus fa-w-14 ember-view"><path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z" />
                      </svg></a>
                    <div className="message">
                      Availabilities for <b>2 people</b> on <b>November 12, 2023</b>:
                    </div>
                  </div>
                  <div className="message daily-note expanded">
                    <br />
                    <div className="trix-content">
                      <div>- The number of people selected is the number for which table is reserved for you; Please, do not add any additionnal seats in the comment section. -We can’t guarantee a table on the side of the window. - We do not take reservations for desserts or drink -<br />We are pleased to take your reservation, please let us know if you need to cancel.</div>
                    </div>
                  </div>
                  <div className="seatings">
                    <section>
                      <label className="group">AM</label>
                      <span className="empty">No places available for <b>AM</b></span>
                    </section>
                    <section>
                      <label className="group">PM</label>
                      <button className="type--1" data-ember-action data-ember-action-63={63} onClick={() => handleTimeChange('5:00 PM')}>
                        <span className="time">{selectedTime}</span>
                        <small className="type" />
                      </button>
                      <button className="type--1" data-ember-action data-ember-action-64={64}>
                        <span className="time">5:30 PM</span>
                        <small className="type" />
                      </button>
                      <button className="type--1" data-ember-action data-ember-action-65={65}>
                        <span className="time">6:00 PM</span>
                        <small className="type" />
                      </button>
                      <button className="type--1" data-ember-action data-ember-action-66={66}>
                        <span className="time">7:30 PM</span>
                        <small className="type" />
                      </button>
                      <button className="type--1" data-ember-action data-ember-action-67={67}>
                        <span className="time">8:00 PM</span>
                        <small className="type" />
                      </button>
                      <button className="type--1" data-ember-action data-ember-action-68={68}>
                        <span className="time">8:30 PM</span>
                        <small className="type" />
                      </button>
                    </section>
                    <div className="actions">
                      {/**/}                </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
          <div id="ember34" className="ember-view"><footer>
              <div id="ember35" className="language-switcher ember-view">
                <div className="ember-basic-dropdown-trigger




 ember-power-select-trigger " role="button" tabIndex={0} data-ebd-id="ember36-trigger" aria-owns="ember-basic-dropdown-content-ember36" aria-expanded="false">
                  <span className="ember-power-select-selected-item">
                    <div className="language-switcher-option">
                      English
                    </div>
                  </span>
                  {/**/}<span className="ember-power-select-status-icon" />
                </div>
                <div id="ember-basic-dropdown-content-ember36" className="ember-basic-dropdown-content-placeholder" style={{display: 'none'}} />
              </div>
              <div className="right actions" id="footer-navigation-buttons">
                {/**/}
                <button disabled className="next seat" data-ember-action data-ember-action-37={37}>
                  <span className="zoom-icon">Next</span>
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="arrow-right" data-prefix="fas" id="ember38" className="svg-inline--fa fa-arrow-right fa-w-14 ember-view"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </button>
              </div>
              <div className="left">
                <div className="powered-by">
                  <span>Powered by</span>
                  <a className="logo" href="https://www.libroreserve.com/" target="_blank" rel="noreferrer" />
                  {/**/}  </div>
                <div className="app-version">Libro&nbsp;Booking&nbsp;Widget&nbsp;v4.20.0</div>
              </div>
            </footer>
          </div></section>
        <section id="ember39" className="side-details ember-view">  <div className="details-box">
            <div className="restaurant-detail-gallery">
              <ul className="restaurant-detail-gallery-list">
                <li className="restaurant-detail-gallery-item">
                  <a data-lightbox="restaurant-gallery-4434" href="https://d90cvcqfgkok9.cloudfront.net/96cvt4scl015hy0s361nkfzolka5" id="ember51" className="ember-lightbox ember-view">{/**/}                  <img className="restaurant-detail-gallery-thumb" alt="" src="https://d90cvcqfgkok9.cloudfront.net/96cvt4scl015hy0s361nkfzolka5" />
                  </a>            </li>
                <li className="restaurant-detail-gallery-item">
                  <a data-lightbox="restaurant-gallery-4434" href="https://d90cvcqfgkok9.cloudfront.net/d5abpeuof9nguxz3ct5m6akfr5vt" id="ember52" className="ember-lightbox ember-view">{/**/}                  <img className="restaurant-detail-gallery-thumb" alt="" src="https://d90cvcqfgkok9.cloudfront.net/d5abpeuof9nguxz3ct5m6akfr5vt" />
                  </a>            </li>
                <li className="restaurant-detail-gallery-item">
                  <a data-lightbox="restaurant-gallery-4434" href="https://d90cvcqfgkok9.cloudfront.net/llf9y26l1g6hobs76mhcjyczse7r" id="ember53" className="ember-lightbox ember-view">{/**/}                  <img className="restaurant-detail-gallery-thumb" alt="" src="https://d90cvcqfgkok9.cloudfront.net/llf9y26l1g6hobs76mhcjyczse7r" />
                  </a>            </li>
                <li className="restaurant-detail-gallery-item">
                  <a data-lightbox="restaurant-gallery-4434" href="https://d90cvcqfgkok9.cloudfront.net/sxctirdiu5oy4scnmw5aatzyxss6" id="ember54" className="ember-lightbox ember-view">{/**/}                  <img className="restaurant-detail-gallery-thumb" alt="" src="https://d90cvcqfgkok9.cloudfront.net/sxctirdiu5oy4scnmw5aatzyxss6" />
                  </a>            </li>
                <li className="restaurant-detail-gallery-item">
                  <a data-lightbox="restaurant-gallery-4434" href="https://d90cvcqfgkok9.cloudfront.net/49ckj4ui2mscw411j7k8pecsqq79" id="ember55" className="ember-lightbox ember-view">{/**/}                  <img className="restaurant-detail-gallery-thumb" alt="" src="https://d90cvcqfgkok9.cloudfront.net/49ckj4ui2mscw411j7k8pecsqq79" />
                  </a>            </li>
              </ul>
              <button className="restaurant-detail-gallery-prev" type="button" data-ember-action data-ember-action-45={45}>
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="arrow-left" data-prefix="fas" id="ember46" className="svg-inline--fa fa-arrow-left fa-w-14 ember-view"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                </svg>
              </button>
              <button className="restaurant-detail-gallery-next" type="button" data-ember-action data-ember-action-47={47}>
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="arrow-right" data-prefix="fas" id="ember48" className="svg-inline--fa fa-arrow-right fa-w-14 ember-view"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </button>
            </div>
            <div className="restaurant-details-with-border">
              {/* Height 199 because starting from 200px google maps puts more info we dont want */}
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBzjdUxDQ-2-Dz-OUpGCV0j71AbpVkUkpE&q=Ciel!%20Bistro-bar%2C1225%20Cours%20du%20G%C3%A9n%C3%A9ral%20de%20Montcalm%2CQu%C3%A9bec%2CQC%2CCanada%2CG1R%204W6" width="100%" height={199} style={{border: 0}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
              <div className="restaurant-detail">
                <h4 className="restaurant-detail-title">About Ciel! Bistro-bar</h4>
                <p className="restaurant-detail-text">Known for its view, famous for its table! The most grandiose culinary experience in Quebec City. A true spectacle with a 360 view of the river, the mountains and the city. Sophisticated dishes, heavenly atmosphere, unforgettable moments.</p>
              </div>
              <div className="restaurant-detail">
                <a className="restaurant-detail-link" href="https://www.facebook.com/cielbistrobar/" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="facebook" data-prefix="fab" id="ember49" className="restaurant-detail-icon svg-inline--fa fa-facebook fa-w-16 fa-lg ember-view"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  <p className="restaurant-detail-link-text">Our Facebook page</p>
                </a>
              </div>
              <div className="restaurant-detail">
                <a className="restaurant-detail-link" href="https://www.instagram.com/ciel_bistrobar/" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true" data-icon="instagram" data-prefix="fab" id="ember50" className="restaurant-detail-icon svg-inline--fa fa-instagram fa-w-14 fa-lg ember-view"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <p className="restaurant-detail-link-text">Our Instagram profile</p>
                </a>
              </div>
              {/**/}  </div>
          </div>
        </section>
      </section>
    </div>
  </div>
  )
}