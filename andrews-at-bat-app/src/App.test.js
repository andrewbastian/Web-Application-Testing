import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';


describe('<Dashboard />', () => {

    it("displaying strikes", () => {

      const { getAllByText }  = render(<Dashboard />);

      const strikes = getAllByText(/strike/i);

      fireEvent.click(strikes);

      expect(strikes);
    })

    it("displaying balls", () => {

      const { getAllByText } = render(<Dashboard />);

      const balls = getAllByText(/ball/i);

      fireEvent.click(balls);

      expect(balls);
    })

  });
