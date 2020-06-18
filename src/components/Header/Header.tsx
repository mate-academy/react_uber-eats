import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./Header.scss";
import { HeaderInput } from "../HeaderInput";
import cn from "classnames";
import { Link, useLocation, useHistory } from "react-router-dom";
import { debounce } from "../../helper/debounce";
import { useSelector } from "react-redux";
import { getCartData } from "../../store/actionTypes";

export const Header = () => {
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartLengeth = useSelector(getCartData).length;
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const query = useMemo(() => searchParams.get("query") || "", [searchParams]);

  useEffect(() => {
    if (query !== search) {
      setSearch(query);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "place":
        setPlace(e.target.value);
        break;

      case "time":
        setTime(e.target.value);
        break;

      case "search":
        setSearch(e.target.value);
        break;

      default:
        return;
    }
  };

  const startDebounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSearchWrapper(e.target.value);
    setSearch(e.target.value);
  };

  const setQueryToUrl = (query: string) => {
    if (!query) {
      searchParams.delete("query");
    } else {
      searchParams.set("query", query);
    }
    history.push({
      pathname: "/",
      search: searchParams.toString(),
    });
  };

  const debounceSearchWrapper = useCallback(
    debounce((query: string) => setQueryToUrl(query), 1000),
    []
  );

  return (
    <>
      <div className="container Head">
        <header className="Header">
          <div className="Header__Info">
            <Link to="/">
              <img src="images/logo.svg" alt="logo" className="Header__Logo" />
            </Link>
            <div className="Header__Inputs">
              <HeaderInput
                value={place}
                name="place"
                placeholder="Foster Lane st. 16"
                onChange={handleInputChange}
                type="text"
                imgUrl="images/header/markDown.svg"
                alt="mark down"
              />
              <HeaderInput
                value={time}
                name="time"
                placeholder="ASAP"
                onChange={handleInputChange}
                type="time"
                className="HeaderInput__Time"
              />
            </div>
          </div>
          <div className="Header__SignAndSearch">
            <div
              className={cn({
                Header__SearchContainer: true,
                "Header__SearchContainer--open": searchOpen,
              })}
            >
              <HeaderInput
                value={search}
                name="search"
                placeholder="Search"
                onChange={startDebounce}
                type="text"
                imgUrl="images/header/search.svg"
                alt="Search"
                className="HeaderInput__Search"
              />
              <button
                className="Header__SearchContainer--close"
                onClick={() => setSearchOpen(false)}
              >
                x
              </button>
            </div>
            <div
              className={cn({
                Header__SearchMark: true,
                "Header__SearchMark--visible": !searchOpen,
              })}
              onClick={() => setSearchOpen(true)}
            >
              <img
                src="images/header/search.svg"
                alt="search"
                className="Header__SearchImg"
              />
            </div>
            <input
              type="checkbox"
              id="toggle"
              className="nav__toggler"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label htmlFor="toggle" className="menu-hamb">
              <span className="menu__span"></span>
            </label>
            <Link to="/cart" className="Header__CartContainer">
              {cartLengeth > 0 && (
                <span className="Header__CartIcon">{cartLengeth}</span>
              )}
              <img
                src="images/header/cart.svg"
                alt="cart"
                className="Header__Cart"
              />
            </Link>
            <p className="Header__Sign">
              <a href="./#" className="Header__SignLink">
                Sign in
              </a>
            </p>
          </div>
        </header>
        <div
          className={cn({
            Header__Menu: true,
            "Header__Menu--open": menuOpen,
          })}
        >
          <HeaderInput
            value={time}
            name="time"
            placeholder="ASAP"
            onChange={handleInputChange}
            type="time"
            className="HeaderInput__Time"
          />
          <HeaderInput
            value={place}
            name="place"
            placeholder="Foster Lane st. 16"
            onChange={handleInputChange}
            type="text"
            imgUrl="images/header/markDown.svg"
            alt="mark down"
            className="HeaderInput__Place"
          />

        </div>
      </div>
    </>
  );
};
