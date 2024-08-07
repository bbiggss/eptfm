import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroImg = styled.img`
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const HeroImg = (data) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      const handleLoad = () => {
        setIsLoaded(true);
      };
      img.addEventListener('load', handleLoad);

      return () => {
        img.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return <StyledHeroImg ref={imgRef} src={data.src} alt="" />;
};

export default HeroImg;
