import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddStudent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email)
        axios.post('http://localhost:5000/create', { name, email })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
            navigate('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4" >
                    <label htmlFor="name" className="block text-sm font-medium text-white" >Name</label>
                    <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-4" >
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input type="email" id="email" name="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="flex justify-end">
                    <button  type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;