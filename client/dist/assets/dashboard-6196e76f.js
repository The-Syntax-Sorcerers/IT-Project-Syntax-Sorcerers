import{j as e,r,F as c,c as d,R as m}from"./Footer-4485b5ea.js";import{L as u}from"./LoggedInNavbar-8edc6066.js";function b({sub:t,rkey:s}){return e.jsx("a",{href:t.link,children:e.jsxs("div",{className:"cursor-pointer custom-subject-cards",children:[e.jsx("h3",{className:"text-base font-semibold mb-1",children:t.name}),e.jsx("h2",{className:"text-xs text-gray font-medium",children:t.id})]},s)})}function x({setShowModal:t}){return e.jsx("div",{onClick:()=>t(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25",children:e.jsxs("div",{onClick:s=>s.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl text-center",children:[e.jsx("h1",{children:" Add a New Subject "}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[e.jsxs("form",{method:"post",action:"subjects/create_subject",children:[e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"name",name:"name",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Subject Name"})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"id",name:"id",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Subject ID"})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"desc",name:"desc",id:"desc",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Description"})}),e.jsx("button",{className:`inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold text-md
                            uppercase leading-normal transition duration-200 ease-in-out dark:active:shadow
                            bg-button-light-blue text-teal-800 hover:bg-violet-300 hover:text-violet-800`,type:"submit",children:"Publish"})]}),e.jsx("button",{className:`mt-4 mx-auto px-6 py-2 rounded-lg uppercase font-semibold font-sans
                        text-sm focus:outline-none ease-in-out transition-all duration-200
                        hover:bg-button-light-blue hover:text-teal-800 bg-violet-300 text-violet-800`,type:"button",onClick:()=>t(!1),children:"Close"})]})]})})}function h({subjects:t,userType:s}){console.log("Rendering Dash with Subjects:",t);const[n,a]=r.useState(!1),l=()=>{a(!0)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[e.jsx(u,{}),e.jsxs("main",{className:"container mx-auto flex-grow box-border pt-28 pb-10 w-5/6",children:[e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Subjects"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[t.map((o,i)=>e.jsx(b,{sub:o,rkey:i},o.id)),s=="teacher"?e.jsx("button",{className:`cursor-pointer custom-subject-cards hover:bg-violet-300 text-slate-900 hover:text-violet-800
                            transition duration-200 ease-in-out`,type:"button",onClick:l,children:"+"}):null]})]}),n?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsx(x,{setShowModal:a})}):null]}),e.jsx(c,{})]})}globalThis.template_data===void 0?(globalThis.template_data={subjects:[{id:"BSBS873295",name:"Intro to BS",link:"/subject"},{id:"CHEM992376",name:"Scuffed Chemisty",link:"/assignments"},{id:"COMP431242",name:"Bad Physics",link:"/assignments"},{id:"CODD123456",name:"Call of Duty",link:"/assignments"},{id:"CREED42069",name:"Assiassians Creed",link:"/assignments"}],random:69},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);d.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(h,{subjects:globalThis.template_data.subjects,userType:globalThis.template_data.user_type})}));
