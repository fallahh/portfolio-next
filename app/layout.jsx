import './globals.css';

export const metadata = {
  title: 'Personal Portfolio — Esa Fallah Royani',
  description: 'Personal portfolio for engineering, research, projects and professional work.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
