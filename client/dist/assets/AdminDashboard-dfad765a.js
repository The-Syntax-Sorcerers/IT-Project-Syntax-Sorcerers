import{r as c,j as e,F as y,c as k,R as w}from"./Footer-ad97b72b.js";import{L as v}from"./LoggedInNavbar-5e6335e1.js";import{U as m,D as x}from"./uploadButton-34b47457.js";const j="/assets/expand-6760bd23.svg",f="/assets/collapse-c2267902.svg",N=[["COMP10010"],["COMP10020"]];function S({menuItem:s,click:t}){const n=s[0];return e.jsx(e.Fragment,{children:e.jsx("li",{className:"flex w-full",children:e.jsx("button",{onClick:t,className:"custom-dropdown-menu-element",children:n})})})}function C({subtitle:s,click:t}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"custom-dropdown-menu",children:[e.jsx("ul",{className:"",children:N.map(n=>e.jsx(S,{menuItem:n,click:t}))}),e.jsxs("button",{className:"custom-dropdown-menu-creation-button",children:["Add new ",s]})]})})}function b({titles:s,click:t}){const n=s[0],l=s[1],[r,o]=c.useState(!0),i=()=>{console.log("clicked"),o(!r)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:i,className:`custom-dropdown-menu-button-styling
            ${r?"custom-dropdown-menu-button-selected rounded-t-lg":"custom-dropdown-menu-button-colouring rounded-lg"}`,children:e.jsxs("div",{className:"flex justify-center align-items",children:[n,r?e.jsx("img",{src:f,alt:"Collapse Icon"}):e.jsx("img",{src:j,alt:"Expand Icon"})]})}),r?e.jsx(C,{subtitle:l,click:t}):null]})}const M=[["Assignment 1",!0,!0],["Assignment 2",!0,!0],["Assignment 3",!1,!0],["Assignment 4",!0,!0]],I=[["Assignment 5",!0,!1],["Assignment 6",!1,!1],["Assignment 7",!1,!1],["Assignment 8",!0,!1]];function A({valid:s,click:t}){return e.jsxs("div",{className:"flex justify-between items-center w-2/5",children:[s?e.jsx("div",{className:"text-lg font-semibold text-green-400 mr-4",children:"✓"}):e.jsx("div",{className:"text-lg font-semibold text-red-400 mr-4",children:"X"}),e.jsx("button",{onClick:t,className:"custom-view-submission-button w-full",children:"View Results"})]})}function D({click:s}){return e.jsxs("div",{className:"flex justify-center items-center w-2/5",children:[e.jsx("div",{className:"text-lg font-semibold mr-4",children:"-"}),e.jsx("button",{onClick:s,className:"custom-view-submission-button w-full",children:"Submit"})]})}function h({click:s,inAssignment:t}){const n=t[0],l=t[1],r=t[2];return e.jsxs("li",{className:"flex justify-between w-full py-2 border-x-2 border-b-2 pl-8 pr-4",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{children:n})}),r?e.jsx(A,{click:s,valid:l}):e.jsx(D,{click:s})]})}function F({title:s,submittedClick:t,unsubmittedClick:n}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("ul",{children:s==="Unsubmitted Assignments"?I.map(l=>e.jsx(h,{click:n,inAssignment:l})):M.map(l=>e.jsx(h,{click:t,inAssignment:l}))})}),e.jsx("div",{className:"border-x-2 border-b-2 rounded-b-lg w-full h-4"})]})}function g({title:s,submittedClick:t,unsubmittedClick:n}){const[l,r]=c.useState(!1),o=()=>{console.log("clicked"),r(!l)};return e.jsxs("div",{className:"flex justify-center align-center flex-col text-sm font-semibold w-5/6",children:[e.jsxs("button",{onClick:o,className:`custom-collapsable-menu-button
                ${l?"custom-collapsable-menu-button-selected rounded-t-lg":"rounded-lg"} `,children:[s,l?e.jsx("img",{src:f,alt:"Collapse Icon"}):e.jsx("img",{src:j,alt:"Expand Icon"})]}),l?e.jsx(F,{title:s,submittedClick:t,unsubmittedClick:n}):null]})}function u({text:s}){return e.jsxs("div",{className:"relative flex items-center w-11/12 m-4",children:[e.jsx("div",{className:"flex-grow h-0 border-t border-black"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"px-2 text-xs font-semibold",children:s})}),e.jsx("div",{className:"flex-grow h-0 border-t border-black"})]})}function R({compare:s,results:t,upload:n}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center items-center flex-col w-full",children:[e.jsxs("div",{className:"flex justify-center items-center w-5/6 gap-2 mb-4",children:[e.jsx("div",{className:"custom-info-card",children:"Current Subject"}),e.jsx("div",{className:"custom-info-card",children:"Current Student"})]}),e.jsx(u,{text:"Compare to body-of-work"}),e.jsx("button",{onClick:s,className:"custom-form-main-button w-5/6",children:"Make New Comparrison"}),e.jsx(u,{text:"View previous submissions"}),e.jsx("h1",{className:"custom-subtitle-text"}),e.jsx(g,{title:"Submission History",submittedClick:t,unsubmittedClick:n}),e.jsx(u,{text:"Make a new submission"}),e.jsx("h1",{className:"custom-subtitle-text"}),e.jsx(g,{title:"Unsubmitted Assignments",submittedClick:t,unsubmittedClick:n})]})})}function P({states:s,currentState:t,store:n}){const[l,r]=c.useState(!1),o=d=>{var a;((a=d.target.files)==null?void 0:a.length)===1&&r(!0)},i=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("h1",{children:["state = ",t,", store = ",n?"true":"false"]}),t===s.IdleMode?e.jsx("div",{className:"flex justify-center items-center h-48 border-gray-400 border-2 border-dashed",children:e.jsx("h1",{children:"Please select a file action (Section 2)"})}):null,t===s.compareMode?l?e.jsxs("div",{children:[e.jsx(m,{handleUpload:o}),e.jsxs("div",{className:"flex items-center grid grid-cols-1 auto-cols-auto gap-4 mt-10",children:[e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox1",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsxs("label",{htmlFor:"link-checkbox1",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:["I agree with the ",e.jsx("a",{href:"/privacy_policy",className:"text-blue-600 dark:bg-blue-500 hover:underline",children:"Privacy Policy"}),"."]})]}),e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox2",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"link-checkbox2",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"I hereby acknowledge that all work submitted in this assignment is my original work, created solely by me, unless otherwise indicated."})]}),e.jsx("button",{className:"bg-button-blue rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-button-blue-darker",type:"button",onClick:i,children:"Submit"})]})]}):e.jsx(x,{handleUpload:o}):null,t===s.uploadMode?l?e.jsxs("div",{children:[e.jsx(m,{handleUpload:o}),e.jsxs("div",{className:"flex items-center grid grid-cols-1 auto-cols-auto gap-4 mt-10",children:[e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox1",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsxs("label",{htmlFor:"link-checkbox1",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:["I agree with the ",e.jsx("a",{href:"/privacy_policy",className:"text-blue-600 dark:bg-blue-500 hover:underline",children:"Privacy Policy"}),"."]})]}),e.jsxs("div",{children:[e.jsx("input",{id:"link-checkbox2",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e.jsx("label",{htmlFor:"link-checkbox2",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"I hereby acknowledge that all work submitted in this assignment is my original work, created solely by me, unless otherwise indicated."})]}),e.jsx("button",{className:"bg-button-blue rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-button-blue-darker",type:"button",onClick:i,children:"Submit"})]})]}):e.jsx(x,{handleUpload:o}):null,t===s.resultsMode?e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("div",{className:"flex justify-center items-center h-12 border-gray-400 border-2 border-dashed",children:e.jsx("h1",{children:"The score given to the work"})}),e.jsx("div",{className:"flex justify-center items-center h-80 border-gray-400 border-2 border-dashed",children:e.jsx("h1",{children:"Placeholder showing the uploaded text"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"custom-form-button w-1/2 my-4",children:"Re-Analyse on current body-of-work"})}),e.jsx("div",{className:"flex justify-center items-center h-64 border-gray-400 border-2 border-dashed",children:e.jsx("h1",{children:"Just imagine there's hella stats and stuff here"})})]}):null]})}function E(){const s={idleMode:"idle",compareMode:"compare",resultsMode:"results",uploadMode:"upload"},[t,n]=c.useState(s.idleMode),[l,r]=c.useState(!1),o=()=>{r(!1),n(s.compareMode),console.log("compare")},i=()=>{r(!1),n(s.resultsMode),console.log("results")},d=()=>{r(!0),n(s.uploadMode),console.log("submit")},a=()=>{},p=()=>{n(s.idleMode)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[e.jsx(v,{}),e.jsx("main",{className:"container mx-auto flex-grow box-border pt-28 pb-12 w-5/6 min-h-scren",children:e.jsxs("div",{className:"flex justify-between min-h-screen rounded-3xl custom-dashboard-background-colouring",children:[e.jsxs("div",{className:"custom-dashboard-section w-1/5 rounded-l-3xl",children:[e.jsx("h1",{className:"custom-intruction-text",children:"1. Select a Student by Subject"}),e.jsx(b,{titles:["Subjects","subject"],click:a}),e.jsx(b,{titles:["Students","student"],click:p})]}),e.jsxs("div",{className:"custom-dashboard-section w-2/5",children:[e.jsx("h1",{className:"custom-intruction-text",children:"2. Select an existing piece of work or submit a new one"}),e.jsx(R,{compare:o,results:i,upload:d})]}),e.jsxs("div",{className:"custom-dashboard-section w-2/5 rounded-r-3xl",children:[e.jsx("h1",{className:"custom-intruction-text",children:"3. Authorise and View Results"}),e.jsx(P,{states:s,currentState:t,store:l})]})]})}),e.jsx(y,{})]})}globalThis.template_data===void 0?(globalThis.template_data={},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);k.createRoot(document.getElementById("root")).render(e.jsx(w.StrictMode,{children:e.jsx(E,{})}));
