import{r as o,j as s,F as E,c as U,R as P}from"./Footer-ad97b72b.js";import{L as J}from"./LoggedInNavbar-82eecc61.js";import{u as G,U as V,D as z,V as W}from"./verificationSuccessModal-d05b7293.js";const w="/assets/expand-6760bd23.svg",I="/assets/collapse-c2267902.svg";function $({menuItem:e,click:i}){return s.jsx(s.Fragment,{children:s.jsx("li",{className:"flex w-full",children:s.jsx("button",{onClick:i,value:e.id,className:"custom-dropdown-menu-element disabled",children:s.jsxs("div",{className:"flex justify-between w-full gap-1",children:[s.jsx("div",{className:"font-semibold",children:e.name}),s.jsx("div",{className:"",children:e.id})]})})})})}function K({menuItems:e,subtitle:i,click:n}){return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"custom-dropdown-menu",children:[s.jsx("ul",{className:`overflow-auto ${i==="student"?"max-h-[80vh]":"max-h-[30vh]"}`,children:e.map((r,t)=>s.jsx($,{menuItem:r,click:n},t))}),s.jsx("div",{className:"border-t-2 rounded-b-lg w-full h-4"})]})})}function S({subjectItems:e,currentSubject:i,titles:n,click:r}){const t=n[0],l=n[1],[c,u]=o.useState(!0),m=t==="Students"?i.students:Object.values(e),x=()=>{u(!c)};return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:x,className:`custom-dropdown-menu-button-styling
            ${c?"custom-dropdown-menu-button-selected rounded-t-lg":"custom-dropdown-menu-button-colouring rounded-lg"}`,children:s.jsxs("div",{className:"flex justify-center align-items",children:[t,c?s.jsx("img",{src:I,alt:"Collapse Icon"}):s.jsx("img",{src:w,alt:"Expand Icon"})]})}),c?s.jsx(K,{menuItems:m,subtitle:l,click:r}):null]})}function q({valid:e,click:i,id:n}){return s.jsxs("div",{className:"flex justify-between items-center w-2/5",children:[e?s.jsx("div",{className:"text-lg font-semibold text-green-400 mr-6 max-w-[1px]",children:"✓"}):s.jsx("div",{className:"text-lg font-semibold text-red-400 mr-6 max-w-[1px]",children:"X"}),s.jsx("button",{value:n,onClick:i,className:"custom-view-submission-button w-full",children:"View Results"})]})}function Q({click:e,id:i}){return s.jsxs("div",{className:"flex justify-center items-center w-2/5",children:[s.jsx("div",{className:"text-lg font-semibold mr-6 max-w-[1px]",children:"-"}),s.jsx("button",{value:i,onClick:e,className:"custom-view-submission-button w-full",children:"Submit"})]})}function X(){return s.jsx("li",{className:"w-full py-2 border-x-2 border-b-2 pl-8 pr-4 text-center",children:"Nothing to see here 👀"})}function H({click:e,name:i,score:n,id:r}){const t=n!==null,l=!!(t&&n>=.5);return s.jsxs("li",{className:"flex justify-between w-full py-2 border-x-2 border-b-2 pl-8 pr-4",children:[s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("div",{children:i})}),t?s.jsx(q,{click:e,valid:l,id:r}):s.jsx(Q,{click:e,id:r})]})}function Y({title:e,submittedClick:i,unsubmittedClick:n,currAss:r}){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"overflow-auto max-h-[30vh]",children:s.jsx("ul",{children:r.length===0?s.jsx(X,{}):e==="Unsubmitted Assignments"?r.map((t,l)=>s.jsx(H,{click:n,name:t.name,score:t.score,id:t.id},l)):r.map((t,l)=>s.jsx(H,{click:i,name:t.name,score:t.score,id:t.id},l))})}),s.jsx("div",{className:"border-x-2 border-b-2 rounded-b-lg w-full h-4"})]})}function v({title:e,submittedClick:i,unsubmittedClick:n,currAss:r}){const[t,l]=o.useState(!0),c=()=>{l(!t)};return s.jsxs("div",{className:"flex justify-center align-center flex-col text-sm font-semibold w-5/6",children:[s.jsxs("button",{onClick:c,className:`custom-collapsable-menu-button
                ${t?"custom-collapsable-menu-button-selected rounded-t-lg":"rounded-lg"} `,children:[e,t?s.jsx("img",{src:I,alt:"Collapse Icon"}):s.jsx("img",{src:w,alt:"Expand Icon"})]}),t?s.jsx(Y,{title:e,submittedClick:i,unsubmittedClick:n,currAss:r}):null]})}function p({text:e}){return s.jsxs("div",{className:"flex items-center w-11/12 m-4",children:[s.jsx("div",{className:"flex-grow h-0 border-t border-black"}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("h1",{className:"px-2 text-xs font-semibold",children:e})}),s.jsx("div",{className:"flex-grow h-0 border-t border-black"})]})}function Z({subAss:e,unsubAss:i,currentSubject:n,currentStudent:r,compare:t,results:l,upload:c}){return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex justify-center items-center flex-col w-full",children:[s.jsxs("div",{className:"flex justify-center items-stretch w-5/6 gap-2 mb-4",children:[s.jsxs("div",{className:"custom-info-card whitespace-normal",children:[s.jsx("div",{className:"font-bold custom-info-card-content",children:n.name}),s.jsx("div",{className:"text-slate-800 custom-info-card-content",children:n.id})]}),s.jsxs("div",{className:"custom-info-card",children:[s.jsx("div",{className:"font-bold custom-info-card-content",children:r.name}),s.jsx("div",{className:"text-slate-800 custom-info-card-content",children:r.id})]})]}),s.jsx(p,{text:"Compare to body-of-work"}),s.jsx("button",{onClick:t,className:"custom-form-main-button w-5/6",children:"Make New Comparrison"}),s.jsx(p,{text:"View previous submissions"}),s.jsx("h1",{className:"custom-subtitle-text"}),s.jsx(v,{title:"Submission History",submittedClick:l,unsubmittedClick:c,currAss:e}),s.jsx(p,{text:"Make a new submission"}),s.jsx("h1",{className:"custom-subtitle-text"}),s.jsx(v,{title:"Unsubmitted Assignments",submittedClick:l,unsubmittedClick:c,currAss:i})]})})}function ss({ass:e}){return s.jsxs("div",{className:"flex flex-col justify-center",children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:e.name}),s.jsxs("p",{className:"text-base font-semibold mb-2 pl-2 flex flex-col",children:["Description:",s.jsx("p",{className:"pl-4 font-normal",children:e.desc})]}),s.jsx("div",{className:"flex justify-center items-center h-80 border-gray-400 border-2 border-dashed"}),s.jsx("div",{className:"flex justify-center",children:s.jsxs("h1",{className:"flex justify-center items-center h-12 border-gray-100 border-2 border-solid rounded-full w-3/4 mt-1",children:["Similarity Score: ",e.score]})}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{className:"custom-form-button w-1/2 my-4",children:"Re-Analyse on current body-of-work"})}),s.jsx("div",{className:"flex justify-center items-center h-64 border-gray-400 border-2 border-dashed",children:s.jsx("h1",{children:"Just imagine there's hella stats and stuff here"})})]})}function M(){const[e,i]=o.useState(!1),[n,r]=o.useState(!1),[t,l]=o.useState([]),c=m=>{var x;((x=m.target.files)==null?void 0:x.length)===1&&(i(!0),l(Array.from(m.target.files)))},u=()=>{i(!1),r(!0)};return s.jsxs(s.Fragment,{children:[e?s.jsxs("div",{children:[s.jsx("div",{className:"border-2 border-slate-100 mb-2",children:s.jsx(G,{docs:t.map(m=>({uri:window.URL.createObjectURL(m),fileName:m.name}))})}),s.jsx(V,{handleUpload:c}),s.jsxs("div",{className:"items-center grid grid-cols-1 auto-cols-auto gap-4 mt-4",children:[s.jsxs("div",{children:[s.jsx("input",{id:"link-checkbox1",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),s.jsxs("label",{htmlFor:"link-checkbox1",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:["I agree with the ",s.jsx("a",{href:"/privacy_policy",className:"text-blue-600 dark:bg-blue-500 hover:underline",children:"Privacy Policy"}),"."]})]}),s.jsxs("div",{children:[s.jsx("input",{id:"link-checkbox2",type:"checkbox",value:"",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),s.jsx("label",{htmlFor:"link-checkbox2",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"I hereby acknowledge that all work submitted in this assignment is my original work, created solely by me, unless otherwise indicated."})]}),s.jsx("button",{className:"bg-button-blue rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-button-blue-darker",type:"button",onClick:u,children:"Submit"})]})]}):s.jsx(z,{handleUpload:c}),n?s.jsx(W,{setShowSubmitModal:r,result:!1}):null]})}function es({states:e,currentState:i,assignment:n}){return console.log("state",i),console.log("states",e),s.jsxs(s.Fragment,{children:[i===e.idleMode?s.jsx("div",{className:"flex justify-center items-center h-80 border-gray-400 border-2 border-dashed",children:s.jsx("h1",{children:"Please select a file action (Section 2)"})}):null,i===e.compareMode?s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:"Comparrison Mode"}),s.jsx("p",{className:"text-base mb-2 pl-2 flex flex-col",children:"Upload a document to compare against the student's body of work without uploading it to their profile"}),s.jsx(M,{})]}):null,i===e.uploadMode?s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:n.name}),s.jsxs("p",{className:"text-base font-semibold mb-2 pl-2 flex flex-col",children:["Description:",s.jsx("p",{className:"pl-4 font-normal",children:n.desc})]}),s.jsx(M,{})]}):null,i===e.resultsMode?s.jsx(ss,{ass:n}):null]})}const g={idleMode:"idle",compareMode:"compare",resultsMode:"results",uploadMode:"upload"};function is(){function e(d){const a=[],y=[];for(const b of d)b.similarity_score!==null?a.push({id:b.assignment_id,score:b.similarity_score,name:l[b.assignment_id].name,desc:l[b.assignment_id].description}):y.push({id:b.assignment_id,score:null,name:l[b.assignment_id].name,desc:l[b.assignment_id].description});R(a),B(y),console.log("sub",a),console.log("unsub",y)}function i(d){console.log("id",d,typeof d);for(const a in j)if(j[a].id===d){h({id:d,name:j[a].name,score:null,desc:j[a].desc}),console.log("setting",{id:d,name:j[a].name,score:null,desc:j[a].desc});return}for(const a in _)if(_[a].id===d){h({id:d,name:_[a].name,score:_[a].score,desc:_[a].desc}),console.log("setting",{id:d,name:_[a].name,score:_[a].score,desc:_[a].desc});return}}const n=globalThis.template_data,r=n.subjectItems,t=Object.values(r),l=n.assignmentItems,[c,u]=o.useState(g.idleMode),[m,x]=o.useState(t[0]),[f,T]=o.useState(m.students[0]),[N,A]=o.useState(f.submissions),[k,h]=o.useState(null),[_,R]=o.useState([]),[j,B]=o.useState([]);o.useEffect(()=>{e(N)},[]);const L=()=>{u(g.compareMode)},O=d=>{u(g.resultsMode),i(parseInt(d.currentTarget.value))},C=d=>{u(g.uploadMode),i(parseInt(d.currentTarget.value))},D=d=>{d.preventDefault(),x(r[d.currentTarget.value]),T(r[d.currentTarget.value].students[0]),A(f.submissions),e(r[d.currentTarget.value].students[0].submissions),h(null),u(g.idleMode)},F=d=>{d.preventDefault();const a=m.students.find(y=>y.id==d.currentTarget.value);T(a),A(a.submissions),e(a.submissions),h(null),u(g.idleMode)};return s.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[s.jsx(J,{}),s.jsx("main",{className:"container flex-grow box-border pt-28 pb-12 w-[100vw] min-h-scren min-w-[85vw] mx-auto",children:s.jsxs("div",{className:"flex justify-between min-h-screen rounded-3xl custom-dashboard-background-colouring",children:[s.jsxs("div",{className:"custom-dashboard-section w-1/5 rounded-l-3xl",children:[s.jsx("h1",{className:"custom-instruction-text",children:"1. Select a Student by Subject"}),s.jsx(S,{currentSubject:m,subjectItems:r,titles:["Subjects","subject"],click:D}),s.jsx(S,{currentSubject:m,subjectItems:r,titles:["Students","student"],click:F})]}),s.jsxs("div",{className:"custom-dashboard-section w-2/5",children:[s.jsx("h1",{className:"custom-instruction-text",children:"2. Select an Existing Piece of Work or Submit a New One"}),s.jsx(Z,{subAss:_,unsubAss:j,currentSubject:m,currentStudent:f,compare:L,results:O,upload:C})]}),s.jsxs("div",{className:"custom-dashboard-section w-2/5 rounded-r-3xl",children:[s.jsx("h1",{className:"custom-instruction-text",children:"3. Authorise and View Results"}),s.jsx(es,{states:g,currentState:c,assignment:k})]})]})}),s.jsx(E,{})]})}globalThis.template_data===void 0?(globalThis.template_data={user_type:"teacher",random:69,assignmentItems:{1:{id:"1",subject_id:"MATH12345",name:"Math Homework 1",description:"Complete exercises 1-10",due_datetime:"2023-10-18T18:00:00+00:00"},2:{id:"2",subject_id:"MATH12345",name:"Math Quiz",description:"Take a quiz on chapters 1-3",due_datetime:"2023-10-20T14:30:00+00:00"},3:{id:"3",subject_id:"BIOL65432",name:"Biology Lab Report",description:"Submit your lab report for experiment 1",due_datetime:"2023-10-22T12:00:00+00:00"},4:{id:"4",subject_id:"HIST30004",name:"History Essay",description:"Submit your essay on the American Revolution",due_datetime:"2023-10-25T23:59:00+00:00"},5:{id:"5",subject_id:"ARTS10010",name:"Art Project",description:"Complete your art project on abstract expressionism",due_datetime:"2023-10-28T15:15:00+00:00"},6:{id:"6",subject_id:"MATH12345",name:"Math Homework 2",description:"Complete exercises 11-20",due_datetime:"2023-11-02T18:00:00+00:00"},7:{id:"7",subject_id:"MATH12345",name:"Math Exam",description:"Take the midterm exam",due_datetime:"2023-11-10T09:00:00+00:00"},8:{id:"8",subject_id:"BIOL65432",name:"Biology Research Paper",description:"Submit your research paper",due_datetime:"2023-11-15T17:30:00+00:00"},9:{id:"9",subject_id:"HIST30004",name:"History Presentation",description:"Give a presentation on a historical topic",due_datetime:"2023-11-20T14:00:00+00:00"},10:{id:"10",subject_id:"ARTS10010",name:"Art Exhibition"}},subjectItems:{ARTS10010:{id:"ARTS10010",name:"Art",professor:"Dr. Taylor",students:[{id:41,name:"Grace",email:"Grace@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:42,name:"Harrison",email:"Harrison@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.3},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.2},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:43,name:"Ivy",email:"Ivy@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:44,name:"Jack",email:"Jack@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:45,name:"Karen",email:"Karen@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:46,name:"Liam",email:"Liam@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]},{id:47,name:"Mia",email:"Mia@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:41,similarity_score:.5},{subject_id:"MATH12345",assignment_id:2,user_id:41,similarity_score:.6},{subject_id:"BIOL65432",assignment_id:3,user_id:41,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:41,similarity_score:.4},{subject_id:"ARTS10010",assignment_id:5,user_id:41,similarity_score:null}]}]},MATH12345:{id:"MATH12345",name:"Math",professor:"Dr. Smith",students:[{id:101,name:"Alice",email:"Alice@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:101,similarity_score:.8},{subject_id:"MATH12345",assignment_id:2,user_id:101,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:101,similarity_score:null},{subject_id:"HIST30004",assignment_id:4,user_id:101,similarity_score:null},{subject_id:"ARTS10010",assignment_id:5,user_id:101,similarity_score:null}]},{id:102,name:"Bob",email:"Bob@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:102,similarity_score:.2},{subject_id:"MATH12345",assignment_id:2,user_id:102,similarity_score:.3},{subject_id:"BIOL65432",assignment_id:3,user_id:102,similarity_score:.3},{subject_id:"HIST30004",assignment_id:4,user_id:102,similarity_score:.1},{subject_id:"ARTS10010",assignment_id:5,user_id:102,similarity_score:.2}]},{id:103,name:"Charlie",email:"Charlie@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:103,similarity_score:.9},{subject_id:"MATH12345",assignment_id:2,user_id:103,similarity_score:.8},{subject_id:"BIOL65432",assignment_id:3,user_id:103,similarity_score:.7},{subject_id:"HIST30004",assignment_id:4,user_id:103,similarity_score:.6},{subject_id:"ARTS10010",assignment_id:5,user_id:103,similarity_score:.2}]},{id:104,name:"David",email:"David@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:104,similarity_score:.6},{subject_id:"MATH12345",assignment_id:2,user_id:104,similarity_score:.9},{subject_id:"BIOL65432",assignment_id:3,user_id:104,similarity_score:.5},{subject_id:"HIST30004",assignment_id:4,user_id:104,similarity_score:null},{subject_id:"ARTS10010",assignment_id:5,user_id:104,similarity_score:null}]},{id:105,name:"Ella",email:"Ella@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:105,similarity_score:null},{subject_id:"MATH12345",assignment_id:2,user_id:105,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:105,similarity_score:.9},{subject_id:"HIST30004",assignment_id:4,user_id:105,similarity_score:.8},{subject_id:"ARTS10010",assignment_id:5,user_id:105,similarity_score:null}]},{id:106,name:"Fiona",email:"Fiona@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:106,similarity_score:.7},{subject_id:"MATH12345",assignment_id:2,user_id:106,similarity_score:.49},{subject_id:"BIOL65432",assignment_id:3,user_id:106,similarity_score:.44},{subject_id:"HIST30004",assignment_id:4,user_id:106,similarity_score:.6},{subject_id:"ARTS10010",assignment_id:5,user_id:106,similarity_score:null}]}]},BIOL65432:{id:"BIOL65432",name:"Biology",professor:"Dr. Jones",students:[{id:201,name:"Eleanor",email:"Eleanor@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:201,similarity_score:null},{subject_id:"MATH12345",assignment_id:2,user_id:201,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:201,similarity_score:null},{subject_id:"HIST30004",assignment_id:4,user_id:201,similarity_score:null},{subject_id:"ARTS10010",assignment_id:5,user_id:201,similarity_score:null}]},{id:202,name:"Frederick",email:"Frederick@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:202,similarity_score:.77},{subject_id:"MATH12345",assignment_id:2,user_id:202,similarity_score:.64},{subject_id:"BIOL65432",assignment_id:3,user_id:202,similarity_score:.88},{subject_id:"HIST30004",assignment_id:4,user_id:202,similarity_score:.73},{subject_id:"ARTS10010",assignment_id:5,user_id:202,similarity_score:null}]},{id:203,name:"Gabriella",email:"Gabriella@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:203,similarity_score:.92},{subject_id:"MATH12345",assignment_id:2,user_id:203,similarity_score:.81},{subject_id:"BIOL65432",assignment_id:3,user_id:203,similarity_score:.95},{subject_id:"HIST30004",assignment_id:4,user_id:203,similarity_score:.87},{subject_id:"ARTS10010",assignment_id:5,user_id:203,similarity_score:null}]},{id:204,name:"Henry",email:"Henry@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:204,similarity_score:.69},{subject_id:"MATH12345",assignment_id:2,user_id:204,similarity_score:.56},{subject_id:"BIOL65432",assignment_id:3,user_id:204,similarity_score:.75},{subject_id:"HIST30004",assignment_id:4,user_id:204,similarity_score:.61},{subject_id:"ARTS10010",assignment_id:5,user_id:204,similarity_score:null}]},{id:205,name:"Isabella",email:"Isabella@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:205,similarity_score:.86},{subject_id:"MATH12345",assignment_id:2,user_id:205,similarity_score:.74},{subject_id:"BIOL65432",assignment_id:3,user_id:205,similarity_score:.91},{subject_id:"HIST30004",assignment_id:4,user_id:205,similarity_score:.79},{subject_id:"ARTS10010",assignment_id:5,user_id:205,similarity_score:null}]},{id:206,name:"James",email:"James@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:206,similarity_score:.78},{subject_id:"MATH12345",assignment_id:2,user_id:206,similarity_score:.65},{subject_id:"BIOL65432",assignment_id:3,user_id:206,similarity_score:.87},{subject_id:"HIST30004",assignment_id:4,user_id:206,similarity_score:.72},{subject_id:"ARTS10010",assignment_id:5,user_id:206,similarity_score:null}]}]},HIST30004:{id:"HIST30004",name:"History",professor:"Dr. Davis",students:[{id:301,name:"Oliver",email:"Oliver@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:301,similarity_score:.45},{subject_id:"MATH12345",assignment_id:2,user_id:301,similarity_score:.62},{subject_id:"BIOL65432",assignment_id:3,user_id:301,similarity_score:.38},{subject_id:"HIST30004",assignment_id:4,user_id:301,similarity_score:null},{subject_id:"ARTS10010",assignment_id:5,user_id:301,similarity_score:.43}]},{id:302,name:"Sophia",email:"Sophia@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:302,similarity_score:.57},{subject_id:"MATH12345",assignment_id:2,user_id:302,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:302,similarity_score:.48},{subject_id:"HIST30004",assignment_id:4,user_id:302,similarity_score:.52},{subject_id:"ARTS10010",assignment_id:5,user_id:302,similarity_score:null}]},{id:303,name:"William",email:"William@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:303,similarity_score:null},{subject_id:"MATH12345",assignment_id:2,user_id:303,similarity_score:.42},{subject_id:"BIOL65432",assignment_id:3,user_id:303,similarity_score:.53},{subject_id:"HIST30004",assignment_id:4,user_id:303,similarity_score:null},{subject_id:"ARTS10010",assignment_id:5,user_id:303,similarity_score:.49}]},{id:304,name:"Charlotte",email:"Charlotte@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:304,similarity_score:.47},{subject_id:"MATH12345",assignment_id:2,user_id:304,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:304,similarity_score:.36},{subject_id:"HIST30004",assignment_id:4,user_id:304,similarity_score:.58},{subject_id:"ARTS10010",assignment_id:5,user_id:304,similarity_score:null}]},{id:305,name:"Benjamin",email:"Benjamin@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:305,similarity_score:.49},{subject_id:"MATH12345",assignment_id:2,user_id:305,similarity_score:.51},{subject_id:"BIOL65432",assignment_id:3,user_id:305,similarity_score:null},{subject_id:"HIST30004",assignment_id:4,user_id:305,similarity_score:.44},{subject_id:"ARTS10010",assignment_id:5,user_id:305,similarity_score:.46}]},{id:306,name:"Ava",email:"Ava@gmail.com",submissions:[{subject_id:"MATH12345",assignment_id:1,user_id:306,similarity_score:.55},{subject_id:"MATH12345",assignment_id:2,user_id:306,similarity_score:null},{subject_id:"BIOL65432",assignment_id:3,user_id:306,similarity_score:.41},{subject_id:"HIST30004",assignment_id:4,user_id:306,similarity_score:.47},{subject_id:"ARTS10010",assignment_id:5,user_id:306,similarity_score:.53}]}]}}},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);U.createRoot(document.getElementById("root")).render(s.jsx(P.StrictMode,{children:s.jsx(is,{})}));
