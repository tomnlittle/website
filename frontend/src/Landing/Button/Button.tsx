import React from "react";

import "./Button.css";

export default function Button(props: any) {
  return (
    <button className="Button">
      { props.children }
    </button>
  );
}
