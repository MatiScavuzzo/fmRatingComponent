export const SubmitButton = ({submitClickHandler}) => {
  return (
    <button onClick={submitClickHandler} className='flex items-center justify-center w-full text-sm leading-10 text-white transition-colors duration-200 ease-in-out bg-orange rounded-3xl hover:font-bold hover:bg-white hover:text-orange'>SUBMIT</button>
  )
}