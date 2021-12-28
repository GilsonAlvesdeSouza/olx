import styled from "styled-components";

export const Template = styled.div``;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 1.688rem;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  padding: 10px;
  background-color: ${({ color }) => color ?? "#ffcaca"};
  border: 2px solid ${({ color }) => color ?? "#ff0000"};
  border-radius: 4px;
  margin: 10px 0px;
`;
