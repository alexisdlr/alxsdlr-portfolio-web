import { useLanguageStore } from "../store/useLanguageStore";
import { translations } from "./translations";

const getNestedValue = (obj, path) =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);

export const useTranslation = () => {
  const locale = useLanguageStore((state) => state.locale);

  const t = (key) => getNestedValue(translations[locale], key) ?? key;

  return { t, locale };
};
