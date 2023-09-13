import{j as s,c as i,R as t}from"./logo-acb7ac67.js";import{L as o}from"./LoggedInNavbar-65bda572.js";function l({sub:e,rkey:a}){return s.jsx("a",{href:e.link,children:s.jsxs("div",{className:"bg-card rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer",children:[s.jsx("h3",{className:"text-base font-bold mb-1",children:e.name}),s.jsx("h2",{className:"text-sm font-semibold",children:e.id})]},a)})}function d({subjects:e}){return console.log("Rendering Dash with Subjects:",e),s.jsxs("div",{className:"bg-main bg-cover min-h-screen",children:[s.jsx(o,{}),s.jsx("main",{className:"container mx-auto p-8",children:s.jsxs("div",{className:"container mx-auto px-4 py-20",children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Dashboard"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:e.map((a,n)=>s.jsx(l,{sub:a,rkey:n},a.id))})]})})]})}globalThis.template_data===void 0?(globalThis.template_data={subjects:[{id:"BSBS873295",name:"Intro to BS",link:"/subject"},{id:"CHEM992376",name:"Scuffed Chemisty",link:"/assignments"},{id:"COMP431242",name:"Bad Physics",link:"/assignments"},{id:"CODD123456",name:"Call of Duty",link:"/assignments"},{id:"CREED42069",name:"Assiassians Creed",link:"/assignments"}],random:69},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);i.createRoot(document.getElementById("root")).render(s.jsx(t.StrictMode,{children:s.jsx(d,{subjects:globalThis.template_data.subjects})}));
