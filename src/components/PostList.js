import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
// Hooks must be used inside React component function, not inside normal JS function
function PostList(props) {
  const [posts, setPost] = useState([]);
  function addPostHandler(postData) {
    setPost((prevState) => [postData, ...prevState]);
  }
  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={new Date().toString()}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
} // key is built in prop supported by react and we can add it in JSX element, we usually use key when dealing with array and every key should have unique value

export default PostList;
