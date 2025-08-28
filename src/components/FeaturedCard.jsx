import React from "react";


export default function FeaturedCard({ title, text }) {
return (
<div className="rounded-2xl border bg-white p-6">
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-2 text-gray-600">{text}</p>
</div>
);
}