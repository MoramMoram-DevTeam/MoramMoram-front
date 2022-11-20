import React from "react";
import effect from "../../assets/images/effect.svg";
import "./Common.css";

type WrapProps = {
  children: React.ReactNode;
}

const Common = (props: WrapProps) => {
  return (
    <div className="wrap">
        <div className="title">질문게시판<img src={effect} alt="*" /></div>
        <div>{props.children}</div>
    </div>
  )
}

export default Common;
