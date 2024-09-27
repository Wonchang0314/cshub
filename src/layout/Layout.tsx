import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Route에 해당하는 페이지가 렌더링 되는 부분 */}
      </main>
      {location.pathname !== "/loading" && <Footer />}
    </>
  );
};

export default Layout;
