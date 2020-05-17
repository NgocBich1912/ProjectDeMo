import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { fetchAllCategory } from "../../action/category";
const renderChildrenNavigation = () => {
    return {
        
    }
}
export default function Navgation(props) {
  const dispatch = useDispatch();
  const { listcategory } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);
  return (
    <div className="nav-bar">
      <div className="header-upper">
        <div className="auto-container">
          <div className="logo-outer">
            <div className="logo">
              <Link to="/" className="logo">
                <img src="" alt="logo"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="auto-container">
          <div className="nav-outer">
            <div className="main-menu">
              <div className="navbar-collapse">
                <div className="nav-menu">
                <ul >
                  <li className="Nav-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  {listcategory &&
                    Object.keys(listcategory).map((val, key) => (
                      <li className="Nav-item" key={key}>
                        <Link to={`${listcategory[val].slug}`}>
                          {listcategory[val].name}
                        </Link>
                      </li>
                    ))}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
