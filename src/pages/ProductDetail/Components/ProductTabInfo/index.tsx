import { useState } from 'react'
import { Rate } from 'antd'
import './productTabInfo.scss'
import {
  Avatar1,
  Avatar2,
  Avatar3,
  HeartIcon,
  StarIcon,
  productImage1,
  productImage2,
  productImage3,
  productImage4
} from '~/assets'

const tabList = ['Description', 'Review (1100)', 'Similar']
const ProductTabInfo = () => {
  const [tab, setTab] = useState(0)

  return (
    <div className='prod-tab js-tabs'>
      <ul className='prod-tab__list'>
        {tabList.map((item, index) => (
          <li
            onClick={() => setTab(index)}
            className={`prod-tab__item ${tab === index ? 'prod-tab__item--current' : ''}`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className='prod-tab__contents'>
        {tab === 0 && (
          <div className='prod-tab__content prod-tab__content--current'>
            <div className='row'>
              <div className='col-8 col-xl-10 col-lg-12'>
                <div className='text-content prod-tab__text-content'>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>
                    Lorem ipsum dolor sit amet <a href='#!'>consectetur</a> adipisicing elit. Aliquid, cupiditate. Modi,
                    quidem, ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda
                    <a href='#!'>praesentium</a> et! Illum dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    <img alt='' src={productImage1} />
                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</em>
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet <em>consectetur</em>
                      <u>adipisicing</u> elit. Aliquid, cupiditate. Modi, quidem, ullam sint dolorum recusandae
                      voluptates dignissimos similique animi assumenda praesentium et! Illum dolorem est rem voluptas
                      nam! Voluptatem.
                    </p>
                  </blockquote>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <hr />
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    <img alt='' src={productImage1} />

                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</em>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <hr />
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                  <p>
                    <img alt='' src={productImage1} />

                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</em>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem, ullam
                    sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et! Illum
                    dolorem est rem voluptas nam! Voluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className='prod-tab__content'>
            <div className='prod-content'>
              <h2 className='prod-content__heading'>What our customers are saying</h2>
              <div className='row row-cols-3 gx-lg-2 row-cols-md-1 gy-md-3'>
                <div className='col'>
                  <div className='review-card'>
                    <div className='review-card__content'>
                      <img alt='' className='review-card__avatar' src={Avatar1} />
                      <div className='review-card__info'>
                        <h4 className='review-card__title'>Jakir Hussen</h4>
                        <p className='review-card__desc'>Great product, I love this Coffee Beans</p>
                      </div>
                    </div>
                    <div className='review-card__rating'>
                      <div className='review-card__star-list'>
                        <Rate disabled allowHalf defaultValue={3.5} />
                      </div>
                      <span className='review-card__rating-title'>(3.5) Review</span>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='review-card'>
                    <div className='review-card__content'>
                      <img alt='' className='review-card__avatar' src={Avatar2} />
                      <div className='review-card__info'>
                        <h4 className='review-card__title'>Jubed Ahmed</h4>
                        <p className='review-card__desc'>Awesome Coffee, I love this Coffee Beans</p>
                      </div>
                    </div>
                    <div className='review-card__rating'>
                      <div className='review-card__star-list'>
                        <Rate disabled allowHalf defaultValue={4.5} />
                      </div>
                      <span className='review-card__rating-title'>(4.5) Review</span>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='review-card'>
                    <div className='review-card__content'>
                      <img alt='' className='review-card__avatar' src={Avatar3} />
                      <div className='review-card__info'>
                        <h4 className='review-card__title'>Delwar Hussain</h4>
                        <p className='review-card__desc'>Great product, I like this Coffee Beans</p>
                      </div>
                    </div>
                    <div className='review-card__rating'>
                      <div className='review-card__star-list'>
                        <Rate disabled allowHalf defaultValue={5} />
                      </div>
                      <span className='review-card__rating-title'>(5) Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className='prod-tab__content'>
            <div className='prod-content'>
              <h2 className='prod-content__heading'>Similar items you might like</h2>
              <div className='row row-cols-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2'>
                <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src={productImage1} />
                      </a>
                      <button className='btn-like product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src={HeartIcon} />
                        {/* <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' /> */}
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Coffee Beans - Espresso Arabica and Robusta Beans</a>
                    </h3>
                    <p className='product-card__brand'>Lavazza</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$47.00</span>
                      <img alt='' className='product-card__star' src={StarIcon} />
                      <span className='product-card__score'>4.3</span>
                    </div>
                  </article>
                </div>
                <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src={productImage2} />
                      </a>
                      <button className='btn-like product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src={HeartIcon} />
                        {/* <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' /> */}
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Lavazza Coffee Blends - Try the Italian Espresso</a>
                    </h3>
                    <p className='product-card__brand'>Lavazza</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$53.00</span>
                      <img alt='' className='product-card__star' src={StarIcon} />
                      <span className='product-card__score'>3.4</span>
                    </div>
                  </article>
                </div>
                <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src={productImage3} />
                      </a>
                      <button className='btn-like btn-like--liked product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src={HeartIcon} />
                        <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' />
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Lavazza - Caffè Espresso Black Tin - Ground coffee</a>
                    </h3>
                    <p className='product-card__brand'>Welikecoffee</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$99.99</span>
                      <img alt='' className='product-card__star' src={StarIcon} />
                      <span className='product-card__score'>5.0</span>
                    </div>
                  </article>
                </div>
                <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src={productImage4} />
                      </a>
                      <button className='btn-like product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src={HeartIcon} />
                        <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' />
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Qualità Oro Mountain Grown - Espresso Coffee Beans</a>
                    </h3>
                    <p className='product-card__brand'>Lavazza</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$38.65</span>
                      <img alt='' className='product-card__star' src={StarIcon} />
                      <span className='product-card__score'>4.4</span>
                    </div>
                  </article>
                </div>
                {/* <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src='./assets/img/product/item-1.png' />
                      </a>
                      <button className='btn-like product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src='./assets/icons/heart.svg' />
                        <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' />
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Coffee Beans - Espresso Arabica and Robusta Beans</a>
                    </h3>
                    <p className='product-card__brand'>Lavazza</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$47.00</span>
                      <img alt='' className='product-card__star' src='./assets/icons/star.svg' />
                      <span className='product-card__score'>4.3</span>
                    </div>
                  </article>
                </div>
                <div className='col'>
                  <article className='product-card'>
                    <div className='product-card__img-wrap'>
                      <a href='./product-detail.html'>
                        <img alt='' className='product-card__img' src='./assets/img/product/item-2.png' />
                      </a>
                      <button className='btn-like product-card__btn-like'>
                        <img alt='' className='like-btn__icon icon' src='./assets/icons/heart.svg' />
                        <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' />
                      </button>
                    </div>
                    <h3 className='product-card__title'>
                      <a href='./product-detail.html'>Lavazza Coffee Blends - Try the Italian Espresso</a>
                    </h3>
                    <p className='product-card__brand'>Lavazza</p>
                    <div className='product-card__row'>
                      <span className='product-card__price'>$53.00</span>
                      <img alt='' className='product-card__star' src='./assets/icons/star.svg' />
                      <span className='product-card__score'>3.4</span>
                    </div>
                  </article>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductTabInfo
