const UserIcon = ({isSelected}: { isSelected: boolean }) => {
    const mainColor = isSelected ? '#FF9E0D' : '#FFFFFF'

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 19.25C1 17.7913 1.57946 16.3924 2.61091 15.3609C3.64236 14.3295 5.04131 13.75 6.5 13.75H17.5C18.9587 13.75 20.3576 14.3295 21.3891 15.3609C22.4205 16.3924 23 17.7913 23 19.25C23 19.9793 22.7103 20.6788 22.1945 21.1945C21.6788 21.7103 20.9793 22 20.25 22H3.75C3.02065 22 2.32118 21.7103 1.80546 21.1945C1.28973 20.6788 1 19.9793 1 19.25Z"
                stroke={mainColor} strokeWidth="1.6" strokeLinejoin="round"/>
            <path
                d="M12 10.25C14.2782 10.25 16.125 8.40317 16.125 6.125C16.125 3.84683 14.2782 2 12 2C9.72183 2 7.875 3.84683 7.875 6.125C7.875 8.40317 9.72183 10.25 12 10.25Z"
                stroke={mainColor} strokeWidth="1.6"/>
        </svg>

    );
};

export default UserIcon;