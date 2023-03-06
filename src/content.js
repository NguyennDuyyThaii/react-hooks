import { useEffect, useLayoutEffect, useState } from "react";

// 1. Update DOM
// 2. Call API
// 3. Listen DOM events
//  - scroll
//  - Resize
// 4. Cleanup
//  - Remove listener / unsubcribe
//  - Clear timer

// useEffect(callback)
// - Goi callback moi khi component re-render
// - goi callback sau kho component them element vao dom
// useEffect(callback, [])
// - Chi goi callback 1 lan sau khi component mount
// useEffect(callback, [deps])
// - callback se duoc goi lai moi khi deps thay doi

// 1. Callback luon duoc goi lai sau khi component mounted
// 2. Clearnup function luon duoc goi truoc khi component unmounted
// 3. Clearnup function luon duoc goi truoc khi callback duoc goi(tru lan mounted)
const tabs = ["posts", "comments", "albums"];
const lessons = [
  {
    id: 1,
    name: 'React la gi'
  },

  {
    id: 2,
    name: 'Node la gi'
  },

  {
    id: 3,
    name: 'PHP la gi'
  }
]

// useEffect
// 1. Cap nhap lai state 
// 2. Cap nhap DOM (mutated)
// 3. Render lai UI
// 4. Goi cleanup neu deps thay doi
// 5. Goi useEffect callback

// useLayoutEffect
// 1. Cap nhap lai state 
// 2. Cap nhap DOM (mutated)
// 3. Goi clearnup neu deps thay doi (sync)
// 4. Goi useLayoutEffect callback (sync)
// 5. Render lai UI
function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState('posts');
//   const [showGoToTop, setShowGoToTop] = useState(false)
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//         setShowGoToTop(window.scrollY >=200)
//     }

//     window.addEventListener('scroll', handleScroll)
//     // clearnup function

//     return () => [
//         window.removeEventListener('scroll', handleScroll)
//     ]
//   }, [])

    // useEffect with timmer

    // const [countdown, setCountDown]  = useState(180)

    // useEffect(() => {
    //     const timeId = setTimeout(() => {
    //         setCountDown(countdown - 1)
    //     }, 1000)

    //     return () => clearInterval(timeId)
    // }, [countdown])

    // useEffect with preview avatar

    // const [avatar, setAvatar] = useState()
    // useEffect(() => {
    //   // ussing cleanup 

    //   return () => {
    //     avatar && URL.revokeObjectURL(avatar.preview)
    //   }
    // }, [avatar])
    // const handlePreviewAvatar = (e) => {

    //   const file = e.target.files[0]

    //   file.preview = URL.createObjectURL(file)
    //   setAvatar(file)

    //   // e.target.value = null


    // useEffect with fake chat app

    // const [lessonId, setLessonId] = useState(1)

    // useEffect(() => {
    //   const handleComment = ({detail}) => {
    //     console.log(detail)
    //   }
    //   window.addEventListener(`lession-${lessonId}`, handleComment)

    //   return () => {
    //     window.removeEventListener(`lession-${lessonId}`, handleComment)
    //   }

    // }, [lessonId])

    // useLayoutEffect

    // const [count, setCount] = useState(0)

    // useLayoutEffect(() => {
    //   if(count > 3)
    //   setCount(0)
    // }, [count])

    // const handleCount = () => {
    //   setCount(count + 1)
    // }
  return (
    // <h1>Mount and UnMount</h1>
    <div>
        {/* {
            tabs.map(tab => (
                <button 
                onClick={() => setType(tab)}
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {}}
                >{tab}</button>
            ))
        }
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}

        {showGoToTop && (
            <button style={{position: 'fixed', right: 20, bottom:20}}>
Go to the top
            </button>
  )}
      </ul> */}

      {/* useEffect with timmer */}
      {/* <h1>{countdown}</h1> */}

      {/* useEffect with preview avatar */}
{/* 
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && (
        <img src={avatar.preview} alt = "" width="80%" />
      )} */}

      {/* useEffect with fake chat App */}

      {/* <ul>
        {lessons.map(lesson => (
          <li
          key = {lesson.id}
          style = {{color: lessonId === lesson.id ? 'red' : '#333'}} 
          onClick = {() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul> */}
    </div>
  );

    }


export default Content;
