import { useHistory } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Naol Dame");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submithandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "content-type": "application/jason" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false), history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add new Blog </h2>
      <form onSubmit={submithandler}>
        <label>Add title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Insert Body </label>

        <textarea
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Naol">Naol</option>
          <option value="Dame">Dame</option>
          <option value="Abdisa">Abdisa</option>
        </select>
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};
export default Create;
