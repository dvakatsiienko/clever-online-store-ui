/* Core */
import styled from 'styled-components';

export const OrderUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 4rem;
`;

export const OrderItemStyles = styled.li`
    padding: 2rem;
    list-style: none;
    cursor: pointer;
    border: 1px solid var(--offWhite);
    box-shadow: var(--bs);

    & h2 {
        padding-bottom: 2rem;
        margin-top: 0;
        margin-bottom: 2rem;
        border-bottom: 2px solid red;
    }

    & .images {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        grid-gap: 10px;
        margin-top: 1rem;

        & img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }

    & .order-meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
        grid-gap: 1rem;
        text-align: center;

        & > * {
            padding: 1rem 0;
            margin: 0;
            background: rgba(0, 0, 0, 0.03);
        }

        & strong {
            display: block;
            margin-bottom: 1rem;
        }
    }
`;
