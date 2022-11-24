import React, { useState, useRef } from "react";
import styles from "./CommunityWriting.module.css";
import plus from "../../assets/images/plus.svg";
import Common from "../../../components/community/Common";
import axios from "axios";
import CommunityWriting from "components/community/CommunityWriting";

const QnaCommuWrite = () => {

  return (
    <Common title="질문게시판">
      <CommunityWriting url="questions" />
    </Common>
  )

}

export default QnaCommuWrite;