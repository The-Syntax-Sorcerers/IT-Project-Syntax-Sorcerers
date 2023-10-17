import{j as e,r as c,F as d,c as m,R as u}from"./Footer-ad97b72b.js";import{L as p}from"./LoggedInNavbar-82eecc61.js";import{A as h,L as x,S as y}from"./AnonymousNavbar-d3d7dce0.js";const f=[["Introduction","Welcome to our AI Text Comparison Tool's Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you use our AI tool. Please read this policy carefully to understand our practices."],["Information We Collect","Our AI tool does not collect personal information from you. We store and process the text you provide for comparison. We may collect technical information about your usage, such as IP address, browser type, and operating system, for analytical purposes. This information is aggregated and anonymized."],["How We Use Your Information","The AI Text Comparison Tool uses the provided text solely for the purpose of education."],["Information Sharing and Disclosure","We do not share, sell, or disclose your personal information or the text you provide for comparison to third parties."],["Data Security","We take reasonable precautions to protect the information collected through our AI tool. However, no method of transmission over the internet or electronic storage is completely secure."],["Changes to this Privacy Policy","We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant changes via email or by placing a prominent notice on our website."]];function g({policy:o}){const s=o[0],a=o[1];return e.jsx("div",{className:`rounded-lg shadow-md p-4 pl-10 
        border-2 border-accent-primary-100`,children:e.jsx("li",{className:"list-decimal pl-2 marker:font-semibold marker:text-gray-700",children:e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-md text-gray-700",children:s}),e.jsx("div",{className:"text-sm font-medium text-gray-700",children:e.jsx("p",{children:a})})]})})})}function j(){return e.jsx("ul",{className:"space-y-5",children:f.map(o=>e.jsx(g,{policy:o}))})}function b({auth_user:o}){const s="18/09/23",[a,t]=c.useState(!1),[l,r]=c.useState(!0),i=()=>{t(!0),r(!0)},n=()=>{t(!0),r(!1)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[o?e.jsx(p,{}):e.jsx(h,{handleLoginClick:i,handleSignupClick:n}),e.jsx("main",{className:"container mx-auto flex-grow box-border pt-28 pb-10 w-5/6",children:e.jsxs("div",{className:"mb-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4",children:[e.jsxs("div",{className:"mb-4 flex flex-col justify-center items-center text-gray-700",children:[e.jsx("h1",{className:"text-3xl font-semibold uppercase text-accent-primary-500",children:"Privacy Policy"}),e.jsxs("p",{className:"font-medium text-sm italic",children:["Last updated: ",s]})]}),e.jsx(j,{})]})}),a?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:l?e.jsx(x,{setShowModal:t,handleSignupClick:n}):e.jsx(y,{setShowModal:t,handleLoginClick:i})}):null,e.jsx(d,{})]})}globalThis.template_data===void 0&&(globalThis.template_data=JSON.stringify({result:"No Template Data Received"}));const v=JSON.parse(globalThis.template_data);console.log("Received template_Data ==>",v);m.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(b,{auth_user:document.querySelector("#root").getAttribute("data-auth")==="true"})}));
