import Class from "./MiniArticleCard.module.css";

export default function MiniArticleCard({img, title}) {
  const navHandler = () => {
    // TODO:
    // Change context API's active article to clicked article using article ID
  };
  return (
    <div className={Class.container}>
      <img src={img} alt="article img" />
      <div>{title}</div>
    </div>
  );
}
