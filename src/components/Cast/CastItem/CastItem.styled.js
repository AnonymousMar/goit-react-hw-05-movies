import styled from "styled-components";

export const Image = styled.img`
  width: 60px;
  margin-right: 20px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const Name = styled.h3`
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;