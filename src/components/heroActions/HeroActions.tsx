import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroActions() {
  return (
    <div className="hero-actions flex text-xs md:text-sm gap-1 md:gap-4">
      <button className="p-1 sm:p-2 backdrop-blur-xs border rounded-md cursor-pointer">
        Start watching
      </button>
      <button className="w-10 bg-orange-light rounded-xl cursor-pointer">
        <FontAwesomeIcon icon={faBookmark} />
      </button>
    </div>
  );
}
