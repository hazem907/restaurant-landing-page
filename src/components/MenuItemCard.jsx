import React from "react";


export default function MenuItemCard({ name, price, desc, img, w = 1200, h = 900 }) {
return (
<div className="rounded-2xl border bg-white p-5">
{img ? (
<img
src={img}
alt={name}
width={w}
height={h}
className="mb-3 w-full aspect-[4/4] object-cover rounded-xl"
loading="lazy"
/>
) : (
<div className="mb-3 aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-amber-50 to-orange-50" />
)}
<div className="flex items-start justify-between">
<h3 className="text-base font-semibold">{name}</h3>
<span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{price}</span>
</div>
<p className="mt-2 text-sm text-gray-600">{desc}</p>
</div>
);
}