export default function ChatMessage({
  user,
  text,
}: {
  user: string;
  text: string;
}) {
  return (
    <div className="text-sm text-gray-200">
      <span className="font-medium text-blue-400">{user}</span>
      <span className="ml-2">{text}</span>
    </div>
  );
}
