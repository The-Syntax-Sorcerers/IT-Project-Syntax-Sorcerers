import{j as e,r as l,F as d,c as m,R as u}from"./Footer-edf931a3.js";import{L as h}from"./LoggedInNavbar-bd05c977.js";import{A as p,L as x,S as f}from"./AnonymousNavbar-7e907419.js";const y=[["Introduction","Welcome to our AI Text Comparison Tool's Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you use our AI tool. Please read this policy carefully to understand our practices."],["Information We Collect","Our AI tool does not collect personal information from you. We store and process the text you provide for comparison. We may collect technical information about your usage, such as IP address, browser type, and operating system, for analytical purposes. This information is aggregated and anonymized."],["How We Use Your Information","The AI Text Comparison Tool uses the provided text solely for the purpose of education."],["Information Sharing and Disclosure","We do not share, sell, or disclose your personal information or the text you provide for comparison to third parties."],["Data Security","We take reasonable precautions to protect the information collected through our AI tool. However, no method of transmission over the internet or electronic storage is completely secure."],["Changes to this Privacy Policy","We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant changes via email or by placing a prominent notice on our website."]];function g({policy:o}){const t=o[0],a=o[1];return e.jsx("div",{className:`bg-neutral-100 rounded-lg shadow-md p-4 pl-10 
        border-2 border-card-border`,children:e.jsx("li",{className:"list-decimal pl-2 marker:font-bold",children:e.jsxs("div",{children:[e.jsx("h2",{className:"font-bold text-md text-gray-700",children:t}),e.jsx("div",{className:"text-sm font-medium text-gray-700",children:e.jsx("p",{children:a})})]})})})}function b(){return e.jsx("ul",{className:"space-y-5",children:y.map((o,t)=>e.jsx(g,{policy:o},t))})}function j({auth_user:o}){const t="18/09/23",[a,s]=l.useState(!1),[c,r]=l.useState(!0),i=()=>{s(!0),r(!0)},n=()=>{s(!0),r(!1)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[o?e.jsx(h,{}):e.jsx(p,{handleLoginClick:i,handleSignupClick:n}),e.jsx("main",{className:"container mx-auto flex-grow box-border pt-28 pb-10 w-5/6",children:e.jsxs("div",{className:"mb-4 flex flex-col justify-center items-center bg-slate-50 rounded-lg shadow-md p-4",children:[e.jsxs("div",{className:"mb-4 flex flex-col justify-center items-center text-gray-700",children:[e.jsx("h1",{className:"text-xl font-bold text-button-blue",children:"Privacy Policy"}),e.jsxs("p",{className:"font-medium text-sm italic",children:["Last updated: ",t]})]}),e.jsx(b,{})]})}),a?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:c?e.jsx(x,{setShowModal:s,handleSignupClick:n}):e.jsx(f,{setShowModal:s,handleLoginClick:i})}):null,e.jsx(d,{})]})}globalThis.template_data===void 0&&(globalThis.template_data=JSON.stringify({result:"No Template Data Received"}));const v=JSON.parse(globalThis.template_data);console.log("Received template_Data ==>",v);m.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(j,{auth_user:document.querySelector("#root").getAttribute("data-auth")==="true"})}));
