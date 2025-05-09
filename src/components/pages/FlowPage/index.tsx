// import { useCallback } from 'react';
// import {
//   ReactFlow,
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   BackgroundVariant,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// const initialNodes = [
//   {
//     id: '1',
//     position: { x: 0, y: 0 },
//     data: { label: '1' },
//     className: 'bg-gray-100 text-black',
//   },
//   {
//     id: '2',
//     position: { x: 0, y: 100 },
//     data: { label: '2' },
//     style: {
//       backgroundColor: '#fafafa', // Light gray
//       color: '#000000', // Black text
//     },
//   },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

// export const FlowView = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       >
//         <Controls />
//         <MiniMap />
//         <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
//       </ReactFlow>
//     </div>
//   );
// };
