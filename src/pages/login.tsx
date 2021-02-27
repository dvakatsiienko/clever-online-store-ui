/* Core */
import { NextPage, GetServerSideProps } from 'next';

/* Components */
import { LoginPageLayout } from '@/styled-components';
import { LoginForm, RegisterForm, RequestPasswordRestForm } from '@/components';
import { Layout } from '@/features/Layout';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

const LoginPage: NextPage = () => {
    return (
        <Layout>
            <LoginPageLayout>
                <LoginForm />
                <RegisterForm />
                <RequestPasswordRestForm />
            </LoginPageLayout>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const [ userQuery ] = await Promise.all([ gql.ssrUser.getServerPage({}, ctx) ]);

    return userQuery;
};

export default withApollo(LoginPage);
