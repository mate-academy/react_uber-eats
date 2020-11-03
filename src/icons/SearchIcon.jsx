import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

const SearchIcon = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <SearchOutlined style={{ fontSize: 20 }} />
    </button>
  );
};

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SearchIcon.defaultProps = {
  className: '',
};

export default memo(SearchIcon);
