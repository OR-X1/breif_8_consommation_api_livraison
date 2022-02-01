import { Link } from "react-router-dom";


const DashAdmin = () => {

    return (


        <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
            
                <div className="container mx-auto mt-12">
                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">100</h4>
                                <div className="text-gray-500">All Users</div>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">30</h4>
                                <div className="text-gray-500">All Blogs</div>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">1000</h4>
                                <div className="text-gray-500">All Transaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6  lg:px-8">
                            <div
                                className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                First name</th>
                                            <th
                                                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Last name</th>
                                            <th
                                                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Email</th>
                                            <th
                                                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                action</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full"
                                                            src="https://source.unsplash.com/user/erondu"
                                                            alt="admin dashboard ui" />
                                                    </div>

                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John 
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">Doe</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span
                                                    className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">john@example.com</span>
                                            </td>
                                            
                                            <td
                                                className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                  <div className='flex'>
                                                     <Link to="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                     </Link>
                                                      
                                                      <Link to="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                      </Link>
                                                  </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DashAdmin;