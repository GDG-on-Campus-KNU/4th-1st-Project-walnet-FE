import React, { useState } from 'react';
import Step1EnterName from '../../components/SignUp/Step1EnterName';
import Step2EnterEmail from '../../components/SignUp/Step2EnterEmail';
import Step3EmailVerification from '../../components/SignUp/Step3EmailVerification';
import Step4EnterPassword from '../../components/SignUp/Step4EnterPassword';
import Step5EnterBank from '../../components/SignUp/Step5EnterBank';
import Step7BankVerification from '../../components/SignUp/Step7BankVerification';
import Step8Complete from '../../components/SignUp/Step8Complete';
import Step6EnterBankAccount from '../../components/SignUp/Step6EnterBankAccount';

const SignUpPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);

  switch (step) {
    case 1: return <Step1EnterName onNext={nextStep} />;
    case 2: return <Step2EnterEmail onNext={nextStep} />;
    case 3: return <Step3EmailVerification onNext={nextStep} />;
    case 4: return <Step4EnterPassword onNext={nextStep} />;
    case 5: return <Step5EnterBank onNext={nextStep} />;
    case 6: return <Step6EnterBankAccount onNext={nextStep} />;
    case 7: return <Step7BankVerification onNext={nextStep} />;
    case 8: return <Step8Complete />;
    default: return null;
  }
};

export default SignUpPage;