'user client'
import React, {useState} from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import GRLineChart from './GRLineChart';
import MSLineChart from './MSLineChart';
import SPChart from './SPChart';

export default function NewCard() {
    const [isGRShown, setIsGRShown] = useState(false);
    const [isMSShown, setIsMSShown] = useState(false);
    const [isSPShown, setIsSPShown] = useState(false);

    const items: MenuProps['items'] = [
        {
        key: '1',
        label: (
        <Button onClick={() => setIsGRShown(true)}>
            <label>
            Growth Revenue
            </label>
        </Button>
        ),
        },
        {
        key: '2',
        label: (
        <Button onClick={() => setIsMSShown(true)}>
            <label>
            Market Share
            </label>
        </Button>
        ),
        },
        {
        key: '3',
        label: (
        <Button onClick={() => setIsSPShown(true)}>
            <label>
            Sales Process
            </label>
        </Button>
        ),
        },
    ];

    return(<>
        {!isGRShown && !isMSShown && !isSPShown? <Dropdown menu={{ items }} placement="bottom" arrow>
        <Button> + New Card </Button>
        </Dropdown>: ""}
        <br />
        {isGRShown? <GRLineChart />: ""}
        {isMSShown? <MSLineChart />: ""}
        {isSPShown? <SPChart />: ""}
    </>);
}