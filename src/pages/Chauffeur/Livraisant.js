// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../../layouts/SideBar";
import NavBar from "../../layouts/NavBar";

import jwt_decode from "jwt-decode";
// import useFetch from "../../useFetch";
// import Card from "components/card";
// require('dotenv').config()

const Livraisant = () => {

    // const { data } = useFetch('http://localhost:3000/api/manager/getAllmanagers');

    const [data, setDatas] = useState([]);
    const [vehicule, setVehicule] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    
    useEffect( () => {
        setTimeout(() => {
        // fetch(`${process.env.REACT_APP_API_URL}manager/getAllmanagers`)
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
    },[]);


    const [date_depart, setDate_depart] = useState([]);
    const [ville_depart, setville_depart] = useState([]);
    const [ville_arrive, setVille_arrive] = useState([]);
    const [poids, setPoids] = useState([]);
    const [zone, setZone] = useState([]);

    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        setIsLoadingsubmit(true);


        // const token = localStorage.getItem('auth_token');

        // var manager_id = jwt_decode(token);

        const form_data = {
            date_depart: date_depart,
            ville_depart: ville_depart,
            ville_arrive: ville_arrive,
            poids: poids,
            zone: zone
          }

        console.log(form_data);
        setTimeout(() => {
        axios.post('http://localhost:3000/api/livraisant/create_livraisant',form_data
            ).then(response => {
                
                if(response.data.result){
                    console.log('good')
                        setIsLoadingsubmit(false);
                        window.location.reload()
                        // console.log(response.data.msg);
                }else{
                    console.log(response.data.msg);
                    setIsLoadingsubmit(false);
                    // setError(response.data.msg)
                }
                        
            }).catch(error =>{
                
                console.log("error"+error);
            }
            )
        }, 1000);

    }

    useEffect( () => {
        fetch('http://localhost:3000/api/vehicule/getAll_vehicule')
        .then(async response =>{
            
            const varr = await response.json()
            
            setVehicule(varr.result);
            console.log(varr);
        }).catch(err=>{
            console.log('faild to fetch');
        })
    },[]);

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


                <button className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10 float-right" type="button" data-modal-toggle="defaultModal">
                Add New Livraisant
                </button>

<div id="defaultModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
<div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
        {/* <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
        Add New Manager
        </h3> */}
        <div>
                        <div class="w-full flex justify-start text-gray-600 mb-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                        </div>
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add New Manager</h1>
        </div>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>

        <form onSubmit={handleSubmit}>
    <div className="p-6 space-y-6">
            {/* {error && <p className="bg-red-200 px-5 py-3 rounded-lg">{error}</p> } */}
    
            <div className="flex my-2">
            <label className="block w-full mr-2">
                <span className="block text-sm font-medium text-slate-700">ville depart</span>
                <input type="text" required value={ville_depart} name="" onChange={e => setville_depart(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                "/>
            </label>
            <label className="block w-full ml-2">
                <span className="block text-sm font-medium text-slate-700">ville arrive</span>
                <input type="text" required value={ville_arrive} onChange={e => setVille_arrive(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                "/>
            </label>
            </div>
            <div className="flex my-2">
                <label className="block w-full mr-2">
                    <span className="block text-sm font-medium text-slate-700">poids</span>
                    <input type="number" min="1" required value={poids} onChange={e => setPoids(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                    "/>
                </label>
                <label className="block w-full ml-2">
                    <span className="block text-sm font-medium text-slate-700">poids</span>
                    <input type="date" required value={date_depart} onChange={e => setDate_depart(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                    "/>
                </label>
            </div>

            {/* <label className="block my-2">
                <span className="block text-sm font-medium text-slate-700">zone</span>
                <input type="text" required value={zone} onChange={e => setZone(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                "/>
            </label> */}
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Vehicule</label>
            <select value={ zone }
                    onChange={(e) => setZone(e.target.value)}
                    id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option value={'maroc'}>maroc</option> 
                <option value={'europe'}>europe</option> 
                <option value={'amerique'}>amerique</option> 
                <option value={'asie'}>asie</option> 
                <option value={'australie'}>australie</option> 

            </select>
    </div>

    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <input  type="submit" value={isloadingsubmit ? 'loading...' : 'I accept'} disabled={isloadingsubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 loading" />
        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
    </div>
        </form>
</div>
</div>
</div>


                    <div
                        className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        ville_depart</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        ville_arrive</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        date_depart</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        poids</th>
                                        <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        prix</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        distance_km</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        zone</th>
                                    <th
                                        className="px-6 py-3 text-xs text-center font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
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

export default Livraisant;