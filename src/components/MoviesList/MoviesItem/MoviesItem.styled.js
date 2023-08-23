import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a363b;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #2196f3;
    ::before {
      background-color: #2196f3;
    }
  }

  ::before {
    content: "";
    display: inline-block;
    margin-right: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #2a363b;
  }
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;