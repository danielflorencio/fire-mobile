import { render } from '@testing-library/react-native';
import React from 'react';
import Tips from '../Tips';

describe('Tips', () => {
  it('renders ', () => {
    const { getByTestId } = render(<Tips />);
    // expect(getByTestId('previewCardTitle')).toHaveTextContent('Test Title');
    const element = getByTestId('tips')
  });

});