import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step1EnterName: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [name, setName] = useState("");
  const { setData } = useSignupStore();

  const handleNext = () => {
    setData({ name });
    onNext();
  };

  const trimmedName = name.trim();
  const isValid = trimmedName.length > 0;

  return (
    <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto">
      <div className="text-[26px] font-semibold mb-7 tracking-[-1px]">
        <span className="text-[#98B4E3]">본인확인</span>을 진행해주세요
      </div>

      <label className="text-sm text-[#98B4E3] mb-3 font-bold">이름</label>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b placeholder:text-[#B2B2B2] border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
      />
      <FloatingButton onClick={handleNext} disabled={!isValid}>
        다음
      </FloatingButton>
    </div>
  );
};

export default Step1EnterName;
