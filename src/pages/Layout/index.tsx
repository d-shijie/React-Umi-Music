import { Outlet } from '@umijs/max';
import Footer from './components/Footer';
import Header from './components/Header';
const Layout: React.FC = () => {
  return (
    <div className="bg-[#eff0f3] h-[100vh] ">
      <section className="p-[12px]">
        <Header />
      </section>

      <section className="p-[12px]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
