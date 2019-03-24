import React from "react";
import "./Button.css";

interface IButtonProps {
  onClick: any;
  children: any;
}

export default function Button(props: IButtonProps) {
  return (
    <button className="Button" onClick={props.onClick}>
      { props.children }
    </button>
  );
}
