import React, { Children, createElement } from "react";
import { useEffect, useState, useReducer, useRef, useContext } from "react";
import "./Navbar.css";
import lists from "./Contry.js";
import axios from "axios";
import "./cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home.js";
import { productContext, productContext2 } from "../App";

const CartIcon = () => {
  return <FontAwesomeIcon icon={faShoppingCart} />;
};

function Navbar() {
  const [countries, setCountry] = useState(lists.fullCountryName);
  const [countrycode, setCountrycode] = useState(
    `https://flagsapi.com/IN/shiny/64.png`
  );
  const [countryShort, setCountryShort] = useState(lists.countries);
  const [languages, setLanguage] = useState(lists.languages);
  const countryRef = useRef(null);
  const countrySetRef = useRef(null);
  const resultsContRef = useRef(null);
  const resultsContRefOuter = useRef(null);
  const [visible, setVisible] = useState(false);
  const [searchVal, setSearchVal] = useState(``);
  const [productSearchVal, setProductSearchVal] = useState(``);
  const products = useContext(productContext);
  const products2 = useContext(productContext2);

  useEffect(() => {}, []);

  const optionsToggle = (e) => {
    resultsContRef.current.style.display = `none`;
    resultsContRefOuter.current.style.display = `none`;

    if (e.target) {
      if (!visible) {
        countryRef.current.style.visibility = "visible";
        setVisible(true);
      } else {
        countryRef.current.style.visibility = "hidden";
        setVisible(false);
      }
    }

    setSearchVal(``);
    const options = countryRef.current.childNodes;
    if (options) {
      options.forEach((option) => {
        option.style.display = `flex`;
      });
    }
  };

  const countrySetter = (e) => {
    countrySetRef.current.innerHTML = e.target.id;
    countryRef.current.style.visibility = "hidden";
    setVisible(false);
    setCountrycode(`https://flagsapi.com/${e.target.id}/shiny/64.png`);

    setSearchVal(``);
    const options = countryRef.current.childNodes;
    if (options) {
      options.forEach((option) => {
        option.style.display = `flex`;
      });
    }
  };

  const countrysearch = (e) => {
    setSearchVal(e.target.value);
    const options = countryRef.current.childNodes;
    if (options) {
      options.forEach((option) => {
        if (option.innerHTML.toLowerCase().includes(searchVal.toLowerCase())) {
          option.style.display = `flex`;
        } else {
          option.style.display = `none`;
        }
      });
      options[0].style.display = ``;
    }
  };

  const search = (e) => {
    setProductSearchVal(e.target.value);
    resultsContRef.current.style.display = `flex`;
    resultsContRefOuter.current.style.display = `flex`;
    const outer = document.querySelector(`.outerShell`);
    outer.style.animationName = `searchAmv`;
    countryRef.current.style.visibility = "hidden";
    setVisible(false);

    const lastChild = resultsContRef.current.lastChild;
    const firstChild = resultsContRef.current.firstChild;
    if (e.target.value !== ``) {
      const results = resultsContRef.current.childNodes;
      const searchVal = e.target.value.toLowerCase();
      results.forEach((result) => {
        const innerText = result.innerText.slice(0, 30).toLowerCase();
        if (result.innerText === `no results...`) {
          result.style.display = `flex`;
          resultsContRef.current.insertBefore(result, lastChild);
        }
        if (innerText.includes(searchVal)) {
          result.style.display = `flex`;
          lastChild.style.display = `flex`;
        } else {
          result.style.display = `none`;
          if (result.innerText == `no results...`) {
            result.style.display = `flex`;
          }
          lastChild.style.display = `flex`;
        }
      });
    } else {
      resultsContRef.current.style.display = `none`;
      resultsContRefOuter.current.style.display = `none`;
    }

    // if (productSearchVal !== ``) {
    //   const div = document.createElement(`div`);
    //   div.setAttribute(`className`, `searchResults`);
    //   div.style.height = `20vh`;
    //   div.style.width = `40vw`;
    //   div.style.overflowY = `scroll`;
    //   div.style.position = `fixed`;
    //   div.style.zIndex = `11`;
    //   div.style.top = `7vh`;
    //   div.style.left = `29.5vw`;
    //   div.style.backgroundColor = `white`;
    //   div.style.display = `flex`;
    //   div.style.flexDirection = `column`;
    //   div.style.gap = `10px`;
    //   div.style.boxShadow = `0px 0px 5px black`;
    //   div.style.borderRadius = `10px`;
    //   div.style.overscrollBehavior = `contain`;

    //   if (products) {
    //     products.forEach((product, index) => {
    //       const option = document.createElement(`div`);
    //       option.setAttribute(`className`, `result`);
    //       option.setAttribute(`id`, `${index}`);
    //       option.setAttribute(`key`, `${index}`);

    //       const img = document.createElement(`img`);
    //       img.setAttribute(`className`, `resultImg`);
    //       const p = document.createElement(`p`);
    //       img.src = product.image;
    //       p.innerHTML = product.title;

    //       // option styling
    //       option.style.height = `60px`;
    //       option.style.width = `100%`;

    //       option.style.backgroundColor = `white`;
    //       option.style.backgroundColor = `white`;
    //       option.style.alignItems = `center`;
    //       option.style.gap = `5px`;
    //       option.style.cursor = `pointer`;

    //       p.style.overflow = `hidden`;
    //       p.style.whiteSpace = `nowrap`;
    //       p.style.textOverflow = `ellipsis`;

    //       // img styling
    //       img.style.height = `auto`;
    //       img.style.width = `50px`;
    //       if (
    //         product.title
    //           .toLowerCase()
    //           .includes(e.target.value.toLowerCase())
    //       ) {
    //         const shows = option;
    //         Array.isArray(shows)
    //           ? shows.forEach((show) => {
    //               show.style.display = `flex`;
    //             })
    //           : (shows.style.display = `flex`);
    //       } else {
    //         const hides = option;
    //         Array.isArray(hides)
    //           ? hides.forEach((hide) => {
    //               hide.style.display = `none`;
    //             })
    //           : (hides.style.display = `none`);
    //       }

    //       toogleOption(option);

    //       option.prepend(img);
    //       option.appendChild(p);
    //       div.appendChild(option);
    //     });
    //     if (resultsContRef.current.innerHTML == ``) {
    //       resultsContRef.current.appendChild(div);
    //     }
    //   }
    // }
  };

  // {  const option = document.createElement(`div`);
  //   option.setAttribute(`className`, `result`);
  //   const img = document.createElement(`img`);
  //   img.setAttribute(`className`, `resultImg`);
  //   const p = document.createElement(`p`);
  //   img.src = product.image;
  //   p.innerHTML = product.title;
  //   option.prepend(img);
  //   option.appendChild(p);
  //   div.appendChild(option);

  //     // option styling
  //     option.style.height = `60px`;
  //     option.style.width = `100%`;

  //     option.style.backgroundColor = `white`;
  //     option.style.backgroundColor = `white`;
  //     option.style.alignItems = `center`;
  //     option.style.gap = `5px`;
  //     option.style.cursor = `pointer`;
  //     option.style.display = `flex`;
  //     p.style.overflow = `hidden`;
  //     p.style.whiteSpace = `nowrap`;
  //     p.style.textOverflow = `ellipsis`;

  //     // img styling
  //     img.style.height = `auto`;
  //     img.style.width = `50px`;}

  return (
    <>
    {/* On load */}
    <div className="outer" onClick={()=>{document.querySelector(`.outer`).style.display=`none`}}>
      <div className="onLoadDiv">
        <div>
        <span className="close">X</span>
        <h2>Hey, thanks for visiting</h2>
        <span className="details">This is a demo website and I'm still working on it, so I'll add more function in the future.
          </span>
          <ul>
            <h3>example..</h3>
            <li>"GO" button in search which would open a new page of all searches.</li>
            <li>Clicking on every product will open a new detailed page of that product.</li>
            <li>Change on UI.</li>
            <li>I'll add more products.</li>
          </ul>
          <p>*Best viewed on desktop*</p>
        </div>
      </div></div>
    {/* main */}
      <div className="nav">
        <div className="logo ">
          <a className="border" href="">
            Demo
          </a>
        </div>
        <div className="search">
          <input
            className="search-box"
            value={productSearchVal}
            placeholder="search"
            onChange={search}
            type="text"
          />
          <button
            className="search-button"
            onClick={() => {
              alert(`This function will be available soon !`);
            }}
          >
            Go
          </button>
        </div>
        <span className="options">
          <a className="border" href="">
            Home
          </a>
          <a className="border" href="">
            Shop
          </a>
          <a className="border" href="">
            Menu
          </a>
        </span>
        <div className="adress">
          <div className="country border">
            <p>Location</p>
            <div>
              <img
                onClick={optionsToggle}
                className="flag"
                src={countrycode}
                alt="Ind"
              />
              <span
                ref={countrySetRef}
                className="country-name"
                onClick={optionsToggle}
              >
                IN
              </span>
              {/* Optionss */}
              {
                <div ref={countryRef} className="options-container">
                  {
                    <div className="country-search">
                      <input
                        onChange={countrysearch}
                        type="text"
                        pattern="[A-Za-z]*"
                        placeholder="search country"
                        value={searchVal}
                      ></input>
                      <button onClick={optionsToggle} className="option-close">
                        close
                      </button>
                    </div>
                  }
                  {Object.keys(countries).map((key, index) => (
                    <>
                      <div
                        onClick={countrySetter}
                        id={countries[key]}
                        className="option"
                        key={index}
                      >
                        <img
                          src={`https://flagsapi.com/${countries[key]}/shiny/64.png`}
                          alt={countries[key]}
                        />
                        {key} ({countries[key]})
                      </div>
                    </>
                  ))}
                </div>
              }
            </div>
          </div>
          <div
            className="language border"
            onClick={() => {
              resultsContRef.current.style.display = `none`;
              const outer = document.querySelector(`.outerShell`);
              outer.style.display = `none`;
              countryRef.current.style.visibility = "hidden";
              setVisible(false);
            }}
          >
            <span>Language</span>
            <select name="lang" id="" className="language-select">
              {Object.keys(languages).map((key, index) => (
                <option key={index} value={languages[key]}>
                  {languages[key]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="cart border">
          {CartIcon()} <span>0</span>
        </div>
      </div>
      <div
        ref={resultsContRefOuter}
        className="outerShell"
        onClick={() => {
          const outer = document.querySelector(`.outerShell`);
          outer.style.display = `none`;
        }}
      >
        <div ref={resultsContRef} className="resultsCont">
          <span>no results...</span>
          {Array.isArray(products)
            ? products.map((product, index) => (
                <div className="result">
                  <img src={product.image} alt={product.id} />
                  <p>{product.title}</p>
                </div>
              ))
            : null}
          {Array.isArray(products2)
            ? products2.map((product, index) => (
                <div className="result">
                  <img src={product.image} alt={product.id} />
                  <p>{product.title}</p>
                </div>
              ))
            : null}
          <button
            onClick={() => {
              resultsContRef.current.style.display = `none`;
              const outer = document.querySelector(`.outerShell`);
              outer.style.display = `none`;
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
