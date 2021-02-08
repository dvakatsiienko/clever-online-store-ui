/* Core */
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/* Components */
import { Pagination, Products } from '@/components';

const PaginatedProductPage: NextPage = () => {
    const router = useRouter();
    const pageNumber = Number(router.query.pageNumber) as number;

    return (
        <>
            <h1>Products</h1>
            <Pagination pageNumber = { pageNumber || 1 } />
            <Products pageNumber = { pageNumber || 1 } />
            <Pagination pageNumber = { pageNumber || 1 } />
        </>
    );
};

export default PaginatedProductPage;
