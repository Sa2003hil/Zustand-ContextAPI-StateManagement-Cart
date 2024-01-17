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

    const { cartItem } = useCartStore(
        (state) => ({
            cartItem: state.cartItem,
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
                    {cartItem ? (
                        cartItem.map((item) => (
                            <DrawerBody key={item.id} className='flex gap-4'>
                                <div>
                                    <p className='font-medium'>{item?.name}</p>
                                    <p className='text-2xl font-bold'>${item?.price}</p>
                                </div>
                                <div>
                                    <button className='bg-black text-sm text-white p-2 rounded-full'>Remove</button>
                                </div>
                            </DrawerBody>
                        ))
                    ) : (
                        <p className='text-black'>Your cart is Empty</p>
                    )}

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

