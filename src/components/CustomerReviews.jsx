import { Carousel, Divider } from "antd";
import styled from "styled-components";

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

const CarouselWrapper = styled.div`
  max-width: 1000px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ReviewSlide = styled.div`
  border: 1px solid red;
  padding: 20px;
`;

const CarouselStyledArrows = styled(Carousel)`
  &.slick-prev {
    left: -60px !important;
  }

  &.slick-next {
    right: -60px !important;
  }
`;

const CustomerReviews = () => {
  return (
    <CarouselWrapper>
      <h1 style={{ color: "#1290cb" }}>Клиентите за нас</h1>
      <p style={{ color: "#1290cb" }}>
        Имаме изградена отлична репутация както в България така и във
        Великобритания.
      </p>
      <p style={{ color: "#1290cb" }}>
        Все повече клиенти ни се доверяват заради нашия професионализъм и
        качество в извършените услуги.
      </p>
      <CarouselStyledArrows infinite autoplay arrows autoplaySpeed={5000}>
        {Reviews.map((review) => (
          <ReviewSlide key={review.author}>
            <Divider />
            <p>&quot;{review.text}&quot;</p>
            <p>- {review.author}</p>
            <Divider />
          </ReviewSlide>
        ))}
      </CarouselStyledArrows>
    </CarouselWrapper>
  );
};

export default CustomerReviews;
