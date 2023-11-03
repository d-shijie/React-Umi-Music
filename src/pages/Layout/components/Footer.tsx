import { Icon, useNavigate } from '@umijs/max';
import { useState } from 'react';
type Tab = {
  icon: any;
  activeIcon: any;
  name: string;
  path: string;
};
const tabs: Tab[] = [
  {
    icon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:find" />
    ),
    activeIcon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:find_active" />
    ),
    name: '发现',
    path: '/layout/find',
  },
  {
    icon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:dj" />
    ),
    activeIcon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:dj_active" />
    ),
    name: '播客',
    path: '/layout/dj',
  },
  {
    icon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:my_music" />
    ),
    activeIcon: (style?: any) => (
      <Icon
        style={style}
        width="24px"
        height="24px"
        icon="local:my_music_active"
      />
    ),
    name: '我的',
    path: '/layout/my',
  },
  {
    icon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:follow" />
    ),
    activeIcon: (style?: any) => (
      <Icon
        style={style}
        width="24px"
        height="24px"
        icon="local:follow_active"
      />
    ),
    name: '关注',
    path: '/layout/follow',
  },
  {
    icon: (style?: any) => (
      <Icon style={style} width="24px" height="24px" icon="local:community" />
    ),
    activeIcon: (style?: any) => (
      <Icon
        style={style}
        width="24px"
        height="24px"
        icon="local:community_active"
      />
    ),
    name: '社区',
    path: '/layout/community',
  },
];
export default function Footer() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabClick = (item: Tab, index: number) => {
    setCurrentIndex(index);
    navigate({
      pathname: item.path,
    });
  };
  return (
    <div
      style={{ borderTop: '1px solid #f1f1f4' }}
      className="bg-[#fff] absolute bottom-0 h-[64px] w-full flex justify-between items-center"
    >
      {tabs.map((item, index) => (
        <div
          onClick={() => tabClick(item, index)}
          key={item.path}
          className="flex-1 flex flex-col items-center justify-center"
        >
          {currentIndex === index
            ? item.activeIcon({ transform: 'scale(1.2)' })
            : item.icon()}
          <div
            style={{ color: currentIndex === index ? '#ee6f69' : '' }}
            className="text-[12px] text-[#a6abb4] mt-[4px]"
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
