import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
}
interface UserFetcherProps {
    httpMethod:string;
    url:string;
    userRequestId:number;
  }

const UserFetcher: React.FC<UserFetcherProps> = ({httpMethod,url,userRequestId}) => {
  const [userId, setUserId] = useState<number>(1);
  const [apiUrl, setApiUrl] = useState<string|null>('https://jsonplaceholder.typicode.com/users');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = () => {
    console.log('Button Clicked');
   

    setLoading(true);
    setError(null);
    setUser(null);
    setUserId(userRequestId);
    setApiUrl(url);
    console.log('apiURL:',apiUrl);
    console.log('userId:',userId);
    console.log('URL:',`${apiUrl}/${userId}`);
    fetch(`${apiUrl}/${userId}`)
      .then((res) => {
        console.log('Response:',res);
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '1rem', maxWidth: 400 }}>
      <button onClick={fetchUser} style={{ padding: '0.5rem', width: '100%' }}>
       Call
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {user && (
        <div style={{ marginTop: '1rem' }}>
          <h4>{user.name}</h4>
        </div>
      )}
    </div>
  );
};

export default UserFetcher;