const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full max-w-[420px] mx-auto h-[60px] flex justify-between items-center px-4 bg-[#F4F6F8]">
      <div className="flex items-center">
        <img
          src="/assets/png/walnet logo.png"
          alt="walnet logo"
          className="w-[111px] h-[36px]"
        />
      </div>

      <div className="flex items-center space-x-5">
        <img
          src="/assets/png/알림.png"
          alt="notification"
          className="w-[18px] h-[21px]"
        />
        <img
          src="/assets/png/마이페이지.png"
          alt="user"
          className="w-[21px] h-[21px]"
        />
      </div>
    </header>
  );
};

export default Header;
