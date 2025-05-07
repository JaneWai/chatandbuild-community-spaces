import React from 'react'
import { Users, Lightbulb, Code2, Rocket } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: 'Join a Community',
      description: 'Find and join communities that match your interests, skills, and goals. Connect with like-minded builders from around the world.'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-indigo-600" />,
      title: 'Share Ideas',
      description: 'Contribute your ideas, get feedback, and collaborate with other community members to refine concepts.'
    },
    {
      icon: <Code2 className="h-12 w-12 text-indigo-600" />,
      title: 'Build Together',
      description: 'Collaborate on projects with other community members, leveraging collective skills and knowledge.'
    },
    {
      icon: <Rocket className="h-12 w-12 text-indigo-600" />,
      title: 'Launch & Showcase',
      description: 'Launch your projects and showcase them to the wider ChatAndBuild community for feedback and recognition.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">
          Your journey from joining a community to launching amazing projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-50 p-4 rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-indigo-100 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-indigo-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Ready to start your community journey?</h3>
              <p className="text-gray-600 mb-6">
                Join ChatAndBuild today and become part of a thriving ecosystem of builders, creators, and innovators.
              </p>
              <button className="btn-primary">Get Started Now</button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community collaboration" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
