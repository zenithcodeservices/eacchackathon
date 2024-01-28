'use client'
// pages/podcast/[id].jsx
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {

const router = useRouter();


const handleGeneratePodcastsClick = () => {
    if (typeof window !== "undefined") {
        router.push('/');
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
    
          <section className="z-10 w-full container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-12">
            <div className="relative mt-4 mb-8 h-56 w-96 overflow-hidden rounded-lg shadow-lg">
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="/bg_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-mono font-bold text-gray-800">Welcome to Pod Pro</h1>
              <p className="text-center text-lg text-gray-600">
                Create your personalised podcasts
              </p>
              <div className="mt-4 flex w-full flex-wrap justify-center gap-6">
                <Button variant="default" onClick={handleGeneratePodcastsClick}>Create Your Podcast</Button>
              </div>
            </div>
            
          </section>
    
          <Footer />
        </main>
    )
}


