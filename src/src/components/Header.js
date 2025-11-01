import React from "react";

function Header ({onDarkModeClick , isDarkMode}) {
  
    return(
        <div>
        <h1>Shopster</h1>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        </div>
    )

}

export  default Header;