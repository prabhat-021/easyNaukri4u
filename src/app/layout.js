import './globals.css';
import LayoutWrapper from './layout-wrapper';

export const metadata = {
  title: 'EasyNaukri4u - Government Job Updates',
  description: 'Get latest updates on government jobs, results, and admit cards',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
