import AnonHeader from "@/components/anonHeader/AnonHeader";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
import AnonHero from "@/components/hero/AnonHero";

export default function AnonymousPage() {
  return (
    <div className={styles.anonWrapper}>
      <div className={styles.anonHeader}>
        <AnonHeader />
      </div>
      <div className={styles.anonMessageBlock}>
        <div>
          <h2 className="text-4xl font-semibold ">
            Your Modern Online Schoool
          </h2>
          <p className="text-sm mt-2">
            Learn English with your favorite series.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-sky-600 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl cursor-pointer">
            Start Today
          </button>
          <button className="bg-gray-700 p-2 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl cursor-pointer">
            Registration
          </button>
        </div>
      </div>
      <div className={styles.anonFooter}>
        <div>
          <h3 className="text-xl mb-4">Chose your level</h3>
          <ul className="flex items-center space-x-4 text-md">
            <li>
              <Link href="/anon/beginner" className="hover:underline">
                Beginner
              </Link>
            </li>
            <li>
              <Link href="/anon/intermediate" className="hover:underline">
                Intermediate
              </Link>
            </li>
            <li>
              <Link href="/anon/advanced" className="hover:underline">
                Advanced
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.heroContentWrapper}>
        <AnonHero />
      </div>
    </div>
  );
}
