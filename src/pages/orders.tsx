/* Core */
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { merge } from 'webpack-merge';
import styled from 'styled-components';

/* Components */
import { OrderItemStyles } from '@/components/styled';
import { ErrorMessage } from '@/components';
import { Layout } from '@/features/Layout';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';
import { formatMoney } from '@/helpers';

const OrdersPage: NextPage = () => {
    const allOrdersQuery = gql.useAllOrdersQuery();

    if (allOrdersQuery.loading) {
        return <p>Loading...</p>;
    }
    if (allOrdersQuery.error) {
        return <ErrorMessage error = { allOrdersQuery.error } />;
    }

    const allOrders = allOrdersQuery.data?.allOrders;
    const allOrdersJSX = allOrders.map(order => {
        const itemsInOrder = countItemsInOrder(order);

        return (
            <OrderItemStyles key = { order.id }>
                <Link href = { `/order/${order.id}` }>
                    <a>
                        <div className = 'order-meta'>
                            <p>
                                {itemsInOrder}{' '}
                                {itemsInOrder === 1 ? 'Item' : 'Items'}
                            </p>
                            <p>
                                {order.items.length} Product
                                {order.items.length === 1 ? '' : 's'}
                            </p>
                            <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className = 'images'>
                            {order.items.map(item => {
                                return (
                                    <img
                                        alt = { item.name }
                                        key = { item.id }
                                        src = {
                                            item.photo.image
                                                .publicUrlTransformed
                                        }
                                    />
                                );
                            })}
                        </div>
                    </a>
                </Link>
            </OrderItemStyles>
        );
    });

    return (
        <Layout>
            <Head>
                <title>Your Orders ({allOrders.length}).</title>
            </Head>

            <h1>You have {allOrders.length} orders!</h1>
            <OrderUl>{allOrdersJSX}</OrderUl>
        </Layout>
    );
};

/* Styles */
const OrderUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 4rem;
`;

/* Helpers */
function countItemsInOrder(order: gql.OrderFragment) {
    return order.items.reduce((tally, item) => {
        return tally + item.quantity;
    }, 0);
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//     const [ userQuery, allOrdersQuery ] = await Promise.all([
//         gql.ssrUser.getServerPage({}, ctx),
//         gql.ssrAllOrders.getServerPage({}, ctx),
//     ]);

//     return merge(userQuery, allOrdersQuery);
// };

export default withApollo(OrdersPage);
