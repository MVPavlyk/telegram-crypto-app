const LeaderboardIcon = ({ isSelected }: { isSelected: boolean }) => {
  const mainColor = isSelected ? '#FF9E0D' : '#FFFFFF';

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_534_22)'>
        <path
          d='M16.4286 10.1429H22.1429C22.774 10.1429 23.2857 10.6545 23.2857 11.2857V21C23.2857 21.6312 22.774 22.1429 22.1429 22.1429H16.4286M16.4286 10.1429V22.1429M16.4286 10.1429V2.14286C16.4286 1.51168 15.9169 1 15.2857 1H9.57143C8.94025 1 8.42857 1.51167 8.42857 2.14286V7.85714M16.4286 22.1429H8.42857M8.42857 22.1429H2.14286C1.51167 22.1429 1 21.6312 1 21V9C1 8.36882 1.51167 7.85714 2.14286 7.85714H8.42857M8.42857 22.1429V7.85714'
          stroke={mainColor}
          strokeWidth='1.5'
        />
      </g>
      <defs>
        <clipPath id='clip0_534_22'>
          <rect width='24' height='24' fill={mainColor} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LeaderboardIcon;
