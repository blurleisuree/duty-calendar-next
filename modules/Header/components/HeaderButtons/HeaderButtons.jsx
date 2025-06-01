'use client';

import Link from 'next/link';

import HeaderButton from '../HeaderButton/HeaderButton';

// import useOpenExitModal from "@shared/hooks/useOpenExitModal.jsx";
// import { useAuthStore } from "../../../Auth/index";

function HeaderButtons({ className }) {
  // const logout = useAuthStore((state) => state.logout);

  // const openExitModal = useOpenExitModal(logout);

  return (
    <div className={`${className} flex items-center flex-1 justify-end`}>
      {/* <HeaderButton src={exitIcons} handleClick={openExitModal} alt="exit" /> */}
      <HeaderButton src={'icons/exit.svg'} alt="exit" />

      <Link href="/admin" className="ml-4 p-1 box-content">
        <HeaderButton
          src={'icons/settings.svg'}
          className="w-4"
          alt="settingsIcon"
        />
      </Link>
    </div>
  );
}

export default HeaderButtons;
