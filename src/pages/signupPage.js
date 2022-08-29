import { Signup } from "../components/auth/signup";
import { Navbar } from "../Navbar/home/navbar";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import "./authPage.css";
const  SignupPage = ()=>{
    return (
        <>
        <Navbar />
        <div className="flex">
        <div><VideoListingSidebar /></div>
        <div className="login-center bg-theme-changer"><Signup /></div>
        </div>
        <BottomLink />
        </>
    )
}
export {SignupPage};