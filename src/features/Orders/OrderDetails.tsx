/* Components */
import { OrderStyles } from '@/styled-components';

/* Instruments */
import * as gql from '@/graphql';
import { formatMoney } from '@/helpers';

export const OrderDetails: React.FC<OrderDetailsProps> = props => {
    const orderItemsJSX = props.order.items.map(orderItem => {
        return (
            <div className = 'order-item' key = { orderItem.id }>
                <img
                    alt = { orderItem.name }
                    src = { orderItem.photo.image.publicUrlTransformed }
                />
                <div className = 'item-details'>
                    <h2>{orderItem.name}</h2>
                    <p>Quantity: {orderItem.quantity}</p>
                    <p>Each: {formatMoney(orderItem.price)}</p>
                    <p>
                        Sub Total:{' '}
                        {formatMoney(orderItem.price * orderItem.quantity)}
                    </p>
                    <p>Description: {orderItem.description}</p>
                </div>
            </div>
        );
    });

    return (
        <OrderStyles>
            <p>
                <span>Order Id:</span>
                <span>{props.order.id}</span>
            </p>
            <p>
                <span>Charge:</span>
                <span>{props.order.charge}</span>
            </p>
            <p>
                <span>Order Total:</span>
                <span>{formatMoney(props.order.total)}</span>
            </p>
            <p>
                <span>Item Count:</span>
                <span>{props.order.items.length}</span>
            </p>
            <div className = 'items'>{orderItemsJSX}</div>
        </OrderStyles>
    );
};

/* Types */
interface OrderDetailsProps {
    order: gql.OrderFragment;
}
