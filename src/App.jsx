import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [mentions, setMentions] = useState([]); 

  let users = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
    { id: 3, username: 'alex_jones' }
  ];

  const handleSelect = (e) => {
    const selectedUserName = e.target.value;
    const parts = input.split('@');
    const newInput = parts.slice(0, -1).join('@') + '@' + selectedUserName + ' ';
    setInput(newInput);
    setDropdown(false);
  };

  const handleComment = () => {
    if (input.includes('@')) { 
      const mentionedUser = input.split('@')[1].trim();
      setMentions([...mentions, mentionedUser]); 
    }
    setInput('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-auto">
        <h1 className='p-4 text-center text-3xl'>Add Mentions to Your Comment</h1>
        <input
          placeholder="Enter username"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setDropdown(e.target.value.includes('@'));
          }}
        />
        <select
          onChange={handleSelect}
          defaultValue=""
          className={`w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${dropdown ? 'block' : 'hidden'}`}
        >
          <option value="" disabled>Choose a user</option>
          {users
            .filter(user => user.username.includes(input.split('@')[1] || ''))
            .map(user => (
              <option key={user.id} value={user.username}>{user.username}</option>
            ))}
        </select>
        {/* Button to trigger comment action */}
        <button
          onClick={handleComment}
          className="w-full p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
        >
          {"Mention User"}
        </button>

        {/* Displaying the mentioned users below the button */}
        {mentions.length > 0 && (
          <div className="mt-4">
            <p className="font-bold">Mentions:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {mentions.map((mention, index) => (
                <a
                  key={index}
                  href={`/profile/${mention}`}
                  className="text-blue-500 underline"
                >
                  {mention}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
