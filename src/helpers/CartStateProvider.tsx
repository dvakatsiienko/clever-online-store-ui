/* Core */
import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext({
    isCartOpen:  false,
    setCartOpen: (_: boolean) => void 0,
});
const { Provider: LocalStateProvider } = LocalStateContext;

export const CartStateProvider: React.FC = props => {
    const [ isCartOpen, setCartOpen ] = useState(false);

    return (
        <LocalStateProvider
            value = {{
                isCartOpen,
                setCartOpen,
            }}
        >
            {props.children}
        </LocalStateProvider>
    );
};

export const useCart = () => {
    const cartState = useContext(LocalStateContext);

    return cartState;
};
