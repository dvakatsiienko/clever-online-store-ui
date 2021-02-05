/* Core */
import Link from 'next/link';
import styled from 'styled-components';

/* Components */
import { Nav } from './Nav';

export const Header: React.FC = () => (
    <HeaderStyles>
        <div className = 'bar'>
            <Logo>
                <Link href = '/'>Sick fits</Link>
            </Logo>
            <Nav />
        </div>

        <div className = 'sub-bar'>
            <p>Search</p>
        </div>
    </HeaderStyles>
);

/* Styles */
const Logo = styled.h1`
    background-color: red;
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);

    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0.5rem 1rem;
    }
`;

const HeaderStyles = styled.header`
    & .bar {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        border-bottom: 10px solid var(--black, black);
    }

    & .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 10px solid var(--black, black);
    }
`;
