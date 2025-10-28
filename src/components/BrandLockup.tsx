import Image from "next/image";
import Link from "next/link";

import styles from "./BrandLockup.module.css";

type BrandLockupProps = {
  variant?: "light" | "dark" | "mono-light" | "mono-dark";
  compact?: boolean;
  tagline?: string;
  className?: string;
  priority?: boolean;
};

const variantToSource: Record<NonNullable<BrandLockupProps["variant"]>, { src: string; alt: string }> = {
  light: {
    src: "/brand/hyperscalerowl-wordmark-light.svg",
    alt: "HyperScalerOwl wordmark",
  },
  dark: {
    src: "/brand/hyperscalerowl-wordmark-color.svg",
    alt: "HyperScalerOwl wordmark",
  },
  "mono-light": {
    src: "/brand/hyperscalerowl-wordmark-white.svg",
    alt: "HyperScalerOwl monochrome logo",
  },
  "mono-dark": {
    src: "/brand/hyperscalerowl-wordmark-black.svg",
    alt: "HyperScalerOwl monochrome logo",
  },
};

export function BrandLockup({
  variant = "dark",
  compact = false,
  tagline,
  className,
  priority,
}: BrandLockupProps) {
  const classes = className ? `${styles.root} ${className}` : styles.root;
  const chosenVariant = variantToSource[variant];

  if (compact) {
    const compactTaglineClass = tagline ? styles.compactTagline : styles.tagline;
    return (
      <Link href="/" className={classes} aria-label="HyperScalerOwl home">
        <Image
          src="/brand/hyperscalerowl-mark.svg"
          alt="HyperScalerOwl mark"
          width={48}
          height={48}
          className={styles.logo}
          priority={priority}
        />
        {tagline ? <span className={compactTaglineClass}>{tagline}</span> : null}
      </Link>
    );
  }

  const taglineClass = tagline ? styles.tagline : undefined;

  return (
    <Link href="/" className={classes} aria-label="HyperScalerOwl home">
      <Image
        src={chosenVariant.src}
        alt={chosenVariant.alt}
        width={220}
        height={72}
        className={styles.logo}
        priority={priority}
      />
      {tagline ? <span className={taglineClass}>{tagline}</span> : null}
    </Link>
  );
}

export default BrandLockup;
