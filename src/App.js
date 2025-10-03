import { jsx as _jsx } from "react/jsx-runtime";
import { HeroBanner } from './components/HeroBanner/HeroBanner';
export function App() {
    return (_jsx("div", { children: _jsx(HeroBanner, { title: [
                { text: 'Leading the Way in App', highlight: true },
                { text: 'Development Innovation', highlight: true },
            ], subtitle: "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.", cta: { label: 'GET A FREE QUOTE', href: '#' }, phone: { label: '+1 (800) 826-8018', href: 'tel:+18008268018' }, nav: ['HOME', 'About', 'Services', 'Why Choose Us', 'Portfolio', 'Products', 'Testimonial', 'Technologies', 'Contact'], mockupImages: {
                primary: '/phone-main.png',
                secondary: '/phone-secondary.png',
            } }) }));
}
