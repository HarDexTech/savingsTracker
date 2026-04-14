import Header from "../components/layout/Header.jsx"
function DashBoard() {
  return (
    <section className="bg-(--bg-app) h-dvh w-full flex flex-row items-start">
      <aside className="p-6 sidebar h-dvh w-75 bg-(--bg-surface-elevated)">
        <h1 class="text-2xl font-black text-[#ffb59d] uppercase tracking-tighter">
          SaveTrack
        </h1>

        <div className="btnContainer flex flex-col items-start py-6">
          <button className="text-(--text-main) bg-linear-to-r from-[#ffb59d] to-[#f06536] rounded-lg shadow-[0_0_20px_rgba(240,101,54,0.3)] flex items-center space-x-3 p-3 font-['Inter'] font-medium text-sm tracking-wide transition-transform duration-200 scale-95 active:scale-90 cursor-pointer">
            Dashboard
          </button>
          <button className="text-(--text-main)">Goals</button>
          <button className="text-(--text-main)">History</button>
        </div>
      </aside>

      <Header></Header>
      <main>
        <article className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </article>
      </main>
    </section>
  );
}
export default DashBoard;
