import React, { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);
const nav = [
{ href: "#menu", label: "Menu" },
{ href: "#about", label: "About" },
{ href: "#reserve", label: "Reserve" },
{ href: "#contact", label: "Contact" },
];


return (
<header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
<a href="#home" className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-amber-600" />
<span className="text-lg font-bold">Saffron</span>
</a>


{/* Desktop nav */}
<nav className="hidden items-center gap-6 md:flex">
{nav.map((n) => (
<a key={n.href} href={n.href} className="text-sm font-medium text-gray-600 hover:text-gray-900">
{n.label}
</a>
))}
<a
href="#reserve"
className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
>
Book Now
</a>
</nav>


{/* Mobile button */}
<button
onClick={() => setOpen((v) => !v)}
className="inline-flex items-center justify-center rounded-xl border px-3 py-2 md:hidden"
aria-label="Toggle menu"
>
{open ? (
<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
<path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
</svg>
) : (
<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
<path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
</svg>
)}
</button>
</div>


{/* Mobile nav */}
{open && (
<div className="border-t md:hidden">
<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
{nav.map((n) => (
<a
key={n.href}
href={n.href}
onClick={() => setOpen(false)}
className="rounded-lg px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
>
{n.label}
</a>
))}
<a
href="#reserve"
onClick={() => setOpen(false)}
className="rounded-lg bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-amber-700"
>
Book Now
</a>
</div>
</div>

)}
</header>
)}