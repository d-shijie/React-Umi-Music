import { PropsWithChildren } from 'react';

interface Props {
  key?: string;
}
const Button = (props: PropsWithChildren<Props>) => {
  return (
    <div className="border-[1px] py-[4px] px-[8px] text-[12px] text-[#d0bcb6]  rounded-full border-solid border-[#827370]">
      {props.children}
    </div>
  );
};
export default Button;
