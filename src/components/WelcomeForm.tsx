"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import {WelcomeFormMockData} from '@/components/WelcomeFormMockData'
import { Card } from "./ui/card"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function WelcomeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % numCards);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + numCards) % numCards);
  };

  const numCards = WelcomeFormMockData.data.length; // Number of QuestionCard components


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {WelcomeFormMockData.data.map((item, index) => {
          return (
            <>
              {currentCardIndex === index &&(
                <Card className="bg-white shadow-md p-4 rounded-lg">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{item.cardTitle}</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          {item.cardDescription}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Card>
              )}
            </>
          )
        })}
        {currentCardIndex === (numCards - 1) && (
          <Button type="submit">Submit</Button>
        )}

        <div className="flex justify-between mt-4">
          <button onClick={prevCard} disabled={currentCardIndex === 0}>
          Previous
          </button>
          <button onClick={nextCard} disabled={currentCardIndex === numCards - 1}>
          Next
          </button>
        </div>
      </form>
    </Form>
  )
}
