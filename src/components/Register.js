import React from 'react';

const Register = () => {
    return (
        <div>
            <section className="p-6 my-24 mx-10 bg-gray-300 text-gray-900">
                <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="phone" className="text-sm">Phone Number</label>
                                <input id="phone" type="tel" placeholder="Phone Number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="password" className="text-sm">Password</label>
                                <input id="password" type="password" placeholder="Password" className="w-full  p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full  p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm">City</label>
                                <input id="city" type="text" placeholder="" className="w-full  p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full  p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Register;