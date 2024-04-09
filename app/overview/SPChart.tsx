import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
               { id: '2-3', source: '2', target: '3', label: 'to the', type: 'step' },
               { id: '3-4', source: '3', target: '4', label: 'to the', type: 'step' },
               { id: '4-5', source: '4', target: '5', label: 'to the', type: 'step' },
];

const nodes = [
  {
    id: '1',
    data: { label: 'Original' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'Delivery' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Inventory' },
    position: { x: 200, y: 200 },
  },
  {
    id: '4',
    data: { label: 'Distrubutor' },
    position: { x: 300, y: 300 },
  },
  {
    id: '5',
    data: { label: 'Store' },
    position: { x: 400, y: 400 },
  },
];

function SPChart() {
  return (
    <div style={{ height: '400px' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default SPChart;
