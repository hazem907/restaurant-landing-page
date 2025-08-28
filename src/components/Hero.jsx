import React from "react";
import hero from "../assets/hero.jpg";


export default function Hero() {
return (
<section id="home" className="relative">
<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
<div>
<h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
Taste the Essence of <span className="text-amber-600">Mediterranean</span>
</h1>
<p className="mt-4 max-w-prose text-gray-600">
Fresh ingredients, handcrafted dishes, and cozy vibes. Dine in, pick up, or get it delivered.
</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a href="#menu" className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-700">
View Menu
</a>
<a href="#reserve" className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-gray-50">
Book a Table
</a>
</div>
<p className="mt-3 text-xs text-gray-500">Open daily • 11:00–23:00 • Nasr City</p>
</div>


{/* Real hero image */}
<div className="relative">
<img
src={hero}
alt="Mediterranean dishes on a table"
width="1600"
height="1400"
className="w-full rounded-2xl object-cover aspect-[3/4] border"
loading="eager"
/>
</div>
</div>
</section>
);
}