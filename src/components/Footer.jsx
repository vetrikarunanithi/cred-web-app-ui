import React from "react";
import { FOOTER_LINKS } from "../data/mockData";
import { 
  RiFacebookCircleLine, 
  RiInstagramLine, 
  RiTwitterXLine, 
  RiLinkedinBoxLine, 
  RiAppleFill, 
  RiGooglePlayFill 
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer id="download" className="bg-[#080808] border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-white/5">
          <div className="lg:col-span-6 space-y-6 text-left">
            <a href="#" className="font-outfit text-3xl font-black tracking-[0.25em] text-white">
              CRED
            </a>
            <p className="font-plus-jakarta text-zinc-500 text-sm max-w-sm leading-relaxed">
              CRED is a members-only club that rewards financial discipline. Experience premium features and exclusive cards that help you manage your funds with luxury.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 lg:justify-end items-center w-full">
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 bg-black border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors w-full sm:w-auto"
            >
              <RiAppleFill className="text-3xl text-white" />
              <div className="text-left font-space-grotesk">
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Download on the</div>
                <div className="text-sm font-bold text-white tracking-wide">App Store</div>
              </div>
            </a>

            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 bg-black border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors w-full sm:w-auto"
            >
              <RiGooglePlayFill className="text-3xl text-white" />
              <div className="text-left font-space-grotesk">
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Get it on</div>
                <div className="text-sm font-bold text-white tracking-wide">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
          <div className="space-y-4">
            <h4 className="font-space-grotesk text-xs uppercase tracking-widest text-white font-bold">
              Products
            </h4>
            <ul className="space-y-3 font-plus-jakarta text-sm text-zinc-500">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-250">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-space-grotesk text-xs uppercase tracking-widest text-white font-bold">
              Resources
            </h4>
            <ul className="space-y-3 font-plus-jakarta text-sm text-zinc-500">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-250">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-space-grotesk text-xs uppercase tracking-widest text-white font-bold">
              Company
            </h4>
            <ul className="space-y-3 font-plus-jakarta text-sm text-zinc-500">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-250 flex items-center gap-1.5">
                    {link.label}
                    {link.label.includes("hiring") && (
                      <span className="text-[9px] bg-accent-mint/15 text-accent-mint px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        NEW
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-space-grotesk text-xs uppercase tracking-widest text-white font-bold">
              Legal
            </h4>
            <ul className="space-y-3 font-plus-jakarta text-sm text-zinc-500">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-250">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-plus-jakarta text-xs text-zinc-600 text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} CRED Clone. Crafted for demonstration & design excellence. <br className="hidden md:inline" />
            All trademarks belong to their respective owners.
          </p>

          <div className="flex gap-4">
            {[
              { icon: RiTwitterXLine, href: "#" },
              { icon: RiInstagramLine, href: "#" },
              { icon: RiFacebookCircleLine, href: "#" },
              { icon: RiLinkedinBoxLine, href: "#" }
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-lg"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
