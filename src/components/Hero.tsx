import React from 'react'
import { Users, ArrowRight, Code2, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Join the <span className="text-indigo-600">Community Spaces</span> that inspire you
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect with like-minded builders, discover amazing projects, and collaborate on the next big thing.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex items-center justify-center">
                <Users className="h-5 w-5 mr-2" />
                Find Your Community
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Code2 className="h-5 w-5 mr-2" />
                Explore Projects
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Community collaboration" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Trusted by innovative communities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-semibold flex items-center">
              <Code2 className="h-5 w-5 mr-2" />
              TechBuilders
            </div>
            <div className="text-gray-400 font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2" />
              DesignCraft
            </div>
            <div className="text-gray-400 font-semibold flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              AIExplorers
            </div>
            <div className="text-gray-400 font-semibold flex items-center">
              <Code2 className="h-5 w-5 mr-2" />
              WebDevPros
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
