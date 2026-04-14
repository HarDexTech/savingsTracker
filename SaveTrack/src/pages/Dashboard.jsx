import Button from '../components/ui/Button';
import Header from "../components/layout/Header";
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
      <Header></Header>
    </section>
  );
}
export default DashBoard;
