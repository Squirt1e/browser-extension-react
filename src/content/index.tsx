import React, {useState} from "react"

export default function Content() {
  
  const [isShow, setIsShow] = useState(true)
  
  const handleCloseModal = () => {
    setIsShow(false)
  }
  
  if (!isShow) { return null }
  
  return (
    <div className='fixed z-[9999] inset-0 bg-black/60 flex justify-center items-center'>
      <div className='absolute top-[30px] right-[30px] w-[50px] h-[50px] text-center leading-[50px] rotate-[45deg] text-white text-[50px] cursor-pointer' onClick={handleCloseModal}>+</div>
      <div className='text-white text-[100px]'>Hello World!</div>
    </div>
  )
}
