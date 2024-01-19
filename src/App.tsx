import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Connection,
  addEdge,
  MarkerType,
  Edge,
  useReactFlow
} from 'reactflow';
import {ButtonDownloadPNG} from './Components/ButtonDownloadPNG'
import * as ToolBar from '@radix-ui/react-toolbar'
import 'reactflow/dist/style.css';


import {Square} from './Components/Square'
import {Ellipse} from './Components/Ellipse'
import {Triangle} from './Components/Triangle'
import {DefaultEdge} from './Components/DefaultEdge'


import {zinc} from 'tailwindcss/colors'
import { useCallback } from 'react';

const EDGETYPES ={
  default: DefaultEdge,
  
}
const NODE_TYPES = {
  square:Square,
  ellipse: Ellipse,
  triangle:Triangle
}




export function App() {
  const title = "Untitled";
  const [nodes, setNodes , onNodesChange] = useNodesState([])
  const [ edges, setEdges , onEdgeChange] = useEdgesState([])

  const onConnect= useCallback(
    (connection:Connection)=>{
      return setEdges(edges=> addEdge(connection, edges))
    },
    []
  )

 


  function addSquareNode() {
    setNodes(nodes=> [
      ...nodes,
      {
        id:crypto.randomUUID(),
        type:'square',
        position:{
          x:400,
          y:400
        },
        data:{
        },
        label:''
      }
    ])

  }

  function addEllipseNode() {
    setNodes(nodes=> [
      ...nodes,
      {
        id:crypto.randomUUID(),
        type:'ellipse',
        position:{
          x:400,
          y:400
        },
        data:{
          label:'aqio'
        }
      }
    ])

  }


  return (
    
    <div className="w-screen h-screen overflow-hidden  ">
      <div className='h-12 border-b border-solid border-b-[#D9D9D9]   z-10 grid grid-cols-3 grid-rows-1'>
        <div> </div>

        <div className='flex justify-center items-center'>

            <p className='text-black '>
              {title}
            </p>

        </div>
        
        <div className='bg-white flex items-center justify-end px-2'>
          <ButtonDownloadPNG title={title}/>
        </div>

      </div>
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
          className='mb-20'
        />
      </ReactFlow>    

      

      
      <ToolBar.Root className='fixed grid grid-cols-3 bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg  border border-zinc-300 px-8 h-20 w-96 gap-2 '>
        <div className='hover:bg-zinc-100  '>
        <ToolBar.ToggleGroup type="multiple" className='h-full hover:-translate-y-2 transition-transform flex  justify-center gap-2 '>

          <ToolBar.ToggleItem value=''>
            <ToolBar.Button 
              onClick={addEllipseNode}
              className='w-[35px] h-[35px] bg-violet-500 rounded-[100%] hover:w-[40px] hover:h-[40px] transition-transform '
              
            />
          </ToolBar.ToggleItem>

          <ToolBar.ToggleItem value='' name='square'>

            <ToolBar.Button
              onClick={addSquareNode}
              className='w-[35px] h-[35px] bg-violet-500 hover:w-[40px] hover:h-[40px] transition-transform'
            />
          </ToolBar.ToggleItem>

        </ToolBar.ToggleGroup>


        </div>




      </ToolBar.Root>

    </div>
  )
}

