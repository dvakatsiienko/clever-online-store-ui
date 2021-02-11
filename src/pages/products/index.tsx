/* Core */
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductsPage: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/products/1');
    }, []);

    return null;
};

export default ProductsPage;
