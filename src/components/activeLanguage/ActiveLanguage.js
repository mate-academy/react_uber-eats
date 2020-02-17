import React, { useEffect, useRef } from 'react';
import '../languageDropdown/languageDrapdown.scss';

const languageOptions = [
  {
    key: 'English', text: 'English', value: 'English',
  },
  {
    key: 'French', text: 'French', value: 'French',
  },
  {
    key: 'German', text: 'German', value: 'German',
  },
  {
    key: 'Polish', text: 'Polish', value: 'Polish',
  },
  {
    key: 'Russian', text: 'Russian', value: 'Russian',
  },
  {
    key: 'Ukrainian', text: 'Ukrainian', value: 'Ukrainian',
  },
];

const ActiveLanguage
  // eslint-disable-next-line react/prop-types
  = ({ setActiveLanguage, activeLanguage, setIsActiveSelector }) => {
    const node = useRef(null);

    const useOutsideClick = (ref, callback) => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };

      useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
          document.removeEventListener('click', handleClick);
        };
      });
    };

    useOutsideClick(node, () => {
      setIsActiveSelector(false);
    });

    return (
      <div
        ref={node}
        className="footer__language language language--active"
      >
        <ul className="language__list">
          {languageOptions
            .filter(lan => lan.text !== activeLanguage)
            .map(item => (
              <li
                key={item.id}
                className="language__item"
              >
                <a
                  href={`/${item.text}`}
                  className="language__link"
                  onClick={() => {
                    setIsActiveSelector(false);
                    setActiveLanguage(item.text);
                  }}
                >
                  {item.text}

                </a>
              </li>
            ))}
        </ul>
      </div>
    );
  };

export default ActiveLanguage;
