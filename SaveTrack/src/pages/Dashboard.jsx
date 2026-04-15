import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
function DashBoard() {
  return (
    <section className="bg-(--bg-app) h-dvh w-full flex flex-row items-start overflow-auto">
      <aside className="p-6 sidebar h-dvh w-[20%] bg-(--bg-surface-elevated) flex flex-col justify-between items-start sticky top-0">
        <div className="top w-full">
          <h1 className="text-2xl font-black text-[#ffb59d] uppercase tracking-tighter">
            SaveTrack
          </h1>

          <div className="btnContainer flex flex-col items-start py-6 gap-3">
            <Button destination="Dashboard" active={false} />
            <Button destination="Goals" active={true} />
            <Button destination="History" active={false} />
          </div>
        </div>
        <Button destination="+ New Goal" active={true} />
      </aside>
      <main className="w-[80%] h-fit flex flex-col gap-6 mb-6">
        <Header></Header>
        <article className="">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <div className="w-[30%] h-fit flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
                TOTAL SAVED
              </p>
              <p className="text-white text-4xl font-extrabold">$1,249.00</p>
              <span className="flex gap-4 flex-row justify-center items-center font-semibold self-start">
                <p className="bg-(--color-success) text-(--text-main) bg-tertiary-container/20 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +12.5%
                </p>
                <p className="text-slate-500 text-[10px] uppercase tracking-wider">
                  VS LAST MONTH
                </p>
              </span>
            </div>
            <div className="w-[30%] h-fit flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
                ACTIVE GOALS
              </p>
              <p className="text-white text-4xl font-extrabold">7</p>
              <p className=" rounded-3xl p-1 text-slate-500 text-[10px] uppercase tracking-wider">
                3 GOALS NEARING TARGET
              </p>
            </div>
            <div className="w-[30%] h-fit flex flex-col gap-4 p-5 bg-(--bg-surface-elevated) rounded-2xl">
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
                GOALS COMPLETED
              </p>
              <p className="text-white text-4xl font-extrabold">2</p>
              <p className=" rounded-3xl p-1 text-slate-500 text-[10px] uppercase tracking-wider">
                YEAR TO DATE
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <div className="chart w-[60%] h-112.5 bg-(--bg-surface-elevated) rounded-2xl"></div>
            <div className="portfolio w-[30%] h-112.5 bg-(--bg-surface-elevated) rounded-2xl"></div>
          </div>
        </article>
        <article className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="recent w-[90%] bg-(--bg-surface-elevated) rounded-2xl">
            <span className='w-full h-20 flex flex-col gap-2 justify-center'>
              <span className="text-white px-6 flex items-center text-2xl font-bold">
                Recent Deposits
              </span>
              <p className='w-[calc(100% - 12px)] h-px bg-(--text-dim) ml-5'></p>
            </span>
            <div className="data"></div>
          </div>
        </article>
      </main>
    </section>
  );
}
export default DashBoard;
