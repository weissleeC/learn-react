import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  ${props => { console.log(props) }}
`;

const Flex = styled.div`
  display: flex;
`;

export {
  Title,
  Flex
}