import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full block p-2.5 bg-[#151515] text-white"
          placeholder="What do you wanna talk about?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ maxWidth: "90%" }}
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3 text-white text-[1.25rem]">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
