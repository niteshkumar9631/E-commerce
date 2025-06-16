import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsum sed. Nam maxime, consequatur saepe illo qui iusto quisquam autem nesciunt nulla voluptate hic eius ipsum neque aperiam atque optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem temporibus dolore nam, soluta, ducimus sapiente est quos maxime itaque, vero unde consequatur sint blanditiis quisquam cum eaque quidem iusto voluptates?</p>
          <b className='text-gray-800' >Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur eos odit nisi enim quod quisquam harum odio culpa, laboriosam beatae corrupti ipsam sequi nesciunt similique doloribus atque illo ea!</p>
        </div>
      </div>


      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>


      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta velit odit aliquam perspiciatis et libero, architecto necessitatibus? Quos obcaecati sint at cumque! Rem at sapiente perferendis officiis inventore. Animi, sunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>velit odit aliquam perspiciatis et libero, architecto necessitatibus? Quos obcaecati sint at cumque! Rem at sapiente perferendis officiis inventore. Animi, sunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Adipisicing elit. Soluta velit odit aliquam perspiciatis et libero, architecto necessitatibus? Quos obcaecati sint at cumque! Rem at sapiente perferendis officiis inventore. Animi, sunt.</p>
        </div>
      </div>

      <Newsletter/>

    </div>
  )
}

export default About
