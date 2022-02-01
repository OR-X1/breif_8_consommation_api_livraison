import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import './Login.css';
const Login = () => {
    let navigate= useNavigate();
    const [email_manager, setEmail_manager] = useState('');
    const [password_manager, setPassword_manager] = useState('');
  
    const [errormail, setErrormail] = useState('');
    const [error, setError] = useState('');
    const [errorpass, setErrorpass] = useState('');

    // const history = useHistory()
    const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
            const handleSubmit = e => {
                e.preventDefault();
                // setIsLoadingsubmit(true);
                // axios.defaults.withCredentials = true;
                // axios.get('http://localhost:8000/sanctum/csrf-cookie')
                // .then(response => {
                    axios.post('http://localhost:3000/api/manager/login', {
                        email_manager: email_manager,
                        password_manager: password_manager,
                    }).then(response => {
                            if(response.data.token){
                                // setErrormail('')
                            // setErrorpass('')
                            setError('')
                            localStorage.setItem('auth_token',response.data.token)
                            console.log(response.data.data_login_manager);
                            // localStorage.setItem('auth_user',response.data.user)
                            // localStorage.setItem('auth_user', JSON.stringify(response.data.user))
                            setIsLoadingsubmit(false);
                            console.log("good");
                            navigate('/')
                            }else{
                                setIsLoadingsubmit(false);
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
        
<div class="p-4 mx-auto my-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" onSubmit={handleSubmit}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <p>{error}</p>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" value={email_manager}  onChange={e => setEmail_manager(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" value={password_manager}  onChange={e => setPassword_manager(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                </div>
                <div class="ml-3 text-sm">
                    <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit"  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isloadingsubmit}>{isloadingsubmit ? 'loading...' : 'Login to your account'}</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>



        
    );
}
 
export default Login;