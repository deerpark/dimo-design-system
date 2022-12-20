import { ReactElement } from 'react';

declare function Button({ children }: {
    children: ReactElement | ReactElement[] | string | undefined;
}): JSX.Element;

declare function Box({ children }: {
    children: ReactElement | ReactElement[] | string | undefined;
}): JSX.Element;

export { Box, Button };
