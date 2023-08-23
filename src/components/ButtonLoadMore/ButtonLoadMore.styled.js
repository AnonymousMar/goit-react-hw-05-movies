import styled from "styled-components";

export const Button = styled.button`
  margin-left: 30px;
  padding: 5px 8px;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #2a363b;
  border: 0;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  min-width: 120px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #2196f3;
    color: #fff;
  }
`;