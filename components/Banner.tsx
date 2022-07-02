import React from 'react'

const Banner = () => {
  return (
       <section className='flex items-center justify-between bg-green-200 border-y border-black py-10 max-w-7xl mx-auto px-5' >
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect</h1>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident perferendis velit libero possimus ea architecto iusto ratione, similique mollitia.
          </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full'  src="https://seeklogo.com/images/M/medium-logo-AC4BE02AB0-seeklogo.com.png" alt="Logo" />
      </section>

  )
}

export default Banner