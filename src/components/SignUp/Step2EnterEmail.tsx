import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step2EnterEmail: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [email, setEmail] = useState("");
    const { setData } = useSignupStore();

    const handleNext = () => {
        setData({ email });
        onNext();
    };

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    const showError = email && !isValidEmail(email);

    return (
        <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto">
            <div className="text-[26px] font-semibold mb-7 tracking-[-1px]">
                <span className="text-[#98B4E3]">이메일</span>을 입력해주세요
            </div>

            <label className="text-sm text-[#98B4E3] mb-3 font-bold">
                이메일
            </label>
            <input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b placeholder:text-[#B2B2B2] border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
            />
            {showError && (
                <p className="text-red-500 text-sm mb-8">
                    올바른 이메일 형식을 입력해주세요
                </p>
            )}
            <FloatingButton onClick={handleNext} disabled={!isValidEmail(email)}>
                다음
            </FloatingButton>
        </div>
    );
};

export default Step2EnterEmail;
