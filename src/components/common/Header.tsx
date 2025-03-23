import { Link } from "react-router-dom";

function Header() {
    // const navigate = useNavigate();

    // const userId = sessionStorage.getItem("email");
    //   const userRole = sessionStorage.getItem("role");

    // const handleConnectCart = () => {
    //     // 장바구니아이콘 클릭 시 로그인 상태 체크 후 라우팅 진행.
    //     if (userId === null) {
    //         navigate("/login");
    //     } else if (userId !== null) {
    //         navigate("/cart");
    //     }
    // };

    return (
        <header className="h-[6vh] sticky top-0 left-0 right-0 bg-white text-black flex justify-between items-center px-5 py-[1px] shadow-md z-[100]">
            <Link to="/">Logo</Link>
            
            <Link to="/notification" >
                notification
            </Link>
            <Link to="/notification" >
                mypage
            </Link>
        </header>
    );
}

export default Header;
