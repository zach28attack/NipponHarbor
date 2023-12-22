import ArticleCard from "../components/articles/ArticleCard";
import Class from "./ArticleIndex.module.css";
import {getArticles} from "../../apis/ArticlesAPI";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {ArticlesContext} from "../../context/ArticlesContext";

export default function ArticlesIndex() {
  const [articles, setArticles] = useState([]);
  const {articlesArr} = useContext(ArticlesContext);

  const getAndSetArticles = () => {
    setArticles(articlesArr);
  };

  useEffect(() => {
    getAndSetArticles();
  }, [articlesArr]);

  return (
    <div className={Class.container}>
      {articles.length > 0 &&
        articles.map((article) => (
          <ArticleCard headline={article.headline} img_url={article.img_url} url={article.url} key={article.url} />
        ))}
    </div>
  );
}
