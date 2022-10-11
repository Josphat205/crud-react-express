import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { BsPen } from "react-icons/bs";
import {toast} from 'react-toastify'
function Root() {
  const [data, setData] = useState([]);
  const handleData = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setData(res.data);
  };
  useEffect(() => {
    handleData();
  }, []);

  const deleteUser = (id,name) =>{
    if(window.confirm(`Are you sure you want to Remove ${name}?`)){
      axios.delete(`http://localhost:5000/api/remove/${id}`)
      toast.success('User deleted successfully');
      setTimeout(()=> handleData(),500);
    }
  }
  return (
    <div className="text-center">
      <Link to="/addUser">
        <button type="button" className="btn-sm btn btn-success mb-2">
          Add user
        </button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>
                  <Link to="/Edit">
                    <BsPen className="h6 text text-primary" />
                  </Link>

                  <AiFillDelete className="h6 text text-danger" onClick={()=>deleteUser(user.id,user.name)} />

                  <Link to="/View">
                    <GrFormView  className="h6 text text-success" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Root;
