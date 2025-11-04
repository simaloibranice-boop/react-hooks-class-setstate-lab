import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [ items ] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={handleDarkModeClick}>
            Dark Mode
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }

export default App;
