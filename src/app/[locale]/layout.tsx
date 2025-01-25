import { getMessages } from "next-intl/server";
import "../globals.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar/Navbar";
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Change this to a Promise
}
export const metadata: Metadata = {
  title: "App",
  description: "Description",
};
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params; // Await the params to get the locale
  const messages = await getMessages({ locale });
  if (!messages) {
    notFound();
  }
  const direction = locale === "ar" || locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <main className="grid grid-cols-1 sm:grid-cols-[1fr_5fr] ov-x ">
            <Navbar />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
