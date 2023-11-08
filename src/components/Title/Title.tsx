import { PropsWithChildren } from 'react';

interface Props {
  prefix?: any;
  suffix?: any;
}
const Title = (props: PropsWithChildren<Props>) => {
  return (
    <div className="py-[4px] ">
      <span className="text-18px] tracking-wide font-bold">
        {' '}
        {props.children}
      </span>
    </div>
  );
};

export default Title;
