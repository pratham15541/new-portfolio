'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import GradientText from '@/components/blocks/TextAnimations/GradientText/GradientText';
import { ThemeToggle } from './ui/theme-toggle';
import Logo from '@/components/ui/logo';
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from './icons/icons';
import { useScrollDirection } from './hooks/useScrollDirection';
import {
  emailLink,
  githubLink,
  instagramLink,
  leetCodeLink,
  linkedInLink,
  twitterLink,
} from '@/constants/constant';

const navLinks = [
  { href: '/experience', title: 'Experience' },
  { href: '/projects', title: 'Projects' },
  { href: '/blogs', title: 'Blogs' },
  { href: '/resume', title: 'Resume' },
];

const socialLinks = [
  { href: emailLink, icon: EmailIcon },
  { href: twitterLink, icon: TwitterIcon },
  { href: githubLink, icon: GithubIcon },
  { href: linkedInLink, icon: LinkedInIcon },
  {
    href: instagramLink,
    icon: InstagramIcon,
    isMobileMenu: false,
    isLightTheme: '',
  },
  { href: leetCodeLink, icon: LeetCodeIcon },
];

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 px-6 py-4 md:px-24 md:py-6 font-medium 
        glassmorphism-navbar transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav className="flex justify-between items-center">
          {/* Logo + Name */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover-scale">
            <Logo />
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
            
              className="font-bold text-2xl bg-none"
            >
              Pratham Parikh
            </GradientText>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, title }) => (
              <CustomLink key={href} href={href} title={title} />
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4 rounded-2xl">
            {socialLinks.map(({ href, icon: Icon }) => (
              <Link key={href} href={href} target="_blank" className="hover-float">
                {<Icon />}
              </Link>
            ))}
            <ThemeToggle className="hover-scale-120 " />
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle className="hover-scale-120" />
            <button
              className="flex flex-col justify-center items-center "
              aria-label="Open menu"
              onClick={handleClick}
            >
              <span
                className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                  open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                  open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function CustomLink({
  href,
  title,
  className = '',
}: {
  href: string;
  title?: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group font-medium hover-scale will-change-transform`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-black dark:bg-white absolute left-0 -bottom-0.5 transition-[width] duration-300 ease ${
          pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const isMobileMenu = open;
  return (
    <div
      className={`
    fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    z-50 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] max-w-md
    h-auto max-h-[90vh]
    transition-all duration-300 ease-in-out
    ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
    shadow-xl
    bg-amber-50 dark:bg-gray-800 text-black dark:text-white
    rounded-xl p-7 
  `}
    >
      <div className=" z-10 pt-5  flex flex-col items-center justify-center gap-6 text-center ">
        {navLinks.map(({ href, title }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="text-lg font-medium hover-scale"
          >
            {title}
          </Link>
        ))}
        <div className="flex justify-center gap-4 mt-6 rounded-2xl">
          {socialLinks.map(({ href, icon: Icon }) => {
            const isInstagram = Icon === InstagramIcon;

            return (
              <Link key={href} href={href} target="_blank" className="hover-float isolate">
                <Icon {...(isInstagram ? { isMobileMenu, isLightTheme } : {})} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
