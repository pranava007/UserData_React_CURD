import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = ({id}) => {

//   ! this is a state edit data this empty initial schema
  const [editData,seteditData] = useState(
    {
      name:'',
      username:'',
      email:'',
      address:{
        street:'',
        suite:'',
        city:'',
        zipcode:'',
        geo:{
          lat:'',
          lng:'',
        }

      },
      phone:'',
      website:'',
      company:{
           name:'',
           catchPhrase:'',
           bs:''
      }
})

// ! this navigate state use to redirect onther page
  const navigation = useNavigate()
// ! this is useEffect use to one time run api call
  useEffect(()=>{
  fetchData()
},[])

// ! get particular edit id 
  const fetchData = async ()=>{
    await axios.get(`https://666e5110f1e1da2be520015c.mockapi.io/api/users/${id}`)
    .then((res)=>seteditData(res.data))
    .catch((error)=>{console.log(error)})
  }



// ! getData is a arrow function, this function functionality is get the Onchange data
// ! from form inpute value store the usestate and previous schema merge current value
  const getData = (e)=>{

    const {name,value} = e.target
    seteditData((predata)=>(
      {...predata,[name]:value}
    ))

  }

  // ! handlesubmit is api call use to post method sumbite the new data createData is a playload
  const handlesubmit= async (e)=>{
       e.preventDefault()
       await axios.put(`https://666e5110f1e1da2be520015c.mockapi.io/api/users/${id}`,editData)
       .then((res)=>console.log(res.data))
       .catch((error)=>{console.log(error)})
       navigation('/user')
  }

  return (
    <>
 {/*  this is a responsive form use two functionality  onSubmit={handleSubmit} &   onChange={getData} & value={editData.name} use to display privious value */}
<form className="row g-3 m-1" onSubmit={handlesubmit} >
  <div className="col-md-4">
    <label htmlfor="named"> Name :</label>
    <input type="text" id="named" className="form-control" name="name" placeholder="Enter Your Name" value={editData.name} onChange={getData} />
  </div>
  <div className="col-md-4">
    <label htmlfor="usernamed"> Username :</label>
    <input type="text" id="usernamed" name="username" className="form-control" placeholder="Enter Your Username"  value={editData.username} onChange={getData}  />
  </div>
  <div className="col-md-4">
    <label htmlfor="emailnamed"> Email :</label>
    <input type="text" id="emailnamed" name="email" className="form-control" placeholder="Enter Your Email" value={editData.email} onChange={getData}  />
  </div>
  <div className="col-12">
    <label htmlfor="inputAddress" className="form-label ">Address :</label>
    <input type="text" className="form-control mb-1" id="inputAddress" name="street" placeholder="Enter Your street" value={editData.address.street} onChange={getData}  />
    <input type="text" className="form-control mb-1" id="inputAddress" name="suite" placeholder="Enter Your suite"value={editData.address.suite} onChange={getData}   />
    <input type="text" className="form-control mb-1" id="inputAddress" name="city" placeholder="Enter Your city" value={editData.address.city} onChange={getData}  />
    <input type="text" className="form-control mb-1" id="inputAddress" name="zipcode" placeholder="Enter Your zipcode" value={editData.address.zipcode} onChange={getData}   />
    <input type="text" className="form-control mb-1" id="inputAddress" name="lat" placeholder=" Enter Your lat"value={editData.address.geo.lat} onChange={getData}   />
    <input type="text" className="form-control mb-1" id="inputAddress" name="lng" placeholder="Enter Your lng" value={editData.address.geo.lng} onChange={getData}  />
  </div>
  <div className="col-md-6">
    <label htmlfor="inputCity" className="form-label">Phone :</label>
    <input type="text" className="form-control" id="inputCity" name="phone" placeholder=" Enter Your phone" value={editData.phone}onChange={getData}  />
  </div>
  <div className="col-md-6">
    <label htmlfor="inputCity" className="form-label">Website :</label>
    <input type="url" className="form-control" id="inputCity" name="website" placeholder="Enter Your website url" value={editData.website}onChange={getData} />
  </div>
  <div className="col-md-12">
    <label htmlfor="inputCity" className="form-label">Company :</label>
    <input type="text" className="form-control mb-1  " id="inputCity" name="company" placeholder="Enter Your company name" value={editData.company.name}onChange={getData} />
    <input type="text" className="form-control mb-1  " id="inputCity" name="catchPhrase" placeholder=" Enter Your catchPhrase" value={editData.company.catchPhrase} onChange={getData} />
    <input type="text" className="form-control   " id="inputCity" name="bs" placeholder="Enter Your bs" value={editData.company.bs} onChange={getData} />
  </div>
  <div className="col-12 mt-1">
    <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
</form>
    </>
  )
}

export default Edit