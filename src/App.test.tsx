import { render, screen } from '@testing-library/react';
import App from './App';


describe(`App test`, () => {
  test('should App is correctly rendered', () => {
    render(<App />);
    screen.getByPlaceholderText(/first name.../i);
    screen.getByRole('textbox', {
      name: /User name:/i
    })
  });
});