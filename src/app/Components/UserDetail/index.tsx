'use client'
import React, { useContext, useState } from 'react';
import { AppContext } from '@/app/Context/index';

export default function UserDetail() {
    const { userDetail, setUserDetail } = useContext(AppContext) as any;
    const [showProfile, setShowProfile] = useState(true); 

    console.log('✌️userDetailss --->', userDetail);

    return (
        <div className='p-3'>
            <h1 className='text-center bg-gradient-to-r from-slate-700 to-indigo-600 rounded-lg'>User Detail</h1>
            <div className='flex items-center justify-between gap-5 p-5 max-sm:gap-0 max-sm:p-1 '>
                <button 
                    type="button" 
                    className={`text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-sm:px-2 max-sm:py-1.5 ${showProfile ? 'opacity-100' : 'opacity-50'}`} 
                    onClick={() => setShowProfile(true)}
                >
                    Profile
                </button>
                <button 
                    type="button" 
                    className={`text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-sm:px-2 max-sm:py-1.5 ${!showProfile ? 'opacity-100' : 'opacity-50'}`} 
                    onClick={() => setShowProfile(false)}
                >
                    Contact
                </button>
            </div>
            
            {userDetail ? (
                <div className="max-w-sm mx-auto mt-5 bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={userDetail.image} alt={`${userDetail.firstName} ${userDetail.lastName}`} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        {showProfile ? (
                            <>
                                <h2 className="text-xl font-bold">{userDetail.firstName} {userDetail.lastName}</h2>
                                <p className="text-gray-700"><strong>Username:</strong> {userDetail.username}</p>
                                <p className="text-gray-700"><strong>Age:</strong> {userDetail.age}</p>
                                <p className="text-gray-700"><strong>Gender:</strong> {userDetail.gender}</p>
                                <p className="text-gray-700"><strong>University:</strong> {userDetail.university}</p>
                            </>
                        ) : (
                            <>
                                <h3 className="mt-4 text-lg font-semibold">Contact Information:</h3>
                                <p className="text-gray-700"><strong>Phone:</strong> {userDetail.phone}</p>
                                <p className="text-gray-700"><strong>Email:</strong> {userDetail.email}</p>
                                <h3 className="mt-4 text-lg font-semibold">Address:</h3>
                            </>
                        )}
                        
                        <p className="text-gray-600">{userDetail.address.address}, {userDetail.address.city}, {userDetail.address.state} {userDetail.address.postalCode}</p>

                        <h3 className="mt-4 text-lg font-semibold">Company:</h3>
                        <p className="text-gray-700"><strong>Name:</strong> {userDetail.company.name}</p>
                        <p className="text-gray-700"><strong>Title:</strong> {userDetail.company.title}</p>
                        <p className="text-gray-700"><strong>Department:</strong> {userDetail.company.department}</p>

                        <h3 className="mt-4 text-lg font-semibold">Bank Details:</h3>
                        <p className="text-gray-700"><strong>Card Type:</strong> {userDetail.bank.cardType}</p>
                        <p className="text-gray-700"><strong>Card Number:</strong> **** **** **** {userDetail.bank.cardNumber.slice(-4)}</p>
                        <p className="text-gray-700"><strong>Expiry:</strong> {userDetail.bank.cardExpire}</p>

                        <h3 className="mt-4 text-lg font-semibold">Crypto:</h3>
                        <p className="text-gray-700"><strong>Coin:</strong> {userDetail.crypto.coin}</p>
                        <p className="text-gray-700"><strong>Wallet:</strong> {userDetail.crypto.wallet}</p>
                        <p className="text-gray-700"><strong>Network:</strong> {userDetail.crypto.network}</p>

                        <p className="mt-4 text-gray-700"><strong>Role:</strong> {userDetail.role}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No user details available.</p>
            )}
        </div>
    );
}
