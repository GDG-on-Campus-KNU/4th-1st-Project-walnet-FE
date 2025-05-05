import PayForm from "../../components/Pay/PayForm";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useUIStore } from "../../stores/uiStore";

const MainPage = () => {
  const { isPayFormVisible, showPayForm, hidePayForm } = useUIStore();

  return (
    <div className="flex flex-col justify-between min-h-screen overflow-y-auto pt-[60px] pb-[64px]">
      <div className="flex-grow px-5">
        <div className="p-5 h-[124px] rounded-2xl bg-gradient-to-r from-[#D9E7FF] to-[#C8DCFD] space-y-5">
          <div className="flex justify-between items-center">
            <div className="text-base">{"test"}님의 월넷 지갑</div>
            <img
              src="/assets/png/별.png"
              alt="star"
              className="w-[18px] h-[17px]"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xl mt-2">
              {1111}
              {"원"}
            </div>
            <div className="flex items-center space-x-2.5">
              <button className="w-[69px] h-[32px] rounded-xl bg-[#18273C]/10 text-base text-[#1F2937] flex justify-center items-center">
                송금
              </button>
              <button className="w-[69px] h-[32px] rounded-xl bg-[#18273C]/10 text-base text-[#1F2937] flex justify-center items-center">
                충전
              </button>
            </div>
          </div>
        </div>

        {/* 외화 지갑 */}
        <div className="h-[415x] mt-6 rounded-2xl bg-[#E9EFF6] p-5 ">
          <div className="pb-2 flex justify-between">
            <h2 className="text-base">외화 지갑</h2>
            <div>더보기</div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center py-2 pl-3.5">
              <div className="flex items-center space-x-3.5">
                <img
                  src="/assets/png/달러그림.png"
                  alt="dollar"
                  className="w-[48px] h-[48px]"
                />
                <div className="text-base flex flex-col">
                  <span>미국 달러</span>
                  <span>{1111} USD</span>
                </div>
              </div>
              <img
                src="/assets/png/빈별.png"
                alt="emptystar"
                className="w-[16px] h-[15px]"
              />
            </div>

            <hr className="border-t border-gray-300 my-2" />

            <div className="flex justify-between items-center py-2 pl-3.5">
              <div className="flex items-center space-x-3.5">
                <img
                  src="/assets/png/엔화그림.png"
                  alt="yen"
                  className="w-[48px] h-[48px]"
                />
                <div className="text-base flex flex-col">
                  <span>일본 엔</span>
                  <span>{1111} JPY</span>
                </div>
              </div>
              <img
                src="/assets/png/빈별.png"
                alt="emptystar"
                className="w-[16px] h-[15px]"
              />
            </div>

            <hr className="border-t border-gray-300 my-2" />

            <div className="flex justify-between items-center py-2 pl-3.5">
              <div className="flex items-center space-x-3.5">
                <img
                  src="/assets/png/유로그림.png"
                  alt="euro"
                  className="w-[48px] h-[48px]"
                />
                <div className="text-base flex flex-col">
                  <span>유럽 유로</span>
                  <span>{1111} EUR</span>
                </div>
              </div>
              <img
                src="/assets/png/빈별.png"
                alt="emptystar"
                className="w-[16px] h-[15px]"
              />
            </div>
          </div>
          <button className="w-full h-[56px] bg-[#98B4E3] text-[#FCFCFD] py-3 rounded-xl text-base mt-6">
            외화 추가하기
          </button>
        </div>
      </div>
      {/* 결제하기 버튼 */}
      <div className="fixed bottom-[64px] left-0 right-0 max-w-[400px] mx-auto z-20">
        <button
          className="w-full h-[64px] bg-[#283C58] text-[#FCFCFD] rounded-t-2xl text-base"
          onClick={showPayForm}
        >
          결제하기
        </button>
      </div>
      <AnimatePresence>
        {isPayFormVisible && (
          <>
            {/* 딤처리: Header까지 덮음 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={hidePayForm}
            />

            {/* PayForm 슬라이딩 */}
            <motion.div
              className="fixed left-0 right-0 bottom-0 z-40 h-[80vh] bg-white rounded-t-3xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(
                _event: MouseEvent | TouchEvent | PointerEvent,
                info: PanInfo
              ) => {
                if (info.offset.y > 150) {
                  hidePayForm();
                }
              }}
            >
              <PayForm onClose={hidePayForm} hasHeader={false} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainPage;
