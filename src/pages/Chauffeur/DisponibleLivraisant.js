// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../../layouts/SideBar";
import NavBar from "../../layouts/NavBar";

import jwt_decode from "jwt-decode";

import swal from 'sweetalert';

const DisponibleLivraisant = () => {

    const [data, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/livraisant/disponible')
            .then(async response =>{
    
                const varr = await response.json()
    
                setDatas(varr.result);
                setIsLoading(false);
                console.log(varr);
            }).catch(err=>{
                setIsLoading(false);
                console.log('faild to fetch');
            })
    
            }, 1000);
    }


    useEffect( () => {
        fetchData()
    },[]);

    // const [id_livaraison, setId_livaraison] = useState('');
    // const [id_chauffeur, setId_chauffeur] = useState('');

    const handleSort = (id_livaraison) => {
        console.log(id_livaraison);

        const token = localStorage.getItem('auth_token');

        var decoded = jwt_decode(token);
        console.log(decoded.id);
            axios.post('http://localhost:3000/api/chauffeur/acceptCommande', {
                id_livaraison: id_livaraison,
                id_chauffeur: decoded.id,
            }).then(response => {
                    if(response){
                    
                    console.log("good");

                    swal("Check your livraisant!",{
                        icon: "success",
                        title: "added successfully !"
                      })
                      fetchData()

                    }else {
                        console.log("error");
                        
                        swal({
                            icon: "warning",
                          })
                          
                    }

            }).catch(error =>{
                console.log("error : "+error);
            }
            )

    }


    return (
<div className="flex h-full">
    
<SideBar></SideBar>

<div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
    <NavBar></NavBar>
        <div className="container mx-auto mt-12">
            
            <div className="flex flex-col mt-8">
                <div className="py-2 -my-2 overflow-x-auto ">

                <div>
                    <p className="text-3xl font-semibold">Livraisant</p>
                </div>

                    <div
                        className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        ville_depart</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        ville_arrive</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        date_depart</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        poids</th>
                                        <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        prix</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        distance_km</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        zone</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        action</th>
                                </tr>
                            </thead>
                            

                            <tbody className="bg-white">

                                {data.map((ithem) => (
                                        <tr key={ithem._id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            {/* <div className="flex items-center"> */}
                                                <div className="ml-4">
                                                    <div className="text-sm text-center font-medium leading-5 text-gray-900">
                                                        {ithem.ville_depart}
                                                    </div>
                                                </div>
                                            {/* </div> */}
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm text-center font-medium leading-5 text-gray-900">
                                                {ithem.ville_arrive}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <span
                                                className="inline-flex px-2 text-xs text-center font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                    {ithem.date_depart}
                                                </span>
                                        </td>
                                        
                                        <td
                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                              <div className="text-sm text-center leading-5 text-gray-500">
                                                {ithem.poids}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm text-center font-medium leading-5 text-gray-900">
                                                        {ithem.prix}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm text-center leading-5 text-gray-500">
                                                {ithem.distance_km}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-center whitespace-no-wrap border-b border-gray-200">
                                            <span
                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                    {ithem.zone}
                                                </span>
                                        </td>
                                        
                                        <td
                                            className="px-6 py-4 text-sm  leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                              <div className='flex justify-center'>
                                                  
                                                  <p onClick={() => handleSort(ithem._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus w-6 h-6 text-green-400" viewBox="0 0 16 16">
                                                        <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                                                        <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                  </p>
                                              </div>
                                        </td>
                                    </tr>
                                     )) 
                                } 

                            </tbody>
                        </table>
                    </div>
                        {isLoading && <div className="my-20 grid justify-center">
                        <svg role="status" className="mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        Loading...</div> }

                        
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default DisponibleLivraisant;