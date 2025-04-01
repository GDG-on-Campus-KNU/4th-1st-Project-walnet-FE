import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import BottomNav from "./components/shared/BottomNav";
import Header from "./components/shared/Header";
import SignUpPage from "./pages/SignUp/SignUpPage";

export const Router = () => {
    const location = useLocation();
    const hideLayoutRoutes = ["/signup"];
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideLayout && <Header />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
            {!shouldHideLayout && <BottomNav />}
        </>
    );
};
