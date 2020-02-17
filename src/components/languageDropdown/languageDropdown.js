import React, { useState } from 'react';
import ActiveLanguage from '../activeLanguage/ActiveLanguage';
import { iconLanguage } from '../../icons';
import './languageDrapdown.scss';

const LanguageDropdown = () => {
  const [isActiveSelector, setIsActiveSelector] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('English');

  const handleSelector = () => {
    setIsActiveSelector(!isActiveSelector);
  };

  return (
    <>
      {!isActiveSelector ? (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className="footer__language language"
          onClick={handleSelector}
        >
          <div className="language__icon">{iconLanguage}</div>
          {activeLanguage}
          <svg
            className="language__arrowDown"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4175 0L0 1.34583L7
              8L14 1.34583L12.5825 0L7
              5.30417L1.4175 0Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={handleSelector}
            className="footer__language language"
          >
            <div className="language__icon">{iconLanguage}</div>
            {activeLanguage}
            <svg
              className="language__arrowDown"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* eslint-disable-next-line max-len */}
              <path d="M1.4175 0L0 1.34583L7 8L14 1.34583L12.5825 0L7 5.30417L1.4175 0Z" fill="white" />
            </svg>
          </div>

          <ActiveLanguage
            activeLanguage={activeLanguage}
            setActiveLanguage={setActiveLanguage}
            setIsActiveSelector={setIsActiveSelector}
          />
        </div>
      )}
    </>
  );
};

export default LanguageDropdown;
