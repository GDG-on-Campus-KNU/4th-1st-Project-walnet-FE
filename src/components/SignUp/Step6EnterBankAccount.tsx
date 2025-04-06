import React, { useState } from "react";
import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step6EnterBankAccount: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const { setData } = useSignupStore();

  const handleNext = () => {
    setData({ accountNumber });
    onNext();
  };

  return (
    <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 bg-white overflow-y-auto">
      <div className="text-[26px] font-semibold mb-7 tracking-[-1px]">
        <span className="text-[#98B4E3]">계좌번호</span>를 입력해주세요
      </div>

      <label className="text-sm text-[#98B4E3] mb-3 font-bold">계좌번호</label>
      <input
        type="number"
        inputMode="numeric"
        placeholder="계좌번호를 입력해주세요"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        className="border-b placeholder:text-[#B2B2B2] border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-[#98B4E3]"
      />
      <FloatingButton onClick={handleNext} disabled={!(accountNumber.trim())}>
        다음
      </FloatingButton>
    </div>
  );
};

export default Step6EnterBankAccount;
