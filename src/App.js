import { useState, useRef, useEffect, memo, useCallback, useMemo, useReducer, createContext, useContext } from "react";
import Content2 from './Content2'
import Theme1 from "./theme1";
import './App.css'
import {ThemeContext, ThemeProvider} from './ThemeContext'

import { useStore, actions } from "./store";
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
  // const [count, setCount] = useState(50)
  
  // const timerId = useRef()
  // const prevCount = useRef()
  // const h1Ref = useRef()

  // useEffect(() => {
  //   prevCount.current = count
  // }, [count])

  // useEffect(() => {
  //   const rect = h1Ref.current.getBoundingClientRect()

  //   console.log(rect)
  // })

  // const handleStart  = () => {
  //   timerId.current = setInterval(() => {
  //     setCount(prev => prev - 1)
  //   }, 1000)
  // }

  // const handleStop = () => {
  //   clearInterval(timerId.current)
  // }

  // console.log(count, prevCount.current)
   // -------------------------------

   // 13. ---------React.Memo () HOC -----------

   // memo() => higher order Component (HOC)
   // useCallback()

  //  const [count, setCount] = useState(0)

  //  const increase = () => {
  //   setCount(count + 1)
  //  }

   // -------------------------------

   // 14. ---------useCallback-----------

  //  const [count, setCount] = useState(0)

  //  const increase = useCallback(() => {
  //   setCount(prev => prev + 1)
  //  }, [])


   // -------------------------------

    // 15. ---------useMemo() hook-----------
    // usememo tranh thuc hien mot so chuc nang khong can thiet

    // const [name,setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [product, setProduct] = useState([])

    // const nameRef = useRef()

    // const handleSubmit = () => {
    //   setProduct([...product, {
    //     name,
    //     price: parseInt(price)
    //   }])

    //   setName('')
    //   setPrice('')

    //   nameRef.current.focus()
    // }

    // const total = useMemo(() => {
    //   return product.reduce((a,b) => a + b.price, 0)
    // }, [product])

   // -------------------------------

    // 16. ---------useReducer-----------
    // const initState = 0
    // const UP_ACTION = 'up'
    // const DOWN_ACTION = 'down'

    // const reducer = (state, action) => {
    //   switch(action){
    //     case UP_ACTION: 
    //       return state + 1
    //     case DOWN_ACTION:
    //       return state - 1
    //     default: 
    //     throw new Error('Invalid action')
    //   }
    // }
    // const [count, dispatch] = useReducer(reducer, initState)
   // -------------------------------

    // 17. ---------Todo List with useReducer-----------

    // const initState = {
    //   job: '',
    //   jobs: []
    // }

    // const setJob = payload => {
    //   return {type: SET_JOB, payload}
    // }

    // const addJob = payload => {
    //   return {type: ADD_JOB, payload}
    // }

    // const deleteJob = payload => {
    //   return {type: DELETE_JOB, payload}
    // }
    // const SET_JOB = 'set_job'
    // const ADD_JOB = 'add_job'
    // const DELETE_JOB = 'delete_job'

    // const reducer = (state, action) => {
    //   switch(action.type){
    //     case SET_JOB:
    //       return {...state, job: action.payload}
    //     case ADD_JOB:
    //       return {...state, jobs: [...state.jobs, action.payload]}
    //     case DELETE_JOB:
    //       const newJobs = [...state.jobs]
    //       newJobs.splice(action.payload, 1)

    //       return {state, jobs: newJobs}
    //     default:
    //       throw new Error('Invalid action.')
    //   }
    // }

    // const [state, dispatch] = useReducer(reducer, initState)

    // const {job, jobs} = state
    // const inputRef = useRef()

    // const handleSubmit = () => {
    //   dispatch(addJob(job))
    //   dispatch(setJob(''))

    //   inputRef.current.focus()
    // }
   // -------------------------------

   // 18. ---------useReducer recap-----------
    // break function in private file
   // -------------------------------

    // 19. ---------React context & useContext-----------
    // const context = useContext(ThemeContext)

   // -------------------------------

   // 20. ---------Global state with Context + useReducer-----------

   const [state, dispatch] = useStore()
   const {todos, todoInput} = state

   const handleAdd = () => {
      dispatch(actions.addTodoInput(todoInput))
   }
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
    //     courses.map(i
    //   }
    //   {/* <input name='name' value={name} onChange={e => setName(e.target.value)}/>
    //   <input name='email' value={email} onChange={e => setEmail(e.target.value)}/> */}
    //   {/* <button onClick={handleSubmit}>Register</button> */}
    // </div>tem => (                                  
    //       <div key={item.id}>
    //         <input checked={checked.includes(item.id) }
    //         onChange={() => handleCheck(item.id)}
    //         type="checkbox" name="item" />
    //         {item.name}
    //       </div>
    //     ))
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
    // <div style={{padding: 32}}>
    //   <button >Toggle</button><br />
    //   <Content />
    // </div>
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
    // <div style={{padding: 29}}>
    //   <h1 ref={h1Ref}>{count}</h1>
    //   <button onClick = {handleStart}>Start</button>
    //   <button onClick = {handleStop}>Stop</button>
    // </div>
   // -------------------------------

    // 13. ---------React.Memo HOC-----------
    // <div style = {{padding: '10px 32px'}}>
    //   <Content2 />
    //   <h1>{count}</h1>
    //   <button onClick={increase}>Click me !</button>
    // </div>
   // -------------------------------

    // 14. ---------useCallback-----------
    // <div style = {{padding: '10px 32px'}}>
    //   <Content2 OnIncrease = {increase}/>
    //   <h1>{count}</h1>
 
    // </div>
   // -------------------------------

  // 15. ---------useMemo hook()-----------
  
  //  <div style={{padding: '10px 32px'}}>
  //   <input 
  //   ref={nameRef}
  //     value = {name}
  //     placeholder= "Enter name..."
  //     onChange={e => setName(e.target.value)}
  //   /><br />
  //      <input 
  //     value = {price}
  //     placeholder= "Enter price..."
  //     onChange={e => setPrice(e.target.value)}
  //   /><br />
  //   <button onClick={handleSubmit}>Add</button>
  //   <br/>
  //   Total: {total}
  //   <ul>
  //     {product.map((pro, index) => (
  //       <li key={index}>{pro.name} - {pro.price}</li>
  //     ))}
  //   </ul>
  //  </div>

   // -------------------------------

    // 16. ---------useReducer-----------

    // <div style={{padding: '0 20px'}}>
    //   <h1>{count}</h1>
    //   <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    //   <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    // </div>
   // -------------------------------

   // 17. ---------Todo List with useReducer-----------
    // <div style={{padding: '0 20px'}}>
    //   <h3>Todo</h3>
    //   <input
    //   ref={inputRef}
    //    value = {job}
    //    onChange = {e => {
    //     dispatch(setJob(e.target.value))
    //    }}
    //    placeholder="Enter todo"/>

    //   <button onClick={handleSubmit}>Add</button>
    //   <ul>
    //     {jobs.map((job, index) => (
    //       <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
    //     ))}
    //   </ul>
    // </div>
   // -------------------------------

   // 18. ---------useReducer recap-----------
    // done
   // -------------------------------

   // 19. ---------React context & useContext-----------
 
    // <div style={{padding: '20px'}}>
    //   <button onClick={context.toggleTheme}>Toggle theme</button>
    //   <Theme1/>
    // </div>


   // -------------------------------

   // 20. ---------Global state with Context + useReducer-----------
    <div>
      <input 
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />

      <button onClick={handleAdd}>Add</button>

      {todos.map((todo, key) => (
        <li key={key}>{todo}</li>
      ))}
    </div>
   // -------------------------------

    // 21. ---------useImperativeHandle-----------

   // -------------------------------
  );
}

export default App;
