import PageLayout from "../../components/layouts/PageLayout";
import {useState} from "react";

const LeaderboardPage = () => {
    const [selectedList, setSelectedList] = useState<'1vs9' | '1vs1'>('1vs9')

    const topButtons: ('1vs9' | '1vs1')[] = ['1vs9', '1vs1']

    return (
        <PageLayout>
            <div className='h-full max-h-full w-full pb-[90px] px-5 pt-[30px]'>
                <div className='grid items-center grid-cols-2 w-full gap-2.5'>
                    {topButtons.map((type) =>
                        <button
                            onClick={() => setSelectedList(type)}
                            style={{background: type !== selectedList ? '#1F2135' : ''}}
                            className='default-btn h-[50px] text-2xl font-semibold'
                        >
                            {type}
                        </button>
                    )}
                </div>
                <div className='h-[calc(100%-50px)] bg-white pt-[30px] pb-5'>

                </div>
            </div>
        </PageLayout>
    );
};

export default LeaderboardPage;
