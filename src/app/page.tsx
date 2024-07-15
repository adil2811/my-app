import Image from "next/image";
import UserList from '@/app/Components/UserList/index';
import { User } from '@/app/types/index';
import UserDetail from "./Components/UserDetail";
async function fetchUserData(): Promise<User[]> {
  const res = await fetch('https://dummyjson.com/users');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();
  return json.users;
}

export default async function Home() {
  const data: User[] = await fetchUserData();
  console.log('✌️data --->', data);

  return (
    <>
      <div className="h-screen w-full grid grid-cols-[20%_60%_20%] max-sm:grid-cols-[30%_70%]  ">
        <div className="h-full p-5 max-sm:p-3">
          <div className="h-full w-full rounded-lg border-x-2 border-y-2">
            <UserList userData={data} />
          </div>
        </div>
        <div className="h-full p-5 max-sm:p-3">
          <div className="h-full w-full rounded-lg border-x-2 border-y-2">
          <UserDetail/>
          </div>
          {/* Middle Row Content */}
        </div>
        <div className="h-full p-5 max-sm:hidden">
          <div className="h-full w-full rounded-lg border-x-2 border-y-2">
            <div className="p-5"> 
              <div className="flex items-center justify-center w-full">

            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">ADD User name</button>

              </div>
              <div className="flex items-center justify-center w-full">

            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit User name</button>
      </div>
            </div>
          </div>
          {/* Bottom Row Content */}
        </div>
      </div>
    </>
  );
}
