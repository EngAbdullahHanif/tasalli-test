import React from "react";
import Board from "./board/board";
import Chat from "./chat/chat";
import SmallChat from "./chat/small-chat";
import Chart from "./chart/chart";

function FirstBlock() {
  return (
    <>
      <div class="bg-custompink">
        <div className="mx-[8rem] flex flex-row p-10  ">
          <div className="flex flex-row">
            <Board />
            <img
              src="/student-avatar-1.png"
              className="w-[25rem] mt-[7rem]"
              alt=""
            />
          </div>
          <Chat />
          <SmallChat />
        </div>
        <div className="mx-[8rem] flex flex-row p-10">
          <Chart rotateValue={10} value={10} stars={4} />
          <></>
          <Chart rotateValue={-15} value={28} stars={5} />
          <></>
          <Chart rotateValue={20} value={49} stars={4} />
          <></>
          <Chart rotateValue={-20} value={28} stars={3} />
          <Chart rotateValue={25} value={15} stars={1} />
        </div>
      </div>
    </>
  );
}

export default FirstBlock;
