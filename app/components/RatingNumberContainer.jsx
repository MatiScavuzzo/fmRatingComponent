import { useState } from 'react'
import { Circle } from './Circle'

export const RatingNumberContainer = ({handlerClick, numberSelected}) => {
  return (
    <div className='flex items-center justify-between w-full gap-2 text-sm'>
      <Circle className='leading-10 text-mediumGray'><button onClick={handlerClick} className={`${numberSelected == 1 ? 'bg-lightGray text-white font-bold' : ''} w-full h-full rounded-full hover:bg-orange hover:transition-colors hover:font-bold hover:text-white`}>1</button></Circle>
      <Circle className='leading-10 text-mediumGray'><button onClick={handlerClick} className={`${numberSelected == 2 ? 'bg-lightGray text-white font-bold' : ''} w-full h-full rounded-full hover:bg-orange hover:transition-colors hover:font-bold hover:text-white`}>2</button></Circle>
      <Circle className='leading-10 text-mediumGray'><button onClick={handlerClick} className={`${numberSelected == 3 ? 'bg-lightGray text-white font-bold' : ''} w-full h-full rounded-full hover:bg-orange hover:transition-colors hover:font-bold hover:text-white`}>3</button></Circle>
      <Circle className='leading-10 text-mediumGray'><button onClick={handlerClick} className={`${numberSelected == 4 ? 'bg-lightGray text-white font-bold' : ''} w-full h-full rounded-full hover:bg-orange hover:transition-colors hover:font-bold hover:text-white`}>4</button></Circle>
      <Circle className='leading-10 text-mediumGray'><button onClick={handlerClick} className={`${numberSelected == 5 ? 'bg-lightGray text-white font-bold' : ''} w-full h-full rounded-full hover:bg-orange hover:transition-colors hover:font-bold hover:text-white`}>5</button></Circle>
    </div>
  )
}