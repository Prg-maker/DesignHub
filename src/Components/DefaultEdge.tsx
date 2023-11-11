import React, { useState } from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath } from 'reactflow';
import {PlusIcon} from '@radix-ui/react-icons'



export  function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [label, setLabel] = useState(false)

  function addLabel(){
    setLabel(!label)
  }


  return (
    <>
      <BaseEdge  id={id} path={edgePath}  markerEnd={markerEnd} style={{
      }} />

      <EdgeLabelRenderer >
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="absolute text-sm"
        >
          {
            label? 
            <div className='w-[150px] h-[50px] bg-violet-400 flex items-center justify-center rounded  pt-2'>
                  <textarea autoCorrect='off' maxLength={16} className=' h-[60px] bg-transparent resize-none text-center leading rounded py-4 text-white border-0 outline-none  placeholder:text-gray-300 placeholder-opacity-80 overflow-hidden nodrag text-sm' placeholder='Add label' />

            </div>:  
            
            <button onClick={addLabel} className=" bg-zinc-300 rounded-full px-[2px] py-[2px] hover:bg-zinc-200 transition-transform flex justify-center items-center" >
                <PlusIcon height={12} width={12} className=""/>
            </button>
          }
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
