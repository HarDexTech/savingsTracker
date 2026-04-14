function DashBoard() {
  return (
    <section className="bg-black h-dvh w-full">
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
      <main></main>

      <header className="flex bg-(--bg-app) p-4 justify-evenly items-center gap-5">
        <h2 className="text-(--color-primary)">Dashboard Overview</h2>
        <span className="flex justify-center items-center gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Portfolio"
            className="w-98 h-10 bg-(--bg-surface-elevated) rounded-full text-(--text-muted) px-4 outline-none"
          />
          <i class="fas fa-bell text-(--text-muted) text-2xl"></i>
          <i class="fas fa-cog text-(--text-muted) text-2xl"></i>
        </span>
      </header>
    </section>
  );
}
export default DashBoard;
