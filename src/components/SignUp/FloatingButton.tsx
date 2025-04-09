import React from 'react';

interface FloatingButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <div className="fixed left-0 right-0 bottom-6 w-full px-6 z-50 max-w-[400px] mx-auto">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full h-[64px] text-xl rounded-xl font-semibold ${
          disabled ? 'bg-[#B2B2B2] text-[#454545]' : 'bg-[#98B4E3] text-white'
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default FloatingButton;