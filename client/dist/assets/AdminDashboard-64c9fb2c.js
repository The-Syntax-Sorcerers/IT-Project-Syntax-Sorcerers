import{r as m,j as e,F,c as P,R as G}from"./Footer-edf931a3.js";import{L as U}from"./LoggedInNavbar-c04e1394.js";import{F as C}from"./FileComponent-3f5daf48.js";const T="/assets/expand-6760bd23.svg",I="/assets/collapse-c2267902.svg";function Y({menuItem:s,click:t}){return e.jsx(e.Fragment,{children:e.jsx("li",{className:"flex w-full",children:e.jsx("button",{onClick:t,value:s.id,className:"custom-dropdown-menu-element disabled",children:e.jsxs("div",{className:"flex justify-between w-full gap-1",children:[e.jsx("div",{className:"font-semibold",children:s.name}),e.jsx("div",{className:"",children:s.id})]})})})})}function V({menuItems:s,subtitle:t,click:n}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"custom-dropdown-menu",children:[e.jsx("ul",{className:`overflow-auto ${t==="student"?"max-h-[80vh]":"max-h-[30vh]"}`,children:s.map((r,i)=>e.jsx(Y,{menuItem:r,click:n},i))}),e.jsx("div",{className:"border-t-2 rounded-b-lg w-full h-4"})]})})}function w({itemsList:s,titles:t,click:n}){const r=t[0],i=t[1],[l,c]=m.useState(!0),p=Object.values(s),_=()=>{c(!l)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:_,className:`custom-dropdown-menu-button-styling
            ${l?"custom-dropdown-menu-button-selected rounded-t-lg":"custom-dropdown-menu-button-colouring rounded-lg"}`,children:e.jsxs("div",{className:"flex justify-center align-items",children:[r,l?e.jsx("img",{src:I,alt:"Collapse Icon"}):e.jsx("img",{src:T,alt:"Expand Icon"})]})}),l?e.jsx(V,{menuItems:p,subtitle:i,click:n}):null]})}function J({valid:s,click:t,id:n}){return e.jsxs("div",{className:"flex justify-between items-center w-2/5",children:[s?e.jsx("div",{className:"text-lg font-semibold text-green-400 mr-6 max-w-[1px]",children:"✓"}):e.jsx("div",{className:"text-lg font-semibold text-red-400 mr-6 max-w-[1px]",children:"X"}),e.jsxs("button",{value:n,onClick:t,className:"custom-view-submission-button w-full",children:["View Results A-",n]})]})}function W({click:s,id:t}){return e.jsxs("div",{className:"flex justify-center items-center w-2/5",children:[e.jsx("div",{className:"text-lg font-semibold mr-6 max-w-[1px]",children:"-"}),e.jsxs("button",{value:t,onClick:s,className:"custom-view-submission-button w-full",children:["Submit A-",t]})]})}function Q(){return e.jsx("li",{className:"w-full py-2 border-x-2 border-b-2 pl-8 pr-4 text-center",children:"Nothing to see here 👀"})}function E({click:s,name:t,score:n,id:r}){const i=n!==null,l=!!(i&&n>=.5);return e.jsxs("li",{className:"flex justify-between w-full py-2 border-x-2 border-b-2 pl-8 pr-4",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{children:t})}),i?e.jsx(J,{click:s,valid:l,id:r}):e.jsx(W,{click:s,id:r})]})}function $({title:s,submittedClick:t,unsubmittedClick:n,currAss:r}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"overflow-auto max-h-[30vh]",children:e.jsx("ul",{children:r.length===0?e.jsx(Q,{}):s==="Unsubmitted Assignments"?r.map(i=>e.jsx(E,{click:n,name:i.name,score:i.similarity_score,id:i.assignment_id})):r.map(i=>e.jsx(E,{click:t,name:i.name,score:i.similarity_score,id:i.assignment_id}))})}),e.jsx("div",{className:"border-x-2 border-b-2 rounded-b-lg w-full h-4"})]})}function N({title:s,submittedClick:t,unsubmittedClick:n,currAss:r}){const[i,l]=m.useState(!0),c=()=>{l(!i)};return e.jsxs("div",{className:"flex justify-center align-center flex-col text-sm font-semibold w-5/6",children:[e.jsxs("button",{onClick:c,className:`custom-collapsable-menu-button
                ${i?"custom-collapsable-menu-button-selected rounded-t-lg":"rounded-lg"} `,children:[s,i?e.jsx("img",{src:I,alt:"Collapse Icon"}):e.jsx("img",{src:T,alt:"Expand Icon"})]}),i?e.jsx($,{title:s,submittedClick:t,unsubmittedClick:n,currAss:r}):null]})}function j({text:s}){return e.jsxs("div",{className:"flex items-center w-11/12 m-4",children:[e.jsx("div",{className:"flex-grow h-0 border-t border-black"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"px-2 text-xs font-semibold",children:s})}),e.jsx("div",{className:"flex-grow h-0 border-t border-black"})]})}function q({subAss:s,unsubAss:t,currentSubject:n,currentStudent:r,compare:i,results:l,upload:c}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center items-center flex-col w-full",children:[e.jsxs("div",{className:"flex justify-center items-stretch w-5/6 gap-2 mb-4",children:[e.jsxs("div",{className:"custom-info-card whitespace-normal",children:[e.jsx("div",{className:"font-bold custom-info-card-content",children:n.name}),e.jsx("div",{className:"text-slate-800 custom-info-card-content",children:n.id})]}),e.jsxs("div",{className:"custom-info-card",children:[e.jsx("div",{className:"font-bold custom-info-card-content",children:r.name}),e.jsx("div",{className:"text-slate-800 custom-info-card-content",children:r.id})]})]}),e.jsx(j,{text:"Compare to body-of-work"}),e.jsx("button",{onClick:i,className:"custom-form-main-button w-5/6",children:"Make New Comparrison"}),e.jsx(j,{text:"View previous submissions"}),e.jsx("h1",{className:"custom-subtitle-text"}),e.jsx(N,{title:"Submission History",submittedClick:l,unsubmittedClick:c,currAss:s}),e.jsx(j,{text:"Make a new submission"}),e.jsx("h1",{className:"custom-subtitle-text"}),e.jsx(N,{title:"Unsubmitted Assignments",submittedClick:l,unsubmittedClick:c,currAss:t})]})})}function K({ass:s}){return e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:s.name}),e.jsxs("p",{className:"text-base font-semibold mb-2 pl-2 flex flex-col",children:["Description:",e.jsx("p",{className:"pl-4 font-normal",children:s.description})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("h1",{className:"flex justify-center items-center h-12 border-gray-100 border-2 border-solid rounded-full w-3/4 mt-1",children:["Similarity Score: ",s.similarity_score]})}),e.jsx("div",{className:"flex justify-center items-center h-64 border-gray-400 border-2 border-dashed",children:e.jsx("h1",{children:"Just imagine there's hella stats and stuff here"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"custom-form-button w-1/2 my-4",children:"Re-Analyse on current body-of-work"})}),e.jsx("div",{className:"justify-center items-center",children:e.jsx(C,{subject_id:s.subject_id,assignment_id:s.assignment_id,user_id:s.user_id})})]})}function X({states:s,currentState:t,assignment:n}){return e.jsxs(e.Fragment,{children:[t===s.idleMode?e.jsx("div",{className:"flex justify-center items-center h-full border-gray-400 border-2 border-dashed rounded-lg",children:e.jsx("h1",{children:"Please select a file action (Section 2)"})}):null,t===s.compareMode?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:"Comparrison Mode"}),e.jsx("p",{className:"text-base mb-2 pl-2 flex flex-col",children:"Upload a document to compare against the student's body of work without uploading it to their profile"})]}):null,t===s.uploadMode?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 mt-4 text-center",children:n.name}),e.jsxs("p",{className:"text-base font-semibold mb-2 pl-2 flex flex-col",children:["Description:",e.jsx("p",{className:"pl-4 font-normal",children:n.description})]}),e.jsx(C,{subject_id:n.subject_id,assignment_id:n.assignment_id,user_id:n.user_id})]}):null,t===s.resultsMode?e.jsx(K,{ass:n}):null]})}const b={idleMode:"idle",compareMode:"compare",resultsMode:"results",uploadMode:"upload"};function Z(){function s(a){const o=[],d=[];for(const u of a)u.similarity_score!==null?o.push(u):d.push(u);k(o),M(d),console.log("subs",o),console.log("unsubs",d)}function t(a,o){const d=c[a].submissions;for(const u in d)if(d[u].assignment_id===o){g(d[u]);return}}function n(a){const o=i[a].students,d={};for(const u in o)d[o[u]]=c[o[u]];H(d)}const r=globalThis.template_data,i=r.subjectItems,l=Object.values(i),c=r.studentItems;console.log("Rendering AdminDash with Data:",r);const[p,_]=m.useState(b.idleMode),[x,A]=m.useState(l[0]),[h,y]=m.useState(c[x.students[0]]),[f,k]=m.useState([]),[v,M]=m.useState([]),[S,H]=m.useState([]),[L,g]=m.useState(null);m.useEffect(()=>{s(h.submissions),n(x.id)},[]),console.log("EVERYTHING WORKS UP TO HERE",x,h,f,v,S);const R=()=>{_(b.compareMode)},D=a=>{_(b.resultsMode),t(h.id,parseInt(a.currentTarget.value))},B=a=>{_(b.uploadMode),t(h.id,parseInt(a.currentTarget.value))},O=a=>{a.preventDefault();const o=a.currentTarget.value;A(i[o]),n(o),y(c[i[o].students[0]]),s(c[i[o].students[0]].submissions),g(null),_(b.idleMode)},z=a=>{a.preventDefault();const o=a.currentTarget.value;y(c[o]),s(c[o].submissions),g(null),_(b.idleMode)};return e.jsxs("div",{className:"flex flex-col min-h-screen custom-pages",children:[e.jsx(U,{}),e.jsx("main",{className:"container flex-grow box-border pt-28 pb-12 w-[100vw] min-h-scren min-w-[85vw] mx-auto",children:e.jsxs("div",{className:"flex justify-between min-h-screen rounded-3xl custom-dashboard-background-colouring",children:[e.jsxs("div",{className:"custom-dashboard-section w-1/5 rounded-l-3xl",children:[e.jsx("h1",{className:"custom-instruction-text",children:"1. Select a Student by Subject"}),e.jsx(w,{itemsList:i,titles:["Subjects","subject"],click:O}),e.jsx(w,{itemsList:S,titles:["Students","student"],click:z})]}),e.jsxs("div",{className:"custom-dashboard-section w-2/5",children:[e.jsx("h1",{className:"custom-instruction-text",children:"2. Select an Existing Piece of Work or Submit a New One"}),e.jsx(q,{subAss:f,unsubAss:v,currentSubject:x,currentStudent:h,compare:R,results:D,upload:B})]}),e.jsxs("div",{className:"custom-dashboard-section w-2/5 rounded-r-3xl",children:[e.jsx("h1",{className:"custom-instruction-text",children:"3. Authorise and View Results"}),e.jsx(X,{states:b,currentState:p,assignment:L})]})]})}),e.jsx(F,{})]})}globalThis.template_data===void 0?(globalThis.template_data={user_type:"teacher",random:69,subjectItems:{ARTS10010:{id:"ARTS10010",name:"Art",professor:"Dr. Taylor",students:[41,42,44,46,48,49]},MATH12345:{id:"MATH12345",name:"Math",professor:"Dr. Smith",students:[43,44,45,47,49,50]},BIOL65432:{id:"BIOL65432",name:"Biology",professor:"Dr. Jones",students:[41,42,43,45,47,48]},HIST30004:{id:"HIST30004",name:"History",professor:"Dr. Davis",students:[42,44,45,46,49,50]}},studentItems:{41:{id:41,name:"Alice",submissions:[{assignment_id:1,name:"Math Challenge",description:"Solve complex mathematical problems",similarity_score:.75,subject_id:"MATH12345",user_id:41},{assignment_id:2,name:"Science Exploration",description:"Investigate scientific phenomena",similarity_score:.62,subject_id:"SCIENCE20001",user_id:41},{assignment_id:3,name:"History Quest",description:"Explore historical events and figures",similarity_score:.45,subject_id:"HIST30004",user_id:41},{assignment_id:4,name:"Literary Odyssey",description:"Analyze classic literature",similarity_score:null,subject_id:"LIT10010",user_id:41},{assignment_id:5,name:"Artistic Expression",description:"Create original artworks",similarity_score:.88,subject_id:"ARTS10010",user_id:41},{assignment_id:6,name:"Biology Challenge",description:"Explore the wonders of life",similarity_score:.3,subject_id:"BIOL65432",user_id:41}]},42:{id:42,name:"Bob",submissions:[{assignment_id:1,name:"Math Puzzles",description:"Solve intricate math puzzles",similarity_score:.58,subject_id:"MATH12345",user_id:42},{assignment_id:2,name:"Chemistry Exploration",description:"Investigate chemical reactions",similarity_score:.71,subject_id:"SCIENCE20001",user_id:42},{assignment_id:3,name:"Historical Analysis",description:"Analyze historical documents",similarity_score:.4,subject_id:"HIST30004",user_id:42},{assignment_id:4,name:"Literary Journey",description:"Explore famous literary works",similarity_score:null,subject_id:"LIT10010",user_id:42},{assignment_id:5,name:"Creative Artwork",description:"Produce original artwork",similarity_score:.82,subject_id:"ARTS10010",user_id:42},{assignment_id:6,name:"Biology Quest",description:"Investigate biological phenomena",similarity_score:.35,subject_id:"BIOL65432",user_id:42}]},43:{id:43,name:"Charlie",submissions:[{assignment_id:1,name:"Science Challenge",description:"Solve challenging science problems",similarity_score:.7,subject_id:"SCIENCE20001",user_id:43},{assignment_id:2,name:"Historical Exploration",description:"Explore historical events and figures",similarity_score:.55,subject_id:"HIST30004",user_id:43},{assignment_id:3,name:"Literary Analysis",description:"Analyze classic literature",similarity_score:.6,subject_id:"LIT10010",user_id:43},{assignment_id:4,name:"Artistic Creation",description:"Create original artworks",similarity_score:null,subject_id:"ARTS10010",user_id:43},{assignment_id:5,name:"Biology Challenge",description:"Solve challenging biology problems",similarity_score:.72,subject_id:"BIOL65432",user_id:43},{assignment_id:6,name:"Math Puzzles",description:"Solve intricate math puzzles",similarity_score:.65,subject_id:"MATH12345",user_id:43}]},44:{id:44,name:"David",submissions:[{assignment_id:1,name:"Math Challenges",description:"Solve challenging math problems",similarity_score:.78,subject_id:"MATH12345",user_id:44},{assignment_id:2,name:"Science Discovery",description:"Discover scientific phenomena",similarity_score:null,subject_id:"SCIENCE20001",user_id:44},{assignment_id:3,name:"Historical Quest",description:"Embark on a historical journey",similarity_score:.6,subject_id:"HIST30004",user_id:44},{assignment_id:4,name:"Literary Exploration",description:"Explore classic literature",similarity_score:.45,subject_id:"LIT10010",user_id:44},{assignment_id:5,name:"Artistic Expression",description:"Express creativity through art",similarity_score:.82,subject_id:"ARTS10010",user_id:44},{assignment_id:6,name:"Biology Journey",description:"Journey through the world of biology",similarity_score:.4,subject_id:"BIOL65432",user_id:44}]},45:{id:45,name:"Ella",submissions:[{assignment_id:1,name:"Physics Challenge",description:"Take on challenging physics problems",similarity_score:.65,subject_id:"PHYSICS20001",user_id:45},{assignment_id:2,name:"Geography Exploration",description:"Explore geographical phenomena",similarity_score:null,subject_id:"GEOG10010",user_id:45},{assignment_id:3,name:"Art Appreciation",description:"Appreciate various forms of art",similarity_score:.73,subject_id:"ARTS10010",user_id:45},{assignment_id:4,name:"Environmental Studies",description:"Study the environment and ecology",similarity_score:.54,subject_id:"ENVSCI12345",user_id:45},{assignment_id:5,name:"Math Puzzles",description:"Solve intricate math puzzles",similarity_score:.69,subject_id:"MATH12345",user_id:45},{assignment_id:6,name:"Literary Journey",description:"Embark on a literary adventure",similarity_score:.48,subject_id:"LIT10010",user_id:45}]},46:{id:46,name:"Fiona",submissions:[{assignment_id:1,name:"Chemistry Challenges",description:"Take on challenging chemistry problems",similarity_score:.78,subject_id:"CHEM20001",user_id:46},{assignment_id:2,name:"Cultural Exploration",description:"Explore diverse cultures and traditions",similarity_score:null,subject_id:"CULTSTUDY10010",user_id:46},{assignment_id:3,name:"Creative Writing",description:"Express creativity through writing",similarity_score:.67,subject_id:"CREATIVEWRITING12345",user_id:46},{assignment_id:4,name:"History and Society",description:"Explore the history of societies",similarity_score:.58,subject_id:"HISTSOCIETY20001",user_id:46},{assignment_id:5,name:"Artistic Expression",description:"Express creativity through art",similarity_score:.62,subject_id:"ARTS10010",user_id:46},{assignment_id:6,name:"Biology Journey",description:"Journey through the world of biology",similarity_score:.44,subject_id:"BIOL65432",user_id:46}]},47:{id:47,name:"William",submissions:[{assignment_id:1,name:"Physics Adventure",description:"Embark on a physics adventure",similarity_score:.62,subject_id:"PHYSICS20001",user_id:47},{assignment_id:2,name:"Geology Expedition",description:"Explore the wonders of geology",similarity_score:null,subject_id:"GEOLOGY10010",user_id:47},{assignment_id:3,name:"Creative Arts Showcase",description:"Showcase your creativity through art",similarity_score:.73,subject_id:"ARTS10010",user_id:47},{assignment_id:4,name:"Environmental Exploration",description:"Explore the environment and its mysteries",similarity_score:.54,subject_id:"ENVSCI12345",user_id:47},{assignment_id:5,name:"Math Challenges",description:"Take on challenging math problems",similarity_score:.69,subject_id:"MATH12345",user_id:47},{assignment_id:6,name:"Literature Voyage",description:"Embark on a literary voyage of discovery",similarity_score:.48,subject_id:"LIT10010",user_id:47}]},48:{id:48,name:"Olivia",submissions:[{assignment_id:1,name:"Chemistry Quest",description:"Embark on a quest to master chemistry",similarity_score:.78,subject_id:"CHEM20001",user_id:48},{assignment_id:2,name:"Cultural Insights",description:"Gain insights into diverse cultures",similarity_score:null,subject_id:"CULTSTUDY10010",user_id:48},{assignment_id:3,name:"Creative Writing Challenge",description:"Challenge your creative writing skills",similarity_score:.67,subject_id:"CREATIVEWRITING12345",user_id:48},{assignment_id:4,name:"Societal History",description:"Explore the history of societies and civilizations",similarity_score:.58,subject_id:"HISTSOCIETY20001",user_id:48},{assignment_id:5,name:"Artistic Expression Showcase",description:"Showcase your artistic expressions",similarity_score:.62,subject_id:"ARTS10010",user_id:48},{assignment_id:6,name:"Biology Odyssey",description:"Embark on a biology odyssey of discovery",similarity_score:.44,subject_id:"BIOL65432",user_id:48}]},49:{id:49,name:"Henry",submissions:[{assignment_id:1,name:"Physics Challenges",description:"Take on challenging physics problems",similarity_score:.71,subject_id:"PHYSICS20001",user_id:49},{assignment_id:2,name:"Art Exploration",description:"Explore the world of art and creativity",similarity_score:null,subject_id:"ARTS10010",user_id:49},{assignment_id:3,name:"History Mysteries",description:"Uncover mysteries from the pages of history",similarity_score:.59,subject_id:"HIST30004",user_id:49},{assignment_id:4,name:"Math Puzzles",description:"Solve intriguing math puzzles and riddles",similarity_score:.62,subject_id:"MATH12345",user_id:49},{assignment_id:5,name:"Biology Insights",description:"Gain insights into the world of biology",similarity_score:.67,subject_id:"BIOL65432",user_id:49},{assignment_id:6,name:"Literary Explorations",description:"Embark on explorations of literary classics",similarity_score:.53,subject_id:"LIT10010",user_id:49}]},50:{id:50,name:"Sophia",submissions:[{assignment_id:1,name:"Chemistry Challenges",description:"Take on challenging chemistry assignments",similarity_score:.74,subject_id:"CHEM20001",user_id:50},{assignment_id:2,name:"Cultural Studies",description:"Explore the rich tapestry of cultures worldwide",similarity_score:null,subject_id:"CULTSTUDY10010",user_id:50},{assignment_id:3,name:"Creative Writing Journey",description:"Embark on a creative writing journey of discovery",similarity_score:.68,subject_id:"CREATIVEWRITING12345",user_id:50},{assignment_id:4,name:"Societal Transformations",description:"Examine transformations in societies over time",similarity_score:.56,subject_id:"HISTSOCIETY20001",user_id:50},{assignment_id:5,name:"Artistic Expressions",description:"Express your creativity through various art forms",similarity_score:.61,subject_id:"ARTS10010",user_id:50},{assignment_id:6,name:"Biology Discoveries",description:"Discover fascinating biological phenomena",similarity_score:.49,subject_id:"BIOL65432",user_id:50}]}}},console.log("Mock data:",globalThis.template_data)):console.log("Received date from server:",globalThis.template_data);P.createRoot(document.getElementById("root")).render(e.jsx(G.StrictMode,{children:e.jsx(Z,{})}));
