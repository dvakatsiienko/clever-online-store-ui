/* Components */
import { Pagination, Products } from '@/components';

const OrdersPage = () => {
    return (
        <>
            <h1>Orders</h1>
            <Pagination pageNumber = { 1 } />
            <Products pageNumber = { 1 } />
            <Pagination pageNumber = { 7 } />
        </>
    );
};

export default OrdersPage;
