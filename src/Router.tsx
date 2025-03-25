import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import BottomNav from "./components/shared/BottomNav";
import Header from "./components/shared/Header";

export const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <BottomNav />
        </>
    );
};
