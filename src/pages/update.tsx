/* Core */
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/* Components */
import { UpdateProductForm } from '@/components';

const UpdatePage: NextPage = () => {
    const router = useRouter();
    const productId = router.query.productId as string;

    return (
        <>
            <UpdateProductForm productId = { productId } />
        </>
    );
};

export default UpdatePage;
