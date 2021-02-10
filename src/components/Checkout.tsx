/* Core */
import { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
    useStripe,
    useElements,
    Elements,
    CardElement
} from '@stripe/react-stripe-js';
import nprogress from 'nprogress';

/* Components */
import { SickButton } from '@/components/styled';

const CheckoutForm: React.FC = () => {
    const [ error, setError ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const checkout = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        nprogress.start();

        const response = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (response.error) {
            setError(response.error);
        }

        nprogress.done();
        setLoading(false);
    };

    return (
        <CheckoutFormStyles onSubmit = { checkout }>
            {error && (
                <p css = 'font-size: 12px; color: var(--red);'>{error.message}</p>
            )}
            <CardElement />
            <SickButton disabled = { isLoading }>Check Out Now</SickButton>
        </CheckoutFormStyles>
    );
};

export const Checkout: React.FC = () => {
    return (
        <Elements stripe = { stripe }>
            <CheckoutForm />
        </Elements>
    );
};

/* Styles */
const CheckoutFormStyles = styled.form`
    display: grid;
    grid-gap: 1rem;

    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    padding: 1 rem;
`;

/* Helpers */
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
