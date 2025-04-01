import React, { useState } from 'react';
import { useSignupStore } from '../../stores/signupStore';

const Step7Complete: React.FC = () => {
  const [name, setName] = useState('');
  const { setData } = useSignupStore();

  const handleNext = () => {
    setData({ name });
  };

  return (
    <div>
      <h2>이름을 입력해주세요</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default Step7Complete;