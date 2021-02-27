/* Core */
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

/* Components */
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
                    Clever - Page {props.pageNumber} of {pageCount}
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

/* Styles */
export const PaginationStyles = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    align-content: center;
    align-items: stretch;
    justify-content: center;
    margin: 2rem 0;
    text-align: center;
    border: 1px solid var(--lightGray);
    border-radius: 10px;

    & > * {
        padding: 15px 30px;
        margin: 0;
        user-select: none;
        border-right: 1px solid var(--lightGray);

        &:last-child {
            border-right: 0;
        }
    }

    a[aria-disabled='true'] {
        color: grey;
        pointer-events: none;
    }
`;

/* Types */
interface PaginationProps {
    pageNumber: number;
}
