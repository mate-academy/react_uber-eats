import React from 'react';

const Main = ({ stores }) => {
  const categoriesLength = (string) => {
    let result = string.toString().split(',')
    if (result.length > 4) {
     let something = result.splice(4)
     console.log(something)
    }
    return result.join(' • ')
  }



  return (
    <div>
      <ul className="catalog">
        {stores.map(store => (
          <li className="catalog_item">
            <img
              src={store.heroImageUrl}
              alt={store.title}
              className="catalog_image"
            />
            <div className="catalot_title">
              {store.title}
            </div>
            <div className="catalog_categories" title={(store.categories).join(' • ')}>
              {categoriesLength(store.categories)}
            </div>
            <div className="catalog_feedback-inline">
              <div className={ store.etaRange ? 'catalog_etaRange' : "catalog-none" }>
                {store.etaRange ? store.etaRange.text : '' }
              </div>
              <div className={ store.feedback ?  "catalog_feedback" : "catalog-none" }>
                {store.feedback ? store.feedback.rating : ''}
              </div>
              <div className="catalog_feedback catalog_feedback-star">
                {store.feedback && store.feedback.rating > 4.4
                ? <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/92367108b11b8ee48b6f29cb3fef2d4d.svg"/>
                : <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/972e1cb487b3a5c72c30a6635596f477.svg"/>
                }
              </div>
              <div className={ store.feedback ?  "catalog_feedback" : "catalog-none" }>
                {store.feedback ? `(${store.feedback.ratingCount})` : ''}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Main;
