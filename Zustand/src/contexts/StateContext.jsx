import { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const Context = createContext();

const StateContext = ({ children }) => {
    const [qty, setQty] = useState(1);

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        if (qty > 1) {
            setQty((prevQty) => prevQty - 1);
        } else {
            toast.error('Quantity cannot be less than 1');
        }
    }

    return (
        <Context.Provider
            value={{
                qty,
                incQty,
                decQty
            }}
        >
            {children}
        </Context.Provider>
    );
}

StateContext.propTypes = {
    children: PropTypes.element.isRequired
}


export const useStateContext = () => useContext(Context);
export default StateContext;
