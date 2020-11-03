import React, { memo, useEffect, useMemo, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';

import { setRestaurantData } from '../../store/actions/restaurantActions';
import styles from './RestaurantPage.module.scss';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import MenuItemPage from '../MenuItemPage/MenuItemPage';
import { toggleErrorMenuItem } from '../../store/actions/menuItemActions';

const ETA_RANGE = '15 - 20 min';
const { TabPane } = Tabs;

const RestaurantPage = () => {
  const {
    restaurantData, isLoading, isError,
  } = useSelector(({ restaurant }) => restaurant);
  const {
    heroImageUrls, title, categories, location, entitiesMap,
    sectionsMap, sections, etaRange,
  } = restaurantData;
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productUuid, setProductUuid] = useState(null);

  const { id } = useParams();

  const noImageUrl = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png';

  const categoriesJoinList = useMemo(() => {
    return categories?.join(' • ');
  }, [categories]);

  const sectionList = useMemo(() => {
    return sections && sectionsMap && Object
      .values(sectionsMap)
      .filter(({ uuid }) => sections?.includes(uuid));
  }, [sectionsMap, sections]);

  const handleOpenModal = useCallback((productId) => {
    setModalIsOpen(true);
    setProductUuid(productId);
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch(toggleErrorMenuItem(false));
    setModalIsOpen(false);
    setProductUuid(null);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setRestaurantData(id));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error massage={isError} />;
  }

  return (
    <div className={styles.pageContainer}>
      <MenuItemPage
        visible={modalIsOpen}
        handleClose={handleCloseModal}
        productUuid={productUuid}
      />
      <section className={styles.imgContainer}>
        <img
          src={heroImageUrls && heroImageUrls[5].url}
          className={styles.img}
          alt="Restaurant img"
        />
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionTitle}>{title}</h2>
          <span className={styles.categories}>{categoriesJoinList}</span>
          <span className={styles.etaRange}>{etaRange?.text || ETA_RANGE}</span>
          <span className={styles.location}>{location?.address}</span>
        </div>
      </section>
      <section>
        <div className={styles.mainContent}>
          <Tabs>
            {sectionList?.map((item) => {
              const { uuid, title, itemUuids } = item;

              return (
                <TabPane tab={title} key={uuid}>
                  <div className={styles.productContainer}>
                    {itemUuids?.map((productId) => {
                      const currentProduct = entitiesMap[productId];

                      return (
                        <div
                          key={productId}
                          className={styles.productCard}
                          onClick={() => handleOpenModal(productId)}
                        >
                          <div className={styles.cardDescriptionContainer}>
                            <h3>
                              {currentProduct?.title?.slice(0, 35)}
                              {currentProduct?.title?.length > 35 && '...'}
                            </h3>
                            <p className={styles.cardDesc}>
                              {currentProduct?.description?.slice(0, 60)}
                              {currentProduct?.description?.length > 60 && '...'}
                            </p>
                            <span>
                              £
                              {currentProduct?.price}
                            </span>
                          </div>
                          <img
                            alt="Product img"
                            src={currentProduct?.imageUrl || noImageUrl}
                            className={styles.productImg}
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default memo(RestaurantPage);
