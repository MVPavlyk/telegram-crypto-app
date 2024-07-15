const BlueBtn = "default-btn main-blue-btn p-5 w-full";
const RedBtn = "default-btn p-5 w-full";

interface LeaderBoardHeaderProps {
  listOptions: boolean;
  setListOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeaderBoardHeader = ({
  listOptions,
  setListOptions,
}: LeaderBoardHeaderProps) => {
  return (
    <div className="w-full relative items-center">
    <div className="w-full flex items-center justify-evenly fixed top-8 left-0 px-10 gap-5">
      <button
        className={!listOptions ? RedBtn : BlueBtn}
        onClick={() => setListOptions(false)}
      >
        1 VS 9
      </button>
      <button
        className={listOptions ? RedBtn : BlueBtn}
        onClick={() => setListOptions(true)}
      >
        1 VS 1
      </button>
    </div>
    </div>
  );
};

export default LeaderBoardHeader;
