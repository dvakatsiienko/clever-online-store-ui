/* Core */
import styled from 'styled-components';

export const CartStyles = styled.div<CardStylesProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 40%;
    min-width: 500px;
    height: 100vh;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    transform: translateX(100%);

    ${props => props.$open && 'transform: translateX(0);'};

    & header {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 5px solid var(--black);
    }

    & footer {
        align-items: center;
        padding-top: 2rem;
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: 900;
        border-top: 10px double var(--black);

        & p {
            margin: 0;
        }
    }

    & ul {
        padding: 0;
        margin: 0;
        overflow: scroll;
        list-style: none;
    }
`;

/* Types */
interface CardStylesProps {
    $open: boolean;
}
