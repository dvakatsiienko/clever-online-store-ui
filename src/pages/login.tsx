/* Core */
import { NextPage, GetServerSideProps } from 'next';
import styled from 'styled-components';

/* Components */
import { LoginForm, RegisterForm, RequestPasswordRestForm } from '@/components';
import { Layout } from '@/features/Layout';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

const LoginPage: NextPage = () => {
    return (
        <Layout>
            <Container>
                <LoginForm />
                <RegisterForm />
                <RequestPasswordRestForm />
            </Container>
        </Layout>
    );
};

/* Styles */
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
`;

export const getServerSideProps: GetServerSideProps = async ctx => {
    const [ userQuery ] = await Promise.all([ gql.ssrUser.getServerPage({}, ctx) ]);

    return userQuery;
};

export default withApollo(LoginPage);
