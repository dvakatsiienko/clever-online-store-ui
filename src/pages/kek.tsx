/* Core */
import { NextPage }  from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
    useRouter().replace('/products?page=1');

    return null;
};

export default HomePage;
