import React, { useState, useEffect } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import "./Home.css";
import axios from 'axios';
import {toast} from 'react-toastify'
const initialState = {
  name: "",
  email: "",
  title: "",
  description: "",
};
const Home = () => {
  const [state, setState] = useState(initialState);
  const {name,email,title,description} = state;
  const navigate = useNavigate();
  const handleInputOnchange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || !email || !title || !description){
      toast.error('Please all fields are required');
    }else{
      axios.post("http://localhost:5000/api/get",{
        name,
        email,
        title,
        description
      })
      .then(()=>{
        setState({name:"", email:"", title:"", description:""})
      })
      setInterval(navigate('/'), 500)
      toast.success('Data inserted successfully');
    }
  }
  return (
    <div className="mt-3 container contain">
      <h2 className="text text-primary text-center">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name..." value={name} onChange={handleInputOnchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email..."
            value={email} onChange={handleInputOnchange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title"  placeholder="Enter Title..."
            value={title} onChange={handleInputOnchange}  />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Description..."
            value={description} onChange={handleInputOnchange}  />
        </div>
        <input type="submit" value="Save Data" className=" btn-sm btn btn-block btn-primary"/>
      </form>
      <Link to="/">
        <button type="button" className=" btn-sm btn btn-block btn-default">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Home;
