import{j as s,F as l,c as o,R as d}from"./Footer-f00bd6fe.js";import{L as m}from"./LoggedInNavbar-caea0c49.js";import{A as n}from"./assignmentCard-ca06ea97.js";function r({upcoming:t,past:i}){return console.log("Rendering Ass with Assignments:",t,i),s.jsxs("div",{className:"bg-main bg-cover flex flex-col min-h-screen",children:[s.jsx(m,{}),s.jsx("main",{className:"container mx-auto flex-grow box-border pt-28",children:s.jsxs("div",{className:"container mx-auto px-12",children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"All Assignments"}),s.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Upcoming Assignments"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:t.map((e,a)=>s.jsx(n,{ass:e,rkey:a,inSubject:!1}))}),s.jsx("h2",{className:"text-xl font-semibold mb-4 mt-10",children:"Past Assignments"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map((e,a)=>s.jsx(n,{ass:e,rkey:a,inSubject:!1}))})]})}),s.jsx(l,{})]})}globalThis.template_data===void 0?(globalThis.template_data={upcoming:[{due_date:"12/12/2023",id:"COMP123456",name:"Some BS Assignment",link:"/assignnent"},{due_date:"10/17/2023",id:"COMP123456",name:"Another BS assignment",link:"/ass"},{due_date:"10/01/2023",id:"COMP123456",name:"What is this Assignment?!?!?!?",link:"/ass"}],past:[{due_date:"08/30/2023",id:"COMP123456",name:"Grok Worksheet 1",link:"/ass"},{due_date:"02/26/2023",id:"COMP123456",name:"Grok Worksheet 2",link:"/ass"}],user_type:"student"},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);o.createRoot(document.getElementById("root")).render(s.jsx(d.StrictMode,{children:s.jsx(r,{upcoming:globalThis.template_data.upcoming,past:globalThis.template_data.past})}));
