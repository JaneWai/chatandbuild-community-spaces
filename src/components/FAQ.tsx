import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    question: "What is ChatAndBuild Community Spaces?",
    answer: "ChatAndBuild Community Spaces is a platform where developers, designers, and creators can join communities based on their interests, collaborate on projects, and showcase their work to others. It's designed to foster collaboration, learning, and innovation among like-minded individuals."
  },
  {
    question: "How do I join a community?",
    answer: "To join a community, simply browse the available communities on our platform, find one that matches your interests, and click the 'Join Community' button. You'll then be able to participate in discussions, collaborate on projects, and connect with other members."
  },
  {
    question: "Can I be part of multiple communities?",
    answer: "Absolutely! You can join as many communities as you'd like. Many of our members are part of several communities, which allows them to explore different interests and collaborate with a diverse range of people."
  },
  {
    question: "How can I showcase my projects?",
    answer: "Once you've completed a project, you can submit it to be featured in our Projects section. Projects that demonstrate creativity, technical excellence, or innovative solutions have a chance to be highlighted on our platform for all community members to see."
  },
  {
    question: "Is ChatAndBuild Community Spaces free to use?",
    answer: "Yes, ChatAndBuild Community Spaces is free to join and participate in. We believe in making collaboration and community accessible to everyone, regardless of their background or resources."
  },
  {
    question: "Can I create my own community?",
    answer: "Currently, new communities are created based on member interest and platform needs. If you have an idea for a new community that you believe would benefit the platform, you can submit a proposal through our Community Suggestions form."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">
          Find answers to common questions about ChatAndBuild Community Spaces
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-5"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-3 text-gray-600 pr-12">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="btn-primary">Contact Support</button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
