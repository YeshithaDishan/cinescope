import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { signIn } from "@/lib/auth-client";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// utility function to get the last 100 years
export function getAllYears() {
  return Array.from({ length: 100 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );
}

export async function signInUser(email, password, options = {}) {
  return await signIn.email(
    { email, password },
    {
      onSuccess: () => {
        options?.onSuccess?.();
      },
      onError: (ctx) => {
        options?.onError?.(ctx.error);
      },
    }
  );
}
