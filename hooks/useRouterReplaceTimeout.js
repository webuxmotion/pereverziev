import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const useRouterReplaceTimeout = (url, as, delay = 3000) => {
  const disposeId = useRef(null);
  const router = useRouter();
  const { message } = router.query;

  useEffect(
    () => {
      if (message) {
        disposeId.current = setTimeout(() => {
          router.replace(url, as, { shallow: true });
        }, delay);
  
        return () => {
          clearTimeout(disposeId.current);
        }
      }
    },
    [message]
  );

  return message;
};

export default useRouterReplaceTimeout;
