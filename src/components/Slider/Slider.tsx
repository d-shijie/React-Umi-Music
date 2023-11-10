import React, { useEffect, useRef } from 'react';
interface Props {
  data: any[];
  handleClick: (data: any) => void;
}
const Slider = React.forwardRef((props: Props, ref) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    console.log(props);
  }, []);

  React.useImperativeHandle(ref, () => ({}));

  return (
    <div className="h-[78px] relative">
      <div
        className="my-[12px] h-[68px] w-full relative overflow-x-auto bg-red"
        ref={scrollerRef}
      >
        {props.data.map((item, index) => (
          <div
            onClick={() => props.handleClick(item)}
            key={item.id}
            style={{ transform: `translateX(${index * 100}%)` }}
            className="w-[20%] absolute flex justify-center items-center py-[6px] flex-col"
          >
            <img
              className="w-[40%] bg-[#e94d51] rounded-md"
              src={item.iconUrl}
              alt=""
            />
            <div className="mt-[6px] text-[10px] text-[#808592]">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bg-[#f5e6e8] w-[24px] rounded-full bottom-[6px] left-[50%] translate-x-[-50%]">
        <div
          style={{
            width: (5 / props.data.length) * 100 + '%',
            transform: `translateX(100%)`,
          }}
          className="h-[4px] rounded-full bg-[#e94d51]"
        ></div>
      </div>
    </div>
  );
});

export default Slider;
