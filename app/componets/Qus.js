import { useState } from 'react';

export default function Qus({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={faq.question}>
          <button onClick={() => handleAccordionClick(index)}>
            {faq.question}
          </button>
          <div
            style={{
              display: activeIndex === index ? 'block' : 'none',
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
