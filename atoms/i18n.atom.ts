import { atom } from "jotai";
import { type } from "os";
type I18nAtomData = {
  locale: string;
  messages: Record<string, string>;
};
const i18nAtom = atom<I18nAtomData>({
  locale: window?.localStorage?.getItem("locale") ?? "en",
  messages: {},
});

export default i18nAtom;
