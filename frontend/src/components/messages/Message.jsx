import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { getTime } from "../../utils/getTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const messageIsFromMe = message.senderId === authUser._id;

  const chatClassName = messageIsFromMe ? "chat-end" : "chat-start";
  const profilePic = messageIsFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = messageIsFromMe
    ? "bg-[#eee] text-[#121212]"
    : "bg-[#050505] text-[#fff]";

  const shakeClass = message.shouldShake ? "pulse-shake" : "";

  const formattedTime = getTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
