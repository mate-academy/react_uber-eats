import React from 'react';

const Footer = () => (
  <footer className="footer">
    <section className="footer_section">
      <div className="w_logo-container">
        <img src={`${process.env.PUBLIC_URL}/img/white-logo.svg`} alt="" />
      </div>
      <div className="line_block div_underline medium_hide" />

      <article className="footer_columns-container">
        <article className="footer_col-1">
          <div className="language_drop-container">
            <form className="dropdown lang_drop">
              <img
                className="lang_img"
                src={`${process.env.PUBLIC_URL}/img/planet.png`}
                alt="language"
              />
              <select name="lang" id="lang_select" className="lang_drop-title">
                <option
                  className="lang_drop"
                  value="en"
                  selected
                >
                  ENGLISH
                </option>
                <option
                  className="lang_drop"
                  value="ua"
                >
                  UKRAINIAN
                </option>
              </select>
            </form>
            <div className="btn_app--container medium_show">
              <a
                className="app_link"
                href="/"
              >
                <img
                  className="app_link-img"
                  src={`${process.env.PUBLIC_URL}/img/appstore.png`}
                  alt=""
                />
              </a>
              <a
                className="app_link"
                href="/"
              >
                <img
                  className="app_link-img"
                  src={`${process.env.PUBLIC_URL}/img/googlestore.png`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="socials_container medium_hide">
            <p className="hash_tag ">
              <span className="hash">#</span>
              UberEats
            </p>
            <div>
              <a
                className="soc_link"
                href="/"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/facebook.svg`}
                  alt=""
                />
              </a>
              <a
                className="soc_link"
                href="/"
              >
                <img src={`${process.env.PUBLIC_URL}/img/twitter.svg`} alt="" />
              </a>
              <a
                className="soc_link"
                href="/"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/instagram.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </article>

        <div className="footer_links-container">
          <ul className="footer_links-list">
            <li className="footer_links-list_item">
              <a
                href="/"
                className="footer_link"
              >
                About UberEats
              </a>
            </li>
            <li className="footer_links-list_item">
              <a
                href="/"
                className="footer_link"
              >
                Become a Delivery Partner
              </a>
            </li>
            <li className="footer_links-list_item">
              <a
                href="/"
                className="footer_link"
              >
                Become a Restaurant Partner
              </a>
            </li>
          </ul>
          <ul className="footer_links-list">
            <li className="footer_links-list_item">
              <a href="/" className="footer_link">See all cities</a>
            </li>
            <li className="footer_links-list_item">
              <a href="/" className="footer_link">Pricing</a>
            </li>
            <li className="footer_links-list_item">
              <a href="/" className="footer_link">Help</a>
            </li>
            <li className="footer_links-list_item">
              <a href="/" className="footer_link">FAQs</a>
            </li>
          </ul>
        </div>
      </article>

      <div className="app_container">
        <div className="line_block" />
        <div className="btn_app--container medium_hide">
          <a
            className="app_link"
            href="/"
          >
            <img
              className="app_link-img"
              src={`${process.env.PUBLIC_URL}/img/appstore.png`}
              alt=""
            />
          </a>
          <a
            className="app_link"
            href="/"
          >
            <img
              className="app_link-img"
              src={`${process.env.PUBLIC_URL}/img/googlestore.png`}
              alt=""
            />
          </a>
        </div>
        <div className="line_block" />
      </div>
      <article className="footer_bottom-links">
        <p className="footer_copy-n-links">© 2017 Uber Technologies Inc.</p>
        <span className="footer_links-copy-container">
          <a className="footer_copy-n-links" href="/">Privacy</a>
          <a className="footer_copy-n-links" href="/">Terms</a>
          <a className="footer_copy-n-links medium_show" href="/">Pricing</a>
          <div className="socials_container big_show">
            <div>
              <a
                className="soc_link"
                href="/"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/facebook.svg`}
                  alt=""
                />
              </a>
              <a
                className="soc_link"
                href="/"
              >
                <img src={`${process.env.PUBLIC_URL}/img/twitter.svg`} alt="" />
              </a>
              <a
                className="soc_link"
                href="/"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/instagram.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </span>
      </article>
      <div className="footer_socials-bottom--container">
        <div className="socials_container medium_show">
          <div className="big_hide">
            <a
              className="soc_link"
              href="/"
            >
              <img
                className="soc_link--img"
                src={`${process.env.PUBLIC_URL}/img/facebook.svg`}
                alt=""
              />
            </a>
            <a
              className="soc_link"
              href="/"
            >
              <img
                className="soc_link--img"
                src={`${process.env.PUBLIC_URL}/img/twitter.svg`}
                alt=""
              />
            </a>
            <a
              className="soc_link"
              href="/"
            >
              <img
                className="soc_link--img"
                src={`${process.env.PUBLIC_URL}/img/instagram.svg`}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <a
        className="back_btn"
        href="/"
      >
        <img
          src={`${process.env.PUBLIC_URL}/img/arrow-up.svg`}
          alt=""
        />
      </a>
    </section>
  </footer>
);

export default Footer;
