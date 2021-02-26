/* Core */
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { merge } from 'webpack-merge';

/* Components */
import { OrderStyles } from '@/components/styled';
import { ErrorMessage } from '@/components';
import { Layout } from '@/features/Layout';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';
import { formatMoney } from '@/helpers';

const OrderByIdPage: NextPage = () => {
    const router = useRouter();
    const orderId = router.query.orderId as string;

    const orderQuery = gql.useOrderQuery({ variables: { id: orderId } });

    if (orderQuery.loading) {
        return <p>Loading...</p>;
    }
    if (orderQuery.error) {
        return <ErrorMessage error = { orderQuery.error } />;
    }

    const order = orderQuery.data?.order;

    const orderItemsJSX = order.items.map(orderItem => {
        return (
            <div className = 'order-item' key = { orderItem.id }>
                <img
                    alt = { orderItem.name }
                    src = { orderItem.photo.image.publicUrlTransformed }
                />
                <div className = 'item-details'>
                    <h2>{orderItem.name}</h2>
                    <p>Quantity: {orderItem.quantity}</p>
                    <p>Each: {formatMoney(orderItem.price)}</p>
                    <p>
                        Sub Total:{' '}
                        {formatMoney(orderItem.price * orderItem.quantity)}
                    </p>
                    <p>Description: {orderItem.description}</p>
                </div>
            </div>
        );
    });

    return (
        <Layout>
            <OrderStyles>
                <Head>
                    <title>Sick Fits — {order.id}</title>
                </Head>
                <p>
                    <span>Order Id:</span>
                    <span>{order.id}</span>
                </p>
                <p>
                    <span>Charge:</span>
                    <span>{order.charge}</span>
                </p>
                <p>
                    <span>Order Total:</span>
                    <span>{formatMoney(order.total)}</span>
                </p>
                <p>
                    <span>Item Count:</span>
                    <span>{order.items.length}</span>
                </p>
                <div className = 'items'>{orderItemsJSX}</div>
            </OrderStyles>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const orderId = ctx.query.orderId as string;

    const [ userQuery, allOrdersQuery ] = await Promise.all([
        gql.ssrUser.getServerPage({}, ctx),
        gql.ssrOrder.getServerPage({ variables: { id: orderId } }, ctx),
    ]);

    return merge(userQuery, allOrdersQuery);
};

export default withApollo(OrderByIdPage);
