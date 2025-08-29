"use client";

import AnonHeader from "@/components/anonHeader/AnonHeader";
import style from "./styles/styles.module.scss";
import Link from "next/link";
import CommunityPreview from "@/components/communityPreview/CommunityPreview";
import AuthModal from "@/components/authModal/AuthModal";
import React, { useState } from "react";

export default function AnonymousPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openModal = () => {
    setIsAuthModalOpen(true);
  };

  const hideModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className={style.anonWrapper}>
      <AuthModal isOpen={isAuthModalOpen} onCloseClick={hideModal} />

      <div className={style.anonHeader}>
        <AnonHeader />
      </div>
      <div className={style.anonMessageBlock}>
        <div>
          <h2 className="text-4xl font-semibold ">
            Your Modern Online Schoool
          </h2>
          <p className="text-sm mt-2">
            Learn English with your favorite series.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/home"
            className="bg-sky-600 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl cursor-pointer"
          >
            Start Now
          </Link>
          <Link
            href="#signup"
            className="bg-gray-700 p-2 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl cursor-pointer"
            onClick={openModal}
          >
            Registration
          </Link>
        </div>
      </div>
      <div className={style.anonFooter}>
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

      <div className={style.contentWrapper}>
        <CommunityPreview onCTAClick={openModal} />
      </div>
    </div>
  );
}
