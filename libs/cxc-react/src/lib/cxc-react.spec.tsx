import { render } from '@testing-library/react';

import CxcReact from './cxc-react';

describe('CxcReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CxcReact />);
    expect(baseElement).toBeTruthy();
  });
});
