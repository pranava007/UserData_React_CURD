import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  // ! This is usestate managed data , the state insaid object json formet schema
  const [createData, setCreateData] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });
// ! This is navigation use to navigate onther page on click
  const navigate = useNavigate();

// ! getData is a arrow function, this function functionality is get the Onchange data
// ! from form inpute value store the usestate and previous schema merge current value
  const getData = (e) => {

    const { name, value } = e.target;

    setCreateData((prevData) => {
      
      // ! Handling nested fields
      if (name.includes('.')) {
        const keys = name.split('.');
        let tempData = { ...prevData };
        keys.reduce((acc, key, index) => {
          if (index === keys.length - 1) {
            acc[key] = value;
          } else {
            acc[key] = { ...acc[key] };
          }
          return acc[key];
        }, tempData);
        return tempData;
      }
      return { ...prevData, [name]: value };
    });
  };

  // ! handlesubmit is api call use to post method sumbite the new data createData is a playload
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://666e5110f1e1da2be520015c.mockapi.io/api/users`, createData);
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {/*  this is a responsive form use two functionality  onSubmit={handleSubmit} &   onChange={getData} */}
    
      <form className="row g-3 m-1" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="named">Name :</label>
          <input type="text" id="named" className="form-control" name="name" placeholder="Enter Your Name" onChange={getData} />
        </div>
        <div className="col-md-4">
          <label htmlFor="usernamed">Username :</label>
          <input type="text" id="usernamed" name="username" className="form-control" placeholder="Enter Your Username" onChange={getData} />
        </div>
        <div className="col-md-4">
          <label htmlFor="emailnamed">Email :</label>
          <input type="text" id="emailnamed" name="email" className="form-control" placeholder="Enter Your Email" onChange={getData} />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address :</label>
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.street" placeholder="Enter Your Street" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.suite" placeholder="Enter Your Suite" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.city" placeholder="Enter Your City" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.zipcode" placeholder="Enter Your Zipcode" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.geo.lat" placeholder="Enter Your Lat" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputAddress" name="address.geo.lng" placeholder="Enter Your Lng" onChange={getData} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Phone :</label>
          <input type="text" className="form-control" id="inputCity" name="phone" placeholder="Enter Your Phone" onChange={getData} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Website :</label>
          <input type="url" className="form-control" id="inputCity" name="website" placeholder="Enter Your Website URL" onChange={getData} />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputCity" className="form-label">Company :</label>
          <input type="text" className="form-control mb-1" id="inputCity" name="company.name" placeholder="Enter Your Company Name" onChange={getData} />
          <input type="text" className="form-control mb-1" id="inputCity" name="company.catchPhrase" placeholder="Enter Your CatchPhrase" onChange={getData} />
          <input type="text" className="form-control" id="inputCity" name="company.bs" placeholder="Enter Your BS" onChange={getData} />
        </div>
        <div className="col-12 mt-1">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Create;
