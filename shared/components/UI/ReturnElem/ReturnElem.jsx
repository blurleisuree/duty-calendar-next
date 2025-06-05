'use client';

import { useRouter } from 'next/navigation';
import useViewTransition from '@shared/hooks/useViewTransition';

function ReturnElem({ children, path }) {
  const router = useRouter();

  const withTransition = useViewTransition();
  const handleGoBack = withTransition(() => router.back());

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center justify-between cursor-pointer"
    >
      <img src={'icons/arrowLeft.svg'} alt="arrow" />
      <span className="text-xl text-active font-300 ml-2">{children}</span>
    </button>
  );
}

export default ReturnElem;
