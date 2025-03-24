// import React from "react";
// import { HomeIndicator } from "./HomeIndicator";
// import { StatusbarBattery } from "./StatusbarBattery";
// import { StatusbarTime } from "./StatusbarTime";
// import image54 from "./image-54.png";
// import image from "./image.svg";
// import mobileSignal from "./mobile-signal.svg";
// import notch from "./notch.png";
// import vector1 from "./vector-1.svg";
// import vector22 from "./vector-2-2.svg";
// import vector2 from "./vector-2.svg";
// import vector3 from "./vector-3.svg";
// import vector4 from "./vector-4.svg";
// import vector5 from "./vector-5.svg";
// import vector6 from "./vector-6.svg";
// import vector7 from "./vector-7.svg";
// import vector8 from "./vector-8.svg";
// import vector9 from "./vector-9.svg";
// import vector10 from "./vector-10.svg";
// import vector11 from "./vector-11.svg";
// import vector12 from "./vector-12.svg";
// import vector13 from "./vector-13.svg";
// import vector from "./vector.svg";
// import wifi from "./wifi.svg";

// export const Screen = (): JSX.Element => {
//     return (
//         <div className="bg-[#f4f6f8] flex flex-row justify-center w-full">
//             <div className="bg-[#f4f6f8] w-[402px] h-[874px] relative">
//                 <div className="absolute w-[402px] h-16 top-[722px] left-0 rounded-[16px_16px_0px_0px]">
//                     <div className="absolute top-[22px] left-[173px] font-16-16 font-[number:var(--16-16-font-weight)] text-[#283c58] text-[length:var(--16-16-font-size)] text-center tracking-[var(--16-16-letter-spacing)] leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         결제하기
//                     </div>

//                     <div className="absolute w-[402px] h-16 top-0 left-0 bg-[#283c58] rounded-[16px_16px_0px_0px]" />

//                     <div className="top-[23px] left-[173px] font-16-16 font-[number:var(--16-16-font-weight)] text-[#f4f6f8] text-[length:var(--16-16-font-size)] text-center tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         결제하기
//                     </div>
//                 </div>

//                 <div className="absolute w-[402px] h-[50px] top-0 left-0">
//                     <div className="absolute w-[271px] h-[35px] top-0 left-[106px]">
//                         <img
//                             className="absolute w-[190px] h-[35px] top-0 left-0"
//                             alt="Notch"
//                             src={notch}
//                         />

//                         <div className="absolute w-[85px] h-3.5 top-[21px] left-[186px]">
//                             <StatusbarBattery className="!absolute !w-[30px] !h-3.5 !top-0 !left-[55px]" />
//                             <img
//                                 className="absolute w-[19px] h-[13px] top-px left-[29px]"
//                                 alt="Wifi"
//                                 src={wifi}
//                             />

//                             <img
//                                 className="absolute w-5 h-[13px] top-px left-0"
//                                 alt="Icon mobile signal"
//                                 src={mobileSignal}
//                             />
//                         </div>
//                     </div>

//                     <div className="absolute w-[60px] h-[23px] top-[15px] left-[25px]">
//                         <StatusbarTime
//                             className="!h-[23px] !rounded-[26.46px] !w-[unset]"
//                             darkMode={false}
//                             time="9:41"
//                             timeClassName="!tracking-[-0.35px] !text-[17.6px] ![font-style:unset] !font-semibold ![font-family:'Noto_Sans-SemiBold',Helvetica] !leading-[23.2px] !w-[60px]"
//                             type="default"
//                         />
//                     </div>
//                 </div>

//                 <div className="absolute w-[362px] h-[114px] top-[120px] left-5 rounded-2xl">
//                     <div className="top-[19px] left-5 font-16-16 font-[number:var(--16-16-font-weight)] text-[#18273c] text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         손희주님의 월넷 지갑
//                     </div>

//                     <div className="w-[99px] top-[60px] left-5 font-21-21 font-[number:var(--21-21-font-weight)] text-black text-[length:var(--21-21-font-size)] text-center tracking-[var(--21-21-letter-spacing)] absolute leading-[var(--21-21-line-height)] whitespace-nowrap [font-style:var(--21-21-font-style)]">
//                         231,890원
//                     </div>

//                     <img
//                         className="absolute w-[18px] h-[17px] top-[21px] left-[322px]"
//                         alt="Vector"
//                         src={vector2}
//                     />

//                     <div className="absolute w-[69px] h-8 top-[57px] left-[273px] bg-[#18273c1a] rounded-xl">
//                         <div className="w-[29px] top-1.5 left-5 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#18273c] text-base text-center tracking-[0.50px] absolute leading-[normal] whitespace-nowrap">
//                             충전
//                         </div>
//                     </div>

//                     <div className="absolute w-[69px] h-8 top-[57px] left-[194px] bg-[#18273c1a] rounded-xl">
//                         <div className="w-[29px] top-1.5 left-5 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#18273c] text-base text-center tracking-[0.50px] absolute leading-[normal] whitespace-nowrap">
//                             송금
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute w-[362px] h-[415px] top-[250px] left-5 bg-[#e9eff5] rounded-2xl">
//                     <div className="absolute w-[322px] h-14 top-[339px] left-5 bg-[#98b4e3] rounded-xl">
//                         <div className="w-[88px] top-[18px] left-[117px] font-16-16 font-[number:var(--16-16-font-weight)] text-[#fcfcfd] text-[length:var(--16-16-font-size)] text-center tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                             외화 추가하기
//                         </div>
//                     </div>

//                     <div className="absolute w-12 h-12 top-[73px] left-[34px] bg-[#c8dcfd] rounded-[10px]">
//                         <img
//                             className="absolute w-4 h-7 top-2.5 left-4"
//                             alt="Vector"
//                             src={vector4}
//                         />
//                     </div>

//                     <div className="absolute w-12 h-12 top-[165px] left-[34px] bg-[#c8dcfd] rounded-[10px]">
//                         <img
//                             className="absolute w-[18px] h-[23px] top-[13px] left-[15px]"
//                             alt="Vector"
//                             src={vector12}
//                         />
//                     </div>

//                     <div className="absolute w-12 h-12 top-[257px] left-[34px] bg-[#c8dcfd] rounded-[10px]">
//                         <img
//                             className="absolute w-[21px] h-5 top-3.5 left-[13px]"
//                             alt="Vector"
//                             src={vector13}
//                         />
//                     </div>

//                     <div className="top-[19px] left-5 font-16-16 font-[number:var(--16-16-font-weight)] text-[#283c58] text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         외화 지갑
//                     </div>

//                     <div className="top-[100px] absolute w-[98px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         161,890 USD
//                     </div>

//                     <div className="top-48 absolute w-[98px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         81,605 JPY
//                     </div>

//                     <div className="top-[284px] absolute w-[98px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         1,250 EUR
//                     </div>

//                     <div className="w-[62px] top-[74px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         미국 달러
//                     </div>

//                     <div className="w-[58px] top-[166px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         일본 엔
//                     </div>

//                     <div className="w-[62px] top-[258px] left-24 font-16-16 font-[number:var(--16-16-font-weight)] text-black text-[length:var(--16-16-font-size)] tracking-[var(--16-16-letter-spacing)] absolute leading-[var(--16-16-line-height)] whitespace-nowrap [font-style:var(--16-16-font-style)]">
//                         유럽 유로
//                     </div>

//                     <img
//                         className="absolute w-1 h-4 top-[22px] left-[328px]"
//                         alt="Vector"
//                         src={vector3}
//                     />

//                     <img
//                         className="absolute w-[15px] h-3.5 top-[77px] left-[310px]"
//                         alt="Vector"
//                         src={vector5}
//                     />

//                     <img
//                         className="absolute w-[15px] h-3.5 top-[169px] left-[310px]"
//                         alt="Vector"
//                         src={vector6}
//                     />

//                     <img
//                         className="absolute w-[15px] h-3.5 top-[261px] left-[310px]"
//                         alt="Vector"
//                         src={vector7}
//                     />

//                     <img
//                         className="absolute w-[322px] h-px top-[142px] left-5"
//                         alt="Vector"
//                         src={vector1}
//                     />

//                     <img
//                         className="absolute w-[322px] h-px top-[234px] left-5"
//                         alt="Vector"
//                         src={vector22}
//                     />
//                 </div>

//                 <div className="absolute w-[402px] h-[88px] top-[786px] left-0 bg-[#eff2f5] shadow-[0px_-4px_10px_#c8dcfd]">
//                     <div className="top-[35px] left-[43px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xs tracking-[0] absolute leading-[normal] whitespace-nowrap">
//                         홈
//                     </div>

//                     <div className="top-[35px] left-[121px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xs tracking-[0] absolute leading-[normal] whitespace-nowrap">
//                         월넷지갑
//                     </div>

//                     <div className="top-[35px] left-[231px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xs tracking-[0] absolute leading-[normal] whitespace-nowrap">
//                         외화지갑
//                     </div>

//                     <div className="w-[22px] top-[35px] left-[340px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] absolute leading-[normal] whitespace-nowrap">
//                         환율
//                     </div>

//                     <img
//                         className="absolute w-[22px] h-5 top-2.5 left-[340px]"
//                         alt="Vector"
//                         src={vector8}
//                     />

//                     <img
//                         className="absolute w-[17px] h-[19px] top-2.5 left-10"
//                         alt="Vector"
//                         src={vector9}
//                     />

//                     <img
//                         className="absolute w-5 h-5 top-2.5 left-[132px]"
//                         alt="Vector"
//                         src={vector10}
//                     />

//                     <img
//                         className="absolute w-5 h-5 top-2.5 left-[242px]"
//                         alt="Vector"
//                         src={vector11}
//                     />
//                 </div>

//                 <img
//                     className="absolute w-[111px] h-9 top-[60px] left-5 object-cover"
//                     alt="Image"
//                     src={image54}
//                 />

//                 <img
//                     className="absolute w-[18px] h-[21px] top-[67px] left-[315px]"
//                     alt="Vector"
//                     src={vector}
//                 />

//                 <img
//                     className="absolute w-[21px] h-[21px] top-[67px] left-[355px]"
//                     alt="Vector"
//                     src={image}
//                 />

//                 <HomeIndicator
//                     className="!fixed !left-0 !w-[402px] !top-[853px]"
//                     device="i-phone"
//                     homeIndicatorClassName="!left-[131px] !bg-black"
//                     orientation="portrait"
//                 />
//             </div>
//         </div>
//     );
// };
