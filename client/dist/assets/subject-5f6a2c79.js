import{j as e,r,F as d,c,R as m}from"./Footer-4485b5ea.js";import{L as u}from"./LoggedInNavbar-3a603e47.js";import{A as l}from"./assignmentCard-a9067834.js";import{S as p}from"./studentCard-e304e223.js";function x({setShowModal:t}){const a=`${window.location.href}/create_assignment`;return e.jsx("div",{onClick:()=>t(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25",children:e.jsxs("div",{onClick:n=>n.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl text-center",children:[e.jsx("h1",{children:" Add a New Assignment "}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[e.jsxs("form",{method:"post",action:a,children:[e.jsx("input",{id:"csrf_token",name:"csrf_token",type:"hidden",value:document.getElementById("csrf-token").getAttribute("content")||""}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"name",name:"name",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Class Name"})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"duedate",name:"duedate",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Due Date"})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"desc",name:"desc",id:"desc",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Description"})}),e.jsx("button",{className:`inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold text-md 
                            uppercase leading-normal transition duration-200 ease-in-out dark:active:shadow 
                            bg-button-light-blue text-teal-800 hover:bg-violet-300 hover:text-violet-800`,type:"submit",children:"Publish"})]}),e.jsx("button",{className:`mt-4 mx-auto px-6 py-2 rounded-lg uppercase font-semibold font-sans 
                        text-sm focus:outline-none ease-in-out transition-all duration-200
                        hover:bg-button-light-blue hover:text-teal-800 bg-violet-300 text-violet-800`,type:"button",onClick:()=>t(!1),children:"Close"})]})]})})}function h(){const t=globalThis.template_data;console.log("Rendering Ass with Assignments:",t.upcoming,t.past);const[i,a]=r.useState(!1),n=()=>{a(!0)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[e.jsx(u,{}),e.jsxs("main",{className:"container mx-auto flex-grow box-border pt-28 pb-12 w-5/6",children:[e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:t.subject.name}),e.jsx("h2",{className:"text-xl font-semibold mb-4",children:t.subject.id}),e.jsxs("p",{className:"text-base mb-4",children:["Overview: ",t.subject.description]}),e.jsxs("p",{className:"text-base mb-4",children:["Instructor: ",t.subject.prof]}),e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Upcoming Assignments"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[t.upcoming.map((s,o)=>e.jsx(l,{ass:s,inSubject:!0},o)),t.user_type=="teacher"?e.jsx("button",{className:`cursor-pointer custom-subject-cards
                            hover:bg-violet-300 text-slate-900 hover:text-violet-800
                            transition duration-200 ease-in-out`,type:"button",onClick:n,children:"+"}):null]}),e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Past Assignments"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:t.past.map((s,o)=>e.jsx(l,{ass:s,inSubject:!0},o))})]}),t.user_type=="teacher"?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Students"}),t.students.map(s=>e.jsx(p,{stu:s}))]}):null,i?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsx(x,{setShowModal:a})}):null]}),e.jsx(d,{})]})}globalThis.template_data===void 0?(globalThis.template_data={upcoming:[{due_date:"12/31/2023",id:"BSBS873295",name:"Don't Use ChatGPT",link:"/assignment"},{due_date:"10/17/2023",id:"BSBS873295",name:"Dumb Project",link:"/ass"},{due_date:"02/01/2028",id:"BSBS873295",name:"Try Not to Procrastinate",link:"/ass"}],past:[{due_date:"08/30/2023",id:"BSBS873295",name:"Useless Grok Worksheet",link:"/ass"},{due_date:"02/26/2023",id:"BSBS873295",name:"Stupid Assignment 2",link:"/ass"}],subject:{id:"BSBS873295",name:"Intro to BS",description:"Bullshit is everywhere, and we've had enough. We want to teach people to detect and defuse bullshit where ever it may arise.",prof:"Carl T. Bergstrom"},students:[{name:"Jimmy",link:"/profile"}]},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);c.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(h,{})}));
