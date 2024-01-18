import { useState } from "react";
const { default: Button } = require("./Button");

const RetrievePerson = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredInfo, setFilteredInfo] = useState([]);

  const handleSearch = () => {
    // Assuming 'savedInfo' is already available in local storage
    const savedInfo = JSON.parse(localStorage.getItem("savedInfo")) || [];

    // Filter information based on search input
    const filteredData = savedInfo.filter(
      (info) =>
        info.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        info.aadhar.includes(searchInput) ||
        info.mobile.includes(searchInput)
    );

    setFilteredInfo(filteredData);
  };

  return (
    <section className="border border-black min-h-[70vh] max-w-[1200px] mx-auto">
      {/* ... existing code ... */}
      <div className="text-start flex gap-4 my-4">
        <input
          className="border border-black min-w-[40%]"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <Button
          value="Find"
          content="Find"
          change={() => handleSearch()}
        ></Button>
      </div>
      <div className="border border-black shadow-lg w-fit p-4">
        {filteredInfo.map((info, index) => (
          <div key={index}>
            <p>Name: <span>{info.name}</span></p>
            <p>DOB: <span>{info.dob}</span></p>
            <p>Aadhar: <span>{info.aadhar}</span></p>
            <p>Mobile no: <span>{info.mobile}</span></p>
            <p>Age: <span>{info.age}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetrievePerson;



// const { default: Button } = require("./Button")

// const RetrievePerson = ()=>{
//     return(
//         <section className="border border-black min-h-[70vh] max-w-[1200px] mx-auto">
//             <div className="text-start w-fit border border-b-black border-r-black p-2 px-8 mr-auto">Retrieve Person</div>
//             <div className="text-start flex gap-4 my-4">
//                 <input className="border border-black min-w-[40%]" type="number"></input>
//                 <Button value="Find" content="Find"></Button>
//             </div>
//             <div className="border border-black shadow-lg w-fit p-4">
//                 <p>Name: <span>shah</span></p>
//                 <p>DOB: <span>2024-12-04</span></p>
//                 <p>Aadhar: <span>391833850590</span></p>
//                 <p>Mobile no: <span>9380604335</span></p>
//                 <p>Age: <span>24</span></p>
//             </div>
//         </section> 
//     )
// }
// export default RetrievePerson;