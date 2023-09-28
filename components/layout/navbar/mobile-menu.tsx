import CartModel from "@/components/orders/basket/basket-model";
import Sidebar from "./side-bar";
import LogoLink from "./logo-link";

type LinkProps = {
  id: number,
  title: string,
  url: string,
}

export default function MobileMenu({ links }: { links: LinkProps[] }) {

  return (
    <div className="container flex items-center justify-between">
      <Sidebar links={links} />
      <LogoLink />
      <CartModel />
    </div>
  );
}
