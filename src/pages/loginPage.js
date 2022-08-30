import { Login } from "../components/auth/login"
import { Navbar } from "../Navbar/home/navbar";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import "./authPage.css";
const LoginPage = ()=>{
    return (
        <>
        <Navbar />
        <div className="flex">
        <div><VideoListingSidebar /></div>
        <div className="login-center bg-theme-changer"><Login /></div>
        </div>
        <BottomLink />
        </>
    )
}
export {LoginPage};