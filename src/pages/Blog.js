import React from 'react'
import { useState, useEffect} from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from "../firebaseconfig";


function Blog({isAuth}) { 

    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
    });
    
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    return (

        <>
        
        <div> Just add denialpan.github.io manually into your package manager; I have very little incentive to make this all nice and fancy. 

            im also trying something here dw
        </div>
        
        
        <div className="HomePage">{postLists.map((post) => {
            return (


                <div className='post'>
                    <div className='postHeader'>
                        <div className='postTitle'>
                            <h1> {post.title} </h1>
                        </div>

                        <div className='deletePost'>

                            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => { deletePost(post.id); } }> X </button>}
                        </div>

                    </div>

                    <div className='postText'> {post.postText} </div>
                    <h3> {post.author.name} </h3>
                </div>
            );
        })}</div></>
    )
}

export default Blog