import { Carousel, Divider, Flex } from "antd";
import "../styles/CustomerReviews.css";

const Reviews = [
  {
    text: "Много приятен човек, страшно добре си свърши работата. Диванът блести, а аз тотално нямах ангажимент и можех да си върша работата, докато той си работеше.",
    author: "Teodora B.",
  },
  {
    text: "Благодаря на екипа! За ентусиазма и доброто отношение. Пропуснаха дребни детайли. Откровено казано и аз не ги виждах по време на действието. Препоръчвам горещо! Ако ми се наложи отново - дори ме бих търсила, директно ще искам същия екип. Браво за професионализма!",
    author: "Екатерина г.",
  },
  {
    text: "Постара се доста момчето да отстрани всички петна от децата по меката мебел. Повече впечатления ще имам след изсъхването на диваните. Благодаря!",
    author: "Христина Й.",
  },
];

const CustomerReviews = () => {
  return (
    <div style={{ maxWidth: "1000px", marginTop: "50px" }}>
      <h1 style={{ color: "#1290cb" }}>Клиентите за нас</h1>
      <p style={{ color: "#1290cb" }}>
        Имаме изградена отлична репутация както в България така и във
        Великобритания.
      </p>
      <p style={{ color: "#1290cb" }}>
        Все повече клиенти ни се доверяват заради нашия професионализъм и
        качество в извършените услуги.
      </p>
      <Carousel
        infinite
        style={{ width: "100%", margin: "0 auto" }} // Fully responsive width
        autoplay
        arrows
        autoplaySpeed={5000}
      >
        {Reviews.map((review) => (
          <Flex
            style={{ border: "1px solid red", padding: "20px" }}
            key={review.author}
            // align="center"
            // justify="center"
          >
            <Divider />
            <p>&quot;{review.text}&quot;</p>
            <p> - {review.author}</p>
            <Divider />
          </Flex>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
