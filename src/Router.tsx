import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import BottomNav from "./components/common/BottomNav";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <BottomNav />
        </>
    );
};
