import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/common/Header";

export const Router = () => {
    return (
        <>
          <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    );
};
