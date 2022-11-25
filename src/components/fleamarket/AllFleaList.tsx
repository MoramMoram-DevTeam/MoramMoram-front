import React, {useState, useEffect} from "react";
import styled from "styled-components";

import MarketFrame from "./MarketFrame";
import axios from "axios";
import { FleaInfo } from "./FleaMarketList";

const AllFleaList = () => {
  const [FLists, setFLists] = useState<FleaInfo[] | undefined>([]);

  const getAllFLists = async () => {
    await axios.get('/markets')
    .then((res) => {
      setFLists(res.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllFLists();
  },[])

}

export default AllFleaList;