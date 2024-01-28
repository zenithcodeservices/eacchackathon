'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from "next/image";

// Utility function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function PodcastList() {
    const [podcasts, setPodcasts] = useState([]);
    const router = useRouter();
  
    useEffect(() => {
      const fetchPodcasts = async () => {
        const response = await fetch('http://localhost:5001/podcasts'); // Adjust if you have a different endpoint
        if (response.ok) {
          const data = await response.json();

            const formattedData = data.map(podcast => ({
            createdAt: formatDate(podcast.created_at),
            title: podcast.title,
            intro: podcast.intro,
            id: podcast.id,
            mp3url: podcast.mp3url,
          }));
          setPodcasts(formattedData);
          setPodcasts(data);
          console.log(data);
        }
      };
      fetchPodcasts();
    }, []);

    const handleListenClick = (podcastId) => {
      router.push(`/podcast/${podcastId}`); // Navigate to the dynamic route
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex gap-8">
        <Navbar />
      </div>
      <div className="flex flex-col py-10 items-center">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-4"
            src="/pod.svg"
            alt="podcast Logo"
            width={90}
            height={37}
            priority
          />
        <h1 className="text-3xl font-bold text-center mb-8">Podcasts Generated</h1>
        <p className="text-center text-lg mb-10">Listen to some of your podcasts created</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="shadow-md bg-gray-50 p-4 rounded-lg" style={{ maxWidth: '320px' }}>
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <span className="text-xs">{podcast.id}</span>
                </div>
                    <h3 className="text-xl font-semibold">
                    {truncateText(podcast.title, 50)} {/* Assuming max 50 characters for title */}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {truncateText(podcast.intro, 100)} {/* Assuming max 100 characters for intro */}
                  </p>
                  <p className="text-xs text-slate-400">
                    {podcast.createdAt}
                    </p>
              </div>
              <div className="flex justify-between">
                <Button variant="default" onClick={() => handleListenClick(podcast.id)}>Listen</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}