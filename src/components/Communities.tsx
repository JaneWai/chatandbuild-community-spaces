import React, { useState } from 'react'
import { Users, Code2, Sparkles, Palette, Brain, Globe, Zap, Search, ArrowRight } from 'lucide-react'

const communitiesData = [
  {
    id: 1,
    name: 'Web Developers',
    icon: <Code2 className="h-10 w-10 text-indigo-600" />,
    members: 2543,
    projects: 87,
    description: 'A community for web developers to share knowledge, collaborate on projects, and stay updated with the latest trends.',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'UI/UX Designers',
    icon: <Palette className="h-10 w-10 text-pink-500" />,
    members: 1876,
    projects: 64,
    description: 'For designers passionate about creating beautiful, functional user interfaces and experiences.',
    tags: ['UI', 'UX', 'Figma', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'AI Enthusiasts',
    icon: <Brain className="h-10 w-10 text-purple-600" />,
    members: 3210,
    projects: 112,
    description: 'Exploring the frontiers of artificial intelligence, machine learning, and data science.',
    tags: ['AI', 'ML', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Open Source Contributors',
    icon: <Globe className="h-10 w-10 text-green-500" />,
    members: 1543,
    projects: 156,
    description: 'Building and contributing to open source projects that make a difference.',
    tags: ['Open Source', 'GitHub', 'Collaboration'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Product Builders',
    icon: <Zap className="h-10 w-10 text-yellow-500" />,
    members: 1987,
    projects: 73,
    description: 'From idea to launch: a community for those building digital products and startups.',
    tags: ['Product', 'Startups', 'MVP', 'Growth'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Creative Coders',
    icon: <Sparkles className="h-10 w-10 text-blue-500" />,
    members: 1432,
    projects: 91,
    description: 'Where art meets code. For those exploring creative applications of programming.',
    tags: ['Creative Coding', 'p5.js', 'Generative Art'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const Communities = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredCommunities = communitiesData.filter(community => 
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <section id="communities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Discover Communities</h2>
        <p className="section-subtitle text-center">
          Find and join communities that match your interests and goals
        </p>
        
        <div className="relative max-w-md mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search communities by name, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommunities.map(community => (
            <div key={community.id} className="card group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {community.icon}
                    <h3 className="text-xl font-bold ml-3">{community.name}</h3>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{community.members.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {community.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{community.projects} projects</span>
                  <button className="btn-primary text-sm py-1.5">Join Community</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCommunities.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No communities found matching your search.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center">
            View All Communities
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Communities
