/* Core */
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/* Components */
import { ResetPasswordForm } from '@/components';

const ResetPasswordPage: NextPage = () => {
    const router = useRouter();
    const token = router.query.token as string;

    return <ResetPasswordForm token = { token } />;
};

export default ResetPasswordPage;
