/* Core */
import styled from 'styled-components';

export const CloseButton = styled.button`
    background: black;
    color: white;
    font-size: 3rem;
    border: 0;
    position: absolute;
    z-index: 2;
    right: 15px;
    cursor: pointer;
    width: 60px;
    transform: skew(-10deg);

    &:hover {
        background: grey;
        color: black;
    }
`;
