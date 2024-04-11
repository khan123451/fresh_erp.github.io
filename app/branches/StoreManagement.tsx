import React from 'react';
import { Button, Flex } from 'antd';
import ItemDropDown from './ItemDropDown';
import ShelfDropDown from './ShelfDropDown';


const StoreManagement: React.FC = () => (
    <div style={{margin:"auto"}}>
        <ItemDropDown />
        <br />
        <ShelfDropDown />
        <br />
        <br />
        <Flex gap="small">
            <Button type="primary">
                position 01
            </Button>
            <Button type="primary" disabled>
                Tone Wash
            </Button>
            <Button type="primary" disabled>
                Facial Cream
            </Button>
        </Flex>
        <br />
        <Flex gap="small">
            <Button type="primary" disabled>
                09 Lip Stick
            </Button>
            <Button type="primary" disabled>
                Discount item
            </Button>
            <Button type="primary">
                position 06
            </Button>
        </Flex>
        <br />
        <Flex gap="small">
            <Button type="primary">
                position 07
            </Button>
            <Button type="primary">
                position 08
            </Button>
            <Button type="primary">
                position 09
            </Button>
        </Flex>
        <br />
        <Flex gap="small">
            <Button type="primary" style={{"marginRight": "5px"}}>
                position  10
            </Button>
            <Button type="primary" style={{"marginRight": "4px"}}>
                position  11
            </Button>
            <Button type="primary">
                position  12
            </Button>
        </Flex>
        <br />
    </div>
);

export default StoreManagement;