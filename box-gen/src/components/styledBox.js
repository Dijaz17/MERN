import styled from 'styled-components';

const StyledBox = styled.div`
    border: 2px solid black;
    background: ${props => props.bgColor};
    width: 100px;
    height: 100px;
`;

export default StyledBox;