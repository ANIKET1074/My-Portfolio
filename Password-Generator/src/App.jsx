import { useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const ref = useRef(null);

  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()_+{}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  useEffect(() => {
    passwordGenerator();
  }, [isNumber, isChar, length, setPassword]);

  const copyPasswordToClipBoard = () => {
    ref.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-8 my-8 rounded-lg text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex overflow-hidden mb-4 rounded-lg shadow">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            ref={ref}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              className="cursor-pointer outline-none"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={isChar}
              className="cursor-pointer outline-none"
              onChange={() => setIsChar((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
