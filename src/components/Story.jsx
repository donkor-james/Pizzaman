import React from 'react';
import spoon from '../assets/spoon.png'
const Story = () => {
  return (
    <div className="flex justify-center items-center flex-col p-20 bg-white">
      <h4 className='font-custom font-bold text-6xl'>Our Story</h4> 
      <div className="flex flex-row pt-7 gap-10">
          <p>
          Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla.
          </p>
          <img src={spoon} alt="" className='h-40 '/>
          <p>
            Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla.
          </p>
      </div>

    </div>
  );
}

export default Story;
