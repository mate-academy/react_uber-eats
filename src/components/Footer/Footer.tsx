import React from "react";
import "./Footer.scss";
import { Select } from "../Select";
import { NavLinks } from "../NavLinks";

export const Footer = () => {
  const about: [string, string[]] = [
    "About UberEats",
    ["Read our blog", "Sign up to deliver", "Add your restaurant"],
  ];
  const getHelp: [string, string[]] = [
    "Get help",
    ["Read FAQs", "View all cities"],
  ];

  return (
    <div className="Footer">
      <div className="container">
        <footer className="Footer__Container">
          <div className="Footer__ContainerInfo">
            <div className="Footer__Main">
              <div className="Footer__MainInfo">
                <img
                  src="images/footer/logo.svg"
                  alt="Logo"
                  className="Footer__Logo"
                />
                <Select items={['Russian', 'Endlish', 'Ukrainian']} />
              </div>
              <div className="Footer__StoreLink">
                <a href="https://apps.apple.com/us/app/uber-eats-order-food-delivery/id1058959277">
                  <img
                    src="images/footer/appStore.png"
                    alt="app store"
                    className="Footer__AppStore Footer__StoreApp"
                  />
                </a>
                <a
                  href={`https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=ru`}
                >
                  <img
                    src="images/footer/playMarket.png"
                    alt="play market"
                    className="Footer__StoreApp"
                  />
                </a>
              </div>
            </div>

            <div className="Footer__MainLinks">
              <div className="NavLinks__LinksContainer">
                <NavLinks info={about} />
              </div>
              <NavLinks info={getHelp} />
            </div>
          </div>

          <div className="Footer__BreakLine" />
          <div className="Footer__SecondInfo">
            <div className="Footer__SecondInfo-Links">
              <p className="Footer__Copyright">© 2019 Uber Technologies Inc.</p>
              <nav className="Footer__Navigation">
                <ul className="Footer__Nav">
                  <li className="Footer__Item">
                    <a href="#" className="Footer__NavLink">
                      Privacy policy
                    </a>
                  </li>
                  <li className="Footer__Item">
                    <a href="#" className="Footer__NavLink">
                      Terms of use
                    </a>
                  </li>
                  <li className="Footer__Item">
                    <a href="#" className="Footer__NavLink">
                      Pricing
                    </a>
                  </li>
                </ul>
                <ul className="Footer__NavSocial">
                  <li className="Footer__SocialItem">
                    <a href="https://www.facebook.com/">
                      <img
                        src="images/footer/facebook.svg"
                        alt="facebook"
                        className="Footer__SocialIcon"
                      />
                    </a>
                  </li>
                  <li className="Footer__SocialItem">
                    <a href="https://twitter.com/explore">
                      <img
                        src="images/footer/twitter.svg"
                        alt="twitter"
                        className="Footer__SocialIcon"
                      />
                    </a>
                  </li>
                  <li className="Footer__SocialItem">
                    <a href="https://www.instagram.com/?hl=ru">
                      <img
                        src="images/footer/inst.svg"
                        alt="instagram"
                        className="Footer__SocialIcon"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
