import CartModel from "@/components/orders/basket/basket-model";
import Sidebar from "./side-bar";
import LogoLink from "./logo-link";
import { Locale } from "@/i18n.config";
import { NavLinkProps } from "@/lib";



export default function MobileMenu({ links, lang }: { links: NavLinkProps[]; lang: Locale }) {

  return (
    <div className="container flex items-center justify-between">
      <Sidebar links={links} lang={lang} />
      <LogoLink lang={lang} />
      <CartModel />
    </div>
  );
}
