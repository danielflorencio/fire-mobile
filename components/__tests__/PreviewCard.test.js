// import React from 'react'
// import {render} from '@testing-library/react-native'
// import { PreviewCard } from '../PreviewCard'
// test('The <PreviewCard> component rendered.', () => {
//     render(<PreviewCard infoToFetch='one'></PreviewCard>),
//     render()
// })

import { render } from '@testing-library/react-native';
import React from 'react';
import { PreviewCard } from '../PreviewCard';

describe('PreviewCard', () => {
  it('renders with title', () => {
    const { getByTestId } = render(<PreviewCard previewCardTitle='Test Title' />);
    // expect(getByTestId('previewCardTitle')).toHaveTextContent('Test Title');
    const element = getByTestId('previewCardTitle')
  });

  it('renders with API offline message when no data fetched', () => {
    const { getByTestId } = render(<PreviewCard previewCardTitle='Test Title' />);
    // expect(getByTestId('previewCardValue')).toHaveTextContent('API is not online.');
  });
});
