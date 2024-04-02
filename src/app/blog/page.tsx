import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
    return (
        <main className={"w-full h-min-screen flex flex-col justify-center items-center bg-[#102921]"}>
            <Navbar />
            <div className="flex md:justify-center items-start md:items-center h-fit md:h-[calc(100vh-69.5px)] px-[5%] w-full text-[#fff] mt-[85.5px] transition-ease-in-out duration-200">

            </div>
            <Footer />
        </main>
    );
}