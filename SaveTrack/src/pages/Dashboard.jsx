function DashBoard() {
	return (
		<section className="bg-(--bg-app) h-dvh w-full">
			{/* <aside className="container">hi</aside> */}
			<header className="flex bg-(--bg-app) p-4 justify-evenly items-center gap-5">
				<h2 className="text-(--color-primary)">Dashboard Overview</h2>
				<span className="flex justify-center items-center gap-3">
          <input type="text" name="" id="" placeholder="Search Portfolio" className="w-98 h-10 bg-(--bg-surface-elevated) rounded-full text-(--text-muted) px-4 outline-none"/>
          <i class="fas fa-bell text-(--text-muted) text-2xl"></i>   
          <i class="fas fa-cog text-(--text-muted) text-2xl" ></i>   
        </span>
			</header>
		</section>
	);
}
export default DashBoard;
