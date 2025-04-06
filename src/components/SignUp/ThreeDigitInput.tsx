import { useRef, useState } from "react";

const ThreeDigitInput = ({ onChange  }: { onChange : (code: string) => void }) => {
    const [values, setValues] = useState(["", "", ""]);
    const inputsRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  
    const handleChange = (index: number, value: string) => {
      if (!/^\d?$/.test(value)) return; // 숫자만 허용
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
  
      // 다음 input으로 이동
      if (value && index < 2) {
        inputsRef[index + 1].current?.focus();
      }
  
      // 입력 완료 시 콜백 실행
      onChange(newValues.join(""));
    };
  
    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !values[index] && index > 0) {
        inputsRef[index - 1].current?.focus();
      }
    };
  
    return (
      <div className="flex space-x-2.5">
        {values.map((val, i) => (
          <input
            key={i}
            ref={inputsRef[i]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-10 h-10 text-center text-xl border bg-white border-white rounded-[6px] focus:outline-none focus:border-[#98B4E3]"
          />
        ))}
      </div>
    );
  };
  
  export default ThreeDigitInput;