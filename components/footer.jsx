import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="border-primary/20 bg-primary/5 border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            © 2025 CineScope. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
