import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className="max-w-[400px] mx-auto fixed z-50 bottom-0 left-0 right-0 bg-[#F4F6F8] text-black py-2">
            <div className="flex justify-around">
                <Link to="/" className="flex flex-col items-center">
                    <img
                        src="/assets/png/홈.png"
                        alt="홈"
                        className="w-[17px] h-[19px] mb-1"
                    />
                    <div className="text-xs">홈</div>
                </Link>
                <Link to="/monthly" className="flex flex-col items-center">
                    <img
                        src="/assets/png/월넷지갑.png"
                        alt="월넷지갑"
                        className="w-[20px] h-[20px] mb-1"
                    />
                    <div className="text-xs">월넷지갑</div>
                </Link>
                <Link to="/foreign" className="flex flex-col items-center">
                    <img
                        src="/assets/png/외화지갑.png"
                        alt="외화지갑"
                        className="w-[20px] h-[20px] mb-1"
                    />
                    <div className="text-xs">외화지갑</div>
                </Link>
                <Link to="/stats" className="flex flex-col items-center">
                    <img
                        src="/assets/png/환율.png"
                        alt="환율"
                        className="w-[22px] h-[20px] mb-1"
                    />
                    <div className="text-xs">환율</div>
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
