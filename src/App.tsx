import ReactFlow, {
  Controls,
  Background,
  Node
} from 'reactflow';
import {useState, useCallback} from 'react'
import 'reactflow/dist/style.css';
import {Square} from './Components/Square'

let initialEdges = [{}]


const NODE_TYPES = {
  square:Square,
}


const initial_types=[
  {
    id:'1',
    type:'square',
    position:{
      x:100,
      y:100
    },

    data:{}
    
  }
  
]


function App() {
  return (
    
    <div className="w-screen h-screen">
      <ReactFlow 
        nodeTypes={NODE_TYPES}
        nodes={initial_types}
      >
        <Background/>
        <Controls />
      </ReactFlow>    

    </div>
  )
}

export default App
