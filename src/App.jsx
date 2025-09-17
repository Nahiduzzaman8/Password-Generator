import { useCallback, useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  function passGenerator(){
    let newPass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed){str += "1234567890"};
    if(charAllowed){str += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"};

    for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    newPass += str[randomIndex];
  }
  setPassword(newPass)
  }

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="h-screen bg-black bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
  <div className="max-w-md w-full p-6 bg-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
    
    {/* Title */}
    <h1 className="text-white text-2xl font-bold text-center mb-6">Password Generator</h1>

    {/* Password Display */}
    <input
      type="text"
      value={password}
      readOnly
      className="w-full mb-6 p-4 border border-gray-700 rounded-xl text-center text-lg font-mono bg-gray-800 text-white placeholder-gray-400 shadow-inner"
      placeholder="Your password will appear here"
    />

    {/* Generate Button */}
    <button
      onClick={passGenerator}
      className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl mb-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      Generate Password
    </button>

    {/* Options */}
    <div className="flex flex-col space-y-5">

      {/* Checkboxes */}
      <div className="flex justify-between items-center">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
            className="w-6 h-6 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
          <span className="text-gray-200 font-medium text-sm md:text-base">Include Numbers</span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
            className="w-6 h-6 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
          <span className="text-gray-200 font-medium text-sm md:text-base">Include Special Characters</span>
        </label>
      </div>

      {/* Length Slider */}
      <div className="flex flex-col">
        <input
          type="range"
          min="1"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-3 bg-gray-700 rounded-lg appearance-none accent-blue-500 cursor-pointer"
        />
        <p className="text-gray-200 text-center mt-2 font-semibold">Length: {length}</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default App
