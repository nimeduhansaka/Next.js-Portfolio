import './global.css';
import DockBar from "@/components/DockBar"

export const metadata = {
    title: 'Portfolio',
    description: 'Personal site'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {children}
        <DockBar />
        </body>
        </html>
    );
}

