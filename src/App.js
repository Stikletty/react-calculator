import { useState } from "react";

function App() {
  const [testdata, setMessage] = useState(""); 
  
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <div className="container">
          <div className="bg-gray-500 text-gray-900 pb-5 pt-5 font-black text-6xl text-right px-2 ">3.560</div>
          <div className="flex flex-row ">
            <button onClick={(e) => setMessage(e.target.innerHTML)} className="flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">1</button>
            <button className="flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">2</button>
            <button className="flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">3</button>
            <button className="flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">4</button>
          </div>
        </div>
      </div>      
      <br/>
      <div className="flex flex-row" id="testdata">{testdata}</div>
    </section>
  );
}

export default App;
