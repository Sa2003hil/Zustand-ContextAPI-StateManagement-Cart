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
        })
    );

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
                    <div className='shadow-2xl'>
                        {cartItem ? (
                            cartItem.map((item) => (
                                <DrawerBody key={item.id} className=' gap-4'>
                                    <div className='flex gap-2' >
                                        <p className='font-medium text-left'>{item?.name}</p>
                                        <hr className='h-20 w-1 bg-gray-300' />
                                        <p className='text-2xl font-bold m-auto'><span className='font-light'>price</span> ${item?.price}</p>
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
                            <p className='text-black'>Your cart is Empty</p>
                        )}
                    </div>

                    <DrawerFooter>
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

