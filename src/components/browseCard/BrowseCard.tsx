"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";

export type BrowseCardProps<
  T extends keyof React.JSX.IntrinsicElements = "div"
> = {
  title: string;
  poster: string;
  media_type?: string;
  as?: T;
  id?: number;
};

const BrowseCard = ({ title, poster, media_type, as, id }: BrowseCardProps) => {
  // const link = as === "div" ? undefined : `/${media_type}/${id}`;
  return (
    <div className="w-full h-full">
      <div className={`${styles.browseCard}`}>
        <div className={styles.browseCardContainer}>
          <picture>
            <Image
              className={styles.browseCardPoster}
              src={poster}
              width="500"
              height="500"
              alt={title}
            />
          </picture>
          <div className={styles.browseCardHover} />
          {/* ${styles.sliding} */}
          <div className={`${styles.browseCardInfo}  ${styles.hide}`}>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
