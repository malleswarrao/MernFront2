import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle, BsTable } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/Home/BooksTable";
import BooksCard from "../components/Home/BooksCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showtype, setShowType] = useState("Table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mernback-vc9y.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data, "data");
        console.log(books, "books");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    console.log(books, "books2");
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g"
          onClick={() => setShowType("Table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g"
          onClick={() => setShowType("Card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3x1 my-8"> Books List</h1>
        <div className="flex justify-between items-center">
          <h1 className="my-8 p-2">create new book</h1>
          <Link to="/books/create">
            <span>
              <MdOutlineAddBox className="text-sky-2000 text-10x1" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : showtype === "Table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
