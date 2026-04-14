import Button from '../components/ui/Button';
import Header from "../components/layout/Header";
function DashBoard() {
  return (
    <section className="bg-(--bg-app) h-dvh w-full flex flex-row items-start">
      <aside className="p-6 sidebar h-dvh w-[20%] bg-(--bg-surface-elevated) flex flex-col justify-between items-start">
        <div className="top w-full">
          <h1 className="text-2xl font-black text-[#ffb59d] uppercase tracking-tighter">
            SaveTrack
          </h1>
     
          <div className="btnContainer flex flex-col items-start py-6 gap-3">
            <Button destination="Dashboard" active="false" />
            <Button destination="Goals" active="true" />
            <Button destination="History" active="false" />
          </div>
        
        </div>
        <Button destination="+ New Goal" active="true" />
      </aside>
      <main className="w-[80%] h-dvh flex flex-col gap-6">
        <Header></Header>
        <article className="">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <div className="w-80 h-46 flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">TOTAL SAVED</p>
              <p className="text-white text-4xl font-extrabold">$1,249.00</p>
              <span className="flex gap-4 flex-row justify-center items-center font-semibold align-left">
                <p className="bg-(--color-success) rounded-3xl  text-(--text-main)">+12.5%</p>
                <p className="">VS LAST MONTH</p>
              </span>
            </div>
            <div className="w-80 h-46 flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">ACTIVE GOALS</p>
              <p className="text-white text-4xl font-extrabold">7</p>
              <p className=" rounded-3xl p-1 text-(--text-main)">3 GOALS NEARING TARGET</p>
            </div>
            <div className="w-80 h-46 flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">GOALS COMPLETED</p>
              <p className="text-white text-4xl font-extrabold">2</p>
              <p className=" rounded-3xl p-1 text-(--text-main)">YEAR TO DATE</p> 
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}
export default DashBoard;
