// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function PostFetching() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         axios.get("http://localhost:3001/api/posts/")
//             .then(res => {
//                 console.log(res)
//                 setPosts(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, [])

//     return (
//         <div>
//             <ul>
//                 {/* {data.map(post => (
//                       <li key={post.post_id}>{post.message}</li>
//                 ))} */}
//             </ul>
//         </div>
//     )
// }

// export default PostFetching