'use client';

// import { CategoryTrigger } from "../../../Category/index";

// import OrgSelector from "@shared/components/OrgSelector/OrgSelector";
import ReturnElem from '@shared/components/UI/ReturnElem/ReturnElem';
import Logo from '@shared/components/UI/Logo/Logo';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

// import useValidateIsoDate from "@shared/hooks/useValidateISODate";

import HeaderButtons from '../HeaderButtons/HeaderButtons';

function Header() {
  // const { date } = useParams();
  const pathname = usePathname();
  // const isDateValid = useValidateIsoDate(date);

  // const displayYear = date && isDateValid ? date.slice(0, 4) : "";

  // const showOrgSelector = pathname !== "/admin";

  return (
    <div className="flex flex-col w-full pt-9 pb-7 px-5 border-b border-b-line">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          {date && <ReturnElem path="/calendar">{displayYear}</ReturnElem>}
          {pathname === '/admin' && <ReturnElem path="-1"></ReturnElem>}
        </div>
        <Link href="/admin" className="flex-0">
          <Logo
            type="mini"
            className="cursor-pointer active:opacity-40 transition"
          />
        </Link>
        <HeaderButtons />
      </div>
      {/* {showOrgSelector && <CategoryTrigger className='mt-5'/>} */}
      {/* {showOrgSelector && <OrgSelector />} */}
    </div>
  );
}

export default Header;
