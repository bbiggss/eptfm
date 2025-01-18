import { useMediaQuery } from 'react-responsive';

const useOnlyPc = () => {
  const isOnlyPc = useMediaQuery({ query: '(min-width: 1556px)' });
  return isOnlyPc;
};

export default useOnlyPc;
