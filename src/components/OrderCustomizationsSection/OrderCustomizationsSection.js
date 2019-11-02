import React from 'react';
import PropTypes from 'prop-types';

import { OrderCustomizationsOptions } from '../OrderCustomizationsOptions';

import './OrderCustomizationsSection.scss';

export const OrderCustomizationsSection = ({ customizations }) => {
  const { title, maxPermitted, options } = customizations;
  const maxCount = maxPermitted || 1;

  return (
    <div className="customizations-sections">
      <div className="customizations-sections__head">
        <div className="modal__wrapper-content">
          <div className="customizations-sections__title">
            {title}
          </div>
          <div className="customizations-sections__count">
            {`Choose up to ${maxCount}`}
          </div>
        </div>
      </div>

      <div className="customizations-sections__options">
        <div className="modal__wrapper-content">
          {options.map(
            item => <OrderCustomizationsOptions option={item} key={item.uuid} />
          )}
        </div>
      </div>
    </div>
  );
};

OrderCustomizationsSection.propTypes = {
  customizations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
