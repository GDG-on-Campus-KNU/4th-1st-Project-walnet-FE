import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";
import ThreeDigitInput from "./ThreeDigitInput";

const Step7BankVerification: React.FC<{ onNext: () => void }> = ({
    onNext,
}) => {
    const [veriAccount, setVeriAccount] = useState("");
    const { data, setData } = useSignupStore();

    const handleNext = () => {
        setData({ veriAccount });
        onNext();
    };

    return (
        <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto font-semibold">
            <div className="flex flex-col text-[26px] mb-7 tracking-[-1px]">
                <div>
                    입금된 내역
                    <span className="text-[#98B4E3]"> 숫자 3자리</span>를
                </div>
                <div>입력해주세요</div>
            </div>

            <div className="p-5 rounded-[14px] bg-[#E5E5E5] space-y-5">
                <div className="flex items-center space-x-3.5">
                    <img
                        className="w-[30px] h-[30px] rounded-full bg-gray-500"
                        src={`/assets/banks/${data.bank}.png`}
                        alt="icon"
                    />
                    <div className="text-[26px] tracking-wider">
                        {data.accountNumber || "계좌번호"}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1 text-[#676767] text-xs">
                        <span>입금자명</span>
                        <span>입금</span>
                    </div>

                    <div className="flex justify-between items-center text-[26px]">
                        <div className="flex items-center space-x-3.5">
                            <span>WAL</span>
                            <ThreeDigitInput
                                onChange={(code) => setVeriAccount(code)}
                            />
                        </div>
                        <span>1원</span>
                    </div>
                </div>
            </div>

            <FloatingButton
                onClick={handleNext}
                disabled={!(veriAccount.trim().length === 3)}
            >
                다음
            </FloatingButton>
        </div>
    );
};

export default Step7BankVerification;
