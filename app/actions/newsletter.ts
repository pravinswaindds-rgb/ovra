"use server";

export interface NewsletterState {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function subscribeNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email")?.toString().trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      error: "Please enter a valid business email address.",
    };
  }

  try {
    return {
      success: true,
      message: "Thank you for subscribing to Orva Networks technical bulletins.",
    };
  } catch {
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
