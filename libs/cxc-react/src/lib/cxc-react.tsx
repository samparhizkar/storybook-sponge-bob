import styles from './cxc-react.module.scss';

/* eslint-disable-next-line */
export interface CxcReactProps {}

export function CxcReact(props: CxcReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CxcReact!</h1>
    </div>
  );
}

export default CxcReact;
