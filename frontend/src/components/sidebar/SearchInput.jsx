import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full text-white bg-[#151515] min-[300px]:w-full sm:w-5/6 md:w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-circle bg-[#151515] hover:bg-white  text-white hover:text-black transition-all duration-500"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;