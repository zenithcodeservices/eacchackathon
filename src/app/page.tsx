'use client' // 👈 use it here

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import Image from "next/image";
import { useState } from 'react';
import {QuestionCardMockData} from '@/components/QuestionCardMockData'

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % numCards);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + numCards) % numCards);
  };

  const numCards = QuestionCardMockData.data.length; // Number of QuestionCard components

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Pod Pro
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-4">
        {QuestionCardMockData.data.map((item, index) => {
          return (
            <div key={item.cardTitle}>
              <QuestionCard
                cardTitle={item.cardTitle}
                cardDescription={item.cardDescription}
                cardContent={item.cardContent}
                cardFooter={item.cardFooter}
                isVisible={currentCardIndex === index}
              />
            </div>
          )
        })}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <button onClick={nextCard} disabled={currentCardIndex === numCards - 1}>
          Next
        </button>
      </div>

      <Footer />
    </main>
  );
}
