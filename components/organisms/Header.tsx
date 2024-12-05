import Image from 'next/image';

import trello from 'assets/trello.png';

const Header = () => (
  <header>
    <nav className="flex h-[40px] w-full items-center justify-center bg-[#111111]">
      <div className="flex h-[30px] items-center justify-center">
        <Image
          src={trello}
          alt="Trello Logo"
          className="!min-h-[30px] !min-w-[80px] cursor-pointer opacity-50 hover:opacity-80"
          height={30}
          width={80}
        />
      </div>
    </nav>
  </header>
);

export default Header;
