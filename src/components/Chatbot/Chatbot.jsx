// import { Segment } from "semantic-ui-react";
// import ChatBot from "react-simple-chatbot";

// function Chatbot() {
//   const steps = [
//     {
//       id: "Great",
//       message: "Hello, Welcome to our website",
//       trigger: "Ask Name",
//     },
//     {
//       id: "Ask Name",
//       message: "Please enter your name",
//       trigger: "waiting1",
//     },
//     {
//       id: "waiting1",
//       user: true,
//       trigger: "Name",
//     },
//     {
//       id: "Name",
//       message: "Hi {previousValue}, Please select your isuue",
//       trigger: "issues",
//     },
//     {
//       id: "issues",
//       options: [
//         { value: "React", label: "React", trigger: "React" },
//         { value: "Angular", label: "Angular", trigger: "Angular" },
//       ],
//     },
//     {
//       id: "React",
//       message: "Thanks for telling your react issue",
//       end: true,
//     },
//     {
//       id: "Angular",
//       message: "Thanks for telling your angular issue",
//       end: true,
//     },
//   ];

//   return (
//     <div className="main-content">
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           position: "fixed",
//           marginLeft: "78rem", // Use marginLeft to position on the left side
//           bottom: 20, // Adjust the bottom position as needed
//           width: "300px", // Adjust the width as needed
//         }}
//       >
//         <Segment>
//           <ChatBot steps={steps} />
//         </Segment>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;

import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiMessageDots } from 'react-icons/bi';
import ContentTop from "../ContentTop/ContentTop";

function Chatbot() {
  const steps = [
    {
      id: "Great",
      message: "Hello, Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your isuue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "React", label: "React", trigger: "React" },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message: "Thanks for telling your react issue",
      end: true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your angular issue",
      end: true,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main-content">
      <ContentTop />
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "fixed",
            marginLeft: isOpen ? "78rem" : "78rem",
            bottom: 20,
            width: "300px",
            marginTop: "2rem",
            transition: "right 0.3s ease",
          }}
        >
          <Segment>
            <ChatBot steps={steps} />
          </Segment>
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right:12,
          marginLeft: isOpen ? "78rem" : "78rem",
          transition: "right 0.3s ease",
        }}
      >
        <button onClick={toggleChatbot}>
          {isOpen ? (
            <AiOutlineCloseSquare className="radius_icon"
              style={{ fontSize: "34px", color: "white" }}
            />
          ) : (
            <BiMessageDots className="radius_icon"
            style={{ fontSize: "38px", color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
