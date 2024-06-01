import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <h1>Welcome</h1>
      </div>
    </>
  );
}
