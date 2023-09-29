import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "../components/spinner";
import axios from "axios";
import { useParams } from "react-router-dom";

const Editbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishyear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://mernback-vc9y.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.data.author);
        setTitle(response.data.data.title);
        setPublishYear(response.data.data.publishyear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("an error happened");
        console.log(error);
      });
  }, []);
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    console.log("handle book");
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("an error happened");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-3">Edit book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish year</label>
          <input
            type="number"
            value={publishyear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <button className="p-2 bg-sky-300 w-fit m-8" onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editbook;
