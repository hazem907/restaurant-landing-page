import React from "react";
import FeaturedCard from "./FeaturedCard";


export default function Highlights() {
const items = [
{ title: "Fresh & Local", text: "Daily-picked produce and prime cuts." },
{ title: "Fast Delivery", text: "Hot meals to your door in 30–45 min." },
{ title: "Cozy Atmosphere", text: "Warm lighting and friendly staff." },
];
return (
<section className="border-t bg-gray-50/60">
<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
{items.map((f) => (
<FeaturedCard key={f.title} title={f.title} text={f.text} />
))}
</div>
</section>
);
}