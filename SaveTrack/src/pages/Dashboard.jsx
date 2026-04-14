import Button from '../components/ui/Button';

function DashBoard() {
  return (
    <section className="bg-(--bg-app) h-dvh w-full flex flex-row items-start">
      <aside className="p-6 sidebar h-dvh w-[20%] bg-(--bg-surface-elevated) flex flex-col justify-between items-start">
        <div className="top">
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
      <main className="p-6 h-dvh w-[80%] bg-(--bg-app)"></main>

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
          <i className="fas fa-bell text-(--text-muted) text-2xl"></i>
          <i className="fas fa-cog text-(--text-muted) text-2xl"></i>
        </span>
      </header>
    </section>
  );
}
export default DashBoard;
