import{j as e,r as l,F as g,c as b,R as h}from"./Footer-47447d43.js";import{L as f}from"./LoggedInNavbar-ee9a44d2.js";function d({handleUpload:t}){return e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsxs("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx("svg",{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),e.jsx("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:e.jsx("span",{className:"font-semibold",children:"Click to upload"})}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"TXT, PDF, or DOCX (MAX. 2MB)"})]}),e.jsx("input",{id:"dropzone-file",type:"file",className:"hidden",onChange:t})]})})}function y({handleUpload:t}){return e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:"Upload another file"}),e.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:t}),e.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"TXT, PDF, or DOCX (MAX. 2MB)"})]})}function p(){return e.jsx("div",{className:"flex items-center justify-center w-full mb-10",children:e.jsx("div",{className:"flex flex-col items-center justify-center w-full h-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:e.jsx("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:e.jsx("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:e.jsx("span",{className:"font-semibold",children:"DOCUMENT PREVIEW"})})})})})}const j="/assets/fail-9b377e39.png",k="/assets/success-211ccdb8.png";function v({setShowSubmitModal:t,result:s}){return e.jsx("div",{onClick:()=>t(!1),className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-shadow bg-opacity-25 backdrop-blur-sm",children:e.jsx("div",{onClick:a=>a.stopPropagation(),className:"relative w-1/3 p-6 container bg-main rounded-lg shadow-2xl",children:e.jsxs("div",{className:"relative w-auto my-6 mx-auto max-w-sm text-center",children:[s?e.jsxs("div",{className:"grid grid-cols-1 flow-col-autotext-center",children:[e.jsx("h1",{className:"text-xl font-semibold mb-4",children:"Verification Success"}),e.jsx("h2",{className:"text-md font-semibold mb-4",children:"Keep up the good work!"}),e.jsx("img",{className:"object-contain h-30 w-auto mx-auto",src:k,alt:"success"})]}):e.jsxs("div",{className:"grid grid-cols-1 flow-col-auto text-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-semibold mb-4",children:"Verification Failed"}),e.jsx("h2",{className:"text-md font-semibold mb-4",children:"Please try again"})]}),e.jsx("img",{className:"object-contain h-30 w-auto mx-auto",src:j,alt:"success"})]}),e.jsx("button",{className:"bg-button-yellow rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-button-yellow-darker",type:"button",onClick:()=>t(!1),children:"Close"})]})})})}function N(){const t=globalThis.template_data,s=t.assignment,a=t.user_type;s!==void 0&&s.due_date==null&&(s.due_date="None"),console.log("Rendering AssignmentPage with ass, user:",s,a);const[c,o]=l.useState(!1),[m,i]=l.useState(!1),[x,n]=l.useState(!1),r=()=>{o(!0),n(!1)},u=()=>{n(!0),o(!1),i(!0)};return e.jsxs("div",{className:"bg-main bg-cover min-h-screen flex flex-col",children:[e.jsx(f,{}),e.jsx("main",{className:"container mx-auto flex-grow box-border pt-28 pb-12 w-5/6",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-4",children:[s.id," - ",s.name]}),e.jsxs("h2",{className:"text-lg font-semibold mb-4",children:["Due on: ",s.due_date]}),e.jsxs("p",{className:"text-base mb-4",children:["Description: ",s.description]}),e.jsxs("p",{className:"text-base mb-4",children:["Marks: ",s.marks]}),e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-5",children:"Submission"}),x?e.jsxs("div",{children:[e.jsx("p",{className:"text-base mb-4",children:"Looks Like you've already submitted an assignment. Do you want to submit another one?"}),e.jsx(d,{handleUpload:r})]}):e.jsx(e.Fragment,{children:c?e.jsxs("div",{children:[e.jsx(p,{}),e.jsx(y,{handleUpload:r}),e.jsxs("div",{className:"flex items-center grid grid-cols-1 auto-cols-auto gap-4 mt-10",children:[e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsxs("label",{htmlFor:"link-checkbox",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:["I agree with the ",e.jsx("a",{href:"/privacy_policy",className:"text-blue-600 dark:bg-blue-500 hover:underline",children:"privacy policy"}),"."]})]}),e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"link-checkbox",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"I hereby acknowledge that all work submitted in this assignment is my original work, created solely by me, unless otherwise indicated."})]}),e.jsx("button",{className:"bg-button-blue rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-button-blue-darker",type:"button",onClick:u,children:"Submit"})]})]}):e.jsx(d,{handleUpload:r})}),m?e.jsx(v,{setShowSubmitModal:i,result:!1}):null]})}),e.jsx(g,{})]})}globalThis.template_data===void 0?(globalThis.template_data={assignment:{due_date:"12/31/2023",id:"BSBS873295",name:"Don't Use ChatGPT",link:"/assignment",description:"Write stuff in your own words. Do not use ChatGPT or any AI to assist you. WE CAN TELL!!",marks:"???/100"},user_type:"student"},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);b.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(N,{})}));

