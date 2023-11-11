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
  data,
  label
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  function onClick(){
    console.log(label="aqiu")
    console.log('chegou aui')

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
            <div className='w-[150px] h-[50px] bg-violet-400 flex items-center justify-center rounded  '>
              <p className='text-white text-sm  flex-wrap' >{label}</p>
            </div>:  
            
            <button onClick={onClick} className=" bg-zinc-300 rounded-full px-[2px] py-[2px] hover:bg-zinc-200 transition-transform flex justify-center items-center" >
                <PlusIcon height={12} width={12} className=""/>
            </button>
          }
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
