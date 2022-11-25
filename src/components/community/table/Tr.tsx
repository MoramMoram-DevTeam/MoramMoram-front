import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommuTop5Lists from '../CommuTop5Lists';
import Td from './Td';

const Tr = ({ lists }: any) => {

  useEffect(() => {
    console.log('Tr lists: ', lists);
    console.log('role', lists.url);
  }, [])
  return (


    // lists.url === "tips"
    // ?
    // <div>tips</div>
    // lists.lists.result &&
    // <div>{lists.lists.result[0].name}</div> 
    //   lists.lists.result.map((item: { tipBoardId: number; }) => {
    //     return (
    //     <tbody>
    //         {/* <CommuTop5Lists tipBoardId={item.tipBoardId}/> */}
    //         <Td key={item.tipBoardId} item={item} url={lists.url}  />

    //     </tbody>
    //     )
    // })
    // :
    <tbody>
      {lists.url === "questions" &&
      <CommuTop5Lists url={lists.url} /> }
      {
        lists && lists.url === "questions"
        ?
        lists.lists.map((item: { questionBoardId: number; }) => {
          return (

            <Td key={item.questionBoardId} item={item} url={lists.url} />

          )
        })
        :
        lists.lists.map((item: { tipBoardId: number; }) => {
          return (

            <Td key={item.tipBoardId} item={item} url={lists.url} />

          )
        })
      }
    </tbody>
  );
};

export default Tr;