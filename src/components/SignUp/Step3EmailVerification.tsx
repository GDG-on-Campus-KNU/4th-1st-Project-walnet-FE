import React, { useState } from 'react';
import { useSignupStore } from '../../stores/signupStore';

const Step3EmailVerification: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [name, setName] = useState('');
  const { setData } = useSignupStore();

  const handleNext = () => {
    setData({ name });
    onNext();
  };

  return (
    <div>
      <h2>이름을 입력해주세요</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default Step3EmailVerification;