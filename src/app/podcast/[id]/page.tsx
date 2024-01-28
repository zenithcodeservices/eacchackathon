'use client'
// pages/podcast/[id].jsx
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PodcastPage({ params }: { params: { id: string } }) {

  const router = useRouter();
  const [podcast, setPodcast] = useState(null);
  const { id } = params;

  const fetchPodcasts = async () => {
    const response = await fetch(`http://localhost:5001/podcasts`);
    if (response.ok) {
      const podcasts = await response.json();
      // Find the podcast with the matching ID
      const foundPodcast = podcasts.find(p => p.id === parseInt(id));
      setPodcast(foundPodcast);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPodcasts();
    }
  }, [id]);

  if (!podcast) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {podcast ? (
        <main className="flex min-h-screen flex-col items-center justify-between p-6">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex gap-8">
            <Navbar />
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              Pod Pro
            </div>
          </div>
        
          <div className="flex flex-col justify-start gap-8">
          
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow gap-8">
              <h1 className="mb-2 font-semibold text-2xl">{podcast['title']}</h1>
              <audio controls>
                <source src={podcast['mp3url']} type="audio/mpeg" />
            Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500">{podcast['intro']}</p>
            </div>
            <Button variant='outline' className='w-fit gap-2' onClick={() => router.back()}>
              <ArrowLeft className="w-4"></ArrowLeft>
            Back</Button>
          </div>
          <Footer />
        </main>
      ):(
        <p>Loading...</p>
      )}
    </>
  );
}