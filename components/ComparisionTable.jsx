import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { FiUsers, FiClock, FiUserPlus } from 'react-icons/fi';

const ComparisonTable = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
                {/* Title */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    See how Monday saves money, time and nerves!
                </h2>

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-8">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="py-3"></th>
                                <th className="py-3 text-gray-500 text-sm">Web Studios</th>
                                <th className="py-3 text-gray-500 text-sm">Monday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-200">
                                <td className="py-4 px-2 font-medium text-gray-600">Execution speed</td>
                                <td className="py-4 px-2">7 - 30 days</td>
                                <td className="py-4 px-2 flex items-center text-blue-600">
                                    <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> On average 1 day 8 hours
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200">
                                <td className="py-4 px-2 font-medium text-gray-600">Price</td>
                                <td className="py-4 px-2">From 2,500,000 uzs</td>
                                <td className="py-4 px-2 flex items-center text-blue-600">
                                    <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> From 100,000 uzs
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200">
                                <td className="py-4 px-2 font-medium text-gray-600">Artist selection</td>
                                <td className="py-4 px-2">3 - 20 employees</td>
                                <td className="py-4 px-2 flex items-center text-blue-600">
                                    <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> From 10,000+ performers 
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200">
                                <td className="py-4 px-2 font-medium text-gray-600">Easy to order</td>
                                <td className="py-4 px-2">
                                    Long approvals, Signing Agreements 
                                </td>
                                <td className="py-4 px-2 flex items-center text-blue-600">
                                    <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> A couple of clicks - your order is ready!
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200">
                                <td className="py-4 px-2 font-medium text-gray-600">Refund in case of delay</td>
                                <td className="py-4 px-2">The probability approaches zero</td>
                                <td className="py-4 px-2 flex items-center text-blue-600">
                                    <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> 100% 1-click money back guarantee
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                    {/* Active Freelancers */}
                    <div className="flex flex-col items-center">
                        <FiUsers className="text-blue-500 text-4xl mb-2" />
                        <p className="text-3xl font-semibold text-blue-600">5,342</p>
                        <p className="text-gray-500">Active freelancers</p>
                    </div>

                    {/* New Freelancers */}
                    <div className="flex flex-col items-center">
                        <FiUserPlus className="text-blue-500 text-4xl mb-2" />
                        <p className="text-3xl font-semibold text-blue-600">389</p>
                        <p className="text-gray-500">New freelancers this week</p>
                    </div>

                    {/* Average Order Lead Time */}
                    <div className="flex flex-col items-center">
                        <FiClock className="text-blue-500 text-4xl mb-2" />
                        <p className="text-3xl font-semibold text-blue-600">1 day 8 h</p>
                        <p className="text-gray-500">Average order lead time</p>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center">
                    <button className="bg-black text-white px-6 py-3 rounded-full justify-center items-center text-lg font-medium hover:bg-gray-900 transition duration-300">
                        <FaSearch className="inline-block mr-2 text-2xl" /> Find freelance service right now
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
