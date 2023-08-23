import styled from "styled-components";

export const MovieCard = styled.div`
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #2a363b;
`;
export const Images = styled.img`
  width: 300px;
  margin-right: 50px;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
export const TitleText = styled.h3`
  margin-bottom: 5px;
`;
export const Span = styled.span`
  font-weight: 700;
  margin-right: 30px;
`;
export const Text = styled.p`
  margin-bottom: 15px;
`;
export const GenresList = styled.ul`
  list-style: disc;
  margin-bottom: 15px;
  margin-left: 16px;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ButtonBack = styled.button`
  margin-bottom: 15px;
  padding: 5px 8px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a363b;
  border: 0;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus-visible {
    background-color: #2196f3;
    color: #fff;
  }
`;