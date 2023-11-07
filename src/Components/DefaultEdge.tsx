import React from 'react';
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
  
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const label = 'Exemplo de label'
  function teste(){
  }
  

  return (
    <>
      <BaseEdge   path={edgePath}  markerEnd={markerEnd} style={{
      }} />

      <EdgeLabelRenderer >
        <div
          onDoubleClick={teste}
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="absolute text-sm"
        >
          {
            label? 
            <div className='w-[150px] h-[50px] bg-violet-400 flex items-center justify-center rounded  '>
              <p className='text-white text-sm  flex-wrap' >{label}</p>
            </div>:  
            
          <button className=" bg-zinc-300 rounded-full px-[2px] py-[2px] hover:bg-zinc-200 transition-transform" >
              <PlusIcon height={12} width={12} className=""/>
          </button>
          }
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
