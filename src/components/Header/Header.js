import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Input, TimePicker } from 'antd';
import classNames from 'classnames';

import styles from './Header.module.scss';
import routes from '../../routes/routes';
import SearchIcon from '../../icons/SearchIcon';
import MapIcon from '../../icons/MapIcon';
import {
  setAddress, setSearch, setTime, toggleDelivery, toggleSearch,
} from '../../store/actions/headerActions';

const Header = () => {
  const {
    address, time, search, isSearchVisible, isDeliveryInfoVisible,
  } = useSelector(({ header }) => header);
  const dispatch = useDispatch();

  const handleChangeAddress = useCallback(({ target: { value } }) => {
    dispatch(setAddress(value));
  }, [dispatch]);

  const handleChangeTime = useCallback((value) => {
    dispatch(setTime(value));
  }, [dispatch]);

  const handleChangeSearch = useCallback(({ target: { value } }) => {
    dispatch(setSearch(value));
  }, [dispatch]);

  const toggleSearchInfo = useCallback(() => {
    dispatch(toggleSearch(true));
    dispatch(toggleDelivery(false));
  }, [dispatch]);

  const toggleDeliveryInfo = useCallback(() => {
    dispatch(toggleDelivery(true));
    dispatch(toggleSearch(false));
  }, [dispatch]);

  const closeMobileInfo = useCallback(() => {
    dispatch(toggleDelivery(false));
    dispatch(toggleSearch(false));
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapp}>
        <div className={styles.headerContainer}>
          <Link to={routes.HOME_PAGE}>
            <img
              className={styles.headerLogo}
              src={require('../../assets/img/Logo.svg')}
              alt="Uber Eats"
            />
          </Link>
          <div className={styles.headerDeliveryInfo}>
            <Input
              value={address}
              className={styles.input}
              onChange={handleChangeAddress}
              placeholder="Address"
              prefix={<SearchOutlined />}
            />
            <TimePicker
              value={time}
              className={styles.input}
              style={{ width: 112 }}
              onChange={handleChangeTime}
              placeholder="Time"
              format="HH:mm"
            />
          </div>
          <div className={styles.headerWrapper}>
            <div className={styles.searchContainer}>
              <Input
                onChange={handleChangeSearch}
                className={styles.input}
                prefix={<EnvironmentOutlined />}
                name="search"
                placeholder="Search"
                value={search}
              />
              <div className={styles.headerButtons}>
                <MapIcon
                  className={styles.buttonsBtn}
                  onClick={toggleDeliveryInfo}
                />
                <SearchIcon
                  className={styles.buttonsBtn}
                  onClick={toggleSearchInfo}
                />
              </div>
              <Link
                to="/react_uber-eats"
                className={styles.link}
              >
                Увійти
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {(isSearchVisible || isDeliveryInfoVisible) && (
          <div className={styles.mobileHeaderContainer}>
            <div className={styles.mobile}>
              {isSearchVisible && (
                <Input
                  onChange={handleChangeSearch}
                  style={{ marginTop: 24 }}
                  className={classNames(styles.input, styles.mobileInput)}
                  prefix={<EnvironmentOutlined />}
                  name="search"
                  placeholder="Search"
                  value={search}
                />
              )}
              {isDeliveryInfoVisible && (
                <div className={styles.inputWrapper}>
                  <div
                    style={{ width: 112, marginRight: 20 }}
                    className={styles.inputContainer}
                  >
                    <p className={styles.inputContainerText}>When</p>
                    <TimePicker
                      value={time}
                      className={classNames(styles.input, styles.mobileInput)}
                      onChange={handleChangeTime}
                      placeholder="Time"
                      format="HH:mm"
                    />
                  </div>
                  <div
                    className={styles.inputContainer}
                    style={{ width: '100%' }}
                  >
                    <p className={styles.inputContainerText}>To</p>
                    <Input
                      value={address}
                      className={classNames(styles.input, styles.mobileInput)}
                      onChange={handleChangeAddress}
                      placeholder="Address"
                      prefix={<SearchOutlined />}
                    />
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              className={styles.buttonsClose}
              onClick={closeMobileInfo}
            >
              <img
                src={require('../../assets/img/close-icon.svg')}
                alt="Close"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
