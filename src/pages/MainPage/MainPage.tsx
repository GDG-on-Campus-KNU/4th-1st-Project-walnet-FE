const MainPage = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex-grow p-4">
                <div className="rounded-2xl bg-gradient-to-r from-[#D9E7FF] to-[#C8DCFD]">
                    <div className="text-base">
                        {11111}님의 월렛 지갑
                    </div>
                    <div className="text-xl mt-2">{11111}</div>
                </div>

                {/* 외화 지갑 */}
                <div className="mt-6">
                    <div className="border-b pb-2">
                        <h2 className="text-xl">외화 지갑</h2>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">$</span>
                                <span>미국 달러</span>
                            </div>
                            <span>{} USD</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">¥</span>
                                <span>일본 엔</span>
                            </div>
                            <span>{} JPY</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">€</span>
                                <span>유럽 유로</span>
                            </div>
                            <span>{} EUR</span>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-[#98B4E3] text-[#FCFCFD] py-3 rounded-xl text-16px mt-6">
                    외화 추가하기
                </button>
            </div>
        </div>
    );
};

export default MainPage;
