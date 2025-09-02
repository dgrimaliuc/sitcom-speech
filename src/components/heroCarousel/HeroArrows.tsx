import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroArrows() {
  return (
    <div className="flex gap-2 md:gap-4 text-md md:text-xl">
      <button className="cursor-pointer border rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm hover:bg-white/50 transition">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button className="cursor-pointer border rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm hover:bg-white/50 transition">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
