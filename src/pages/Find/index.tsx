import { Card } from 'antd';

const HomePage: React.FC = () => {
  return (
    <div>
      <Card className="flex justify-center items-center">
        <div className="text-[#333a4e] text-[18px] tracking-wide font-bold">
          伤心时要听慢歌
        </div>
        <div className="text-[#9b9fa9] mt-[4px] flex justify-center">
          <span>3 关注</span>
          <span className="mx-[10px]">4 粉丝</span>
          <span>Lv.9</span>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
