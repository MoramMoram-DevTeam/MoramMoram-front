import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import effect from "../../assets/images/effect.svg";
import styles from "./ApplicationResult.module.css";

const ApplicationResult = () => {
  const detailRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentAppId, setCurrentAppId] = useState<any>();
  const [lists, setLists] = useState<any>([
    //   {
    //     "applicationId": 1,
    //     "marketId": 1,
    //     "userId": 2,
    //     "storeName": "자양사랑 플리마켓",
    //     "onlineChannel": null,
    //     "returnAddress": null,
    //     "categoryId": 1,
    //     "category1": true,
    //     "category2": false,
    //     "category3": false,
    //     "category4": false,
    //     "subCategoryId": 1,
    //     "subCategory1": "가죽지갑",
    //     "subCategory2": "가죽공예",
    //     "subCategory3": null,
    //     "subCategory4": null,
    //     "subCategory5": null,
    //     "marketExp": true,
    //     "onlineExp": true,
    //     "utensil": null,
    //     "certificateImg": null,
    //     "priceAvg": "1만원~2만원",
    //     "itemImg": null,
    //     "request": null,
    //     "createdAt": "2022-11-23T05:13:56",
    //     "updatedAt": "2022-11-23T05:13:56",
    //     "status": null,
    //     "userName": "user"
    // },
    // {
    //     "applicationId": 2,
    //     "marketId": 1,
    //     "userId": 2,
    //     "storeName": "my store",
    //     "onlineChannel": null,
    //     "returnAddress": null,
    //     "categoryId": 2,
    //     "category1": true,
    //     "category2": false,
    //     "category3": false,
    //     "category4": false,
    //     "subCategoryId": 2,
    //     "subCategory1": "목걸이",
    //     "subCategory2": "반지",
    //     "subCategory3": null,
    //     "subCategory4": null,
    //     "subCategory5": null,
    //     "marketExp": 10,
    //     "onlineExp": false,
    //     "utensil": null,
    //     "certificateImg": null,
    //     "priceAvg": "3~5만원",
    //     "itemImg": null,
    //     "request": null,
    //     "createdAt": "2022-11-23T05:13:57",
    //     "updatedAt": "2022-11-23T05:13:57",
    //     "status": '',
    //     "userName": "user"
    // }
  ]);

  const onClickBtn = () => {
    navigate('/company/application', {
      state: {applicationId: currentAppId}
    })
  };

  const getLists = () => {
    axios.get('/applications/company?m_id=3')
      .then((res) => {
        console.log('what?: ', res.data);
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    detailRef.current?.scrollIntoView();
    getLists();   

  }, []);


  return (
    <div className={styles.app_wrap} ref={detailRef}>
      <div className={styles.app_title}>신청 리스트업 확인<img src={effect} alt="*" /></div>
      <div >
        <table>
          <tbody >
            {
              lists.map((item: any) => (
                <tr key={item.applicationId} onMouseEnter={() => {setCurrentAppId(item.applicationId); console.log(currentAppId);}}>
                  <td className={styles.td_title}>{item.userName}</td>
                  <td className={styles.td_desc}>{item.storeName}</td>
                  <td className={styles.td_btn}>
                    <button className={styles.btn} onClick={onClickBtn}>보기</button>
                  </td>
                </tr>
              ))
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApplicationResult;