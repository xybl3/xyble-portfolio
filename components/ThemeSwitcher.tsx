import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setLight } from "../state/themeSlice";

function ThemeSwitcher() {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <button
      className="rounded-xl px-2 py-1 border-2 ease-in-out duration-300 hover:rotate-6"
      onClick={() => dispatch(theme ? setLight() : setDark())}
    >
      {theme ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
}

export default ThemeSwitcher;
