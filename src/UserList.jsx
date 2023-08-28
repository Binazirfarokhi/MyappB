import { useEffect, useState } from "react"
import axios from "axios";
import { AiOutlineDelete } from 'react-icons/ai';



const UserList = () => {
const [users,setUsers]=useState([]);
const handleGetData =async()=>{
  const {data} =await axios.get( "https://reqres.in/api/users");
setUsers(data.data);


};
useEffect(()=>{
handleGetData();
},[])
const handleDelete = (id)=>{
  

}


  return (
    <div className="container">
      <table className="w-full m-4 shadow-md rounded overflow-hidden">
        <thead>
          <tr className="text-white bg-slate-900">
           <th className="p-3  font-sans font-bold text-2xl">#</th>
           <th className="table-header">Firstname</th>
           <th className="table-header">Last name</th>
           <th className="table-header">Email</th>
           <th className="table-header">Image</th>
           <th className="table-header"><button>Delete</button></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item,index)=>(
            <tr key={item.id} className={index %2===0 ? "bg-gray-200":"bg-white"}>
              <td className="text-center">{index+ 1}</td>
              <td className="text-center">{item.first_name}</td> 
              <td className="text-center">{item.last_name}</td>
              <td className="text-center">{item.email}</td>
       
              <td><img src = {item.avatar } className="mx-auto p-2"/></td>
              <td className="test-center" onClick={handleDelete}>
                <button><AiOutlineDelete size={50}
                 className="text-red-600 p-2 hover:text-red-800 hover:shadow-md hover:rounded-full"/></button>
                 </td>
            </tr>
          ))}

        </tbody>
     
      </table>
    </div>
  )
}

export default UserList
