import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  labelName: string;
  inputName: string;
  value?: string | number | readonly string[] | undefined;
}
function CFormGroupInput({ handleChange, inputName, labelName, value }: Props) {
  return (
    <FormGroup>
      <Label>{labelName}</Label>
      <Input className="form-control" name={inputName} type="text" onChange={handleChange} value={value} />
    </FormGroup>
  );
}

export default CFormGroupInput;
