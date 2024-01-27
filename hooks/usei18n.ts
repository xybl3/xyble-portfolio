import i18nAtom from "@/atoms/i18n.atom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const usei18n = () => {
  const [i18nData, setI18nData] = useAtom(i18nAtom);

  useEffect(() => {
    const load = () => {
      const locString = require(`../locales/${i18nData.locale}.json`);
      setI18nData({ ...i18nData, messages: locString });
    };
    load();
  }, [i18nData.locale]);

  const setLanguage = (lang: string) => {
    console.log("setLanguage", lang);
    window.localStorage.setItem("locale", lang);
    setI18nData({ ...i18nData, locale: lang });
  };

  const getMessage = (key: string) => {
    return i18nData.messages[key];
  };

  return { setLanguage, getMessage, locale: i18nData.locale };
};

export default usei18n;
