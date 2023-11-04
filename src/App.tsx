import ReactFlow, {
  Controls,
  Background,
  Node,
  useNodesState,
  useEdgesState,
  applyEdgeChanges
} from 'reactflow';
import {useState, useCallback} from 'react'
import 'reactflow/dist/style.css';
import {Square} from './Components/Square'
import {Ellipse} from './Components/Ellipse'
import {Triangle} from './Components/Triangle'



const NODE_TYPES = {
  square:Square,
  ellipse: Ellipse,
  triangle:Triangle
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
    
  } ,

  {
    id:'2',
    type:'ellipse',
    position:{
      x:400,
      y:400
    },

   

    data:{}
    
  },
  {
    id:'3',
    type:'triangle',
    position:{
      x:600,
      y:600
    },

   

    data:{}
    
  }
  
]




function App() {

  const [nodes, _ , onNodesChange] = useNodesState(initial_types)
  const [ edges, setEdges , onEdgeChange] = useEdgesState([])


 


  return (
    
    <div className="w-screen h-screen">
      <ReactFlow 
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}

      >
        <Background/>
        <Controls />
      </ReactFlow>    

    </div>
  )
}

export default App
