import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Input } from '@chakra-ui/react';
import useCartStore from '../app/cartStore';
import useCourseStore from '../app/courseStore';

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const { cartItem, removeFromCart } = useCartStore(
        (state) => ({
            cartItem: state.cartItem,
            removeFromCart: state.removeFromCart
        })
    );
    const { courses } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            addPrice: state.price
        })
    );


    //  add the prices of each course and make a total amount
    // Add the prices of each course and make a total amount
    const totalAmount = cartItem.reduce((acc, curr) => {
        // Ensure that curr.price is parsed as a number using parseFloat or Number
        const priceToAdd = parseFloat(curr.price) || 0;

        return acc + priceToAdd;
    }, 0);



    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open Cart
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Order</DrawerHeader>
                    <hr className=' w-full bg-slate-600' />
                    <div className='shadow-2xl'>
                        {cartItem.length > 0 ? (
                            cartItem.map((item) => (
                                <DrawerBody key={item.id} className='gap-4'>
                                    <div className='flex gap-2'>
                                        <p className='font-medium text-left'>{item?.name}</p>
                                        <hr className='h-20 w-1 bg-gray-300' />
                                        <p className='text-2xl font-bold m-auto'><span className='font-light'>price</span> ${item.price}</p>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className='text-[white] mt-4 m-auto flex w-[50%] text-center items-center justify-center relative py-2 px-6 font-semibold rounded-[50px] overflow-hidden bg-black transition-all duration-400 ease-in-out shadow-lg hover:scale-105 hover:text-white hover:shadow-xl active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0'
                                    >
                                        Remove
                                    </button>
                                </DrawerBody>
                            ))
                        ) : (
                            <div className='text-black flex items-center justify-center font-semibold text-xl'>Your cart is Empty</div>
                        )}
                    </div>


                    <div className='flex gap-4 mt-4 bg-blue-200 text-center justify-center'>
                        <p className='text-lg font-medium'>Total:</p>
                        <p className='text-lg font-bold'>${totalAmount}</p>
                    </div>
                    <DrawerFooter className='mt-28'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Place Order</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default DrawerExample;

