import Button from "../components/ui/Button";
import Header from "../components/layout/Header";
function DashBoard() {
  return (
    <section className="bg-(--bg-app) h-dvh w-full flex flex-row items-start">
      <aside className="p-6 sidebar h-dvh w-[20%] bg-(--bg-surface-elevated)">
        <h1 className="text-2xl font-black text-[#ffb59d] uppercase tracking-tighter">
          SaveTrack
        </h1>

        <div className="btnContainer flex flex-col items-start py-6 gap-3">
          <Button destination="Dashboard" active="true"/>
          <Button destination="Goals" active="false"/>
          <Button destination="History" active="false"/>
        </div>
      </aside>
      <main></main>

      <Header></Header>
    </section>
  );
}
export default DashBoard;
