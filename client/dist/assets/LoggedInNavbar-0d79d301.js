import{j as e,l as n}from"./Footer-edf931a3.js";const l=[["Subjects","/dashboard"],["Assignments","/assignments"],["Log Out","/logout"]];function r({route:s}){const t=s[0],a=s[1];return e.jsx("li",{children:e.jsx("a",{href:a,className:"custom-navbar-link-element",children:t})})}function i(){return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"fixed top-5 left-0 w-full flex justify-center items-center",children:e.jsx("div",{className:"w-5/6 px-6 py-3 custom-navbar border-2 border-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"w-10 h-10",src:n,alt:"Ava Logo"}),e.jsx("div",{className:"text-button-blue text-xl font-bold",children:"AVA"})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("ul",{className:"flex space-x-4",children:l.map((s,t)=>e.jsx(r,{route:s},t))})})]})})})})}export{i as L};
