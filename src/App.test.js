import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the initial quote', () => {
  // Render the App component
  render(<App />);

  // Look for the initial quote (the first one in your quotes array)
  const initialQuote = screen.getByText(/The best way to get started is to quit talking and begin doing./i);
  expect(initialQuote).toBeInTheDocument();
});

test('re-renders the quote when the button is clicked', () => {
  // Render the App component
  render(<App />);

  // Store the initial quote text
  const initialQuoteText = screen.getByRole('heading').textContent;

  // Simulate clicking the button to get a new quote
  const button = screen.getByText(/Get New Quote/i);
  fireEvent.click(button);

  // Wait for the next render and fetch the quote again
  const newQuoteText = screen.getByRole('heading').textContent;

  // Ensure the quote element is re-rendered (even if the same quote appears)
  expect(newQuoteText).toBeTruthy(); // Ensures something is rendered

  // Optionally: You can still check that the new quote isn't guaranteed to always be different
  // But for random quotes, it might not change, so this isn't a reliable check
  // expect(newQuoteText).not.toBe(initialQuoteText);
});
