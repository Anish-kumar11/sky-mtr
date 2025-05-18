import React from 'react'
import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image 2.jpg'
import image3 from '../assets/image 3.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image 6.jpg'
import image7 from '../assets/image 7.jpg'

export const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6 bg-gray-50">

    
      
      <img src={image7} alt="image7" className="w-full max-w-md rounded shadow-lg" />
      <h1 className="text-3xl font-bold text-red-600 text-center">Sky Max Technologies</h1>

      <img src={image} alt="image" className="w-full max-w-md rounded shadow-lg" />
      <p className="text-lg text-gray-700 text-center max-w-xl px-4">
        <strong className="text-indigo-600">Sky Max Technologies</strong> is an innovative IT solutions provider specializing in delivering cutting-edge technology and modern software development services. Our mission is to empower businesses through digital transformation and optimize their operational processes.
      </p>

      <img src={image1} alt="image1" className="w-full max-w-md rounded shadow-lg" />
      <h2 className="text-2xl font-semibold text-blue-600 text-center">CCTV</h2>

      <img src={image2} alt="image2" className="w-full max-w-md rounded shadow-lg" />
      <h2 className="text-2xl font-semibold text-green-600 text-center mt-4">SEARCH DASHBOARD</h2>
      <p className="text-md text-gray-700 text-center max-w-xl px-4">
        <strong>Electronics manufacturing</strong> is the process of designing, assembling, testing, and producing electronic components and devices to create finished products for the market. It is one of the fastest-growing industries globally because electronics are used in almost every device today, such as smartphones, computers, TVs, medical equipment, and automobiles.
      </p>

      <img src={image3} alt="image3" className="w-full max-w-md rounded shadow-lg" />
      <h2 className="text-2xl font-semibold text-purple-600 text-center">TV</h2>

      <img src={image5} alt="image5" className="w-full max-w-md rounded shadow-lg" />
      <h2 className="text-2xl font-semibold text-pink-600 text-center">LAPTOP</h2>

      <img src={image6} alt="image6" className="w-full max-w-md rounded shadow-lg" />
    </div>
  )
}
