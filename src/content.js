import { useEffect, useState } from "react"

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

    // 1. Callback luon duoc goi lai sau khi component mounted
const tabs = ['posts', 'comments', 'albums']
function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[])

    return (
        // <h1>Mount and UnMount</h1>
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
        <ul>
            {posts.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        </div>
    )
}

export default Content