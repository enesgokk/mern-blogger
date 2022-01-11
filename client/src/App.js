import React, { useState, useEffect, useRef } from "react";
import { createPost } from "./services/createPost";
import { getAllPosts } from "./services/getAllPosts";

function App() {
  const [allData, setAllData] = useState([]);
  const [request,setRequest]=useState(0)
  const titleRef = useRef();
  const subtitleRef = useRef();
  const contentRef = useRef();
  const tag = "programming";
  const image = "image111";

  useEffect(() => {
    async function getPosts() {
      setAllData(await getAllPosts());
    }
    getPosts();
  }, [request]);

  return (
    <div style={{display:"flex"}} >
      <div>
        <div>
          <label htmlFor="">title: </label>
          <input ref={titleRef} type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">subtitle: </label>
          <input ref={subtitleRef} type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">content: </label>
          <textarea ref={contentRef} type="text" />
        </div>
        <br />
        <br />
        <button
          onClick={async() =>
            {
              await createPost(
                titleRef.current.value,
                subtitleRef.current.value,
                contentRef.current.value,
                tag,
                image
              );
              setRequest(request+1)  
          }
          }
        >
          Gonderrr
        </button>
      </div>

      <div>
        {allData.map((post)=>
          <div key={post._id} >{post.title} </div>
        )}
      </div>

    </div>
  );
}

export default App;
