import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Loader />
      <Toaster reverseOrder={false} />
    </>
  );
};
