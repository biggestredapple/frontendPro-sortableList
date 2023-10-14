import styled from "styled-components";

export const SelectedSkillContainer = styled.div`
  width: 224px;
  position: relative;
  padding: 12px;
  margin-bottom: 10px; 
  font-size: 16px;
  border-radius: 8px;
  background-color: #1E1A65;
  color: #fff;
  box-sizing: border-box;
  border-color: rgb(118, 118, 118);
  border-style: inset;
  border-width: 2px;
  border-image: initial;
`;

export const RemoveIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
