import { useState, useEffect } from "react";
const { default: Button } = require("./Button");

const AddPerson = () => {
  const [showUpdate, setUpdate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
    age: 0,
  });
  const [savedInfo, setSavedInfo] = useState([]);

  const update = (e) => {
    if (e.target.value === "add") {
      setUpdate(true);
    } else {
      e.preventDefault();
      setUpdate(false);
      // Save the form data to local storage
      localStorage.setItem("savedInfo", JSON.stringify(savedInfo));
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Calculate age based on date of birth
    if (e.target.name === "dob") {
      const dobDate = new Date(e.target.value);
      const today = new Date();
      const age = Math.floor((today - dobDate) / (365.25 * 24 * 60 * 60 * 1000));
      setFormData({
        ...formData,
        age: age,
      });
    }
  };

  useEffect(() => {
    // Retrieve saved information from local storage
    const storedInfo = JSON.parse(localStorage.getItem("savedInfo")) || [];
    setSavedInfo(storedInfo);
  }, []);

  const handleSave = () => {
    setSavedInfo([...savedInfo, formData]);
    setFormData({
      name: "",
      dob: "",
      aadhar: "",
      mobile: "",
      age: 0,
    });
    // Update local storage after saving
    localStorage.setItem("savedInfo", JSON.stringify([...savedInfo, formData]));
  };

  const handleDelete = (index) => {
    const updatedInfo = [...savedInfo];
    updatedInfo.splice(index, 1);
    setSavedInfo(updatedInfo);
    // Update local storage after deletion
    localStorage.setItem("savedInfo", JSON.stringify(updatedInfo));
  };

  return (
    <section className="border border-black min-h-[70vh] max-w-[1200px] mx-auto">
      <div className="text-start w-fit border border-b-black border-r-black p-2 px-8 mr-auto">Add New Person</div>
      <table className="w-[95%] mx-auto my-4 border border-black">
        <thead className="bg-blue-500">
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedInfo.map((info, index) => (
            <tr key={index}>
              <td>{info.name}</td>
              <td>{info.dob}</td>
              <td>{info.aadhar}</td>
              <td>{info.mobile}</td>
              <td>{info.age}</td>
              <td>
                <Button
                  change={() => handleDelete(index)}
                  value="delete"
                  content="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdate && (
        <form className="w-[95%] mx-auto my-4 border border-black flex p-2 bg-blue-600">
          <input
            type="text"
            required
            className="border border-black mx-2 grow"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="date"
            required
            className="border border-black mx-2 grow"
            name="dob"
            value={formData.dob || ''}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          />
          <input
            type="number"
            placeholder="Aadhar Number"
            required
            className="border border-black mx-2 grow"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            required
            className="border border-black mx-2 grow"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <input
            disabled={true}
            required
            type="number"
            placeholder="Age"
            className="bg-gray-600/25 border border-black mx-2 grow"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <button
            onClick={(e) => {
              update(e);
              handleSave();
            }}
            type="button"
            required
            className="bg-white border border-black mx-2 grow"
          >
            <u className="text-blue-600">Save</u>
          </button>
        </form>
      )}
      <Button change={update} value="add" content="add"></Button>
    </section>
  );
};

export default AddPerson;






// import { useState } from "react"

// const { default: Button } = require("./Button")

// const AddPerson = ()=>{
//     let[showUpdate,setUpdate] = useState(false);
//     const update = (e)=>{
//         if(e.target.value === "add"){
//             setUpdate(true);
//         }else{
//             e.preventDefault();
//             setUpdate(false);
            
//         }
        
//     }
//     return(
//         <section className="border border-black min-h-[70vh] max-w-[1200px] mx-auto">
//             <div className="text-start w-fit border border-b-black border-r-black p-2 px-8 mr-auto">Add New Person</div>
//             <table className="w-[95%] mx-auto my-4 border border-black">
//                 <thead className="bg-blue-500">
//                     <th>Name</th>
//                     <th>Date of Birth</th>
//                     <th>Aadhar Number</th>
//                     <th>Mobile Number</th>
//                     <th>Age</th>
//                     <th>Actions</th>
//                 </thead>
//                 <tbody>
//                     <td>shah</td>
//                     <td>28-12-1999</td>
//                     <td>391833850590</td>
//                     <td>9380604335</td>
//                     <td>24</td>
//                     <td>Nothing</td>
//                 </tbody>
//             </table>
//             {
//                showUpdate  &&
//                 (
//                     <form className="w-[95%] mx-auto my-4 border border-black flex p-2 bg-blue-600">
//                     <input type="text" required className="border border-black mx-2 grow" placeholder="Name"></input>
//                     <input type="date" required className="border border-black mx-2 grow"></input>
//                     <input type="number" placeholder="Aadhar Number" required className="border border-black mx-2 grow"></input>
//                     <input type="number" placeholder="Mobile Number" required className="border border-black mx-2 grow"></input>
//                     <input disabled={true} required type="number" placeholder="Age" className="bg-gray-600/25 border border-black mx-2 grow"></input>
//                     <button onClick={update} type="submit" required className="bg-white border border-black mx-2 grow"><u className="text-blue-600">Save</u></button>
//                     </form>
//                 )
                
//             }
            
//             <Button change={update} value="add" content="add"></Button>
//         </section> 
//     )
// }
// export default AddPerson;