"use client";

import { Avatar, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import LangugageSelector from "./LangugageSelector";
import usei18n from "@/hooks/usei18n";

function AppBar() {
  const { getMessage } = usei18n();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full flex flex-row justify-between px-10 py-5">
      <div id="logo">
        <p>marszalkowski.dev</p>
      </div>
      <ul id="menu" className="list-none hidden md:flex flex-row gap-5">
        <li>{getMessage("home.nav.home")}</li>
        <li>{getMessage("home.nav.about")}</li>
        <li>{getMessage("home.nav.offer")}</li>
        <li>{getMessage("home.nav.contact")}</li>
      </ul>
      <div id="language">
        {/* <Select
          aria-label="Wybierz język/wybierz kraj"
          className="w-28"
          defaultSelectedKeys={["pl"]}
          style={{
            backgroundColor: "transparent",
          }}
        >
          <SelectItem
            startContent={
              <Avatar
                alt="Polish language"
                className="w-6 h-6"
                src="https://flagcdn.com/pl.svg"
              />
            }
            // className="w-5 h-5"
            key={"pl"}
          >
            PL
          </SelectItem>
        </Select> */}

        <LangugageSelector />
      </div>
      <div className="block md:hidden">
        <span
          className="text-2xl bg-slate-900 px-4 py-2 rounded-md text-center"
          onClick={() => {
            setOpen(true);
          }}
        >
          ☰
        </span>
      </div>
      <div
        style={{
          transition: "ease-in-out 250ms",
          // visibility: `${open ? "visible" : "hidden"}`,

          position: "absolute",
          marginTop: "10px",
          inset: "0",
          //slide animation on open
          transform: `${open ? "translateX(0)" : "translateX(-100%)"}`,
          backgroundColor: "rgba(0,0,0,0.97)",
        }}
      >
        <ul className="flex flex-col justify-center items-center h-full text-3xl">
          <li>{getMessage("home.nav.home")}</li>
          <li>{getMessage("home.nav.about")}</li>
          <li>{getMessage("home.nav.offer")}</li>
          <li>{getMessage("home.nav.contact")}</li>
        </ul>
        {/* close button */}

        <span
          className="text-2xl bg-slate-900 px-4 py-2 rounded-md text-center text-white fixed right-10 top-3"
          onClick={() => {
            setOpen(false);
          }}
        >
          ✕
        </span>
      </div>
    </nav>
  );
}

export default AppBar;
