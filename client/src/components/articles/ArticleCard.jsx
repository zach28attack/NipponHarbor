import Class from "./ArticleCard.module.css";
import {Link} from "react-router-dom";

export default function ArticleCard({article}) {
  return (
    <div className={Class.container}>
      <img src={article.img} />
      <div className={Class.content}>
        <header>
          <Link to="/articles/show">
            <span>{article.title}</span>
          </Link>
        </header>
        <footer>
          <time>{article.date}</time>
          <span>NEW</span>
        </footer>
      </div>
    </div>
  );
}
