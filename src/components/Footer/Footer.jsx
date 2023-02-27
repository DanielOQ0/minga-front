import React from 'react'
import './Footer.css'
import imgFooter from '../../media/Rectangle14.png'
import logo from '../../media/Logo.png'
import imgFacebook from '../../media/Facebook.png'
import imgTwitter from '../../media/Twitter.png'
import imgVimeo from '../../media/Vimeo.png'
import imgYoutube from '../../media/Youtube.png'
import imgSubscribe from '../../media/Union.png'

export default function Footer() {
    return (
      <div className="footer">
        <div className="divFoteerSup">
          <img className="imgfooter" src={imgFooter} />
          <div className="divSubscripcion">
            <h2 className="tituloSubcribe">Subscribe</h2>
            <div className="seccionSubscribe">
              <input
                className="inputsubscribe"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="botonSubscribe" type="button">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="divFooterInf">
          <div className="footerInfText">
            <h3>Home</h3>
            <h3>Manga</h3>
          </div>
          <div className="logofooter">
            <img className="imglogofooter" src={logo} />
          </div>
          <div className="rrssFooter">
            <div className="rrsslogos">
              <img src={imgFacebook} />
              <img src={imgTwitter} />
              <img src={imgVimeo} />
              <img src={imgYoutube} />
            </div>
            <div>
              <button className="botonDonate" type="button">
                Donate
                <img src={imgSubscribe} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
