"use client";

export default function MessageTooltip({ message }) {
  // Safety check for undefined/null messages
  if (!message || typeof message !== 'string') {
    return <div className="text-base text-start leading-relaxed text-gray-400">No message available</div>;
  }

  const truncated =
    message.length > 200 ? `${message.substring(0, 300)}...` : message;

  const copyMessage = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <div
      className="text-base text-start leading-relaxed cursor-pointer select-none"
      title={message}                     // full message on hover
      onDoubleClick={copyMessage}         // double click to copy
    >
      {truncated}
    </div>
  );
}
