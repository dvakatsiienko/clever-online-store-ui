/* Core */
import { NextPage } from 'next';

/* Components */
import { CreateProductForm, PleaseSignIn } from '@/components';

const SellPage: NextPage = () => {
    return (
        <>
            <PleaseSignIn>
                <CreateProductForm />
            </PleaseSignIn>
        </>
    );
};

export default SellPage;
