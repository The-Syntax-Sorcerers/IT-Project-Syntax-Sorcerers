import{j as e,l as a}from"./Footer-e75b6a7e.js";const o=[["Home","/dashboard"],["Assignments","/assignments"],["Profile","/profile"],["Log Out","/logout"]];function r({route:s,rkey:t}){const l=s[0],n=s[1];return e.jsx("li",{children:e.jsx("a",{href:n,className:"rounded-lg px-3 py-2 font-medium hover:bg-button-pink hover:text-slate-50 bg-black outline-slate-200 border-yellow-100",children:l})},t)}function c(){return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"fixed top-5 left-0 w-full flex justify-center items-center",children:e.jsx("div",{className:"w-5/6 bg-main px-6 py-3 drop-shadow-lg rounded-md",children:e.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"w-10 h-10",src:a,alt:"Ava Logo"}),e.jsx("div",{className:"text-white text-xl font-bold text-button-blue",children:"AVA"})]}),e.jsx("ul",{className:"flex space-x-4",children:o.map((s,t)=>e.jsx(r,{route:s,rkey:t}))})]})})})})}export{c as L};
