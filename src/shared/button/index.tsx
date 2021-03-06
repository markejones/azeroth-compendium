import * as React from "react";

import "./index.scss";

interface ButtonProps {
  onClick: React.MouseEventHandler;
  disabled?: boolean;
}

export function Button({ onClick, disabled = false }: ButtonProps) {
  return (
    <button className="button default" onClick={onClick} disabled={disabled}>
      click me
    </button>
  );
}
