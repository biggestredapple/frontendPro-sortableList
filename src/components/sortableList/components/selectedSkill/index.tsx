import React from "react";
import { SelectedSkillContainer, RemoveIcon } from "./index.styles";
import { CloseIcon } from "../../../../assets/icons/close";

interface SelectedSkillProps {
  value: string;
  order: number;
  handleDeleteSkill: (value: string) => void;
}

export const SelectedSkill: React.FC<SelectedSkillProps> = (props) => {
  const { value, order, handleDeleteSkill } = props;

  const handleDelete = (value: string) => {
    handleDeleteSkill(value);
  };

  return (
    <SelectedSkillContainer>
      {order}{". "}{value}
      <RemoveIcon onClick={() => handleDelete(value)}>
        <CloseIcon />
      </RemoveIcon>
    </SelectedSkillContainer>
  );
};
