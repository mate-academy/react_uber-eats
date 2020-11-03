import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { EnvironmentOutlined } from '@ant-design/icons';

const MapIcon = ({ className, onClick }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <EnvironmentOutlined style={{ fontSize: 20 }} />
    </button>
  );
};

MapIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MapIcon.defaultProps = {
  className: '',
};

export default memo(MapIcon);
