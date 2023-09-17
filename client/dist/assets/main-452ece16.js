import{j as e,l as c,r as i,F as d,c as m,R as u}from"./Footer-f00bd6fe.js";function p({setShowModal:t}){const r=globalThis.template_data,a=Object.prototype.hasOwnProperty.call(r,"login_error")?r.login_error:null,s=Object.prototype.hasOwnProperty.call(r,"loginform")?r.loginform:null;let o="";return s&&(o=Object.prototype.hasOwnProperty.call(s,"email")?s.email:""),e.jsx("div",{onClick:()=>t(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25 backdrop-blur-sm",children:e.jsxs("div",{onClick:n=>n.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl text-center",children:[e.jsx("div",{className:"relative w-auto my-6 mx-auto max-w-sm text-center",children:e.jsx("h1",{className:"text-xl font-semibold",children:" Log In "})}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[a?e.jsx("div",{className:"relative mb-6",children:e.jsx("p",{className:"text-error-red",children:a})}):null,e.jsxs("form",{method:"post",action:"/login",children:[e.jsx("input",{id:"csrf_token",name:"csrf_token",type:"hidden",value:document.getElementById("csrf-token").getAttribute("content")||""}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"email",name:"email",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Email",defaultValue:o,required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"password",id:"password",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",placeholder:"Password",required:!0})}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{className:"block min-h-[1.5rem] pl-[1.5rem]",children:[e.jsx("input",{className:"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",type:"checkbox",value:"",id:"exampleCheck2"}),e.jsx("label",{className:"inline-block pl-[0.15rem] hover:cursor-pointer",htmlFor:"exampleCheck2",children:"Remember me"})]}),e.jsx("a",{href:"#!",className:"text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"dark:active:shadow inline-block w-full rounded bg-button-blue px-6 pb-2 pt-2.5 font-semibold text-lg uppercase leading-normal text-slate-900 transition duration-150 ease-in-out hover:bg-button-blue-darker","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Log in"}),e.jsx("div",{className:"mb-6 flex items-center justify-center",children:e.jsxs("p",{className:"mt-6 text-center text-neutral-800 dark:text-neutral-200 font-size: .875rem line-height: 1.25rem",children:["Not a member?",e.jsx("a",{className:"text-blue-700 transition duration-150 ease-in-out hover:text-blue-800 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600","data-te-ripple-init":!0,"data-te-ripple-color":"light",href:"/signup",children:" Sign Up "})]})})]}),e.jsx("button",{className:"rounded-lg text-slate-900 mt-4 mx-auto bg-button-yellow hover:bg-button-yellow-darker font-bold uppercase px-6 py-2 text-sm focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>t(!1),children:"Close"})]})]})})}function x({setShowModal:t}){const r=globalThis.template_data,a=Object.prototype.hasOwnProperty.call(r,"signup_error")?r.signup_error:null;console.log("Received error:",a);const s=Object.prototype.hasOwnProperty.call(r,"signupform")?r.signupform:null;let o="",n="";return s&&(o=Object.prototype.hasOwnProperty.call(s,"name")?s.name:"",n=Object.prototype.hasOwnProperty.call(s,"email")?s.email:""),e.jsx("div",{onClick:()=>t(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25 backdrop-blur-sm",children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl text-center",children:[e.jsx("div",{className:"relative w-auto my-6 mx-auto max-w-sm text-center",children:e.jsx("h1",{className:"text-xl font-semibold",children:"Sign Up"})}),e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:[a?e.jsx("div",{className:"relative mb-6",children:e.jsx("p",{className:"text-error-red",children:a})}):null,e.jsxs("form",{method:"post",action:"/signup",children:[e.jsx("input",{name:"csrf_token",type:"hidden",value:document.getElementById("csrf-token").getAttribute("content")||""}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"text",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"name",name:"name",defaultValue:o,placeholder:"Preferred Name",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"email",name:"email",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"signupEmail",defaultValue:n,placeholder:"Enter Email address",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"password",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"signupPassword",placeholder:"Password",required:!0})}),e.jsx("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:e.jsx("input",{type:"password",name:"confirmPassword",className:"mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1",id:"confirmPassword",placeholder:"Confirm Password",required:!0})}),e.jsx("button",{type:"submit",className:"dark:active:shadow inline-block w-full rounded bg-button-blue px-6 pb-2 pt-2.5 font-semibold text-lg uppercase leading-normal text-slate-900 transition duration-150 ease-in-out hover:bg-button-blue-darker","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Sign up"})]}),e.jsx("button",{className:"rounded-lg text-slate-900 mt-4 bg-button-yellow hover:bg-button-yellow-darker font-bold uppercase px-6 py-2 text-sm focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>t(!1),children:"Close"})]})]})})}function f({handleLoginClick:t,handleSignupClick:r}){return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"fixed top-5 left-0 w-full flex justify-center items-center",children:e.jsx("div",{className:"w-5/6 bg-main px-6 py-3 drop-shadow-lg rounded-md",children:e.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"w-10 h-10",src:c,alt:"Ava Logo"}),e.jsx("div",{className:"text-button-blue text-xl font-bold text-button-blue",children:"AVA"})]}),e.jsxs("ul",{className:"flex space-x-4",children:[e.jsx("li",{children:e.jsx("button",{className:"rounded-lg px-3 py-2 bg-transparent border-button-pink text-slate-900 font-medium hover:bg-button-pink hover:text-slate-900",type:"button",onClick:t,children:"Log In"})}),e.jsx("li",{children:e.jsx("button",{className:"rounded-lg px-3 py-2 bg-transparent border-button-pink text-slate-900 font-medium hover:bg-button-pink hover:text-slate-900",type:"button",onClick:r,children:"Sign Up"})})]})]})})})})}const h="/assets/hourglass-62489d33.png",b="/assets/chart-619dba42.png",g="/assets/graph-d48d3640.png",y=[[h,"Real-Time Verification","AVA provides lightning-fast results, allowing users to verify authorship in real-time, making it ideal for time-sensitive situations where authenticity matters."],[g,"Advanced Linguistic Analysis","AVA employs state-of-the-art linguistic analysis to examine the intricacies of writing styles, vocabulary usage, and grammatical patterns, ensuring accurate authorship verification."],[b,"Detailed Verification Reports","Receive comprehensive reports outlining the analysis process and verification results, offering transparency and insights into the authenticity assessment."]];function k({card:t}){const r=t[0],a=t[1],s=t[2];return e.jsxs("div",{className:"container mx-auto flex flex-row gap-4 text-center rounded-lg bg-slate-50 px-5 py-5 mb-10",children:[e.jsx("div",{className:"basis-1/4 place-content-center",children:e.jsx("img",{className:"object-contain h-25 w-auto mx-auto",src:r,alt:"pic"})}),e.jsxs("div",{className:"basis-3/4 flex flex-col gap-4 text-center px-5",children:[e.jsx("h1",{className:"text-lg font-semibold my-4",children:a}),e.jsx("p",{className:"text-md mb-4",children:s})]})]})}function w(){return e.jsx("div",{className:"flex flex-col gap-4",children:y.map(t=>e.jsx(k,{card:t}))})}const v="/assets/idea-340ab92b.png";function j(){const t=globalThis.template_data,[r,a]=i.useState(t.showModal),[s,o]=i.useState(t.showLogin),n=()=>{a(!0),o(!0)},l=()=>{a(!0),o(!1)};return e.jsxs("div",{className:"flex flex-col justify-center items-center mx-auto overflow-visible",children:[e.jsx(f,{handleLoginClick:n,handleSignupClick:l}),e.jsxs("div",{className:"flex flex-col text-center mx-auto pt-28",children:[e.jsxs("div",{className:"grid grid-rows-1 grid-cols-2 text-center mx-auto mb-10",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("img",{className:"object-contain h-80 w-auto mx-auto",src:v,alt:"pic1"})}),e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"grid grid-rows-2 grid-cols-1 gap-4 text-center",children:[e.jsx("div",{className:"place-content-center",children:e.jsx("img",{className:"object-contain h-48 w-48 mx-auto",src:c,alt:"Ava Logo"})}),e.jsxs("div",{className:"place-content-center",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Welcome to AVA"}),e.jsx("h2",{children:"Unlocking Authenticity: Introducing AVA, Your Authorship Verification Algorithm"}),e.jsx("button",{className:"bg-button-blue mt-5 text-slate-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-button-blue-darker outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:n,children:" Get Started"})]})]})})]}),e.jsx(w,{})]}),r?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:s?e.jsx(p,{setShowModal:a}):e.jsx(x,{setShowModal:a})}):null,e.jsx(d,{})]})}globalThis.template_data===void 0?(globalThis.template_data=JSON.stringify({result:"No Template Data Received"}),console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);m.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(j,{})}));
