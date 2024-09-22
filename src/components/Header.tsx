import { ReactNode } from "react";
import headert from "./Header.module.css"

type Props = {
  children: ReactNode;
};

function Header({ children }: Props) {
  return (
    <>
    <header className={headert.encabezado}>
    {children}

    </header>
  
 
    
    </>
  );
}

export default Header;
