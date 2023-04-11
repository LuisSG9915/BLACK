import React from "react";
import { Button } from "reactstrap";
interface Props {
  color: string;
  onClick: (arg0?: string | undefined) => void;
  text: string;
}
function CButton({ color, onClick, text }: Props) {
  return (
    <Button color={color} onClick={() => onClick()}>
      {text}
    </Button>
  );
}

export default CButton;
