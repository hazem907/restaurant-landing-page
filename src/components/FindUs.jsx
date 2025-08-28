// import React from "react";


// export default function FindUs() {
// return (
// <section className="mx-auto max-w-6xl px-4 pb-16">
// <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
// <div className="rounded-2xl border p-6">
// <h3 className="text-xl font-semibold">Find Us</h3>
// <p className="mt-2 text-gray-600">Nasr City, Cairo • 12:00–23:00 • 0100 000 0000</p>
// <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gray-100" />
// </div>
// <div className="rounded-2xl border p-6">
// <h3 className="text-xl font-semibold">Contact</h3>
// <p className="mt-2 text-gray-600">For quick orders, message us on WhatsApp or call directly.</p>
// <div className="mt-4 flex flex-wrap gap-3">
// <a href="#" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
// <a href="#" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50">Call Us</a>
// </div>
// </div>
// </div>
// </section>
// );
// }
/////////////////////////////////////////////////////////////////////////////
import React from "react";


// ✅ FindUs: خريطة Google + تفاصيل الاتصال + ساعات العمل + أزرار سريعة
// غيّر القيم اللي تحت حسب بياناتك الفعلية
const ADDRESS = "Nasr City, Cairo";
const PHONE_DISPLAY = "0100 000 0000";
const PHONE_TEL = "+201000000000"; // بصيغة دولية عشان tel:/WhatsApp
const WHATSAPP_NUMBER = "201000000000"; // من غير +
const GMAPS_QUERY = "Saffron Nasr City Cairo"; // اكتب اسم/عنوان مطعمك للبحث


const GMAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(GMAPS_QUERY)}&output=embed`;
const GMAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GMAPS_QUERY)}`;

export default function FindUs() {
return (
<section className="mx-auto max-w-6xl px-4 pb-16">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
<div className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">Find Us</h3>
<p className="mt-2 text-gray-600">Nasr City, Cairo • 12:00–23:00 • 0100 000 0000</p>
<div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gray-100" />
</div>
<div className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">Contact</h3>
<p className="mt-2 text-gray-600">For quick orders, message us on WhatsApp or call directly.</p>
<div className="mt-4 flex flex-wrap gap-3">
<a href="#" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
<a href="#" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50">Call Us</a>
</div>
</div>
</div>
</section>
);
}

