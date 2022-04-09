import { render, screen } from '@testing-library/react';
import App from './App';


describe(`App test`, () => {
  test('should App is correctly rendered', () => {
    render(<App />);
    screen.getByRole('button', {
      name: /hello world!/i
    })
  });
});