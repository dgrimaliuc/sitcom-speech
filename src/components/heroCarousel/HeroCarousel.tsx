import BrowseCard from "../browseCard/BrowseCard";
import Carousel from "../carousel/Carousel";
import HeroActions from "../heroActions/HeroActions";

import styles from "./styles.module.scss";

const heroCards = [
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  },
  {
    title: "Demon Slayer",
    poster: "https://image.tmdb.org/t/p//w780/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <>
      <div className={styles.heroCarouselWrapper}>
        {/* ${styles.fadeOut} */}
        <div className={`${styles.heroCarouselContainer}`}>
          <div className={styles.heroCarouselPoster}>
            <picture>
              <img src="/images/demon_slayer.webp" alt="" />
            </picture>
          </div>
          <div className={styles.heroCarouselBody}>
            <div className="flex flex-col gap-2">
              <p className="hero-tagline pl-2 italic text-gray-900">Tagline</p>
              <h2 className="hero-title text-3xl md:text-6xl">Title</h2>
              <p className="hero-description text-xs">Description</p>
            </div>
            <HeroActions />
          </div>
        </div>
      </div>

      <Carousel className={styles.heroCarouselScrollableSection}>
        {heroCards.map((card, index) => (
          <BrowseCard key={index} title={card.title} poster={card.poster} />
        ))}
      </Carousel>
    </>
  );
}
