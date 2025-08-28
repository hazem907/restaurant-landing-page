import React from "react";


export default function ReserveSection() {
return (
<section id="reserve" className="mx-auto max-w-6xl px-4 py-16">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
<div className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">Reserve a Table</h3>
<p className="mt-2 text-gray-600">Leave your info and we'll confirm shortly.</p>
<form className="mt-4 grid grid-cols-1 gap-3">
<input className="rounded-xl border px-3 py-2" placeholder="Your name" />
<input className="rounded-xl border px-3 py-2" placeholder="Phone number" />
<input className="rounded-xl border px-3 py-2" placeholder="Date & time" />
<button type="button" className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">
Send Request
</button>
</form>
</div>


<div className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">Special Events</h3>
<p className="mt-2 text-gray-600">Birthday? Business dinner? Ask about our set menus and decorations.</p>
<ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
<li>Group tables up to 12</li>
<li>Outdoor seating (seasonal)</li>
<li>Vegetarian & gluten‑free options</li>
</ul>
</div>
</div>
</section>
)}