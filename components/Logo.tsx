import Link from 'next/link';
import Favicon from "@/app/logo.PNG";
import Image from 'next/image';

export default function Logo({
  className = '',
  variant = 'light'
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const textColor =
    variant === 'dark' ? 'text-white' : 'text-foreground';
  return (
  <Link
  href="/"
  className={`group inline-flex items-center gap-2.5 ${className}`}
  aria-label="DevNex home"
>
  <Image
    src={Favicon}
    alt="logo"
    width={120}
    height={60}
    className="transition-transform group-hover:scale-105"
  />
</Link>
  );
}
