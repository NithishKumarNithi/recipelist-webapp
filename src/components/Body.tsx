import { Outlet } from 'react-router';    

export default function Body() {
  
  return (
    <main className="max-w-5xl p-2 mx-auto">
      <Outlet />
    </main>
  );
}
