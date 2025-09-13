import NavigationBar from "../components/navigation2";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thribe Community Legal documents",
  description: "Thribe community",
};

export default function RootLayout({ children }) {
  return (
        <main>
            <section className="bg-[#013D37]">
                <NavigationBar />
                <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[148px] pb-[136px] text-center space-y-[40px]">
                    <h1 className="font-clash text-[#fff] font-[600] text-[66px] leading-[100%] tracking-[1%]">Legal</h1>
                    <div className="text-[20px] leading-[150%] tracking-[1%] text-[#DFE2E6] flex items-center justify-center gap-x-[40px]">
                        <span>Effective Date: July 10, 2025</span>
                        <span>Last Updated: July 10, 2025</span>
                    </div>
                </div>
            </section>
            <div className="w-full h-[12px] relative">
                <Image src="/img/legal-nav.png" fill alt="navigation" />
            </div>  
        {children}
        <Footer />
      </main>
  );
}
