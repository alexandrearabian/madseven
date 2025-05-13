"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/acerca-de-nosotros", label: "Acerca de nosotros" },
    {
      label: "Acciones de prensa",
      items: [
        {
          href: "/acciones-de-prensa",
          label: "Acciones de prensa",
          description:
            "Descubre nuestras últimas acciones y cobertura mediática.",
        },
        {
          href: "/acciones-de-prensa/noticias",
          label: "Noticias",
          description: "Últimas noticias y artículos sobre nuestras acciones.",
        },
        {
          href: "/acciones-de-prensa/eventos",
          label: "Eventos",
          description: "Próximos eventos y conferencias de prensa.",
        },
      ],
    },
    {
      label: "Servicios",
      href: "/servicios",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    { href: "/contacto", label: "Contacto" },
  ];

  const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex md:justify-between top-0 left-0 z-50 w-full shadow-md backdrop-blur max-w-full fixed px-8">
      <Link
        href="/"
        className="hover:scale-105 transition-all duration-300"
        legacyBehavior
      >
        <Image src="/madseven-white.png" alt="Logo" width={160} height={160} />
      </Link>
      <NavigationMenuList className="flex justify-between w-full h-16 gap-4">
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            legacyBehavior
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.label}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {subItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileNav = () => (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-background/40 backdrop-blur-sm ">
        <Link
          href="/"
          className="hover:scale-105 transition-all"
          legacyBehavior
        >
          <Image
            src="/madseven-white.png"
            alt="Logo"
            width={160}
            height={160}
          />
        </Link>
        <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-8 w-8" />
        </button>
      </div>
      {isOpen && (
        <>
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-background/10 backdrop-blur-md transition-colors md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={toggleSidebar}
                />

                <motion.div
                  className="bg-background/80 fixed bottom-0 left-1/2 z-50 h-[70vh] w-[90%] max-w-md -translate-x-1/2 overflow-y-auto rounded-t-md p-4 px-8 shadow-md md:hidden"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{
                    type: "tween",
                    ease: [0.25, 0.8, 0.25, 1],
                    duration: 0.4,
                  }}
                >
                  <nav className="flex flex-col space-y-4 mt-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        {item.items ? (
                          <div className="space-y-2">
                            <p className="text-md">{item.label}</p>
                            {item.items.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: subIndex * 0.1,
                                }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block pl-8 py-2 text-sm text-muted-foreground hover:text-foreground"
                                  onClick={toggleSidebar}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-2 text-md"
                            onClick={toggleSidebar}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
