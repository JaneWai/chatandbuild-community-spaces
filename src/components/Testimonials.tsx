import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonialsData = [
  {
    id: 1,
    content: "Joining the Web Developers community on ChatAndBuild completely changed how I approach projects. The collaborative environment and feedback from other developers helped me grow my skills exponentially.",
    author: "Sarah Johnson",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    community: "Web Developers"
  },
  {
    id: 2,
    content: "As a designer, finding a community that understands both aesthetics and functionality was crucial. The UI/UX Designers space on ChatAndBuild is exactly what I needed - supportive, knowledgeable, and inspiring.",
    author: "Michael Chen",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    community: "UI/UX Designers"
  },
  {
    id: 3,
    content: "The AI Enthusiasts community helped me turn my theoretical knowledge into practical applications. We collaborated on a project that I never could have built alone, and now it's one of the most popular tools in our showcase.",
    author: "Priya Patel",
    role: "AI Researcher",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    community: "AI Enthusiasts"
  },
  {
    id: 4,
    content: "Being part of the Open Source Contributors community has connected me with developers from around the world. Together, we're building tools that make a real difference, and the support from fellow members is incredible.",
    author: "David Wilson",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    community: "Open Source Contributors"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Community Voices</h2>
        <p className="section-subtitle text-center">
          Hear from our community members about their experiences
        </p>
        
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-8 left-8 text-indigo-200">
              <Quote className="h-16 w-16" />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10">
                {testimonialsData[currentIndex].content}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonialsData[currentIndex].avatar} 
                  alt={testimonialsData[currentIndex].author} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonialsData[currentIndex].author}</h4>
                  <p className="text-gray-600">{testimonialsData[currentIndex].role}</p>
                  <p className="text-indigo-600 text-sm">Member of {testimonialsData[currentIndex].community}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-600" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
