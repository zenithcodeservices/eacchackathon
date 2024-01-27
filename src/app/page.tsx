'use client' // 👈 use it here

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import Image from "next/image";
import { useState } from 'react';
import { QuestionCardMockData } from '@/components/QuestionCardMockData';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Home() {

  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    creators: [],
    schedule: '',
    length: '',
  });

  // Function to go to the next card
  const nextCard = () => {
    if (currentStep < QuestionCardMockData.length - 1) {
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
  
  const numCards = 2; // Number of QuestionCard components

  const handleSubmit = () => {
    // Here you can handle the submission of all data,
    // for example, sending it to a server or storing it in local storage.
    console.log(userData);
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/execute-python-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Python script executed successfully');
      } else {
        console.error('Failed to execute Python script');
      }
    } catch (error) {
      console.error('An error occurred while executing the Python script:', error);
    }
  };

  const renderQuestionCard = () => {
    const cardData = QuestionCardMockData.data[currentStep];
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
          <Input
            name="creators"
            value={userData.creators}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="@MyYoutuber"
          />
        );
        break;
      case 2: // Add Schedule
        cardContentComponent = (
          <Input
            name="schedule"
            value={userData.schedule}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="Daily"
          />
        );
        break;
        case 3: // Add Length
        cardContentComponent = (
          <Input
            name="length"
            value={userData.length}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="Short"
          />
        );
        break;
        case 4: // Generate
        cardContentComponent = (
          <Input
            name="Generate"
            value={userData.length}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="Daily"
          />
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
                {currentStep < QuestionCardMockData.length - 1 ? 'Next' : 'Submit'}
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

      <div>
        {renderQuestionCard()}

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
            {...currentStep < QuestionCardMockData.length - 1 ? 'Next' : 'Submit'}
          />
        </div> */}