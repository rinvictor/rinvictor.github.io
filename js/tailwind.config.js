// Tailwind (CDN) theme. Must be loaded after the Tailwind CDN script.
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                background: '#FAFAFA',
                surface: '#FFFFFF',
                primary: '#111827',
                muted: '#6B7280',
                accent: '#2563EB'
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'floating': '0 20px 40px -10px rgba(0, 0, 0, 0.08)'
            }
        }
    }
};
