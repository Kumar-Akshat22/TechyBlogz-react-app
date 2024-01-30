import React, { useContext } from "react";
import Switch from "react-switch";
import { AppContext } from "../context/AppContext";
// import sun from '../../public/sun.png'
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { theme, setTheme, clickHandler } = useContext(AppContext);
  return (
    <div className="w-full drop-shadow-md" id={theme}>
      <div className="w-full mx-auto flex items-center justify-evenly p-2 head">
        <header>
          <h1 className="text-2xl md:text-3xl font-bold uppercase title">
            Techy Blogz
          </h1>
        </header>
        <div className="flex flex-row-reverse items-center gap-x-3">
          {/* <label htmlFor="togglebtn" className="togglebtnlabel">
            {theme === "Light" ? "Light Mode" : "Dark Mode"}
          </label> */}
          <Switch
          className="relative"
            id="togglebtn"
            checkedIcon={<FaSun className="text-yellow-300 text-lg absolute top-1 left-1" size={21} />}
            uncheckedIcon={<FaMoon className="text-black text-lg absolute top-1 left-1" size={20} />}
            offHandleColor="#ffee00"
            onHandleColor="#2c2828"
            checked={theme === "Dark"}
            onChange={clickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
