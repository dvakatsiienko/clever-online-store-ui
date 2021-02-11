/* Core */
import { NextPage } from 'next';

/* Components */
import { CreateProductForm } from '@/components';

const SellPage: NextPage = () => {
    return (
        <>
            <h1>Place new product</h1>

            <CreateProductForm />
        </>
    );
};

export default SellPage;
