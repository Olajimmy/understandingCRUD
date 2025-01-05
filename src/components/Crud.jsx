// import React, { useState } from "react";

// const Crud = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 3, name: "Item 3" },
//   ]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [newName, setNewName] = useState("");

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setNewName(items[index].name); // pre-fill the name to be edited
//   };

//   const handleSaveClick = (index) => {
//     const updatedItems = [...items];
//     updatedItems[index].name = newName; // update the name of the selected item
//     setItems(updatedItems);
//     setEditingIndex(null); // reset the editing state
//     setNewName(""); // clear the input field
//   };

//   const handleCancelClick = () => {
//     setEditingIndex(null);
//     setNewName(""); // clear the input field if cancel
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             {editingIndex === index ? (
//               <div>
//                 <input
//                   type="text"
//                   value={newName}
//                   onChange={(e) => setNewName(e.target.value)}
//                 />
//                 <button onClick={() => handleSaveClick(index)}>Save</button>
//                 <button onClick={handleCancelClick}>Cancel</button>
//               </div>
//             ) : (
//               <div>
//                 <span>{item.name}</span>
//                 <button onClick={() => handleEditClick(index)}>Edit</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Crud;
//
import React from "react";
//import ChildComponent from "./ChildComponent";

import { useState, useRef } from "react";
function Crud() {
  const [text, setText] = useState(["hello", "welcome", "hey", "world"]);
  let [count, setCount] = useState(0);
  const [newText, setNewText] = useState("");
  const [editText, setEditText] = useState("");
  const [typedI, setTypedI] = useState("");

  // function handleChange(event) {}

  //
  function counter() {
    setCount((count = count + 1));
  }

  //
  function addText() {
    setText([...text, newText]);
    setNewText("");
  }
  function edit(event) {
    //setEditText(editText);
    // console.log(index);
    let len = text.length;
    //console.log(len);
    setTypedI(editText);
    console.log("value in typedIndex", typedI);

    for (let i = 0; i < len; i++) {
      console.log(i);
      //console.log({ newText });
      console.log(editText);

      if (i === parseInt(editText)) {
        console.log("editText:", parseInt(editText));

        console.log("i found a matching number");
        // setFound(text[i]);
        // console.log(found);
        const newValues = [...text, i]; // Copy the current values array
        //newValues[i] = event.target.value;
        console.log(newValues[i]); //shows the text value in it
        setEditText(newValues[i]);
      }
      // console.log(text[i]);
    }
    // return (
    //   <div>
    //     {text.map((i, index) => (
    //       <ChildComponent key={index} item={i} index={index} onClick={edit} />
    //     ))}
    //   </div>
    // );
  }
  function save() {
    console.log("am value from edit text:", editText);
    //setEditText(event.target.value);
    const updatedValue = text.map((i, index) => {
      console.log(i, index);
      console.log(editText, parseInt(typedI)); //interget index is parsed in

      // const ChildComponent = ({ text, index, onClick }) => {
      //     return (
      //       <button onClick={() => onClick(index)}>
      //         {text}
      //       </button>
      //     );
      //   };
      //
      if (index === parseInt(typedI)) {
        console.log("same");
      }
      //
      let originalValue = [...text];
      console.log("originalValue", index);

      //
      if (index === parseInt(typedI)) {
        // console.log(parseInt(editText));
        console.log("we match");
        console.log(editText, index, parseInt(typedI));

        setText([...text.slice(0, index), editText, ...text.slice(index + 1)]);
        console.log(text);
      }
      //     //setText(text=>[...text.slice]);
      //   }
      // let newOriginalValue = originalValue[index];
      // console.log(newOriginalValue[index]);
      //setText(originalValue[i]);
    });
  }
  //   text.map((e, index) => {
  //     //console.log(e, index);
  //     if (index === editText) {
  //       console.log(e, index);
  //     } else {
  //       console.log("number doesn't match");
  //     }
  //   }),

  // console.log(event);
  // setEditText()
  //setText([editText, ...text]);

  // console.log(editText);
  //setNewText(editText);
  //}

  return (
    <>
      <h1>Crud Test App</h1>

      <div className="outPut">
        {text.map((word, index) => (
          <li className="li" key={index}>
            {" "}
            {word}
          </li>
        ))}{" "}
      </div>
      <br />
      <div>{text[0]} </div>
      <input
        placeholder="enter Text"
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={addText}>Add Text</button>
      <br />

      <input
        type="text"
        onChange={(e) => setEditText(e.target.value)}
        value={editText}
        placeholder="index to edit"
      />

      <button onClick={edit}>Edit</button>
      <button onClick={save}>Save</button>
      <br />
      <button onClick={counter}>Counter:{count}</button>
    </>
  );
}
export default Crud;
