import React from "react";
import { dishes } from "../data/menu";
import MenuItemCard from "./MenuItemCard";


export default function MenuSection() {
return (
<section id="menu" className="mx-auto max-w-6xl px-4 py-16">
<div className="mb-8 text-center">
<h2 className="text-2xl font-bold md:text-3xl">Popular Dishes</h2>
<p className="mt-2 text-gray-600">A small selection—add yours easily.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
{dishes.map((item) => (
<MenuItemCard key={item.name} {...item} />
))}
</div>
</section>
);
}