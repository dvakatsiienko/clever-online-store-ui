/* Core */
import styled from 'styled-components';

/* Components */
import { Header } from './Header';

export const Layout: React.FC = props => {
    return (
        <>
            <Header />
            <InnerStyles>{props.children}</InnerStyles>
        </>
    );
};

/* Styles */
const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2 rem;
`;
