import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto p-t-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-2">left number</aside>
        <section className="col-span-6">main cintent</section>
        <aside className="col-span-3">rignt navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
