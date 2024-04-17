export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
       
        <body>
        <div>hello Fucker</div>
            {children}</body>
      </html>
    );
  }
  