import {NodeProps} from 'reactflow'

export function Ellipse(props:NodeProps){



  return (
    <div className='bg-violet-500   rounded-[100%] w-[200px] h-[200px] flex items-center px-2 '>
        <textarea  autoCorrect='off'  className=' h-[60px] resize-none text-center leading bg-transparent py-4 text-white border-0 outline-none  placeholder:text-gray-300 placeholder-opacity-80 overflow-hidden nodrag'  placeholder='Add text'/>
    </div>    

  )
}