import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { isExpired, decodeToken } from "react-jwt";

// import './Login.css';
const Login = () => {
    let navigate= useNavigate();
    const [email_chauffeur, setEmail_chauffeur] = useState('');
    const [password_chauffeur, setPassword_chauffeur] = useState('');

    const [error, setError] = useState('');

    // const history = useHistory()
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
            const handleSubmit = e => {
                e.preventDefault();
                // setIsLoadingsubmit(true);
                // axios.defaults.withCredentials = true;
                // axios.get('http://localhost:8000/sanctum/csrf-cookie')
                // .then(response => {
                    axios.post('http://localhost:3000/api/chauffeur/login', {
                        email_chauffeur: email_chauffeur,
                        password_chauffeur: password_chauffeur,
                    }).then(response => {
                            if(response.data.token){
                            // setErrormail('')
                            // setErrorpass('')
                            setError('')
                            localStorage.setItem('auth_token',response.data.token)

                            const data_login_chauffeur = {
                                email: response.data.data_login_chauffeur.email_chauffeur,
                                lastname: response.data.data_login_chauffeur.lastname_chauffeur,
                                name: response.data.data_login_chauffeur.name_chauffeur,
                                id: response.data.data_login_chauffeur._id
                            }
                            console.log(data_login_chauffeur);
                            localStorage.setItem('datau_user',JSON.stringify(data_login_chauffeur))

                            console.log("token : ");
                            console.log(JSON.parse(localStorage.getItem('datau_user')).email_chauffeur);
                            console.log(response.data.data_login_chauffeur);

                            setIsLoadingsubmit(false);
                            console.log("good");
                            navigate('/disponiblelivraisant')
                            }else{
                                setIsLoadingsubmit(false);
                                setError(response.data.err)
                                console.log(response.data.err);
                                // console.log("error");
                            }

                    }).catch(error =>{
                        setIsLoadingsubmit(false);
                        // console.log(error);
                        console.log("error");
                    }
                    )
                // });
            }

    return (

<div className="p-4 mx-auto my-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to  (chauffeur)</h3>
        {error && <p className="bg-red-200 px-5 py-3 rounded-lg">{error}</p> }
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" value={email_chauffeur}  onChange={e => setEmail_chauffeur(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" value={password_chauffeur}  onChange={e => setPassword_chauffeur(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                </div>
                <div className="ml-3 text-sm">
                    <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isloadingsubmit}>{isloadingsubmit ? 'loading...' : 'Login to your account'}</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>



        
    );
}
 
export default Login;