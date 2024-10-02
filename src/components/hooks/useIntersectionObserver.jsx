import { useEffect, useRef } from 'react';

const useIntersectionObserver = () => {
  const refs = useRef([]);
  useEffect(() => {
    // Intersection Observer 콜백 함수
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 텍스트가 화면에 들어올 때 애니메이션 클래스 추가
          entry.target.classList.add('animate');
        } else {
          // 텍스트가 화면에서 벗어나면 클래스 제거 (반복을 위해)
          entry.target.classList.remove('animate');
        }
      });
    };

    // 옵저버 옵션 설정
    const observerOptions = {
      root: null, // 뷰포트를 기준으로 감시
      threshold: 0.1, // 텍스트가 10% 이상 보일 때 애니메이션 트리거
    };

    // 옵저버 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // // 텍스트 요소 감시 시작
    // if (textRef.current) {
    //   observer.observe(textRef.current);
    // }

    // // 컴포넌트 언마운트 시 옵저버 해제
    // return () => {
    //   if (textRef.current) {
    //     observer.unobserve(textRef.current);
    //   }
    // };
    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return refs;
};

export default useIntersectionObserver;
