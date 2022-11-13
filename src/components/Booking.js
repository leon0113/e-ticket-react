import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <section>
                <div className="bg-gray-300">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    </div>
                </div>
                <div className="w-5/6 mx-auto px-16 mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-700">
                    <h1 className='text-gray-100 text-center font-semibold text-2xl pt-6'>Book Your Ticket</h1>
                    <form className="container flex flex-col mx-auto text-gray-100 space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-700">
                            <div className="grid grid-cols-6 gap-4 col-span-full">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="from" className="text-sm">From</label>
                                    <input id="from" type="text" placeholder="Enter Your City" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="to" className="text-sm">To</label>
                                    <input id="to" type="text" placeholder="Enter Your Destination" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="departure" className="text-sm">Departure Date</label>
                                    <input id="departure" type="date" placeholder="Departure Date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="return" className="text-sm">Return Date</label>
                                    <input id="return" type="date" placeholder="Return Date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text  text-gray-100 mr-2">AC :</span>
                                            <input type="radio" name="radio-6" className="radio checked:bg-accent  radio-accent" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text  text-gray-100 mr-2">NON AC :</span>
                                            <input type="radio" name="radio-6" className="radio  checked:bg-accent radio-accent" checked />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-span-full sm:col-span-3 text-center mt-6 ">
                                    <Link to='/'><button className="btn btn-accent w-4/5">Find Buses</button></Link>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Booking;


