/* Core */
import { NextPage } from 'next';

/* Components */
import { CreateProductForm, LoginFormIfUnauthenticated } from '@/components';

const SellPage: NextPage = () => {
    return (
        <LoginFormIfUnauthenticated>
            <CreateProductForm />
        </LoginFormIfUnauthenticated>
    );
};

export default SellPage;
