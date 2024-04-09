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
                position 02
            </Button>
            <Button type="primary" disabled>
                position 03
            </Button>
        </Flex>
        <br />
        <Flex gap="small">
            <Button type="primary" disabled>
                position 04
            </Button>
            <Button type="primary" disabled>
                position 05
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