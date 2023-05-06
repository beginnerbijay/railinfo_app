"use client"

import React from 'react'
import Qus from './Qus'

function Faq() {

    const faqData = [
        {
          question: 'What is Next.js?',
          answer: 'Next.js is a React framework for building server-side rendered and static websites.',
        },
        {
          question: 'What are some key features of Next.js?',
          answer: 'Some key features of Next.js include server-side rendering, static site generation, automatic code splitting, and optimized performance.',
        },
        // ... more FAQ items ...
      ];

  return (
    <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Frequently asked question about railpass</p>
        </div>
        <div className='container flex flex-col'>
        <Qus faqData={faqData} />  
        </div>
    </section>
  )
}

export default Faq