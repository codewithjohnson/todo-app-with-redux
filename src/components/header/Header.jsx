import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">ToDo App with Redux</h2>
    </header>
  );
};

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
