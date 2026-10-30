"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/", label: "Home" }, { href: "/about-me", label: "About" }, { href: "/clinic", label: "Clinic" }, { href: "/news", label: "Health Info" }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-30"><div className="shell flex h-24 items-center justify-between"><Link href="/" className="leading-none"><span className="font-serif text-3xl tracking-tight">Vishwaratna</span><span className="ml-1 text-[9px] font-extrabold uppercase tracking-[.17em] text-tide">Speciality Clinic</span></Link><nav className="hidden items-center gap-8 md:flex">{links.map(l => <Link className="text-sm font-bold text-ink/70 transition hover:text-tide" href={l.href} key={l.href}>{l.label}</Link>)}</nav><div className="hidden md:block"><Link href="/consultation" className="btn-primary !py-3">Book Appointment</Link></div><button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden"><Menu /></button></div>{open && <div className="shell rounded-b-3xl bg-white p-6 shadow-float md:hidden"><button onClick={() => setOpen(false)} aria-label="Close menu" className="float-right"><X /></button><nav className="flex flex-col gap-5">{links.map(l => <Link onClick={() => setOpen(false)} className="text-lg font-bold" href={l.href} key={l.href}>{l.label}</Link>)}<a href="tel:+919999999999" className="flex items-center gap-2 text-tide"><Phone size={16}/> Contact Us</a><Link onClick={() => setOpen(false)} href="/consultation" className="btn-primary">Book Appointment</Link></nav></div>}</header>;
}
