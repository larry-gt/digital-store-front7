import { Outlet } from "react-router";
import HeaderAuth from "../components/HeaderAuth";
import footer from "../components/Footer"
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <>
           <HeaderAuth />
           <div className="bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] pt-[60px] px-[30px] pb-[80px]">
               <Outlet />
           </div>
           <Footer />
        </>
    )
    
}

export default AuthLayout;