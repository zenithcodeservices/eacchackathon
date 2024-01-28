'use client' // 👈 use it here

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from 'react';
import { WelcomeFormMockData } from '@/components/WelcomeFormMockData';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useRouter } from 'next/navigation';
import QuestionCard from "@/components/QuestionCard";

type SliderProps = React.ComponentProps<typeof Slider>

const sliderSteps = {
  0: 'Short (15 mins)',
  50: 'Medium (30 mins)',
  100: 'Long (45 mins)',
};

const lengthValues = {
  'Short (15 mins)': 0,
  'Medium (30 mins)': 50,
  'Long (45 mins)': 100,
};

export default function Home() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    creators: ['', '', ''],
    schedule: 'Daily',
    length: 'Short (15 mins)',
  });
  const [mp3Url, setMp3Url] = useState('');
  const [transcript, setTranscript] = useState('');

  //use states for loaidng and success
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');


  // Function to go to the next card
  const nextCard = () => {
    if (currentStep < WelcomeFormMockData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  // Function to go to the previous card
  const prevCard = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async () => {
    setIsLoading(true);
    setShowQRCode(true); // Show QR code card
    console.log('Submitting form data:', userData);

    // Get the QR code
    const qrResponse = await fetch('http://127.0.0.1:5001/qrcode');
    if (qrResponse.ok) {
      const qrData = await qrResponse.json(); // Assuming the QR code API returns JSON
      setQrCodeUrl(qrData.qrCodeUrl); // Update the state with the QR code URL
    } else {
      console.error('Failed to get QR code');
    }
  
    try {
      const response = await fetch('http://127.0.0.1:5001/generate-podcast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Podcast generated successfully');
        setMp3Url(data.mp3_url); // Assuming the response contains the MP3 URL
        setTranscript(data.transcript);
        setShowSuccessCard(true);
      } else {
        console.error('Failed to generate podcast');
      }
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred:', error);
      setIsLoading(false);
    }
  };

  const handleCreatorChange = (value, index) => {
    const updatedCreators = [...userData.creators];
    updatedCreators[index] = value;
    // Remove the incorrect brace here
    setUserData((prevData) => ({
      ...prevData,
      creators: updatedCreators,
    }));
  };

  const handleViewPodcastsClick = () => {
    if (typeof window !== "undefined") {
      router.push('/podcastList');
    }
  };

  const renderSuccessCard = () => (
    <>
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow gap-8">
        <h1 className="mb-2 font-semibold text-2xl">Podcast Created Successfully!</h1>
        <audio controls>
          <source src={mp3Url} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
        <p className="text-sm text-gray-500">
          {/* {} //extend to show transcript */}
        </p>
        <div className="flex justify-between w-full mt-4 flex-end">
          <Button variant="outline" className="mt-4" onClick={() => setShowSuccessCard(false)}>
          Create Another
          </Button>
          <Button variant="outline" className="mt-4" onClick={handleViewPodcastsClick}>
          View Podcasts
          </Button>
        </div>
      </div>
    </>
  );  
  
  // Function to render the QR code card
  const renderQRCodeCard = () => (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow gap-8">
      <h1 className="mb-2 font-semibold text-2xl">Generating Podcast...</h1>
      <p className="text-sm text-gray-500">Please scan the QR code to continue.</p>
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt="QR Code" className="p-4" />
      ) : (
        <div className="p-4 bg-gray-200 rounded">QR Code Here</div>
      )}
    </div>
  );

  const toggleQRCodeCard = () => {
    setShowQRCode(!showQRCode);
  };

  const renderQuestionCard = () => {
    const cardData = WelcomeFormMockData.data[currentStep];
    let cardContentComponent;

    switch (currentStep) {
    case 0: // Enter name
      cardContentComponent = (
        <Input
          name="name"
          value={userData.name}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="John Smith"
        />
      );
      break;
    case 1: // Add creators
      cardContentComponent = (
        <>
          <div className="flex flex-wrap p-4 mt-4 gap-2">
            <div>
              <Input
                name="creator-0"
                value={userData.creators[0]}
                onChange={(e) => handleCreatorChange(e.target.value, 0)}
                placeholder="Creator 1"
              />
            </div>
            <div>
              <Input
                name="creator-1"
                value={userData.creators[1]}
                onChange={(e) => handleCreatorChange(e.target.value, 1)}
                placeholder="Creator 2"
              />
            </div>
            <div>
              <Input
                name="creator-2"
                value={userData.creators[2]}
                onChange={(e) => handleCreatorChange(e.target.value, 2)}
                placeholder="Creator 3"
              />
            </div>
          </div>
        </>
      );
      break;
    case 2: // Add Schedule
      cardContentComponent = (
        <RadioGroup 
          defaultValue={userData.schedule} 
          onChange={(value) => handleInputChange('schedule', value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Daily" id="schedule-daily" />
            <Label htmlFor="schedule-daily">Daily</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Weekly" id="schedule-weekly" />
            <Label htmlFor="schedule-weekly">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Bi-Weekly" id="schedule-biweekly" />
            <Label htmlFor="schedule-biweekly">Bi-Weekly</Label>
          </div>
        </RadioGroup>
      );
      break;
    case 3: // Add Length
      const sliderValue = Object.keys(lengthValues).find(key => lengthValues[key] === userData.length) || 0;
      cardContentComponent = (
        <div className="space-y-2">
          <Slider
            min={0}
            max={100}
            step={50} // Since you have three steps: 0, 50, 100
            defaultValue={[Number(sliderValue)]}
            onChange={(value) => {
              length = parseInt(Object.keys(sliderSteps).find(key => sliderSteps[key] === value) ?? '0', 10);
              handleInputChange('length', length);
            }}
            className="w-full"
          />
          <div className="flex justify-between">
            {Object.entries(sliderSteps).map(([value, label]) => (
              <span key={value} className="text-xs">
                {label}
              </span>
            ))}
          </div>
        </div>
      );
      break;
    case 4: // Generate
      cardContentComponent = (
        null
        // <div className="flex flex-col items-center justify-center">
        //   <h4>Generate Your Podcast</h4>
        // </div>
      );
      break;
    default:
      cardContentComponent = <div>{cardData.cardContent}</div>;
    }
    return (
        
      <QuestionCard
        cardTitle={cardData.cardTitle}
        cardDescription={cardData.cardDescription}
        cardContent={cardContentComponent}
        cardFooter={
          <div className="flex justify-between w-full mt-4 flex-end">
            {currentStep > 0 && (
              <Button variant="outline"
                onClick={prevCard}>Back</Button>
            )}
            <Button 
              onClick={nextCard}>
              {currentStep < WelcomeFormMockData.length - 1 ? 'Next' : 'Submit'}
            </Button>
          </div>
        }
        isVisible={true}
      />
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/pod.svg"
          alt="podcast Logo"
          width={90}
          height={37}
          priority
        />
      {/* Test Button to Toggle QR Code Card
        <Button variant="outline" onClick={toggleQRCodeCard}>
        Toggle QR Code Card (Test)
        </Button> */}
      </div>
      <div style={{ minWidth: '560px'}}>
        {isLoading && <div>Loading...</div>}
        {showQRCode && renderQRCodeCard()}
        {!isLoading && showSuccessCard && renderSuccessCard()}
        {!isLoading && !showSuccessCard && !showQRCode && renderQuestionCard()}
      </div>

      <Footer />
    </main>
  );
}


{/* <div className="flex justify-between mt-4">
          <Button variant="outline" className="justify-center mt-2"
            {...currentStep > 0 && <button onClick={prevCard}>Back</button>}
          />
          <Button 
          variant="outline"  className="justify-center mt-2"
            onClick={nextCard}
            {...currentStep < WelcomeFormMockData.length - 1 ? 'Next' : 'Submit'}
          />
        </div> */}