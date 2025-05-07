import React, { useState } from 'react'
import { Code2, Heart, Eye, ArrowRight, ExternalLink, Github } from 'lucide-react'
import Brain from './Brain'

// Additional imports needed for other icons used in the component
import { Sparkles } from 'lucide-react'
import { Palette } from 'lucide-react'
import { Globe } from 'lucide-react'
import { Zap } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A task management app that uses AI to prioritize and suggest optimal task scheduling.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'AI Enthusiasts',
    communityIcon: <Brain className="h-4 w-4 text-purple-600" />,
    likes: 342,
    views: 1287,
    tags: ['React', 'TensorFlow.js', 'AI'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'Interactive Data Visualization',
    description: 'A beautiful and interactive way to visualize complex datasets with customizable charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'Creative Coders',
    communityIcon: <Sparkles className="h-4 w-4 text-blue-500" />,
    likes: 287,
    views: 943,
    tags: ['D3.js', 'SVG', 'JavaScript'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Accessible Component Library',
    description: 'A collection of fully accessible UI components built with React and styled with Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'UI/UX Designers',
    communityIcon: <Palette className="h-4 w-4 text-pink-500" />,
    likes: 421,
    views: 1532,
    tags: ['React', 'Tailwind CSS', 'Accessibility'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'Open Source CMS',
    description: 'A lightweight, extensible content management system built for developers.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'Open Source Contributors',
    communityIcon: <Globe className="h-4 w-4 text-green-500" />,
    likes: 376,
    views: 1124,
    tags: ['Node.js', 'MongoDB', 'GraphQL'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    title: 'Real-time Collaboration Tool',
    description: 'A platform for teams to collaborate on documents and code in real-time.',
    image: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'Product Builders',
    communityIcon: <Zap className="h-4 w-4 text-yellow-500" />,
    likes: 298,
    views: 876,
    tags: ['WebSockets', 'React', 'Firebase'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    title: 'Progressive Web App Starter',
    description: 'A template for building fast, reliable, and engaging progressive web apps.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    community: 'Web Developers',
    communityIcon: <Code2 className="h-4 w-4 text-indigo-600" />,
    likes: 312,
    views: 1043,
    tags: ['PWA', 'Service Workers', 'Vite'],
    demoUrl: '#',
    repoUrl: '#'
  }
]

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'AI', 'Web Dev', 'Design', 'Open Source', 'Product']
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => {
        if (activeFilter === 'AI' && project.tags.some(tag => ['AI', 'TensorFlow', 'ML'].includes(tag))) return true
        if (activeFilter === 'Web Dev' && project.tags.some(tag => ['React', 'JavaScript', 'Node.js', 'PWA'].includes(tag))) return true
        if (activeFilter === 'Design' && project.tags.some(tag => ['UI', 'UX', 'Accessibility', 'Design'].includes(tag))) return true
        if (activeFilter === 'Open Source' && project.community === 'Open Source Contributors') return true
        if (activeFilter === 'Product' && project.community === 'Product Builders') return true
        return false
      })

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Community Projects</h2>
        <p className="section-subtitle text-center">
          Discover amazing projects built by our community members
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center">
                    {project.communityIcon}
                    <span className="text-white text-sm ml-1">{project.community}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href={project.demoUrl} className="btn-primary text-sm py-1.5 flex-1 flex justify-center items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a href={project.repoUrl} className="btn-secondary text-sm py-1.5 flex-1 flex justify-center items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No projects found matching the selected filter.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center">
            Explore All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
