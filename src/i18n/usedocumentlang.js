import { useEffect } from "react";
import { useLanguageStore } from "../store/uselanguagestore";

export const useDocumentLang = () => {
  const locale = useLanguageStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
};
