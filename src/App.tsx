import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Connection,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import {Square} from './Components/Square'
import {Ellipse} from './Components/Ellipse'
import {Triangle} from './Components/Triangle'
import {DefaultEdge} from './Components/DefaultEdge'


import {zinc} from 'tailwindcss/colors'
import { useCallback } from 'react';

const EDGETYPES ={
  default: DefaultEdge
}

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

]

function App() {

  const [nodes, _ , onNodesChange] = useNodesState(initial_types)
  const [ edges, setEdges , onEdgeChange] = useEdgesState([])

  const onConnect= useCallback(
    (connection:Connection)=>{
      return setEdges(edges=> addEdge(connection, edges))
    },
    []
  )

  return (
    
    <div className="w-screen h-screen">
      <ReactFlow 
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        edges={edges}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
        edgeTypes={EDGETYPES}
        defaultEdgeOptions={{
          type:'default'
        }}
      >
        <Background
          size={2}
          color={zinc[400]}

        />
        <Controls 
        
        />
      </ReactFlow>    

    </div>
  )
}

export default App
