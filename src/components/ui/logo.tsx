import React from 'react';
import Image from 'next/image';
import { logoImage } from '@/constants/constant';

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image
        src={logoImage}
        alt="logo"
        width={30}
        height={30}
        priority
        className="object-contain hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer "
      />
    </div>
  );
}

export default Logo;
