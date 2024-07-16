const BlueBtn = "default-btn text-2xl h-[50px] font-semibold main-blue-btn w-full";
const RedBtn = "default-btn text-2xl h-[50px] font-semibold w-full";

interface LeaderBoardHeaderProps {
  listOptions: boolean;
  setListOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeaderBoardHeader = ({
  listOptions,
  setListOptions,
}: LeaderBoardHeaderProps) => {
  return (
    <div className="w-full flex items-center gap-2.5">
      <button
        className={!listOptions ? RedBtn : BlueBtn}
        onClick={() => setListOptions(false)}
      >
        1vs9
      </button>
      <button
        className={listOptions ? RedBtn : BlueBtn}
        onClick={() => setListOptions(true)}
      >
        1vs1
      </button>
    </div>
  );
};

export default LeaderBoardHeader;
