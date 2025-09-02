import { combineClasses } from "@/utils/utils";
import HeroArrows from "../heroCarousel/HeroArrows";
import ProgressBar from "./ProgressBar";

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Carousel({ children, className }: CarouselProps) {
  const classes = combineClasses(
    "z-1 w-full h-[18.5rem] flex flex-col justify-start overflow-hidden no-scrollbar gap-3",
    className
  );
  return (
    <div className={classes}>
      <div className="w-full h-full flex flex-row justify-start gap-2 md:gap-6 overflow-auto no-scrollbar">
        {children}
      </div>
      <div className="flex flex-row gap-2">
        <HeroArrows />
        <ProgressBar />
      </div>
    </div>
  );
}
