"use client";

import usei18n from "@/hooks/usei18n";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type Language = {
  name: string;
  short: string;
  icon: string;
};

function LangugageSelector() {
  const { setLanguage, locale } = usei18n();
  const languagesList: Array<Language> = [
    {
      icon: "https://flagcdn.com/pl.svg",
      name: "Polski",
      short: "pl",
    },
    {
      icon: "https://flagcdn.com/gb.svg",
      name: "English",
      short: "en",
    },
    {
      icon: "https://flagcdn.com/jp.svg",
      name: "日本語",
      short: "jp",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(
    languagesList.filter((l) => l.short === locale)[0]
  );

  useEffect(() => {}, [selected]);
  return (
    <div className="relative w-32">
      <div
        className="flex flex-row justify-center gap-2 items-center relativepx-4 py-1"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Avatar src={selected.icon} className="w-5 h-5" />
        <p>{selected.short.toUpperCase() ?? "PL"}</p>

        <span
          style={{
            rotate: `${!open ? "0" : "180"}deg`,
            transition: "ease-in-out 150ms",
          }}
        >
          <FaChevronDown />
        </span>
      </div>

      <ul
        style={{
          visibility: `${open ? "visible" : "hidden"}`,
          position: "absolute",
          marginTop: "10px",
          // right: "13px",
        }}
        className="w-full "
      >
        {languagesList.map((l, i) => (
          <li
            key={l.short}
            onClick={() => {
              setOpen(false);
              setSelected(l);
              setLanguage(l.short);
            }}
            className={`
          bg-slate-900 px-5 py-2 flex flex-row gap-3 origin-top ${
            i === 0
              ? "rounded-t-lg"
              : i === languagesList.length - 1
              ? "rounded-b-lg"
              : ""
          } hover:bg-slate-800`}
          >
            <Avatar src={l.icon} className="w-5 h-5" />
            <p>{l.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangugageSelector;
