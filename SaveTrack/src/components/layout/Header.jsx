function Header() {
	return (
		<header className="w-[80%] sticky top-0 flex bg-(--bg-surface) p-4 justify-between items-center gap-5">
			<h2 className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">Dashboard Overview</h2>
			<span className="flex justify-around items-center gap-3">
				<input
					type="text"
					name=""
					id=""
					placeholder="Search Portfolio"
					className="w-60 h-10 bg-(--bg-surface-elevated) rounded-full text-(--text-muted) px-4 outline-none"
				/>
				<i className="fas fa-bell text-(--text-muted) text-2xl"></i>
				<i className="fas fa-cog text-(--text-muted) text-2xl"></i>
			</span>
		</header>
	);
}
export default Header;
