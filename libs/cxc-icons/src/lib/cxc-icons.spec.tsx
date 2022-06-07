import { render } from '@testing-library/react';

import CxcIcons from './cxc-icons';

describe('CxcIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CxcIcons />);
    expect(baseElement).toBeTruthy();
  });
});
