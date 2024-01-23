import useCourseStore from '../app/courseStore';
import useCartStore from '../app/cartStore';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useStateContext } from '../contexts/StateContext';

function Card() {

    const { qty,
        incQty,
        decQty } = useStateContext();

    const { courses } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            addPrice: state.price
        })
    );

    const { addToCart } = useCartStore();

    return (
        <div className='w-[100%] m-auto flex gap-10 items-center'>
            {courses.map((course, i) => {
                return (
                    <div key={i} className="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-8 rounded-xl" src="https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg" alt="product_image1" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {course?.title}
                                </h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                {/* Your star SVG icons */}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{course.price}</span>
                                <button
                                    onClick={() => addToCart({ id: Math.floor(Math.random() * 10), name: course?.title, price: Math.floor(Math.random() * 1000) })}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add to cart
                                </button>
                            </div>

                            <hr className='my-10' />
                            <span className="text-3xl font-light text-gray-900 dark:text-white">
                                Quantity {" "}
                            </span>

                            <hr className=' w-40 my-3 m-auto items-center justify-center' />

                            <div className="flex items-center justify-center border-black border-">
                                <button
                                    onClick={decQty}
                                    className="text-white bg-black p-3 rounded-full mx-5"
                                >
                                    <MinusIcon />
                                </button>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{qty}</span>
                                <button
                                    onClick={incQty}
                                    className="text-white bg-black p-3 rounded-full mx-5"
                                >
                                    <AddIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    );
}

export default Card;
