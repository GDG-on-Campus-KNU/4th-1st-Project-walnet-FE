import React, { useState } from 'react';
import { useSignupStore } from '../../stores/signupStore';

const Step2EnterEmail: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [name, setName] = useState('');
  const { setData } = useSignupStore();

  const handleNext = () => {
    setData({ name });
    onNext();
  };

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-y-auto px-6 pt-12 pb-[200px] bg-white">
      <h1 className="text-xl font-semibold mb-8">
        <span className="text-blue-500 font-bold">이메일</span>을 진행해주세요
      </h1>

      <label className="text-sm text-blue-500 mb-1">이름</label>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b border-gray-300 py-2 text-base mb-10 focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleNext}
        disabled={!name.trim()}
        className={`mt-auto w-full py-3 rounded-xl text-white font-semibold ${
          name.trim() ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        다음
      </button>
    </div>
  );
};

export default Step2EnterEmail;