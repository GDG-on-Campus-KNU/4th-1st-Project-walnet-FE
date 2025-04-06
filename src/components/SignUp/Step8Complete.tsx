import { useSignupStore } from "../../stores/signupStore";
import FloatingButton from "./FloatingButton";

const Step8Complete: React.FC = () => {
    const { data } = useSignupStore();
    const handleComplete = () => {
        console.log(data);
    };

    return (
        <div className="flex flex-col min-h-[100dvh] justify-center items-center bg-white p-6">
            <img
                src="/assets/png/walnet logo.png"
                alt="walnet 로고"
                className="w-[173px] h-[56px] mb-6"
            />
            <p className="text-[26px] font-semibold text-center tracking-[-1px]">
                <span className="text-[#98B4E3]">본인 인증</span>이
                완료되었습니다
            </p>
            <FloatingButton onClick={handleComplete}>
                <div className="text-[#454545]">완료</div>
            </FloatingButton>
        </div>
    );
};

export default Step8Complete;
