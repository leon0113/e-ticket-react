import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center w-full mt-8'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-300 text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-blue-700">Sign in to access your account</p>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Enter your number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Phone number" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link to="/" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-gray-600 hover:bg-gray-500 text-gray-100">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-900">Don't have an account yet?
                            <Link to="/register" className="hover:underline text-violet-600">Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;