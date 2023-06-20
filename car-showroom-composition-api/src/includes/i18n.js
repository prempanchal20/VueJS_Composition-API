import { createI18n } from "vue-i18n";
import en from "../../locals/en.json";
import hi from "../../locals/hi.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    hi,
  },
});
