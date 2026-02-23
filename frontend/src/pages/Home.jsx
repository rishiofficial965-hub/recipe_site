import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-[80vh] flex flex-col items-center justify-center text-white p-6'>
      {/* Hero Section */}
      <div className='max-w-4xl text-center flex flex-col items-center gap-6'>
        <h1 className='text-6xl md:text-8xl font-bold tracking-tight'>
          Master the <span className='text-yellow-400'>Art</span> of Flavor
        </h1>
        <p className='text-xl md:text-2xl text-gray-300 max-w-2xl'>
          Discover, create, and share professional-grade recipes in your own kitchen. Elevate your cooking journey with our curated collection.
        </p>
        <div className='flex gap-4 mt-4'>
          <Link 
            to="/recipes" 
            className='px-8 py-4 bg-yellow-500 text-black font-bold rounded-2xl hover:bg-yellow-400 transition-all active:scale-95 shadow-lg shadow-yellow-500/20'
          >
            Explore Recipes
          </Link>
          <Link 
            to="/create" 
            className='px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all active:scale-95'
          >
            Share Yours
          </Link>
        </div>
      </div>

      {/* Stats/Features Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl'>
        <div className='p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-center transition-transform hover:-translate-y-2'>
          <h2 className='text-4xl font-bold text-yellow-400 mb-2'>100+</h2>
          <p className='text-gray-400 uppercase tracking-widest text-sm'>Expert Recipes</p>
        </div>
        <div className='p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-center transition-transform hover:-translate-y-2'>
          <h2 className='text-4xl font-bold text-yellow-400 mb-2'>50+</h2>
          <p className='text-gray-400 uppercase tracking-widest text-sm'>Global Cuisines</p>
        </div>
        <div className='p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-center transition-transform hover:-translate-y-2'>
          <h2 className='text-4xl font-bold text-yellow-400 mb-2'>24/7</h2>
          <p className='text-gray-400 uppercase tracking-widest text-sm'>Culinary Support</p>
        </div>
      </div>
    </div>
  )
}

export default Home