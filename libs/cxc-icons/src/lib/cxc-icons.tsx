import styles from './cxc-icons.module.scss';

/* eslint-disable-next-line */
export interface CxcIconsProps {}

export function CxcIcons(props: CxcIconsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CxcIcons!</h1>
    </div>
  );
}

export default CxcIcons;
