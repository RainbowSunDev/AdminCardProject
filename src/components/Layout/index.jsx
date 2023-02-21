import { Header } from "./Header";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-[100vh] overflow-hidden">
        <Header />
        <div className="flex">
        <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
