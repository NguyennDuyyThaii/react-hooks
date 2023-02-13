import { useEffect, useState } from "react";

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
const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
        setShowGoToTop(window.scrollY >=200)
    }

    window.addEventListener('scroll', handleScroll)
    // clearnup function

    return () => [
        window.removeEventListener('scroll', handleScroll)
    ]
  }, [])

  return (
    // <h1>Mount and UnMount</h1>
    <div>
        {
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
      </ul>
    </div>
  );
}

export default Content;
