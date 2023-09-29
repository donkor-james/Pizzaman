import React from 'react';
import spoon from '../assets/spoon.png'
import absolute from '../assets/absolute.png'
import '../../src/index.css'
import youtube from '../assets/youtube.jpg'

const Story = () => {
  return (
    <div className=" about mt-2 flex justify-center items-center flex-row py-40 px-20 gap-x-10">
        <p className='text-white font-semibold text-lg'>
        Indulge in the mouthwatering world of pizza with our latest video. Join us on a culinary journey as we explore the art of making the perfect pizza pie. From the freshly kneaded dough to the savory toppings and bubbling cheese, this video is a tribute to the deliciousness that is pizza. Get ready to satisfy your cravings and learn the secrets behind crafting a slice of heaven.
        </p>
     
      {/* <Iframe className='' title></Iframe> */}
      <div className=" video-container">
        <div className='b-r'>
          <iframe className='youtube'  width="560" height="315" src="https://www.youtube.com/embed/NJa8hiyVwWU?si=tNmx9yjvmSt6nVDz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>

    </div>
  );
}

export default Story;

