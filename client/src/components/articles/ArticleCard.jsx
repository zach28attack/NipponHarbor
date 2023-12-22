import Class from "./ArticleCard.module.css";
import {Link} from "react-router-dom";

export default function ArticleCard({headline, img_url, url}) {
  return (
    <div className={Class.container}>
      <img src={`https://www3.nhk.or.jp${img_url}`} />
      <div className={Class.content}>
        <header>
          <Link to="/articles/show">
            <span>{headline}</span>
          </Link>
        </header>
        <footer>
          <time>{new Date().getDate()}</time>
          <span>NEW</span>
        </footer>
      </div>
    </div>
  );
}
