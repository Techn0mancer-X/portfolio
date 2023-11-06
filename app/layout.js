import "./globals.css";

export const metadata = {
  title: "Clayton Balzer | Web Developer",
  description:
    "A full stack developer specializing in building and developing web products, from ideation to deployment, we have you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
