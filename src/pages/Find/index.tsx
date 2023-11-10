import Slider from '@/components/Slider/Slider';
import Title from '@/components/Title/Title';
import { getBallApi, getBannerApi } from '@/services/find';
import { Carousel } from 'antd';
import { useEffect, useRef, useState } from 'react';
import './index.less';
interface Banner {
  pic: string;
  url: string | null;
  typeTitle: string;
  [x: string]: any;
}
const Find: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>();
  const getBanners = () => {
    getBannerApi().then((res) => {
      setBanners(res.banners);
    });
  };

  const sliderRef = useRef<HTMLDivElement>(null);
  const [balls, setBalls] = useState([]);
  const getBalls = () => {
    getBallApi().then((res) => {
      setBalls(res.data);
    });
  };

  useEffect(() => {
    getBanners();
    getBalls();
  }, []);

  const tagClick = (item: any) => {
    console.log(item);
  };
  return (
    <div className="bg-[#fff] px-[12px]">
      <Carousel autoplay dots={{ className: 'test' }}>
        {banners?.map((item) => (
          <div key={item.pic} className="relative ">
            <img className="rounded-lg " src={item.pic} alt="" />
            <span className="absolute text-black right-[5px] bottom-[5px] text-[8px] px-[6px] py-[2px] rounded-lg bg-white">
              {item.typeTitle}
            </span>
          </div>
        ))}
      </Carousel>
      <Slider
        handleClick={(item) => tagClick(item)}
        data={balls}
        ref={sliderRef}
      />
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>{' '}
      <section>
        <Title>推荐歌单</Title>
      </section>
    </div>
  );
};

export default Find;
