import React from "react";


export default function Footer() {
return (
<footer id="contact" className="border-t">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
<p className="text-sm text-gray-500">© {new Date().getFullYear()} Saffron. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-gray-600">
<a href="#" className="hover:text-amber-700">Instagram</a>
<a href="#" className="hover:text-amber-700">Facebook</a>
<a href="#" className="hover:text-amber-700">WhatsApp</a>
</div>
</div>
</footer>
);
}