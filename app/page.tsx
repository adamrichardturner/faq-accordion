"use client"

import Image from "next/image"
import star from "../assets/images/icon-star.svg"
import { useState } from "react"
import faqData from "@/utils/data.json"
import Accordion from "@/components/Accordion"
export interface FAQData {
  id: number
  title: string
  paragraph: string
  isOpen: boolean
}

export interface State {
  cursor: number
  faqs: FAQData[]
}

export default function Home() {
  // Store a mapping of the faq data in JSON to an array of objects
  // each with an isOpen status set to false, except the first id
  const initialFaqData: FAQData[] = faqData.map((item) => ({
    ...item,
    isOpen: item.id === 1,
  }))

  const initialState = {
    cursor: 1,
    faqs: initialFaqData,
  }

  // Store in state our initial faq datd and cursor position,
  // we will use this to manage the rendering, cursor list selection
  // and manipulate the isOpen status to control the open state
  const [state, setState] = useState<State>(initialState)

  const updateFaqOpen = (id: number) => {
    const updatedFaqs = state.faqs.map((faq) => {
      // Find the matching id we have clicked
      if (faq.id === id) {
        // Return it with isOpen toggled
        return { ...faq, isOpen: !faq.isOpen }
      }
      // Otherwise return all other accordions closed
      return { ...faq, isOpen: false }
    })
    return updatedFaqs
  }

  // Event handler for clicking the accordion open and closed
  const onOpen = (id: number) => {
    const updatedFaqs = updateFaqOpen(id)
    setState((prevState) => ({
      ...prevState,
      cursor: id,
      faqs: updatedFaqs,
    }))
  }

  const onKeyDown = (e: { keyCode: number }, id: number) => {
    // Managed key down events on the enter, space and arrow keys to
    // navigate the list for accessibility
    const updatedFaqs = updateFaqOpen(id)
    if (
      e.keyCode === 38 ||
      e.keyCode === 13 ||
      (e.keyCode == 32 && state.cursor > 0)
    ) {
      setState((prevState) => ({
        ...prevState,
        cursor: prevState.cursor - 1,
        faqs: updatedFaqs,
      }))
    } else if (e.keyCode === 40 && state.cursor < state.faqs.length) {
      setState((prevState) => ({
        ...prevState,
        cursor: prevState.cursor + 1,
        faqs: updatedFaqs,
      }))
    }
  }

  // Render our Accordion components with the data in state
  const faqDataRendered = state.faqs.map((item) => (
    <Accordion
      key={item.id}
      data={item}
      onOpen={onOpen}
      isOpen={item.isOpen}
      onKeyDown={(e, id) => onKeyDown(e, id)}
    />
  ))

  if (!state.faqs) return null

  return (
    <main className='flex bg-secondary-lightPink min-h-screen flex-col items-center justify-between'>
      <div className="px-6 py-8 bg-[url('../assets/images/background-pattern-desktop.svg')] w-full h-[232px] sm:h-[320px] flex flex-row justify-center items-center">
        <div className='relative top-[20px] w-full sm:w-[600px]'>
          <section className='px-10 pb-4 pt-12 rounded-[16px] shadow-containerShadow absolute bg-secondary-white w-full sm:w-[600px]'>
            <div className='flex flex-row space-x-6'>
              <Image src={star} width={40} height={40} alt='A star shape' />
              <h1 className='text-6xl text-primary-darkPurple font-bold'>
                FAQs
              </h1>
            </div>
            <ul className='divide-y divide-secondary-lightPink flex flex-col'>
              {faqDataRendered}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
