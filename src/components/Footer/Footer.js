import React from 'react';
import { Select } from 'antd';

import styles from './Footer.module.scss';
import {
  ArrowUpOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.topPart}>
        <div className={styles.leftPart}>
          <div className={styles.main}>
            <a
              href="#"
              className={styles.link}
            >
              <img
                src="./img/footer-logo.svg"
                alt="Uber Eats"
                className={styles.logo}
              />
            </a>
            <Select
              defaultValue="en"
              className={styles.langSelect}
              onChange={() => {}}
            >
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="ua">Ukrainian</Select.Option>
              <Select.Option value="ru">Russian</Select.Option>
            </Select>
          </div>
          <div className={styles.mobileApps}>
            <img
              src="./img/app-store.png"
              alt="App Store"
              className={styles.img}
            />
            <img
              src="./img/google-play.png"
              alt="Google Play"
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.rightPart}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="#" className={styles.link}>
                About UberEats
              </a>
            </li>
            <li className={styles}>
              <a href="#" className={styles.link}>
                Read our blog
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Sign up to deliver
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Add your restaurant
              </a>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>
                Get help
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Read FAQs
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                View all cities
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.leftPart}>
          <p className={styles.copy}>
            © 2021 Uber Technologies Inc.
          </p>
          <div className={styles.bottomLinksMobile}>
            <ul className={styles.linksSocial}>
              <li>
                <Link to="#">
                  <FacebookFilled className={styles.socialIcon} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <TwitterOutlined className={styles.socialIcon} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <InstagramOutlined className={styles.socialIcon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lastPart}>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="#" className={styles.link}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="#" className={styles.link}>
                Terms of  use
              </Link>
            </li>
            <li>
              <Link to="#" className={styles.link}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <ul className={styles.linksSocial}>
              <li>
                <Link to="#">
                  <FacebookFilled className={styles.socialIcon} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <TwitterOutlined className={styles.socialIcon} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <InstagramOutlined className={styles.socialIcon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Link to="#" className={styles.buttonUp}>
      <ArrowUpOutlined className={styles.socialIcon} />
    </Link>
  </footer>
);

export default Footer;
