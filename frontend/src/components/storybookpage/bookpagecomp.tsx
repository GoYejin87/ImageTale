import React from "react";
import { StoryBookData } from "../../types/storybooktypes";

interface BookPageProps {
  curPage: StoryBookData;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  leftArrowFlag: boolean;
  rightArrowFlag: boolean;
}

export default function BookPageComponent({
  curPage,
  prevBtnHandler,
  nextBtnHandler,
  leftArrowFlag,
  rightArrowFlag,
}: BookPageProps): React.JSX.Element {
  return (
    <div className="w-full h-full absolute px-14 pt-7 pb-[5rem]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex w-full h-full justify-center relative">
          <button
            onClick={prevBtnHandler}
            disabled={!leftArrowFlag}
            className="mr-4 px-4 py-2 opacity-80 disabled:opacity-50 absolute bottom-5 xl:left-14 lg:left-7 md:left-5 sm:left-1 left-0"
          >
            <img src="/img/right-arrow.png" alt="previous page button" className="w-20 h-14 rotate-180" />
          </button>

          <img src={curPage.image} alt="storybook" className="rounded-2xl shadow-2xl shadow-stone-600 w-2/3" />

          <button
            onClick={nextBtnHandler}
            disabled={!rightArrowFlag}
            className="ml-4 px-4 py-2 opacity-80 disabled:opacity-50 absolute bottom-5 xl:right-14 lg:right-7 md:right-5 sm:right-1 right-0"
          >
            <img src="/img/right-arrow.png" alt="next page button" className="w-20 h-14" />
          </button>
        </div>

        <div className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden">
          <div className="m-10">
            <p className="text-xl break-words">{curPage.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}