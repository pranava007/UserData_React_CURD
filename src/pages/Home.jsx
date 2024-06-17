import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
// ! this is a usesatate use to store the value 
  const [userData, setUserData] = useState([]);
// ! this is useEffect use to one time run api call
  useEffect(() => {
    fetchData();
  }, []);
// ! this function use to get the value from api get method  store the  setUserData(res.data);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://666e5110f1e1da2be520015c.mockapi.io/api/users");
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
{/* use to map function display data map function get data from userData usestate  */}
<div className="accordion" id="accordionExample">
  {userData.map((element, index) => (
    <div className="accordion-item" key={element.id}>
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="true"
          aria-controls={`collapse${index}`}
        >
          <h6>
            {element.id} <span>{element.name}</span>
          </h6>
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
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
                                <td className="move">Lng: {element.address.geo.lng}</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ))}
</div>

   
    </>
  );
};

export default Home;


