/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        // screens: {
        //     'sm': { 'min': '640px', 'max': '739px' },
        //     // => @media (min-width: 640px and max-width: 767px) { ... }

        //     'md': { 'min': '740px', 'max': '1023px' },
        //     // => @media (min-width: 768px and max-width: 1023px) { ... }

        //     'lg': { 'min': '1024px', 'max': '1279px' },
        //     // => @media (min-width: 1024px and max-width: 1279px) { ... }

        //     'xl': '1280px',
        //     // 'xl': { 'min': '1280px', 'max': '1535px' },
        //     // => @media (min-width: 1280px and max-width: 1535px) { ... }

        //     // '2xl': { 'min': '1536px' },
        //     // => @media (min-width: 1536px) { ... }
        // },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "fadeTopToBottom": {
                    "0%": { transform: "translateY(-500px)" },
                    "100%": { transform: "translateY(0px)" },
                },
                "fadeLeftToRight": {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(0px)" },
                },
                "buttonScale": {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                blink: {
                    '0%': { opacity: 0.2 },
                    '20%': { opacity: 1 },
                    '100% ': { opacity: 0.2 }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fadeTopToBottom": "fadeTopToBottom 1.5s ease-in-out",
                "fadeLeftToRight": "fadeLeftToRight 1.5s ease-in-out",
                "buttonScale": "buttonScale 1.5s ease-in-out",
                fadeIn: 'fadeIn .3s ease-in-out',
                carousel: 'marquee 60s linear infinite',
                blink: 'blink 1.4s both infinite'
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}