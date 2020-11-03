import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  CloseCircleFilled,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Modal, Space } from 'antd';

import styles from './MenuItemPage.module.scss';
import { setMenuItemData } from '../../store/actions/menuItemActions';
import { Error } from '../../components/Error/Error';
import { Loader } from '../../components/Loader/Loader';

const noImageUrl = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png';

const MenuItemPage = ({ visible, handleClose, productUuid }) => {
  const {
    menuItemData, isError, isLoading,
  } = useSelector(({ menuItem }) => menuItem);
  const {
    imageUrl, itemDescription, title, customizationsList, price,
  } = menuItemData;
  const dispatch = useDispatch();

  const closeIcon = (
    <CloseCircleFilled style={{ fontSize: 27, color: '#fff' }} />
  );

  useEffect(() => {
    productUuid && dispatch(setMenuItemData(productUuid));
  }, [dispatch, productUuid]);

  return (
    <Modal
      title={null}
      visible={visible}
      footer={null}
      onOk={() => {}}
      width={716}
      closeIcon={closeIcon}
      onCancel={handleClose}
    >
      <div className={styles.container}>
        {isError
          ? <Error massage="Щось пішло не так :(" />
          : isLoading ? <Loader />
            : (
              <>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    className={styles.menuItemImg}
                    alt="Product image"
                  />
                ) : (
                  <img
                    src={noImageUrl}
                    className={styles.menuItemImg}
                    style={{ width: 373 }}
                    alt="Product image"
                  />
                )}
                <div className={styles.menuItemDesc}>
                  <h2 className={styles.title}>{title}</h2>
                  <span className={styles.description}>{itemDescription}</span>
                </div>
                <ul style={{ width: '100%' }}>
                  {customizationsList?.map((item) => {
                    return (
                      <li key={item?.uuid}>
                        <div className={styles.subProductTitle}>{item?.title}</div>
                        <ul>
                          {item?.options?.map((option) => {
                            return (
                              <li className={styles.subProductContainer}>
                                <Space className={styles.subProductTitleContainer}>
                                  <div className={styles.plusIcon}>
                                    <PlusOutlined style={{ fontSize: 12 }} />
                                  </div>
                                  <div>{option?.title}</div>
                                </Space>
                                <div>
                                  +£
                                  {option?.price}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.summaryContainer}>
                  <Space size="middle" className={styles.subProductCounter}>
                    <div className={styles.icon}>
                      <MinusOutlined />
                    </div>
                    <div className={styles.count}>1</div>
                    <div className={styles.icon}>
                      <PlusOutlined />
                    </div>
                  </Space>
                  <div className={styles.summaryButton}>
                    <div />
                    <div>Додати 1 до замовлення</div>
                    <div>
                      £
                      {price}
                    </div>
                  </div>
                </div>
              </>
            )}
      </div>
    </Modal>
  );
};

MenuItemPage.propTypes = {
  visible: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  productUuid: PropTypes.string.isRequired,
};

export default memo(MenuItemPage);
