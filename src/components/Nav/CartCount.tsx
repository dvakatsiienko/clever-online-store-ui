/* Core */
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';

export const CartCount: React.FC<CartCountProps> = props => {
    return (
        <AnimationStyles>
            <TransitionGroup>
                <CSSTransition
                    unmountOnExit
                    className = 'count'
                    classNames = 'count'
                    key = { props.count }
                    timeout = { 400 }
                >
                    <Dot>{props.count}</Dot>
                </CSSTransition>
            </TransitionGroup>
        </AnimationStyles>
    );
};

/* Styles */
const Dot = styled.div`
    background-color: var(--red);
    color: white;
    border-radius: 50%;
    padding: 0.5rem;
    line-height: 2rem;
    min-width: 3rem;
    margin-left: 1rem;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
`;

const AnimationStyles = styled.span`
    position: relative;

    & .count {
        display: block;
        position: relative;
        transition: transform 0.4s ease;
        backface-visibility: hidden;

        &-enter {
            transform: scale(4) rotateX(0.5turn);

            &-active {
                transform: rotateX(0);
            }
        }

        &-exit {
            top: 0;
            position: absolute;
            transform: rotateX(0);

            &-active {
                transform: scale(4) rotateX(0.5turn);
            }
        }
    }
`;
/* Types */
interface CartCountProps {
    count: number;
}
