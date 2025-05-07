import React, { useState } from 'react'
import { Users, Menu, X, Code2, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">ChatAndBuild</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#communities" className="text-gray-600 hover:text-indigo-600 font-medium">Communities</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 font-medium">Projects</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">How It Works</a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 font-medium">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600 font-medium">Sign In</button>
            <button className="btn-primary flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Join Community
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#communities" className="text-gray-600 hover:text-indigo-600 font-medium">Communities</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 font-medium">Projects</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">How It Works</a>
              <a href="#faq" className="text-gray-600 hover:text-indigo-600 font-medium">FAQ</a>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                <button className="text-gray-600 hover:text-indigo-600 font-medium">Sign In</button>
                <button className="btn-primary flex items-center justify-center">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
