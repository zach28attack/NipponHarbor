import ArticleCard from "../components/articles/ArticleCard";
import Class from "./ArticleIndex.module.css";
import {getArticles} from "../../apis/articles";

export default function ArticlesIndex() {
  const article = {
    title: "茨城 車突入事件 容疑者の母親「一緒に出かけた帰りに突然」",
    img: "/Yen_Img.jpg",
    author: "Authur Morgan",
    date: "12月8日 4時39分",
    category: "Politics",
  };

  getArticles();

  return (
    <div className={Class.container}>
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
      <ArticleCard article={article} />
    </div>
  );
}
