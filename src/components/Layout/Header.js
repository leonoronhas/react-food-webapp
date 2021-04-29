import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food Ordering</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="table with several sushi plates"
        />
      </div>
    </>
  );
};

export default Header;
