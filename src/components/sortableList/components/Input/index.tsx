import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { ArrowDown } from "../../../../assets/icons/arrowDown";

import {
  InputContainer,
  InputBox,
  DropdownList,
  ListItem,
  ArrowIcon,
} from "./index.styles";

interface InputProps {
  defaultSkillList: string[];
  order: number;
  handleAddSkill: (value: string) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { defaultSkillList, order, handleAddSkill } = props;

  const [value, setValue] = useState<string>("");
  const filteredSkillList = defaultSkillList
    .filter((skill) => skill.toLowerCase().startsWith(value.toLowerCase()))
    .sort();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [containerRef]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleItemSelected = (item: string) => {
    setIsOpen(false);
    handleAddSkill(item);
    setValue("");
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  return (
    <InputContainer ref={containerRef}>
      <InputBox>
        <input value={value} onChange={handleChange} onFocus={handleFocus} placeholder={`${order} Add Skill`} />
        <ArrowIcon>
          <ArrowDown />
        </ArrowIcon>
      </InputBox>
      {!!filteredSkillList.length && !!value.length && isOpen && (
        <DropdownList>
          {filteredSkillList.map((item, key) => (
            <ListItem key={key} onClick={() => handleItemSelected(item)}>
              {item}
            </ListItem>
          ))}
        </DropdownList>
      )}
    </InputContainer>
  );
};
