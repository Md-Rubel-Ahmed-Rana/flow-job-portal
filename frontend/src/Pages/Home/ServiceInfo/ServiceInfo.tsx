import React from 'react';
import { v4 as uuidv4 } from 'uuid';

type CourseType = {
    title: string,
    duration: number,
    price: number,
    instructor: string
}

const ServiceInfo = () => {
    const courses = [
        {id: uuidv4() , title: "JavaScript Course", instructor: "Jawad karim" , duration: 6, price: 100},
        {id:2, title: "Python Course",instructor: "Jubaer Ahmed" , duration: 8, price: 150},
        {id:3, title: "PHP Course",instructor: "Abdul karim" , duration: 4, price: 90},
        {id:4, title: "Digital Marketing", instructor: "Mohin uddin" , duration: 3, price: 120},
        {id:5, title: "Business Management Course",instructor: "Ripon Khan" , duration: 2, price: 70},
        {id:6, title: "ReactJS Course", instructor: "Pithon Kumar" , duration: 5, price: 99},
        {id:7, title: "NodeJS Course", instructor: "Sourabh Das" , duration: 7, price: 110},
        {id:8, title: "Video Editing Course", instructor: "Selim Kuddus" , duration: 7, price: 110},
        {id:9, title: "Cyber Security Course", instructor: "Prianka Jawa" , duration: 7, price: 110},
    ]
    return (
        <div className='p-20 mt-20'>
            <h2 className='text-4xl text-center font-extrabold mb-3'>Our Best Courses</h2>
            <h4 className='text-2xl text-center font-bold'>With Guarantted for Job</h4>

            <div className='grid grid-cols-3 gap-10 mt-10 rounded-2xl'>
                {
                    courses.map((course: CourseType , index) => {
                        const { title, instructor, duration, price} = course;
                        return (
                            <div key={index} className='bg-slate-300 p-5 shadow-lg'>
                                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                                <h2 className="text-xl text-green-600 mb-3 font-bold">Instructor: {instructor}</h2>
                                <p className='font-bold'>Duration: {duration} Months</p>
                                <p className='font-bold text-blue-700 text-lg'>Price: ${price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ServiceInfo;