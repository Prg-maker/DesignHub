import { useCallback } from 'react'
import {Handle, NodeProps, Position} from 'reactflow'

export function Square(props:NodeProps){
 
  
  //<textarea  onChange={onChange} autoCorrect='off'  className=' h-[60px] resize-none text-center leading bg-transparent py-4 text-white border-0 outline-none  placeholder:text-gray-300 placeholder-opacity-80 overflow-hidden '  placeholder='Add text'>
  //</textarea>

  return (
    <div className='bg-violet-500   rounded w-[200px] h-[150px] flex items-center px-2'>
      <Handle id="left" type='source' position={Position.Left}/>
        <textarea  autoCorrect='off'  className=' h-[60px] resize-none text-center leading bg-transparent py-4 text-white border-0 outline-none  placeholder:text-gray-300 placeholder-opacity-80 overflow-hidden nodrag'  placeholder='Add text'/>
      <Handle id="right" type='source' position={Position.Right}/>

    </div>    

  )
}