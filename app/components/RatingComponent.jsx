'use client';
import { useState } from 'react';
import Image from 'next/image';
import  star from '/assets/icon-star.svg';
import { ContainerStart } from './ContainerStart';
import { Circle } from './Circle';
import { RatingNumberContainer } from './RatingNumberContainer';
import { SubmitButton } from './SubmitButton';
import { H1 } from './H1';
import { SubmittedComponent } from './SubmittedComponent';

export const RatingComponent = () => {
  const [numberSelected, setNumberSelected] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClick = (e) => {
    setNumberSelected(e.target.innerText)
  } 
  const submitClick = () => {
    setIsSubmitted(true)
  }
  return (
    <>
    {!isSubmitted ? 
    <ContainerStart>
      <Circle>
        <Image src={star} alt='star-icon' />
      </Circle>
      <H1 whatDoIShow={'How did we do?'} />
      <p className='text-sm text-mediumGray'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingNumberContainer handlerClick={handleClick} numberSelected={numberSelected} />
      <SubmitButton submitClickHandler={submitClick} />
    </ContainerStart> :
    <SubmittedComponent submittedRating={numberSelected} />}
    </>
  );
};
