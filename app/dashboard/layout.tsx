import MainNavbar from "@/components/mainnavbar/mainnvabar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <MainNavbar />
            {children}
        </>
    );
}
