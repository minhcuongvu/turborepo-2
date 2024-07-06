import { Button } from '../button/button';
import styles from './footer-button.module.css';

export const FooterButton = ({
  children,
}: {
  children?: React.ReactNode | any;
}) => {
  return (
    <>
      <div className={styles['footer-button']}>
        <Button type="button" appName="web">
          Info
        </Button>
      </div>
    </>
  );
};
