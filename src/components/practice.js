// cart

import { Action } from "history";
import {CartState} from "../contexts/Context";

export default function Cart() {
    const { state: {cart}, dispatch} = CartState();

    return (
        <>
            <div className="Cart" style={{textAlign: "center", padding: "30px"}}>
                <h2>Your Cart</h2>
                {/* Mapping out the cart */}
                {cart.map((product) => {
                    <div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => {
                            dispatch({type: "REMOVE", payload: product})
                        }}>Remove</button>
                    </div>
                })}
                <button onClick={() => {
                    dispatch({type: "CLEAR"})
                }}>Checkout</button>
            </div>
        </>
    );
}

// reducer

    case "ADD" :
        return {
            ...state,
            cart: [...state.cart, {...action.payload, qy: action..quantity || 1}]
        };
    case "REMOVE" :
        return {
            ...state,
            cart: state.cart.filter((c) => c.id !== action.payload.id)
        };

    case "CLEAR" :
        return {
            ...state;
            cart: []
        };
        default:
            return state;
    }
}
