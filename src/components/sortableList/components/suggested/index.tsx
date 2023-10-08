import React from "react";
import { Item, ItemContainer, Title } from "./index.styles";

interface SuggestedProps {
  skills: string[];
  handleAdd: (value: string) => void;
}

export const Suggested: React.FC<SuggestedProps> = (props) => {
  const { skills, handleAdd } = props;

  const handleSelect = (value: string) => {
    handleAdd(value);
  };

  return (
    <div>
      <Title>Suggested Skills</Title>
      {!!skills.length && (
        <ItemContainer>
          {skills.map((skill, key) => (
            <Item key={key} onClick={() => handleSelect(skill)}>
              + {`  ${skill}`}
            </Item>
          ))}
        </ItemContainer>
      )}
    </div>
  );
};
