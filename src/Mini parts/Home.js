import React, { useEffect, useState, useRef, useContext } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "./Navbar";
import { productContext, productContext2 } from "../App";
function Home() {
  const products = useContext(productContext);
  const products2 = useContext(productContext2);
  const slide = useRef(null);
  const [swipeid, setSwipeid] = useState(0);

  useEffect(() => {
    //auto swipe
    const myInterval = setInterval(autoSlide, 5000);
    return () => {
      clearInterval(myInterval);
    };
  }, [swipeid]);



  const autoSlide = () => {
    if (swipeid < 4) {
      setSwipeid(swipeid + 1);
    } else {
      setSwipeid(0);
    }
    const cards = document.querySelectorAll(`.swipeable-cards`);
    cards.forEach((card) => {
      if (card.id == swipeid) {
        card.style.display = `grid`;
      } else {
        card.style.display = `none`;
      }
    });
  };
  const slideRight = (event) => {
    event.preventDefault();

    if (swipeid < 4) {
      setSwipeid(swipeid + 1);
    } else {
      setSwipeid(0);
    }
    const cards = document.querySelectorAll(`.swipeable-cards`);

    cards.forEach((card) => {
      if (card.id == swipeid) {
        card.style.display = `grid`;
      } else {
        card.style.display = `none`;
      }
    });
  };
  const swipeleft = (event) => {
    event.preventDefault();

    if (swipeid != 0) {
      setSwipeid(swipeid - 1);
    } else {
      setSwipeid(4);
    }
    const cards = document.querySelectorAll(`.swipeable-cards`);

    cards.forEach((card) => {
      if (card.id == swipeid) {
        card.style.display = `grid`;
      } else {
        card.style.display = `none`;
      }
    });
  };

 
 
  return (
    <>
      <div className="hero">
        <div ref={slide} className="swipe-cards" >
          <button onClick={swipeleft} className="arrow-forward">
            ⟨
          </button>

          {Array.isArray(products) ? (
            <>
              {Array.isArray(products2) ? (
                <>
                  <div className="swipeable-cards" id={4}>
                    <p>{products[1].title}</p>
                    <span>{products[1].description}</span>
                    <img src={products[1].image} alt={products[1].title} />
                    <div className="card-price">
                      <p className="card-offer">Big deal, {`50`}% off</p>
                      <p>${products[1].price}</p>
                    </div>
                  </div>
                  <div className="swipeable-cards" id={0}>
                    <p>{products2[3].title}</p>
                    <span>{products2[3].description}</span>
                    <img src={products2[3].image} alt={products2[3].title} />
                    <div className="card-price">
                      <p className="card-offer">Big deal, {`80`}% off</p>
                      <p>${products2[3].price}</p>
                    </div>
                  </div>
                  <div className="swipeable-cards" id={1}>
                    <p>{products2[14].title}</p>
                    <span>{products2[14].description}</span>
                    <img src={products2[14].image} alt={products2[14].title} />
                    <div className="card-price">
                      <p className="card-offer">Big deal, {`65`}% off</p>
                      <p>${products2[14].price}</p>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="swipeable-cards" id={2}>
                <p>{products[29].title}</p>
                <span>{products[29].description}</span>
                <img src={products[29].image} alt={products[29].title} />
                <div className="card-price">
                  <p className="card-offer">Big deal, {`77`}% off</p>
                  <p>${products[29].price}</p>
                </div>
              </div>
              <div className="swipeable-cards" id={3}>
                <p>{products[42].title}</p>
                <span>{products[42].description}</span>
                <img src={products[42].image} alt={products[42].title} />
                <div className="card-price">
                  <p className="card-offer">Big deal, {`40`}% off</p>
                  <p>${products[42].price}</p>
                </div>
              </div>
            </>
          ) : null}

          <button onClick={slideRight} className="arrow-backward">
            ⟩
          </button>
        </div>

        <div className="products-container">
          {Array.isArray(products) ? (
            <>
              <div className="mini-card">
                <p>Headsets || Popular products</p>
                <div className="card">
                  <img src={products[0].image} alt={products[0].title} />
                  <span>{products[0].title}</span>
                </div>
                <div className="card">
                  <img src={products[4].image} alt={products[4].title} />
                  <span>{products[4].title}</span>
                </div>
                <div className="card">
                  <img src={products[2].image} alt={products[2].title} />
                  <span>{products[2].title}</span>
                </div>
                <div className="card">
                  <img src={products[3].image} alt={products[3].title} />
                  <span>{products[3].title}</span>
                </div>
              </div>

              <div className="mini-card">
                <p> Trending products</p>
                <div className="card">
                  <img src={products[5].image} alt={products[5].title} />
                  <span>{products[5].title}</span>
                </div>
                <div className="card">
                  <img src={products[6].image} alt={products[6].title} />
                  <span>{products[6].title}</span>
                </div>
                <div className="card">
                  <img src={products[24].image} alt={products[24].title} />
                  <span>{products[24].title}</span>
                </div>
                <div className="card">
                  <img src={products[8].image} alt={products[8].title} />
                  <span>{products[8].title}</span>
                </div>
              </div>

              <div className="mini-card">
                <p>Mobile phones || recomendations</p>
                <div className="card">
                  <img src={products[9].image} alt={products[9].title} />
                  <span>{products[9].title}</span>
                </div>
                <div className="card">
                  <img src={products[14].image} alt={products[14].title} />
                  <span>{products[14].title}</span>
                </div>
                <div className="card">
                  <img src={products[10].image} alt={products[10].title} />
                  <span>{products[10].title}</span>
                </div>
                <div className="card">
                  <img src={products[12].image} alt={products[12].title} />
                  <span>{products[12].title}</span>
                </div>
              </div>

              <div className="mini-card">
                <p>Mobile phones || trending</p>
                <div className="card">
                  <img src={products[11].image} alt={products[11].title} />
                  <span>{products[11].title}</span>
                </div>
                <div className="card">
                  <img src={products[15].image} alt={products[15].title} />
                  <span>{products[15].title}</span>
                </div>
                <div className="card">
                  <img src={products[18].image} alt={products[18].title} />
                  <span>{products[18].title}</span>
                </div>
                <div className="card">
                  <img src={products[17].image} alt={products[17].title} />
                  <span>{products[17].title}</span>
                </div>
              </div>

              <div className="mini-card">
                <p>offer 50% off</p>
                <div className="card">
                  <img src={products[19].image} alt={products[19].title} />
                  <span>{products[19].title}</span>
                </div>
                <div className="card">
                  <img src={products[20].image} alt={products[20].title} />
                  <span>{products[20].title}</span>
                </div>
                <div className="card">
                  <img src={products[22].image} alt={products[22].title} />
                  <span>{products[22].title}</span>
                </div>
                <div className="card">
                  <img src={products[23].image} alt={products[23].title} />
                  <span>{products[23].title}</span>
                </div>
              </div>

              {Array.isArray(products2)
                ? products2 &&
                  products2.length > 6 && (
                    <>
                      <div className="mini-card solo">
                        <p>Women fashion</p>
                        <div className="card">
                          <img
                            src={products2[19].image}
                            alt={products2[19].title}
                          />
                          <span>{products2[19].title}</span>
                        </div>
                      </div>

                      <div className="mini-card solo">
                        <p> Jwellery</p>
                        <div className="card">
                          <img
                            src={products2[6].image}
                            alt={products2[6].title}
                          />
                          <span>{products2[6].title}</span>
                        </div>
                      </div>

                      <div className="mini-card solo">
                        <p> Clothing For Men</p>

                        <div className="card">
                          <img
                            src={products2[1].image}
                            alt={products2[1].title}
                          />
                          <span>{products2[1].title}</span>
                        </div>
                      </div>

                      <div className="long-card">
                        <div className="tv-card">
                          <img
                            src={products[46].image}
                            alt={products[46].title}
                          />
                          <span>{products[46].title}</span>
                        </div>
                        <div className="tv-card">
                          <img
                            src={products[49].image}
                            alt={products[49].title}
                          />
                          <span>{products[49].title}</span>
                        </div>
                        <div className="tv-card">
                          <img
                            src={products[45].image}
                            alt={products[45].title}
                          />
                          <span>{products[45].title}</span>
                        </div>
                        <div className="tv-card">
                          <img
                            src={products[48].image}
                            alt={products[48].title}
                          />
                          <span>{products[48].title}</span>
                        </div>
                      </div>
                    </>
                  )
                : null}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Home;
