import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 224px;
  position: relative;
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  input {
    max-width: 224px;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    background: #F7F7FA;
    border: solid 1px #ECEDF5;
  }
  
  input::placeholder {
    color: #5F6591;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  padding-top: 8px;
  margin: 0;
  margin-top: 8px;
  background: #F7F7FA;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;
  color: #5F6591;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0.4em;
  cursor: pointer;

  &:hover {
    background-color: #E4E4F0;
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
