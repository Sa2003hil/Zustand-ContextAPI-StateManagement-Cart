import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// persist is useful for storing the data into localStorage

const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }));
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId),
        }));
    },
    addPrice: (courseId, price) => {
        set((state) => {
            const updatedCourses = state.courses.map((course) => {
                if (course.id === courseId) {
                    return {
                        ...course,
                        price: price,
                    };
                }
                return course;
            });
            return {
                courses: updatedCourses,
            };
        });
    },
}); // set is used to set the values

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: 'courses',
        })
    )
);

export default useCourseStore;
