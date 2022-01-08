import React from "react";
import s from "./feedback.module.css";

const Notification =({message})=>(
    <p className={s.text}>{message}</p>
)
export default Notification