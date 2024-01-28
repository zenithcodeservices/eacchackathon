'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CopyIcon } from 'lucide-react';

export default function RssPage () {

  const router = useRouter();
  const [rss, setRss] = useState(null);

  useEffect(() => {
    const getRss = async () => {
      const rssResponse = await fetch('http://127.0.0.1:5001/rss', { method: 'GET' });
      if (rssResponse.ok) {
        const rssUrl = await rssResponse.text();
        setRss(rssUrl);
        console.log('Rss received successfully: ' + rssUrl);
      } else {
        console.error('Failed to get RSS');
      }
    }
    getRss();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="z-10 max-w-lg w-full items-center justify-between font-mono text-sm lg:flex gap-8">
        <Navbar />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Pod Pro
        </div>
      </div>
      <div className="flex flex-col justify-start gap-8">
        <div className="flex flex-col items-left justify-start p-8 bg-gray-50 rounded-lg shadow gap-8">
        <p className="mb-2 font-semibold text-m">Step 1: Copy your RSS link</p>
          <p className="mb-2 font-semibold text-m">{rss}</p>
          <CopyToClipboard text={rss}>
            <Button variant='outline' className='p-4 gap-4 justify-start w-fit'><CopyIcon className="w-4"></CopyIcon>Copy RSS Link</Button>
          </CopyToClipboard>
        </div>
        <div className="flex flex-col items-left justify-start p-8 bg-gray-50 rounded-lg shadow gap-8">
            <div className='flex flex-col items-left justify-start gap-2'>
                <p className="mb-2 font-semibold text-m">Step 2: Paste into Apple Podcasts</p>
                <p className="mb-2 font-semibold text-m">Go to Library</p>
                <p className="mb-2 font-semibold text-m">Click on the three dots at the top right</p>
                <p className="mb-2 font-semibold text-m">Paste RSS link</p>
            </div>
            <Button variant='outline' className='w-fit gap-2' onClick={() => window.open('https://apps.apple.com/app/apple-podcasts/id525463029')}>
            Visit Apple Podcasts</Button>
        </div>
      </div>
    <Footer />
    </main>
  );
}
