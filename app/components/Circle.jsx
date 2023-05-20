export const Circle = ({children, className}) => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-darkBlue ${className}`}>{children}</div>
  )
}