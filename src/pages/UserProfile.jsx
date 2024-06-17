import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const UserProfile = ({setid}) => {

// ! this is a usesatate use to store the value 

  const [userData, setUserData] = useState([])

//  ! this deleted data mange usestate
  const [delData,setdelData] = useState()

// ! this is router navigate onather page 
  const navigated = useNavigate()

// ! useeffect use to functionality deleted data update re-render
  useEffect(() => {
    fetchData()
  }, [delData]);
// ! this is a get api data use to display
  const fetchData = async () => {
    try {
      const res = await axios.get("https://666e5110f1e1da2be520015c.mockapi.io/api/users");
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
//! set the id for edit page
  const handleEdit = (id)=>{
    setid(id)
    navigated(`/edit/:${id}`)

  }
// ! this function handle deleted data api call use to delete method
  const HandleDelete = async (id) =>{
    await axios.delete(`https://666e5110f1e1da2be520015c.mockapi.io/api/users/${id}`)
    .then((res)=>setdelData(res.data))
    .catch((error)=>{console.log(error)})
}


 
  return (

     <>

    {/* use to map display data and two button include two functionality  */}

<div>
  {userData.map((element, index) => {
    return (
      <table className="table boxtable" key={index}>
        <tbody>
          <tr>
            <th scope="row">{element.id} Name</th>
            <td>{element.name}</td>
          </tr>
          <tr>
            <th scope="row">Username</th>
            <td>{element.username}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{element.email}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Street</th>
                    <td>{element.address.street}</td>
                  </tr>
                  <tr>
                    <th scope="row">Suite</th>
                    <td>{element.address.suite}</td>
                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <td>{element.address.city}</td>
                  </tr>
                  <tr>
                    <th scope="row">Zipcode</th>
                    <td>{element.address.zipcode}</td>
                  </tr>
                  <tr>
                    <th scope="row">Geo</th>
                    <td>
                      Lat: {element.address.geo.lat}
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className='move' >Lng: {element.address.geo.lng}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td>{element.phone}</td>
          </tr>
          <tr>
            <th scope="row">Website</th>
            <td>{element.website}</td>
          </tr>
          <tr>
            <th scope="row">Company</th>
            <td>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{element.company.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">CatchPhrase</th>
                    <td>{element.company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <th scope="row">BS</th>
                    <td>{element.company.bs}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <button className='btn btn-success m-3' onClick={() => { handleEdit(element.id) }}>Edit</button>
                 
                  <button className='btn btn-danger' onClick={()=>{HandleDelete(element.id)}} >Delete</button></td>
          </tr>
        </tbody>
      </table>
    );
  })}
</div>

      
  


    </>
  )
}

export default UserProfile


