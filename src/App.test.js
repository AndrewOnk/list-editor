import React from 'react';
import { render } from '@testing-library/react';
import expect from 'expect';
import App from './App';

describe('App Component', () => {
  it('Should render header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/A Nested List Editor/i);
    expect(header).toBeInTheDocument();
  });

  it('Should render list', () => {
    const { container } = render(<App />)
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument();
  });
});