'use client';
import React, { useContext } from 'react';
import { User } from '@/app/types/index';
import { AppContext } from '@/app/Context/index';

interface UserListProps {
  userData: User[];
}

const UserList: React.FC<UserListProps> = ({ userData }) => {
  const { userDetail, setUserDetail } = useContext(AppContext) as any;
  console.log('✌️userDetail --->', userDetail);

  const handleClick = async (userId: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await res.json();
      console.log('Fetched user data:', data);
      setUserDetail(data); // Set the fetched user data
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  return (
    <div className='p-4'>
      <h1 className='text-center bg-gradient-to-r from-slate-700 to-indigo-600 rounded-lg text-lg md:text-2xl max-sm:text-xs max-md:text-m max-lg:text-m '>User Data</h1>
      <ol className='text-center'>
        {userData.length > 0 ? (
          userData.map((item) => (
            <ul key={item.id} className="w-full max-w-xs mx-auto mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <button className="w-full px-4 max-sm:px-0 overflow-hidden  max-sm:text-xs py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 hover:bg-slate-200" onClick={() => handleClick(item.id)}>
                {item.firstName}
              </button>
            </ul>
          ))
        ) : (
          <li className="text-gray-500">No users found.</li>
        )}
      </ol>
    </div>
  );
};

export default UserList;
    