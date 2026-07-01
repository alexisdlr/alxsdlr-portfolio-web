import { useEffect } from "react";
import { useLanguageStore } from "../store/useLanguageStore";

export const useDocumentLang = () => {
  const locale = useLanguageStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
};
