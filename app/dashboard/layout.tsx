import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashbaordLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <SideNav />
            <main className="flex-1 p-6 md:overflow-y-auto md:p-12">
                {children}
            </main>
        </div>
    );
}