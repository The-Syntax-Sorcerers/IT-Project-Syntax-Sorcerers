import{j as e,F as n,c as d,R as r}from"./Footer-53861639.js";import{L as m}from"./LoggedInNavbar-72cafa68.js";import{A as o}from"./assignmentCard-e895ecb5.js";function c({upcoming:i,past:l,subject:s}){return console.log("Rendering Ass with Assignments:",i,l),e.jsxs("div",{className:"bg-main bg-cover flex flex-col min-h-screen",children:[e.jsx(m,{}),e.jsx("main",{className:"container mx-auto flex-grow box-border pt-28 pb-12 w-5/6",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:s.name}),e.jsx("h2",{className:"text-xl font-semibold mb-4",children:s.id}),e.jsxs("p",{className:"text-base mb-4",children:["Overview: ",s.description]}),e.jsxs("p",{className:"text-base mb-4",children:["Instructor: ",s.prof]}),e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Upcoming Assignments"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map((t,a)=>e.jsx(o,{ass:t,rkey:a,inSubject:!0}))}),e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Past Assignments"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:l.map((t,a)=>e.jsx(o,{ass:t,rkey:a,inSubject:!0}))})]})}),e.jsx(n,{})]})}globalThis.template_data===void 0?(globalThis.template_data={upcoming:[{due_date:"12/31/2023",id:"BSBS873295",name:"Don't Use ChatGPT",link:"/assignment"},{due_date:"10/17/2023",id:"BSBS873295",name:"Dumb Project",link:"/ass"},{due_date:"02/01/2028",id:"BSBS873295",name:"Try Not to Procrastinate",link:"/ass"}],past:[{due_date:"08/30/2023",id:"BSBS873295",name:"Useless Grok Worksheet",link:"/ass"},{due_date:"02/26/2023",id:"BSBS873295",name:"Stupid Assignment 2",link:"/ass"}],subject:{id:"BSBS873295",name:"Intro to BS",description:"Bullshit is everywhere, and we've had enough. We want to teach people to detect and defuse bullshit where ever it may arise.",prof:"Carl T. Bergstrom"}},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);d.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(c,{upcoming:globalThis.template_data.upcoming,past:globalThis.template_data.past,subject:globalThis.template_data.subject})}));
