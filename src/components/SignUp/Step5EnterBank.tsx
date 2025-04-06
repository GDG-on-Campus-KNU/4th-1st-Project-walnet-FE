import { useSignupStore } from "../../stores/signupStore";

type Bank = {
    code: string;
    name: string;
};

const BANK_LIST: Bank[] = [
    { code: "KDB", name: "산업은행" },
    { code: "IBK", name: "기업은행" },
    { code: "KB", name: "국민은행" },
    { code: "SHINHAN", name: "신한은행" },
    { code: "WOORI", name: "우리은행" },
    { code: "HANA", name: "하나은행" },
    { code: "NH", name: "농협은행" },
    { code: "TOSSBANK", name: "토스뱅크" },
    { code: "CITY", name: "씨티은행" },
    { code: "DAEGU", name: "대구은행" },
    { code: "KAKAOBANK", name: "카카오뱅크" },
    { code: "SC", name: "SC제일은행" },
];

const Step5EnterBank: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const { setData } = useSignupStore();

    const handleNext = (code: string) => {
        setData({ bank: code });
        onNext();
    };

    return (
        <div className="flex flex-col min-h-[100dvh] p-5 pt-[52px] pb-6 font-semibold bg-white overflow-y-auto">
            <div className="text-[26px] mb-7 tracking-[-1px]">
                <span className="text-[#98B4E3]">은행</span>을 선택해주세요
            </div>
      
            <label className="text-xl text-black mb-14">은행</label>
            <div className="grid grid-cols-2 gap-y-10 gap-x-5">
                {BANK_LIST.map((bank) => (
                    <button
                        key={bank.code}
                        onClick={() => handleNext(bank.code)}
                        className="flex justify-center items-center gap-2"
                    >
                        <img
                            src={`/assets/banks/${bank.code}.png`}
                            alt={bank.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="text-[15px]">{bank.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Step5EnterBank;
