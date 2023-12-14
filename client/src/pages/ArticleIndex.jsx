import ArticleCard from "../components/articles/ArticleCard";
import Class from "./ArticleIndex.module.css";
import {getArticles} from "../../apis/articles";
import {useEffect, useState} from "react";

export default function ArticlesIndex() {
  const [articles, setArticles] = useState([]);
  const [finishLoading, setFinishLoading] = useState(false);

  const getAndSetArticles = async () => {
    const data = await getArticles();
    if (data) {
      setArticles(data);
      setFinishLoading(true);
      console.log("done loading", data);
    }
  };

  useEffect(() => {
    getAndSetArticles();
  }, []);

  return (
    <div className={Class.container}>
      {articles.length > 0 &&
        articles.map((article) => (
          <ArticleCard headline={article.headline} img_url={article.img_url} url={article.url} key={article.url} />
        ))}
    </div>
  );
}
