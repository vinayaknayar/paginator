// App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Pagination from './components/Pagination';

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchUsers = async (page: number) => {
    const offset = page * 10;
    try {
      const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${offset}/next`);
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="App flex flex-col h-screen">
      <div className="flex-grow md:grid md:grid-cols-2 gap-4 p-4 overflow-auto mb-[50px] md:mb-0">
        {users.map((user) => (
          <div key={user.ID} className="max-w-sm rounded shadow-lg m-4 bg-slate-200">
            <Card user={user} />
          </div>
        ))}
      </div>

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
