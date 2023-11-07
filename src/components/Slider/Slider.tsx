import React, { useEffect } from 'react';
interface Props {
  data: any[];
}
const Slider = React.forwardRef((props: Props, ref) => {
  useEffect(() => {
    console.log(props);
  }, []);

  React.useImperativeHandle(ref, () => ({
    test: '1111',
  }));
  return <div className="my-[12px]">1111111</div>;
});

export default Slider;
