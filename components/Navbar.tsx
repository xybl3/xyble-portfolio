import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="w-screen h-20 bg-slate-800 flex flex-row justify-center items-center gap-3 p-5">
      <div className="fixed right-6">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
