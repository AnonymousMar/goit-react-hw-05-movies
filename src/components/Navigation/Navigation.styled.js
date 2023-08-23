import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #2196f3;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;