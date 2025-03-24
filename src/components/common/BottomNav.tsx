import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#F0F3F5] text-black py-2 shadow-md">
            <div className="flex justify-around">
                <Link to="/" className="flex flex-col items-center">
                    <img
                        src="/assets/홈.png"
                        alt="홈"
                        className="w-6 h-6 mb-1"
                    />
                    <div className="text-xs">홈</div>
                </Link>
                <Link to="/monthly" className="flex flex-col items-center">
                    <img
                        src="/assets/월넷지갑.png"
                        alt="월넷지갑"
                        className="w-6 h-6 mb-1"
                    />
                    <div className="text-xs">월넷지갑</div>
                </Link>
                <Link to="/foreign" className="flex flex-col items-center">
                    <img
                        src="/assets/외화지갑.png"
                        alt="외화지갑"
                        className="w-6 h-6 mb-1"
                    />
                    <div className="text-xs">외화지갑</div>
                </Link>
                <Link to="/stats" className="flex flex-col items-center">
                    <img
                        src="/assets/환율.png"
                        alt="환율"
                        className="w-6 h-6 mb-1"
                    />
                    <div className="text-xs">환율</div>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
