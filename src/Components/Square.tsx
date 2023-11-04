import {Handle, NodeProps, Position} from 'reactflow'

export function Square(props:NodeProps){

  

  return (
    <div className='bg-violet-500   rounded w-[200px] h-[150px] flex items-center px-2'>
      <Handle id="" type='source' position={Position.Left}/>

       <textarea  tabIndex={-1}  aria-hidden="true"  autoCorrect='off'  className=' h-[60px] resize-none text-center leading bg-transparent py-4 text-white border-0 outline-none  placeholder:text-gray-300 placeholder-opacity-80 overflow-hidden '  placeholder='Add text'>
         Aqui esta um bom exemplo
       </textarea>

      <Handle id="" type='source' position={Position.Right}/>

    </div>    

  )
}