import './global.css';
import DockBar from "@/components/DockBar"

export const metadata = {
    title: 'Portfolio',
    description: 'Nimedu Hansaka Personal site',
    icons: {
        icon: '/icon.svg',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning >
        <body suppressHydrationWarning >
        {children}
        <DockBar />
        </body>
        </html>
    );
}

