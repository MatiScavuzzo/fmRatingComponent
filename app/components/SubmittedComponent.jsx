import Image from 'next/image'
import { ContainerCenter } from './ContainerCenter'
import thankYou from '/assets/illustration-thank-you.svg'
import { H1 } from './H1'

export const SubmittedComponent = ({submittedRating}) => {
  return (
    <ContainerCenter>
      <Image src={thankYou} alt="Thank you" />
      <div className='flex items-center justify-center px-3 py-2 rounded-3xl bg-darkBlue'>
        <p className='text-sm text-orange'>You selected {submittedRating} out of 5</p>
      </div>
      <H1 whatDoIShow={'Thank you!'} />
      <p className='text-sm text-center text-mediumGray'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </ContainerCenter>
  )
}