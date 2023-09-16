import{j as e,l as i,r as c,c as d,R as m}from"./logo-acb7ac67.js";function u({setShowModal:a}){const t=globalThis.template_data,r=Object.prototype.hasOwnProperty.call(t,"loginform")?t.loginform:null;let o="";return r&&(o=Object.prototype.hasOwnProperty.call(r,"email")?r.email:""),e.jsx("div",{onClick:()=>a(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25",children:e.jsxs("div",{onClick:s=>s.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl",children:[e.jsx("h1",{children:" Log In "}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[Object.prototype.hasOwnProperty.call(t,"error")?e.jsx("div",{className:"relative mb-6",children:e.jsx("p",{className:"text-error-red",children:t.error})}):null,e.jsxs("form",{method:"post",action:"/login",children:[e.jsx("input",{id:"csrf_token",name:"csrf_token",type:"hidden",value:document.getElementById("csrf-token").getAttribute("content")||""}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"email",name:"email",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"you@example.com",defaultValue:o})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"password",id:"password",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Password"})}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{className:"block min-h-[1.5rem] pl-[1.5rem]",children:[e.jsx("input",{className:"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",type:"checkbox",value:"",id:"exampleCheck2"}),e.jsx("label",{className:"inline-block pl-[0.15rem] hover:cursor-pointer",htmlFor:"exampleCheck2",children:"Remember me"})]}),e.jsx("a",{href:"#!",className:"text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"dark:active:shadow inline-block w-full rounded bg-button-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-button-blue-darker","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Log in"}),e.jsxs("div",{className:"mb-6 flex items-center justify-center",children:[e.jsx("p",{className:"mt-6 text-center text-neutral-800 dark:text-neutral-200 font-size: .875rem line-height: 1.25rem",children:"Not a member?"}),e.jsx("a",{className:"text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600","data-te-ripple-init":!0,"data-te-ripple-color":"light",href:"/signup",children:" Sign Up "})]}),e.jsx("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>a(!1),children:"Close"})]})]})]})})}function p({setShowModal:a}){const t=globalThis.template_data,r=Object.prototype.hasOwnProperty.call(t,"error"),o=Object.prototype.hasOwnProperty.call(t,"signupform")?t.signupform:null;let s="",n="";return o&&(s=Object.prototype.hasOwnProperty.call(o,"name")?o.name:"",n=Object.prototype.hasOwnProperty.call(o,"email")?o.email:""),e.jsx("div",{onClick:()=>a(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25",children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded shadow-2xl",children:[e.jsx("h1",{children:" Sign Up "}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[r?e.jsx("div",{className:"relative mb-6",children:e.jsx("p",{className:"text-error-red",children:r})}):null,e.jsxs("form",{method:"post",action:"/signup",children:[e.jsx("input",{name:"csrf_token",type:"hidden",value:document.getElementById("csrf-token").getAttribute("content")||""}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"text",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"name",name:"name",defaultValue:s,placeholder:"Preferred Name",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"email",name:"email",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"signupEmail",defaultValue:n,placeholder:"Enter Email address",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"password",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"signupPassword",placeholder:"Password",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"confirmPassword",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"confirmPassword",placeholder:"Confirm Password",required:!0})}),e.jsx("button",{type:"submit",className:"dark:active:shadow inline-block w-full rounded bg-button-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-button-blue-darker","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Sign up"}),e.jsx("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>a(!1),children:"Close"})]})]})]})})}function h({handleLoginClick:a,handleSignupClick:t}){return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"fixed top-5 left-0 w-full flex justify-center items-center",children:e.jsx("div",{className:"w-5/6 bg-main px-6 py-3 drop-shadow-lg rounded-md",children:e.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"w-10 h-10",src:i,alt:"Ava Logo"}),e.jsx("div",{className:"text-white text-xl font-bold text-button-blue",children:"AVA"})]}),e.jsxs("ul",{className:"flex space-x-4",children:[e.jsx("li",{children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-button-pink hover:text-slate-50",type:"button",onClick:a,children:"Log In"})}),e.jsx("li",{children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-button-pink hover:text-slate-50",type:"button",onClick:t,children:"Sign Up"})})]})]})})})})}const f="/assets/idea-340ab92b.png";function x(){const a=globalThis.template_data,[t,r]=c.useState(a.showModal),[o,s]=c.useState(a.showLogin),n=()=>{r(!0),s(!0)},l=()=>{r(!0),s(!1)};return e.jsxs("div",{className:"flex justify-center items-center h-screen",children:[e.jsx(h,{handleLoginClick:n,handleSignupClick:l}),e.jsxs("div",{className:"grid grid-rows-1 grid-cols-2 gap-x-8 text-center mx-8",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("img",{className:"object-contain h-80 w-auto mx-auto",src:f,alt:"Ava Logo"})}),e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"grid grid-rows-2 grid-cols-1 gap-4 text-center",children:[e.jsx("div",{className:"place-content-center",children:e.jsx("img",{className:"object-contain h-48 w-48 mx-auto",src:i,alt:"Ava Logo"})}),e.jsxs("div",{className:"place-content-center",children:[e.jsx("h1",{children:"Welcome to AVA"}),e.jsx("h2",{children:"The world's best authorship verification algorithm"})]}),e.jsx("div",{className:"place-content-center",children:e.jsx("button",{className:"bg-button-blue text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-button-blue-darker outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:" Get Started"})}),t?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o?e.jsx(u,{setShowModal:r}):e.jsx(p,{setShowModal:r})}):null]})})]})]})}globalThis.template_data===void 0?(globalThis.template_data=JSON.stringify({result:"No Template Data Received"}),console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);d.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(x,{})}));
