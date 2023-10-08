import React from "react";
import { DisabledContainer } from "./index.styles";

interface DisabledInputProps {
  order: number;
}

export const DisabledInput: React.FC<DisabledInputProps> = (props) => {
  const { order } = props;
  return <DisabledContainer disabled placeholder={`${order}. Add Skill`} />;
};
