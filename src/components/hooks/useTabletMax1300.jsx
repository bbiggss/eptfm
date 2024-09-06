import { useMediaQuery } from 'react-responsive';

const useLongTablet = () => {
  const isTablet = useMediaQuery({ query: '(min-width:1025px) and (max-width:1300px)' });

  return isTablet;
};

export default useLongTablet;
