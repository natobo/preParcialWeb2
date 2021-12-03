import React, { useEffect, useRef, useState } from "react";
import { IntlProvider } from "react-intl";

export const LangContext = React.createContext();

const LangWrapper = (props) => {
  // Takes the lang of the navigator
  const [locale, setLocale] = useState(navigator.language);
  const [isLoading, setIsLoading] = useState(true);

  let English = useRef({
    name: "Name",
    directedBy: "Directed By",
    country: "Country",
    budget: "Budget",
    views: "Views",
    releaseDate: "Release Date",
    movies: [],
  });
  let Spanish = useRef({
    name: "Nombre",
    directedBy: "Dirigida por",
    country: "País",
    budget: "Presupuesto",
    views: "Vistas",
    releaseDate: "Fecha de estreno",
    movies: [],
  });
  const [messages, setMessages] = useState(
    locale === "en" ? English.current : Spanish.current
  );

  useEffect(() => {  
    const fetchMessagesLang = async () => {
      const urlEn =
        "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
      const urlEs =
        "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
      const responseEn = await fetch(urlEn);
      const dataEn = await responseEn.json();
      English.current.movies = dataEn;
      const responseEs = await fetch(urlEs);
      const dataEs = await responseEs.json();
      Spanish.current.movies = dataEs;
      setIsLoading(false);
      localStorage.setItem("MoviesES", JSON.stringify(Spanish.current));
      localStorage.setItem("MoviesEN", JSON.stringify(English.current));
    };
    // Initialize the messages property
    if (!navigator.onLine) {
       console.log("Offline");
    }
    else{
        fetchMessagesLang();
    }
  }, []);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English.current);
    } else {
      setMessages(Spanish.current);
    }
  }

  return (
    <LangContext.Provider value={{ locale, selectLanguage, messages }} loading={isLoading}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export default LangWrapper;
