import React, { useState, useEffect } from "react";
import axios from 'axios';

import styles from "./productContent.module.scss";
import { useSelector, useDispatch } from "react-redux";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import { useParams } from 'react-router-dom';

import { fetchProductByIdAsync } from '../../redux/actions/productAction';
import { addToBasketAsync } from '../../redux/actions/basketAction';
import { toast } from 'react-toastify';


const ProductContent = (props) => {
  const userInfo=useSelector(state => state.authReducer.profile);
  const product = useSelector(state => state.productByIdReducer.product)
  const dispatch = useDispatch();
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [colorVariants, setColorVariants] = useState([]);
  const [sizeVariants, setSizeVariants] = useState([]);
  const [activeSliderImages, setActiveSliderImages] = useState([]);
  const [technicalBtn, setTechnicalBtn] = useState(true);
  const [rating, setRating] = useState([]);
  const [emptyRatingStars, setEmptyRatingStars] = useState([]);
  let [basketCount, setbasketCount] = useState(1);

  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductByIdAsync(id));

  }, [id]);

  useEffect(() => {
    product?.variants?.forEach(el => {
      if (el.variantName === "color") setColorVariants(el.values);
      else if (el.variantName === "size") setSizeVariants(el.values);
    })
    setRating([]);
    setEmptyRatingStars([])
    for (let i = 0; i < Math.round(product?.ratingsAverage); i++) {
      setRating(rating => [...rating, 1])
    }

    for (let i = 0; i < 5 - Math.round(product?.ratingsAverage); i++) {
      setEmptyRatingStars(rating => [...rating, 1])
    }
  }, [product]);


  useEffect(() => {
    setActiveSliderImages(colorVariants[activeColorIndex]?.images.map(el => {
      return el.url
    }))

  }, [colorVariants, activeColorIndex]);

  useEffect(() => {
  }, [activeSliderImages]);
  useEffect(() => {
    setbasketCount(1);
  }, [activeColorIndex, activeSizeIndex]);
  function decrementBasketCount() {
    if (basketCount !== 1) setbasketCount(basketCount - 1);
  }

  function incrementBasketCount() {
    setbasketCount(basketCount + 1);
  }

  function addToCart() {
    const variants = [{ name: "", value: "" }, { name: "", value: "" }];
    variants[0].name = "color";
    variants[0].value = colorVariants[activeColorIndex]?.name;
    variants[1].name = "size";
    variants[1].value = sizeVariants[activeSizeIndex]?.name;
    const price = sizeVariants.length !== 0 ? sizeVariants[activeSizeIndex]?.price : product.price;
    const photo = colorVariants[activeColorIndex]?.images[0].url;
    const name = product.name;
    const productId = id;
    const quantity = basketCount;
    dispatch(addToBasketAsync({ productId, quantity, variants, price, photo, name }));
    toast.success('Məhsul səbətə əlavə edildi');

  }

  if (!product) return <div>Product Not Found</div>
  return (
    <div className={styles.productContentPage}>
      {
        product && <div className="container">
          <div className={styles.mainInfo}>
            <div className={styles.productImages}>
              <ProductGallery images={activeSliderImages} />
            </div>
            <div className={styles.productContent}>
              <h2>
                {`${product.name} ${sizeVariants.length !== 0 ? ", "+sizeVariants[activeSizeIndex]?.name : ""} , ${colorVariants[activeColorIndex]?.name}`}
              </h2>
              <div className={styles.productRatings}>
                <div className={styles.stars}>
                  {
                    rating.map(el => {
                      return <span className={styles.star}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                            fill="#F2994A"
                            stroke="#F2994A"
                          />
                        </svg>
                      </span>
                    })
                  }
                  {
                    emptyRatingStars.map(el => {
                      return <span className={styles.star}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                            fill="white"
                            stroke="#F2994A"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    })
                  }
                </div>
                {product?.reviews?.length !== 0 && <><p className={styles.ratesCount}>({product?.ratingsQuantity})</p>
                  <span className={styles.lineY}></span>
                  <p className={styles.commentCount}>{product?.reviews?.length} rəy</p></>}

              </div>
              <div className={styles.productPrice}>
                {/* <del>{product.price} ₼</del> */}
                <span>{sizeVariants.length !== 0 ? sizeVariants[activeSizeIndex]?.price : product.price} ₼</span>
              </div>
              <span className={styles.lineX}></span>

              <div className={styles.productColors}>
                <h5>Rəng:</h5>
                <div className={styles.colors}>
                  {colorVariants?.map((el, index) => {
                    return <span
                      key={index}
                      onClick={() => setActiveColorIndex(index)}
                      className={activeColorIndex === index ? `${styles.active} ${styles.color}` : styles.color}
                      style={{ backgroundColor: el.name }}
                    ></span>
                  })}
                </div>
              </div>
              {sizeVariants.length !== 0 && <div className={styles.productCapacities}>
                <h5>Yaddaş:</h5>

                {sizeVariants?.map((size, index) => <span key={index} onClick={() => setActiveSizeIndex(index)}
                  className={activeSizeIndex === index ? `${styles.active} ${styles.capacity}` : styles.capacity}
                >{size.name}</span>)}

              </div>
              }
              <span className={styles.lineX}></span>
              <div className={styles.productCount}>
                <span onClick={decrementBasketCount}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.799805 5H9.1998"
                      stroke="#4F4F4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p>{basketCount}</p>
                <span onClick={incrementBasketCount}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 0.799995V9.2"
                      stroke="#4F4F4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.799805 4.99999H9.1998"
                      stroke="#4F4F4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.basket}>
                <div className={styles.priceMobile}>
                  <del>3012 ₼</del>
                  <span>2089 ₼</span>
                </div>
                <div className={styles.addBasketBtn} onClick={addToCart}>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.72293 18.7514C8.17936 18.7514 8.54938 18.376 8.54938 17.9128C8.54938 17.4497 8.17936 17.0742 7.72293 17.0742C7.2665 17.0742 6.89648 17.4497 6.89648 17.9128C6.89648 18.376 7.2665 18.7514 7.72293 18.7514Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.8138 18.7514C17.2702 18.7514 17.6402 18.376 17.6402 17.9128C17.6402 17.4497 17.2702 17.0742 16.8138 17.0742C16.3573 17.0742 15.9873 17.4497 15.9873 17.9128C15.9873 18.376 16.3573 18.7514 16.8138 18.7514Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.11133 1.14082H4.41711L6.63199 12.3697C6.70756 12.7558 6.91456 13.1026 7.21674 13.3494C7.51892 13.5962 7.89703 13.7274 8.28488 13.7198H16.3179C16.7058 13.7274 17.0839 13.5962 17.3861 13.3494C17.6883 13.1026 17.8953 12.7558 17.9708 12.3697L19.2931 5.33382H5.24356"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Səbətə at
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.additionalInfo}>
            <div
              className={`${styles.generalInfo} ${!technicalBtn && styles.active
                }`}
            >
              <h3>Məhsul haqqında</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                lobortis mi blandit aliquet sed placerat. Gravida nunc adipiscing
                donec aliquet sit. Arcu diam eget sit nunc ac quisque morbi.
                Bibendum commodo eget ac nunc ut. Justo venenatis vitae,
                pellentesque accumsan. Maecenas sed rhoncus amet cursus venenatis,
                ipsum sollicitudin eget risus. Blandit vitae turpis eget arcu leo
                malesuada diam. At semper nunc orci, accumsan, fringilla aliquam.
                Turpis quam tortor nunc, est, sem nunc, lacus. Scelerisque
                adipiscing libero, cras eu, donec nibh. Lacus aliquet pellentesque
                morbi ullamcorper. Cursus tristique viverra et sed semper.
              </p>
            </div>
            <div className={styles.infoBtns}>
              <div
                className={`${styles.infoBtn} ${technicalBtn && styles.active}`}
                onClick={() => !technicalBtn && setTechnicalBtn(!technicalBtn)}
              >
                Texniki Xüsusiyyətləri
              </div>
              <div
                className={`${styles.infoBtn} ${!technicalBtn && styles.active}`}
                onClick={() => technicalBtn && setTechnicalBtn(!technicalBtn)}
              >
                Rəylər
              </div>
            </div>
            <div
              className={`${styles.technicalInfo} ${!technicalBtn && styles.active
                }`}
            >
              <div className={styles.infoSection}>
                <h3 className={styles.infoHeader}>Əsas göstəricilər</h3>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
              </div>
              <div className={styles.infoSection}>
                <h3 className={styles.infoHeader}>Əsas göstəricilər</h3>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
              </div>
              <div className={styles.infoSection}>
                <h3 className={styles.infoHeader}>Əsas göstəricilər</h3>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
                <p>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </p>
              </div>
            </div>
            <div
              className={`${styles.commentsSection} ${technicalBtn && styles.active
                }`}
            >
              <div className={styles.comment}>
                <div className={styles.commentRate}>
                  <h2>4</h2>
                  <div className={styles.commentStars}>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="white"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <h3>Gunel Mammadova</h3>
                    <span className={styles.commentDate}>5 gün əvvəl</span>
                  </div>
                  <span className={styles.productInfo}>
                    Yaddaş - 64, Rəng - Qara
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                    nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                    tincidunt quis. Et tristique amet aenean nibh porttitor quis
                    aliquam integer. Consectetur lacus, volutpat malesuada libero.
                    Sollicitudin libero pharetra a.
                  </p>
                </div>
              </div>
              <div className={styles.comment}>
                <div className={styles.commentRate}>
                  <h2>4</h2>
                  <div className={styles.commentStars}>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="white"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <h3>Gunel Mammadova</h3>
                    <span className={styles.commentDate}>5 gün əvvəl</span>
                  </div>
                  <span className={styles.productInfo}>
                    Yaddaş - 64, Rəng - Qara
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                    nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                    tincidunt quis. Et tristique amet aenean nibh porttitor quis
                    aliquam integer. Consectetur lacus, volutpat malesuada libero.
                    Sollicitudin libero pharetra a.
                  </p>
                </div>
              </div>
              <div className={styles.comment}>
                <div className={styles.commentRate}>
                  <h2>4</h2>
                  <div className={styles.commentStars}>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="white"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <h3>Gunel Mammadova</h3>
                    <span className={styles.commentDate}>5 gün əvvəl</span>
                  </div>
                  <span className={styles.productInfo}>
                    Yaddaş - 64, Rəng - Qara
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                    nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                    tincidunt quis. Et tristique amet aenean nibh porttitor quis
                    aliquam integer. Consectetur lacus, volutpat malesuada libero.
                    Sollicitudin libero pharetra a.
                  </p>
                </div>
              </div>
              <div className={styles.comment}>
                <div className={styles.commentRate}>
                  <h2>4</h2>
                  <div className={styles.commentStars}>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="#F2994A"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.star}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
                          fill="white"
                          stroke="#F2994A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <h3>Gunel Mammadova</h3>
                    <span className={styles.commentDate}>5 gün əvvəl</span>
                  </div>
                  <span className={styles.productInfo}>
                    Yaddaş - 64, Rəng - Qara
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                    nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                    tincidunt quis. Et tristique amet aenean nibh porttitor quis
                    aliquam integer. Consectetur lacus, volutpat malesuada libero.
                    Sollicitudin libero pharetra a.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.addComment}>
            <form action="">
              <div className={styles.inputBox}>
                <label htmlFor="name">Ad</label>
                <input value={userInfo && userInfo.name} type="text" id="name" placeholder="Adınızı daxil edin" />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="surname">Soyad</label>
                <input
                value={userInfo && userInfo.surname}
                  type="text"
                  id="surname"
                  placeholder="Soyadınızı daxil edin"
                />
              </div>
              <div className={styles.textBox}>
                <label htmlFor="comment">Rəyinizi yazın</label>
                <textarea
                  id="comment"
                  placeholder="Rəyinizi bura yazın"
                ></textarea>
              </div>
              <button>Rəyinizi bildirin</button>
            </form>
          </div>
        </div>
      }

    </div>
  );
};

export default ProductContent;
