import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step3EmailVerification: React.FC<{ onNext: () => void }> = ({
    onNext,
}) => {
    const [veriEmail, setVeriEmail] = useState("");
    const { setData } = useSignupStore();

    const handleNext = () => {
        setData({ veriEmail });
        onNext();
    };

    return (
        <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto">
            <div className="flex flex-col text-[26px] font-semibold mb-7 tracking-[-1px]">
                <div>
                    <span className="text-[#98B4E3]">이메일에 </span>전송된
                    인증번호
                </div>
                <div>
                    <span className="text-[#98B4E3]">6자리</span>를 입력해주세요
                </div>
            </div>

            <label className="text-sm text-[#98B4E3] mb-3 font-bold">
                인증번호 6자리
            </label>
            <input
                type="number"
                inputMode="numeric"
                minLength={6}
                placeholder="인증번호를 입력해주세요"
                value={veriEmail}
                onChange={(e) => setVeriEmail(e.target.value)}
                className="border-b placeholder:text-[#B2B2B2] border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
            />
            <FloatingButton onClick={handleNext} disabled={!(veriEmail.trim().length === 6)}>
                다음
            </FloatingButton>
        </div>
    );
};

export default Step3EmailVerification;
