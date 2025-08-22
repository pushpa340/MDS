export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center py-12">
      {children}
    </div>
  );
}
