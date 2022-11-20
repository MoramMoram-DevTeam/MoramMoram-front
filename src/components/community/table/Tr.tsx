import React from 'react';
import Td from './Td';

const Tr = ({lists}:any) => {
    return (
        <tbody>
            {
                lists.map((item: { questionBoardId: number; }) => {
                    return (
                        <Td key={item.questionBoardId} item={item}  />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;