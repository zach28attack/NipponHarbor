import Class from "./ArticleShow.module.css";
import {useNavigate} from "react-router";
import {MdArrowBackIosNew} from "react-icons/md";

export default function ArticleShow() {
  const article = {
    title: "茨城 車突入事件 容疑者の母親「一緒に出かけた帰りに突然」",
    img: "/Yen_Img.jpg",
    author: "Authur Morgan",
    date: "12月8日 4時39分",
    category: "Politics",
    summary: `7日のニューヨーク外国為替市場では、日銀が今の大規模な金融緩和策の修正に踏み切るのではないかという観測が広がったことを背景に日米の金利差の縮小が意識されて円高ドル安が進み、円相場はおよそ4か月ぶりに一時、1ドル＝141円台まで値上がりしました。`,
    body: `
    7日のニューヨーク外国為替市場では円高ドル安が進み、円相場は一時、1ドル＝141円台後半まで値上がりしました。
    
    1ドル＝141円台をつけるのはことし8月以来、およそ4か月ぶりです。
    
    7日の東京市場では、日銀の植田総裁が「年末から来年にかけて一段とチャレンジングになると思っている」と発言したことなどから、日銀が今の大規模な金融緩和策の修正に踏み切るのではないかとの観測が広がって、円高ドル安が進みましたが、ニューヨーク市場でもこの流れを引き継いで日米の金利差の縮小が意識され、円買いドル売りが加速しました。
    
    市場関係者は「FRB＝連邦準備制度理事会の利上げが終結したとの見方からアメリカの長期金利が低下傾向にあることもあって、植田総裁の発言をきっかけに円を買ってドルを売る投資家が多い」と話しています。
    `,
  };
  const {title, img, body, summary} = article;

  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className={Class.container}>
      <button onClick={goBackHandler} className={Class.backButton}>
        <MdArrowBackIosNew />
        Go Back
      </button>
      <div className={Class.article}>
        <header>
          <img src={img} alt="article img" />
          <h1>{title}</h1>
        </header>
        <section>
          <p>{summary}</p>
          <p>{body}</p>
        </section>
      </div>
    </div>
  );
}
