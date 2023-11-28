import { ReactNode } from 'react';
import { center } from '../../styled-system/patterns';

type LayoutProps = {
  children: ReactNode;
};

const styles = center({
  h: '100vh',
  fontSize: 'x-large',
  bg: `linear-gradient(55deg, rgb(185, 169, 103) 25%, transparent 25%) 0% 0% / 20px 30px,
    linear-gradient(125deg, rgb(185, 169, 103) 25%, transparent 25%),
    linear-gradient(235deg, rgb(185, 169, 103) 25%, transparent 25%),
    linear-gradient(305deg, rgb(185, 169, 103) 25%, transparent 25%) rgb(170, 154, 86);`,
  bgSize: '20px 30px'
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default Layout;
