import React from 'react';

const Footer = () => {
  const pricingLink = 'https://help.uber.com/riders/article/цены-в-ube'
  + 'reats-?nodeId=a3e4363b-761f-4acd-a555-1eff290f5ee6';
  const languageLink = 'https://www.ubereats.com/en-UA/feed/?mod=sele'
  + 'ctLanguage&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkt5aXYlMjIlMkMlMjJyZWZ'
  + 'lcmVuY2UlMjIlM0ElMjJDaElKQlVWYTRVN1AxRUFSX2tZQkY5SXhTWFklMjIlMkMlM'
  + 'jJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0'
  + 'dWRlJTIyJTNBNTAuNDQ5ODU4NyUyQyUyMmxvbmdpdHVkZSUyMiUzQTMwLjUyMzY0OTY'
  + 'lN0Q%3D&ps=1';
  const readFAQLink = 'https://about.ubereats.com/faq/?_ga=2.68158550'
  + '.692843576.1579427116-686431288.1578922435';
  const aboutUberEatsLink = 'https://about.ubereats.com/'
  + '?_ga=2.102302406.692843576.1579427116-686431288.1578922435';
  const getHelpLink = 'https://help.uber.com/ubereats?_ga=2.64892008'
  + '.692843576.1579427116-686431288.1578922435';
  const signUpToDeliverLink = 'https://www.uber.com/ua/ru/drive/delivery'
  + '/?_ga=2.61329387.692843576.1579427116-686431288.1578922435';
  const androidLink = 'https://play.google.com/store/apps/details?'
  + 'id=com.ubercab.eats&referrer=mat_click_id%3Dfb107c03370c43788'
  + 'c68bb3095938515-20200119-7336%26link_click_id%3D7473835205986594'
  + '35&mat_click_id=fb107c03370c43788c68bb3095938515-20200119-7336';
  const wordEats = 'M76.3789 0H92.4589V3.93443H80.7225V9'
  + '.52131H92.1323V13.322H80.7225V19.0033H92.4589V22.9377H76.'
  + '3789V0ZM136.867 23.3508C141.797 23.3508 144.574 20.9902 '
  + '144.574 17.7482C144.574 15.4387 142.93 13.7154 139.487 '
  + '12.9679L135.848 12.2243C133.735 11.8308 133.07 11.4374 '
  + '133.07 10.6505C133.07 9.63148 134.089 9.0059 135.966 '
  + '9.0059C138 9.0059 139.507 9.55279 139.9 11.4334H144'
  + '.165C143.933 7.89246 141.387 5.55541 136.225 5.55541C131'
  + '.764 5.55541 128.632 7.39672 128.632 10.9652C128.632 13.4321 '
  + '130.355 15.0374 134.073 15.8203L138.142 16.7607C139.747 '
  + '17.0754 140.176 17.5082 140.176 18.1731C140.176 19.2315 '
  + '138.964 19.8964 137.004 19.8964C134.542 19.8964 133.133 '
  + '19.3495 132.586 17.4689H128.298C128.923 21.002 131.543 '
  + '23.3508 136.867 23.3508ZM127.058 22.922H122.443C119.547 '
  + '22.922 117.942 21.12 117.942 18.8459V9.83607H114.696V5'
  + '.99606H117.958V1.17639H122.246V5.99606H127.058V9.83607H122'
  + '.246V17.7482C122.246 18.6492 122.872 19.082 123.852 19.082H127'
  + '.058V22.922ZM108.566 6.00394V7.53049C107.057 6.25411 105.142 '
  + '5.55677 103.164 5.56328C101.981 5.53838 100.804 5.75002 99.7032 '
  + '6.18579C98.6024 6.62156 97.5996 7.27269 96.7537 8.10102C95.9077 '
  + '8.92935 95.2357 9.91821 94.7768 11.0096C94.318 12.1011 94.0817 '
  + '13.2731 94.0817 14.4571C94.0817 15.641 94.318 16.813 94.7768 '
  + '17.9045C95.2357 18.9959 95.9077 19.9848 96.7537 20.8131C97.5996 '
  + '21.6414 98.6024 22.2925 99.7032 22.7283C100.804 23.1641 101.981 '
  + '23.3757 103.164 23.3508C105.142 23.3594 107.058 22.6618 108.566 '
  + '21.3836V22.9141H112.843V5.99606L108.566 6.00394ZM103.519 '
  + '19.6367C102.493 19.6484 101.487 19.3549 100.628 18.7933C99'
  + '.7692 18.2318 99.0969 17.4277 98.6964 16.4832C98.2958 15.5387 '
  + '98.1852 14.4964 98.3784 13.4888C98.5716 12.4812 99.0601 11.5539 '
  + '99.7816 10.8245C100.503 10.0952 101.425 9.59686 102.431 '
  + '9.39285C103.436 9.18883 104.48 9.28834 105.428 9.67875C106.377 '
  + '10.0691 107.188 10.7328 107.759 11.5854C108.33 12.438 108.634 '
  + '13.4409 108.633 14.4669C108.64 15.1432 108.512 15.814 108.257 '
  + '16.4405C108.002 17.0671 107.626 17.6369 107.149 18.1169C106.673 '
  + '18.597 106.106 18.9778 105.481 19.2373C104.857 19.4968 104.187 '
  + '19.6299 103.511 19.6289L103.519 19.6367Z';

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__block1">
          <div className="footer__left-up">
            <svg
              width="145"
              height="24"
              viewBox="0 0 145 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.8341 9.17115C64.682 9.17115
          63.1554 10.8551 63.1554
          13.44V22.922H59.8702V6.23213H63.1161V8.27016C63.5164
          7.59468 64.0902 7.03857 64.7778 6.65947C65.4655 6.28037
          66.242 6.09207 67.0269 6.1141H68.2072V9.17115H66.8341ZM57.6
          14.5771C57.6 9.6 54.059 5.87803 49.2669 5.87803C48.1346
          5.88572 47.0151 6.11721 45.9726 6.55919C44.9301 7.00117
          43.9854 7.64491 43.1926 8.45338C42.3999 9.26185 41.7748
          10.2191 41.3534 11.27C40.932 12.321 40.7225 13.4449
          40.737 14.5771C40.737 19.5502 44.5731 23.3115 49.5777
          23.3115C50.9757 23.3379 52.3595 23.0278 53.6125
          22.4075C54.8656 21.7871 55.9511 20.8746 56.7777
          19.7469L54.3934 18C53.8464 18.7634 53.1227 19.383
          52.284 19.8058C51.4453 20.2285 50.5168 20.4419
          49.5777 20.4275C48.2402 20.4212 46.9493 19.936
          45.9388 19.0597C44.9283 18.1835 44.2651 16.9743
          44.0695 15.6511H57.6079L57.6 14.5771ZM44.1403
          13.0466C44.7266 10.501 46.7607 8.7777 49.2275
          8.7777C51.6944 8.7777 53.7246 10.501 54.2754
          13.0466H44.1403ZM30.3305 5.87803C29.2326 5.87896
          28.1458 6.09744 27.1328 6.52086C26.1198 6.94428
          25.2008 7.56424 24.4289
          8.34492V0H21.1436V22.922H24.3895V20.8052C25.962
          22.396 28.1016 23.2974 30.3384 23.3115C31.4986
          23.3361 32.6522 23.1289 33.7313 22.7019C34.8104
          22.2749 35.7935 21.6368 36.6228 20.8249C37.4521
          20.0131 38.1109 19.0438 38.5607 17.974C39.0106
          16.9042 39.2423 15.7553 39.2423 14.5948C39.2423
          13.4342 39.0106 12.2854 38.5607 11.2155C38.1109
          10.1457 37.4521 9.17644 36.6228 8.36458C35.7935
          7.55271 34.8104 6.91458 33.7313 6.4876C32.6522
          6.06062 31.4986 5.85338 30.3384 5.87803H30.3305ZM30.0944
          20.3764C28.9493 20.3818 27.8284 20.047 26.8739
          19.4144C25.9194 18.7818 25.1743 17.8798 24.7332
          16.8231C24.2921 15.7663 24.1749 14.6024 24.3964
          13.4789C24.6179 12.3554 25.1681 11.323 25.9773
          10.5127C26.7864 9.70246 27.8181 9.15082 28.9413
          8.92779C30.0644 8.70477 31.2286 8.82042 32.2859
          9.26007C33.3433 9.69972 34.2462 10.4435 34.8801
          11.3972C35.5141 12.3508 35.8504 13.4713 35.8466
          14.6164C35.8476 15.3717 35.6995 16.1198 35.4107
          16.8177C35.1219 17.5156 34.6981 18.1496 34.1636
          18.6833C33.6292 19.217 32.9946 19.6399 32.2963
          19.9278C31.598 20.2156 30.8497 20.3627 30.0944
          20.3607V20.3764ZM9.04525 20.219C12.2164 20.219
          14.6793 17.7875 14.6793
          14.1443V0H18.0826V22.922H14.7187V20.7541C13.9328
          21.5664 12.9902 22.2107 11.9481 22.6483C10.906
          23.0858 9.78596 23.3074 8.65574 23.2997C3.76525
          23.2997 0 19.7351 0 14.3292V0H3.46623V14.1639C3.46623
          17.8269 5.82689 20.219 9.04525 20.219Z"
                fill="white"
              />
              <path d={wordEats} fill="#5FB709" />
            </svg>

            <div className="footer__select">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5251 0.99999L10.5251 0.999987C10.4415
                0.989444 10.3578 0.978882 10.2729 0.978882C10.2552
                0.978882 10.2378 0.981238 10.2205 0.983588C10.2054
                0.985622 10.1904 0.987652 10.1754 0.988148C10.1481
                0.987651 10.1211 0.985616 10.094 0.98358C10.0628
                0.981232 10.0316 0.978882 10 0.978882C4.48607
                0.978882 0 5.45581 0 10.9577C0 16.4603 4.48607
                20.9365 10 20.9365C10.0317 20.9365 10.0631 20.9342
                10.0944 20.932L10.0945 20.932C10.1213 20.93 10.1481
                20.9281 10.175 20.9276C10.1902 20.9281 10.2053 20.93
                10.2204 20.932C10.2378 20.9343 10.2552 20.9365 10.2729
                20.9365C10.3623 20.9365 10.4503 20.9253 10.5382
                20.914C10.561 20.9111 10.5837 20.9082 10.6064
                20.9055C15.8379 20.5905 20 16.2561 20 10.9577C20
                5.6593 15.8379 1.32529 10.6064 1.00989C10.5793
                1.00683 10.5522 1.00341 10.5251 0.99999ZM7.00617
                2.75938C5.99331 3.92619 5.17045 5.60156 4.71867
                7.58022C3.31367 7.42804 2.46581 7.25092 2.12402
                7.16895C3.11692 5.12304 4.86741 3.542 7.00617
                2.75938ZM1.65096 8.33105C1.38846 9.16001 1.24561
                10.0424 1.24561 10.9576C1.24708 12.0328 1.44885
                13.0983 1.84061 14.0999C2.24096 14.0033 3.13311
                13.8183 4.58132 13.6615C4.42775 12.803 4.33739
                11.8995 4.33739 10.9576C4.33817 10.2381 4.38913
                9.5196 4.48989 8.80718C2.80168 8.62008 1.88953
                8.3952 1.65096 8.33105ZM2.38499 15.2518C2.83785
                15.1556 3.64928 15.0099 4.84856 14.8848C5.32035
                16.6268 6.08785 18.099 7.00713 19.1568C5.05128
                18.4427 3.41303 17.0588 2.38428
                15.2518H2.38499ZM5.98828 14.7785C6.63507
                17.2782 8.21292 19.1325 9.28435
                19.5801V14.6477C8.21292 14.6605 6.91828 14.7097
                5.98828 14.7785ZM9.2846 13.4052C8.21318 13.4187
                6.75496 13.4736 5.76068 13.5506C5.62389 12.7273
                5.58496 11.8563 5.58496 10.9579C5.58496 10.2594
                5.59853 9.57939 5.68318 8.92257C6.69282 9.0024
                8.21318 9.05978 9.2846 9.07403V13.4048V13.4052ZM5.854
                7.69091C6.81186 7.76397 8.21257 7.81814 9.284
                7.83133V7.83097V2.33621C8.21257 2.81662 6.45222
                4.91288 5.854 7.69091ZM17.8435 7.10074C17.6482
                7.16061 16.8567 7.38086 15.2914 7.56582C14.9382
                5.69123 14.3007 4.09391 13.4692 2.94064C15.3753
                3.76496 16.9253 5.24895 17.8435
                7.10038V7.10074ZM14.1368 7.68891C13.55 4.87631 11.7843
                2.76115 10.7129 2.31745V7.83146C11.7843 7.81827 13.1943
                7.76375 14.1368 7.68891ZM10.7129 9.07406C11.7843 9.06016
                13.2861 9.00135 14.2832 8.91867C14.3654 9.57656 14.3861
                10.2576 14.3861 10.9579C14.3861 11.8574 14.354 12.7299
                14.2211 13.5542C13.2393 13.4751 11.7843 13.418 10.7129
                13.4052V9.07406ZM10.7129 14.6477V19.5986V19.599C11.7843
                19.1849 13.3707 17.3146 14.0065 14.7814C13.0886 14.7108
                11.7843 14.6605 10.7129 14.6477ZM13.4692 18.9757C14.2185
                17.9365 14.8153 16.5416 15.1835 14.9033C16.415 15.0448
                17.1907 15.2094 17.5817 15.3078C16.6401 16.9385 15.1984
                18.2242 13.4692 18.9757ZM15.4803 8.79411C15.6682 10.4179
                15.643 12.0593 15.4053 13.6766L15.4056 13.6762C16.9256
                13.8544 17.7903 14.069 18.1342 14.1691C18.5306 13.1741
                18.7556 12.0925 18.7556 10.9581C18.7551 9.83681 18.5368
                8.72626 18.1128 7.68789L18.3138 8.25454C18.2574 8.2745
                17.4053 8.56353 15.4803 8.79411Z"
                  fill="white"
                />
              </svg>

              <select className="footer__select-inside">
                <option>
              English
                </option>
                <option>
              Ukrainian
                </option>
                <option>
              Russian
                </option>
              </select>
            </div>
          </div>
          <div className="footer__left-down">
            <a
              href={androidLink}
              className="footer__button apple"
            >
              a
            </a>
            <a
              href={androidLink}
              className="footer__button android"
            >
              a
            </a>
          </div>
        </div>
        <div className="block2">
          <ul className="block2__ul">
            <li>
              <a href={aboutUberEatsLink} className="block2__link">
              About Uber Eats
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/blog/uk-UA/"
                className="block2__link"
              >
              Read our blog
              </a>
            </li>
            <li>
              <a
                href={signUpToDeliverLink}
                className="block2__link"
              >
              Sign up to deliver
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/restaurant/ru-RU/signup"
                className="block2__link"
              >
              Add your restaurant
              </a>
            </li>
          </ul>
        </div>

        <div className="block2 block3">
          <ul className="block2__ul">
            <li>
              <a
                href={getHelpLink}
                className="block2__link"
              >
              Get Help
              </a>
            </li>
            <li>
              <a
                href={readFAQLink}
                className="block2__link"
              >
              Read FAQs
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/en-UA/cities/#UA"
                className="block2__link"
              >
              View all cities
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/en-UA/restaurants-near-me/"
                className="block2__link"
              >
              Restaurants near me
              </a>
            </li>
            <li>
              <a
                href={languageLink}
                className="block2__link"
              >
                <svg
                  className="block2__svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.85585 9.88519C7.09719
                9.88495 7.33137 9.80817 7.52044 9.66731C7.70951
                9.52644 7.8424 9.32974 7.89757 9.10907C7.95274
                8.88841 7.92696 8.65671 7.82441 8.45152C7.72186
                8.24634 7.54854 8.07969 7.33255 7.97858C6.75623
                7.71659 6.21654 7.38879 5.72571 7.00264C6.47292
                6.09069 7.08716 5.08913 7.55215 4.0245C7.83626
                4.01516 8.10478 3.9002 8.29864 3.70492C8.4925
                3.50963 8.59583 3.25 8.58588 2.98316C8.57594
                2.71632 8.45354 2.46412 8.24562 2.28204C8.03769
                2.09996 7.76127 2.00291 7.47716
                2.01225H5.35613V1.00613C5.35613 0.739285
                5.24327 0.483373 5.04238 0.294688C4.84149 0.106002
                4.56902 0 4.28491 0C4.0008 0 3.72833 0.106002 3.52744
                0.294688C3.32654 0.483373 3.21368 0.739285 3.21368
                1.00613V2.01225H1.07123C0.78712 2.01225 0.514649
                2.11825 0.313755 2.30694C0.112861 2.49562 0 2.75154
                0 3.01838C0 3.28522 0.112861 3.54113 0.313755
                3.72982C0.514649 3.9185 0.78712 4.0245 1.07123
                4.0245H5.21688C4.94769 4.53634 4.63607 5.0275
                4.28491 5.49345C4.08137 5.22682 3.8832 4.95014
                3.70109 4.65333C3.55904 4.42185 3.32489 4.25285
                3.05017 4.1835C2.77545 4.11416 2.48265 4.15016
                2.23619 4.28358C1.98972 4.417 1.80979 4.63691
                1.73596 4.89494C1.66213 5.15297 1.70046 5.42797
                1.84251 5.65946C2.13394 6.12551 2.45593 6.5741
                2.80661 7.00264C2.32798 7.38563 1.80089 7.71173
                1.23727 7.97355C1.02127 8.07466 0.847956 8.24131
                0.745404 8.44649C0.642853 8.65168 0.617074 8.88338
                0.672245 9.10404C0.727417 9.32471 0.860306 9.52141
                1.04938 9.66228C1.23845 9.80314 1.47263 9.87992
                1.71396 9.88016C1.87963 9.88171 2.04321 9.84546
                2.19066 9.77451C2.94423 9.42046 3.64776 8.97938
                4.28491 8.46152C4.92252 8.9826 5.62804 9.42549
                6.38451 9.77954C6.53035 9.8497 6.692 9.88593
                6.85585 9.88519Z"
                    fill="white"
                  />
                  <path
                    d="M14.9132
                12.5966L14.3775 11.4295L14.3454 11.359L11.6995
                5.5537C11.6172 5.37221 11.4798 5.21745 11.3046
                5.10867C11.1294 4.99989 10.924 4.94189 10.7139
                4.94189C10.5039 4.94189 10.2985 4.99989 10.1233
                5.10867C9.94804 5.21745 9.81073 5.37221 9.72841
                5.5537L7.05034 11.3892L6.51473 12.5865C6.40251
                12.832 6.39871 13.1093 6.50418 13.3574C6.60965
                13.6056 6.81575 13.8042 7.07712 13.9096C7.3385
                14.015 7.63376 14.0185 7.89793 13.9195C8.16211
                13.8204 8.37357 13.6269 8.48579 13.3814L8.75895
                12.7827H12.6689L12.9421 13.3814C13.0233 13.5642
                13.1601 13.7204 13.3354 13.8305C13.5107 13.9405
                13.7167 13.9995 13.9276 14.0001C14.1051 14.0003
                14.2799 13.9591 14.4362 13.8802C14.5926 13.8013
                14.7256 13.6871 14.8233 13.5479C14.921 13.4088
                14.9804 13.249 14.9961 13.0829C15.0118 12.9169
                14.9833 12.7497 14.9132 12.5966ZM9.67485
                10.7805L10.7139 8.51171L11.753 10.7856L9.67485
                10.7805Z"
                    fill="white"
                  />
                </svg>
              English
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2019 Uber Technologies Inc.
        </p>
        <div className="footer__right-bottom">
          <ul>
            <li>
              <a
                href="https://www.uber.com/legal/ru/"
                className="block2__link footer__bottom-link"
              >
              Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.uber.com/legal/ru/"
                className="block2__link footer__bottom-link"
              >
              Terms of Use
              </a>
            </li>
            <li>
              <a
                href={pricingLink}
                className="block2__link footer__bottom-link"
              >
              Pricing
              </a>
            </li>
          </ul>
          <div className="footer__logos">
            <svg
              className="footer__bottom-svgs"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1164 0H0.883093C0.395706 0 0 0.394915
                0 0.883093V15.1164C0 15.6046 0.395706 16 0.883093
                16H8.54587V9.80386H6.46091V7.38879H8.54587V5.60785C8.54587
                3.54159 9.80755 2.41586 11.6512 2.41586C12.5351 2.41586
                13.293 2.48199 13.5141 2.5107V4.67049L12.2353
                4.67101C11.2328 4.67101 11.0395 5.1476 11.0395
                5.84654V7.388H13.4311L13.1184
                9.80281H11.0392V15.9992H15.1161C15.604 15.9992
                16 15.6032 16 15.1164V0.882566C15.9997 0.394915
                15.6043 0 15.1164 0Z"
                fill="white"
              />
            </svg>

            <svg
              className="footer__bottom-svgs"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3333 1.89305C18.6218 2.21429 17.8582 2.43216
              17.056 2.52942C17.8751 2.02968 18.5022 1.23702
              18.7993 0.295398C18.031 0.758193 17.1829 1.09424
              16.2792 1.27641C15.5556 0.489895 14.5262 0 13.3846
              0C11.1943 0 9.41835 1.80937 9.41835 4.03969C9.41835
              4.35601 9.45338 4.66496 9.52105 4.96039C6.22534 4.79174
              3.30294 3.18301 1.34702 0.738495C1.00511 1.33425 0.810611
              2.02842 0.810611 2.76943C0.810611 4.1714 1.51132 5.40841
              2.57446 6.13213C1.92449 6.10999 1.31318 5.92782 0.77801
              5.62502V5.67549C0.77801 7.63256 2.14559 9.2659 3.95895
              9.63764C3.62671 9.72873 3.27637 9.7792 2.91394
              9.7792C2.65783 9.7792 2.41016 9.75335 2.16733
              9.70411C2.6723 11.3104 4.13655 12.4785 5.8714
              12.5105C4.51469 13.5937 2.804 14.2374 0.945945
              14.2374C0.625807 14.2374 0.310471 14.2177 0
              14.182C1.75539 15.3304 3.83938 16 6.07921 16C13.375
              16 17.3629 9.84321 17.3629 4.50374L17.3496 3.98063C18.1289
              3.41439 18.803 2.70297 19.3333 1.89305Z"
                fill="white"
              />
            </svg>
            <svg
              className="footer__bottom-svgs"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9165 0H4.74736C2.31275 0 0.332031 1.98081
            0.332031 4.41542V11.5846C0.332031 14.0193 2.31275 16
            4.74736 16H11.9165C14.3513 16 16.332 14.0192 16.332
            11.5846V4.41542C16.3321 1.98081 14.3513 0 11.9165
            0ZM14.9125 11.5846C14.9125 13.2365 13.5685 14.5804
            11.9166 14.5804H4.74736C3.09551 14.5805 1.75163 13.2365
            1.75163 11.5846V4.41542C1.75163 2.76358 3.09551 1.4196
            4.74736 1.4196H11.9165C13.5685 1.4196 14.9124 2.76358
            14.9124 4.41542V11.5846H14.9125Z"
                fill="white"
              />
              <path
                d="M8.33178 3.87734C6.05844 3.87734 4.20898 5.72679
          4.20898 8.00014C4.20898 10.2734 6.05844 12.1227 8.33178
          12.1227C10.6051 12.1227 12.4546 10.2734 12.4546 8.00014C12.4546
          5.72679 10.6051 3.87734 8.33178 3.87734ZM8.33178 10.7031C6.8413
          10.7031 5.62858 9.49053 5.62858 8.00004C5.62858 6.50947 6.8412
          5.29685 8.33178 5.29685C9.82236 5.29685 11.035 6.50947 11.035
          8.00004C11.035 9.49053 9.82226 10.7031 8.33178 10.7031Z"
                fill="white"
              />
              <path
                d="M12.627 2.67383C12.3535 2.67383 12.0848 2.78456
          11.8916 2.97857C11.6975 3.17163 11.5859 3.44041 11.5859
          3.71487C11.5859 3.98847 11.6976 4.25715 11.8916 4.45116C12.0847
          4.64423 12.3535 4.7559 12.627 4.7559C12.9014 4.7559 13.1693
          4.64423 13.3633 4.45116C13.5573 4.25715 13.668 3.98838
          13.668 3.71487C13.668 3.44041 13.5573 3.17163 13.3633
          2.97857C13.1702 2.78456 12.9014 2.67383 12.627 2.67383Z"
                fill="white"
              />
            </svg>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
