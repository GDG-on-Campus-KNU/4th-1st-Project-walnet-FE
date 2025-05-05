import { useState } from "react";

type Currency = {
  code: string;
  name: string;
  flagUrl: string;
};

const dummyCurrencies: Currency[] = [
  { code: "USD", name: "미국 달러", flagUrl: "/assets/flags/usd.png" },
  { code: "JPY", name: "일본 엔화", flagUrl: "/assets/flags/jpy.png" },
  { code: "EUR", name: "유럽 유로", flagUrl: "/assets/flags/eur.png" },
  { code: "EUR1", name: "유럽 유로", flagUrl: "/assets/flags/eur.png" },
  { code: "EUR2", name: "유럽 유로", flagUrl: "/assets/flags/eur.png" },
  { code: "EUR3", name: "유럽 유로", flagUrl: "/assets/flags/eur.png" },
  { code: "EUR4", name: "유럽 유로", flagUrl: "/assets/flags/eur.png" },
  // ... 더 추가 가능
];

interface PayFormProps {
  onClose: () => void;
  hasHeader?: boolean;
}

const PayForm: React.FC<PayFormProps> = ({ hasHeader = true }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    dummyCurrencies[0]
  );

  return (
    <div className={`flex flex-col justify-between h-full overflow-y-auto ${hasHeader ? "pt-[60px]" : "pt-[48px]"} pb-[64px]`}>
      <div className="flex flex-col px-5">
        {/* 현재 결제 통화 */}
        <div className="flex h-[56px] rounded-xl bg-[#BED1F0] justify-between items-center px-4">
          <img
            src="/assets/png/별.png"
            alt="star"
            className="w-[18px] h-[17px]"
          />
          <div className="text-xl">{"미국 달러"}</div>
          <img
            src="/assets/png/별.png"
            alt="star"
            className="w-[22px] h-[21px]"
          />
        </div>

        {/* QR 코드 */}
        <div className="flex flex-col h-[360px] mt-6 rounded-2xl bg-[#DFE5EC] p-[34px] gap-5">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[200px] h-[200px] bg-white p-4 rounded-xl flex justify-center items-center">
              <img
                src="/assets/png/qr-placeholder.png"
                alt="QR"
                className="w-[160px] h-[160px]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>잔액</div>
              <div>{"잔액"}</div>
            </div>
            <div className="flex justify-between">
              <div>실시간 환율</div>
              <div>{"실시간 환율"}</div>
            </div>
          </div>
        </div>
      </div>
      {/* 통화 선택 버튼 */}
      <div className="px-5 mb-10">
        <div className="text-center text-gray-500 text-xs my-4">
          《 슬라이딩으로 결제 통화 변경이 가능합니다 》
        </div>

        <div className="flex overflow-x-auto gap-4 pb-2">
          {dummyCurrencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency)}
              className={`flex flex-col items-center justify-center w-[80px] shrink-0 border-2 rounded-xl p-2 transition ${
                selectedCurrency.code === currency.code
                  ? "border-[#98B4E3]"
                  : "border-gray-300"
              }`}
            >
              <img
                src={currency.flagUrl}
                alt={currency.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xs mt-2">{currency.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PayForm;
