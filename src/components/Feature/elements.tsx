import styled from 'styled-components';

export const Container = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('images/featured-3.jpg');
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const Heading = styled.h2`
  font-size: clamp(3rem, 5vw, 5rem);
`;

export const Text = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 1rem;
`;

export const OrderButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    cursor: pointer;
  }
`;
