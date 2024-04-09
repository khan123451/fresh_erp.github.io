import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2', label: 'Next', type: 'step' },
               { id: '2-3', source: '2', target: '3', label: 'Next', type: 'step' },
               { id: '3-4', source: '3', target: '4', label: 'Next', type: 'step' },
               { id: '4-5', source: '4', target: '5', label: 'Next', type: 'step' },
               { id: '6-7', source: '6', target: '7', label: 'Lead', type: 'step' },
               { id: '7-8', source: '7', target: '8', label: '', type: 'step' },
];

const nodes = [
  {
    id: '1',
    data: { label: 'Done: Start' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '6',
    data: { label: 'Leader: Kim' },
    position: { x: 0, y: 100 },
    type: 'input',
  },
  {
    id: '7',
    data: { label: 'Member: John' },
    position: { x: 0, y: 200 },
    type: 'input',
  },
  {
    id: '8',
    data: { label: 'Member: Tom' },
    position: { x: 0, y: 300 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'Done: Analysis' },
    position: { x: 200, y: 0 },
  },
  {
    id: '9',
    data: { label: 'Leader: Jack' },
    position: { x: 200, y: 100 },
    type: 'input',
  },
  {
    id: '10',
    data: { label: 'Member: Dimmy' },
    position: { x: 200, y: 200 },
    type: 'input',
  },
  {
    id: '11',
    data: { label: 'Member: Wong' },
    position: { x: 200, y: 300 },
    type: 'input',
  },
  {
    id: '12',
    data: { label: 'Member: Lee' },
    position: { x: 200, y: 400 },
    type: 'input',
  },
  {
    id: '3',
    data: { label: 'Todo: Test' },
    position: { x: 400, y: 0 },
  },
  {
    id: '13',
    data: { label: '+' },
    position: { x: 400, y: 100 },
    type: 'input',
  },
  {
    id: '4',
    data: { label: 'Change' },
    position: { x: 600, y: 0 },
  },
  {
    id: '5',
    data: { label: 'Finish' },
    position: { x: 800, y: 0 },
  },
];

function PMChart() {
  return (
    <div style={{ height: '400px' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default PMChart;
