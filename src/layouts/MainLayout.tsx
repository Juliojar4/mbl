import { Outlet, Link } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const icons = ['youtube', 'x', 'tiktok', 'instagram', 'facebook']

export default function MainLayout() {
  return (
    <div className="flex flex-col">

      <Header/>

      <main>
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}
