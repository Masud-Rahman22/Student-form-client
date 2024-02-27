import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function App() {
  const [studentInfo, setStudentInfo] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => setStudentInfo(res.data))
      .catch(err => console.error(err))
  }, [])
  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/delete/`+id)
    .then(res => {
      console.log(res.data)
      window.location.reload()
    })
    .catch(err=> console.error(err))
  }

  return (
    <>
      <div className='flex h-screen bg-teal-700 justify-center items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <div className='text-left'>
            <Link to="/add" className="btn btn-info" >Add +</Link>
            
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th className='text-black'>ID</th>
                <th className='text-black'>Name</th>
                <th className='text-black'>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                studentInfo.map((info, i) =>
                  <tr key={i}>
                    <td className='text-black'>{i + 1}</td>
                    <td className='text-black'>{info.Name}</td>
                    <td className='text-black'>{info.Email}</td>
                    <td>
                      <Link to={`/update/${info.ID}`} className='btn btn-warning'>Update</Link>
                      <button onClick={()=>handleDelete(info.ID)} className='btn btn-accent ml-2'>Delete</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
