import { useState } from "react";
import Content from './content'

// const order = [100,200,300
// ]
function App() {
  // 1. ---------useState-----------
  // const total = order.reduce((a,b) => a+b)
  // console.log(total) => nhu nay ma truyen thang vao state thi moi khi re-render lai phai tinh lai, nang nhoc cho server
  // su dung callback trong useState luon
  // const [counter, setCounter] = useState(() => {
  //   const total = order.reduce((a,b) => a+b)
  //   return total
  // })

  // const handleIncrease = () => {
  // thang nay thi counter van chi la 1 ma thoi, nen call 3 lan van chi la vay
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // thang nay thi no lay gia tri sau cung cua callback de tinh, nen +3 lan
  // setCounter(prev => prev + 1)
  // setCounter(prev => prev + 1)
  //  setCounter(prev => prev + 1)
  // }

  // const [info, setInfo] = useState({
  //   name: "Nguyen duy thai",
  //   age: 18,
  //   address: "Thai Binh",
  // });

  // const handleUpdate = () => {
  //   setInfo((prev) => {
  //     return { ...prev, bio: "dep trai" };
  //   });
  // };
  // -------------------------------

  // 2. ---------TwoWayBinding-----------
  // random gift
  // const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard']

  // const [gift, setGift] = useState()
  // const handlePickGift = () => {
  //   const posit =  Math.floor(Math.random() * gifts.length)
  //    setGift(gifts[posit])
  // }
  // two-way binding -> react mac dinh la oneway binding, vue la twoway
    // const courses = [
    //   {
    //     id: 1,
    //     name: 'HTML, CSS'
    //   },
    //   {
    //     id: 2,
    //     name: 'Javascript'
    //   },
    //   {
    //     id: 3,
    //     name: 'ReactJs'
    //   }
    // ]
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [checked, setChecked] = useState([])
    // const handleCheck = (id) => {
    //   setChecked(prev => {
    //     const isChecked = checked.includes(id)
    //     if(isChecked){
    //       return checked.filter(item => item !== id)
    //     }else{
    //       return [...prev, id]
    //     }
    //   })
    // }
    // const handleSubmit = () => {
    //  console.log({ids: checked})
    // }

    
  // -------------------------------

  // 3. ---------Todo List with useState-----------
  // const [job,setJob] = useState('')
  // const [jobs,setJobs] = useState(() =>{
  //   const json = JSON.parse(localStorage.getItem('jobs'))

  //   if(json){
  //     return json
  //   }else{
  //     return []
  //   }
  // })
  
  // const handleAddJob = () => {
  //   setJobs(prev => {
  //     const newJob = [...prev, job]
  //     const jsonJob = JSON.stringify(newJob)

  //     localStorage.setItem('jobs', jsonJob)
  //     return newJob
  //   })
  //   setJob('')
  // }
  // -------------------------------

  // 4. ---------Mounted & Unmounted-----------
    // const [show, setShow] = useState(false)

    // const handleSetShow = () => {
    //   setShow(!show)
    // }
  // -------------------------------

  // 5. ---------use Effect-----------

  // -------------------------------

  // 6. ---------use Effect with dependencies-----------

   // -------------------------------

   // 7. ---------use Effect with DOM events-----------

   // -------------------------------

   // 8. ---------use Effect with timer function-----------

   // -------------------------------

  // 9. ---------use Effect with preview avatar-----------

   // -------------------------------

  // 10. ---------use Effect with fake chat app-----------

   // -------------------------------
   
   // 11. ---------useLayout Effact-----------

   // -------------------------------

  // 12. ---------useRef-----------

   // -------------------------------

   // 13. ---------React.Memo-----------

   // -------------------------------

   // 14. ---------useCallback-----------

   // -------------------------------

    // 15. ---------useMemo-----------

   // -------------------------------

    // 16. ---------useReducer-----------

   // -------------------------------

    // 17. ---------Todo List with useReducer-----------

   // -------------------------------

   // 18. ---------useReducer recap-----------

   // -------------------------------

    // 19. ---------React context & useContext-----------

   // -------------------------------

   // 20. ---------Global state with Context + useReducer-----------

   // -------------------------------

   // 21. ---------useImperativeHandle-----------

   // -------------------------------
  return (
    // 1. ---------useState-----------
    // <div className="App" style={{ padding: 20 }}>
    //   <h1>{JSON.stringify(info)}</h1>
    //   <button onClick={handleUpdate}>Update</button>
    // </div>
    // <div className="App" style={{padding: 20}}>
    //   <h1>{counter}</h1>
    //   <button onClick={handleIncrease}>Increase</button>
    // </div>
    // -------------------------------

    // 2. ---------TwoWayBinding-----------
    // random gift
    // <div style={{padding: 32}}>
    //   <h1>{gift || 'Chua co phan thuong'}</h1>
    //   <button onClick={handlePickGift}>Lay thuong</button>
    // </div>
    // two-way binding
    // <div style={{padding: 32}}>
    //   {
    //     courses.map(item => (                                  
    //       <div key={item.id}>
    //         <input checked={checked.includes(item.id) }
    //         onChange={() => handleCheck(item.id)}
    //         type="checkbox" name="item" />
    //         {item.name}
    //       </div>
    //     ))
    //   }
    //   {/* <input name='name' value={name} onChange={e => setName(e.target.value)}/>
    //   <input name='email' value={email} onChange={e => setEmail(e.target.value)}/> */}
    //   {/* <button onClick={handleSubmit}>Register</button> */}
    // </div>
    // -------------------------------

    // 3. ---------Todo List with useState-----------
      // <div style={{padding: 32}}>
      //   <input 
      //   value={job} 
      //   onChange={e => setJob(e.target.value)}/>
      //   <button onClick={handleAddJob}>Add</button>
      //   <ul>
      //     {jobs.map((item, index) => (
      //                 <li key={index}>
      //                   {item}
      //                 </li>
      //     ))}

      //   </ul>
      // </div>
    // -------------------------------

    // 4. ---------Mounted & Unmounted-----------
    // <div style={{padding: 32}}>
    //   <button onClick={() => setShow(!show)}>Show</button>
    //   {show && <Content />}
    // </div>
    // -------------------------------

    // 5. ---------use Effect-----------

   // -------------------------------

   // 6. ---------use Effect with dependencies-----------

   // -------------------------------

   // 7. ---------use Effect with DOM events-----------

   // -------------------------------

   // 8. ---------use Effect with timer function-----------

   // -------------------------------

   // 9. ---------use Effect with preview avatar-----------

   // -------------------------------

  // 10. ---------use Effect with fake chat app-----------

   // -------------------------------
   
   // 11. ---------useLayout Effact-----------

   // -------------------------------

    // 12. ---------useRef-----------

   // -------------------------------

    // 13. ---------React.Memo-----------

   // -------------------------------

    // 14. ---------useCallback-----------

   // -------------------------------

  // 15. ---------useMemo-----------

   // -------------------------------

    // 16. ---------useReducer-----------

   // -------------------------------

   // 17. ---------Todo List with useReducer-----------

   // -------------------------------

   // 18. ---------useReducer recap-----------

   // -------------------------------

   // 19. ---------React context & useContext-----------

   // -------------------------------

   // 20. ---------Global state with Context + useReducer-----------

   // -------------------------------

    // 21. ---------useImperativeHandle-----------

   // -------------------------------
  );
}

export default App;
