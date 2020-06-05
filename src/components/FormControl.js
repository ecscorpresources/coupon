import styled from "styled-components";

export const TextInput = styled.input`
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1.4rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1.4rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  margin-bottom: 1.5rem;
  width: 100%;
  resize: none;
  font-weight: 600;
`;

export const Select = styled.select`
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1.4rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: grey;
`;

export const Title = styled.article`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;

  h4 {
    font-size: 2rem;
    color: #30458d;
  }

  a {
    text-decoration: underline;
    font-size: 1.2rem;
    color: #40759d;
  }
`;

export const EQUALGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HALFGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr;
  column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UNEQUALEDGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  column-gap: 1rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const GRID = styled.article`
  display: grid;
  grid-template-columns: 1fr;
`;
