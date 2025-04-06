import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step4EnterPassword: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const { setData } = useSignupStore();

    const handleNext = () => {
        setData({ password: password2 });
        onNext();
    };

    const isValid =
        password1.trim().length >= 8 &&
        password2.trim().length >= 8 &&
        password1 === password2;

    return (
        <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto">
            <div className="text-[26px] font-semibold mb-7 tracking-[-1px]">
                <span className="text-[#98B4E3]">비밀번호를 </span>입력해주세요
            </div>

            <label className="text-sm text-[#98B4E3] mb-3 font-bold">
                비밀번호 <span className="text-black font-light">(8자리 이상)</span>
            </label>
            <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                className="border-b placeholder:text-[#B2B2B2] border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
            />
            <input
                type="password"
                placeholder="비밀번호를 재입력해주세요"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="border-b placeholder:text-[#B2B2B2] border-gray-300 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
            />
            {password1 && password2 && password1 !== password2 && (
                <p className="text-red-500 text-sm -mt-6 mb-4">
                    비밀번호가 일치하지 않아요
                </p>
            )}
            {password1.trim().length < 8 && (
                <p className="text-red-500 text-sm -mt-6 mb-4">
                    8자리 이상의 비밀번호를 입력해주세요
                </p>
            )}
            <FloatingButton onClick={handleNext} disabled={!isValid}>
                다음
            </FloatingButton>
        </div>
    );
};

export default Step4EnterPassword;
