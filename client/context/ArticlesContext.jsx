import {createContext, useEffect, useState} from "react";
import {getArticles} from "../apis/ArticlesAPI";

export const ArticlesContext = createContext(null);

export function ArticlesArrProvider(props) {
  const [articlesArr, setArticlesArr] = useState([]);
  const [activeArticle, setActiveArticle] = useState();
  async function getArticlesData() {
    const articles = await getArticles();
    setArticlesArr(articles);
  }

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <ArticlesContext.Provider value={{articlesArr, setActiveArticle, activeArticle}}>
      {props.children}
    </ArticlesContext.Provider>
  );
}
