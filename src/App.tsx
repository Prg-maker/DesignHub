import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import {useState, useCallback} from 'react'
import 'reactflow/dist/style.css';


let initialEdges = [{}]


const initalNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data:{label:"hello"},
  },


  {
    id: '2',
    position: { x: 100, y: 100 },
    data:{label:"hello"},
  },
];

function App() {

  const [nodes , setNodes] = useState(initalNodes)
  const [edges , setEdges] = useState(initialEdges) 

  const onNodesChange= useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  return (
    
    <div className="w-screen h-screen">
      <ReactFlow 
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background/>
        <Controls />
      </ReactFlow>    

    </div>
  )
}

export default App
