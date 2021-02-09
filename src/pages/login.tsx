/* Core */
import { NextPage } from 'next';
import styled from 'styled-components';

/* Components */
import { LoginForm, RegisterForm, RequestPasswordRestForm } from '@/components';

const LoginPage: NextPage = () => {
    return (
        <Container>
            <LoginForm />
            <RegisterForm />
            <RequestPasswordRestForm />
        </Container>
    );
};

/* Styles */
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
`;

export default LoginPage;
