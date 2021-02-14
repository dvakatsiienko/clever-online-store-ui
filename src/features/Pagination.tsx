/* Core */
import Head from 'next/head';
import Link from 'next/link';

/* Components */
import { PaginationStyles } from '@/components/styled';
import { ErrorMessage } from '@/components';

/* Instruments */
import * as gql from '@/graphql';

const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);

export const Pagination: React.FC<PaginationProps> = props => {
    const productsCountQuery = gql.useProductsCountQuery();

    const pageCount = Math.ceil(
        productsCountQuery.data?._allProductsMeta.count / ITEMS_PER_PAGE,
    );

    if (productsCountQuery.loading) {
        return <h6>Loading...</h6>;
    }
    if (productsCountQuery.error) {
        return <ErrorMessage error = { productsCountQuery.error } />;
    }

    return (
        <PaginationStyles>
            <Head>
                <title>
                    Sick Fits - Page {props.pageNumber} of {pageCount}
                </title>
            </Head>

            <Link href = { `/products/${props.pageNumber - 1}` }>
                <a aria-disabled = { props.pageNumber <= 1 }>← Prev</a>
            </Link>
            <p>
                Page {props.pageNumber} of {pageCount}
            </p>
            <p>{productsCountQuery.data?._allProductsMeta.count} Items Total</p>
            <Link href = { `/products/${props.pageNumber + 1}` }>
                <a aria-disabled = { props.pageNumber >= pageCount }>Next →</a>
            </Link>
        </PaginationStyles>
    );
};

/* Types */
interface PaginationProps {
    pageNumber: number;
}
