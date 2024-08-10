import { render } from '@testing-library/react';
import { describe, expect, it  } from 'vitest';
import { Status } from './Status';

describe('Status', () => {
    it('renders the Status component', () => {
        render(<Status data='TEST' />);

        expect(2).toEqual(2);
    })
});