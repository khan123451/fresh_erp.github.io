import React from 'react';
import './image2.css';
import { Card, Button } from 'antd/lib';

const freshPanel1 = () => {
  return (
    <div className="side-panel">
    <Card>
      <div className="store-image" />
      <div className="store-details">
        <h2>Store Details</h2>
        <p>Fresh Singapore store 2</p>
        <Button>View the store</Button>
        <p><strong>Revenue:</strong> $76.7K</p>
        <p><strong>Cost:</strong> $65.7K</p>
      </div>
      </Card>
    </div>
  );
};

export default freshPanel1;