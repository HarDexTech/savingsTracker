import Dashboard from "../src/pages/Dashboard";
function GoalModal() {
	return (
		<>
			<Dashboard className="z-0" />
			<section className="backdrop-blur-sm fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-(--bg-surface)">
				<div className="bg-(--bg-surface) rounded-lg p-6 w-96 shadow-lg flex flex-col items-start gap-4">
					<div className="flex">
						<span className="flex flex-col">
							<h2 className="text-2xl text-white font-semibold">
								Add New Goal
							</h2>
							<p className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
								Set a new savings goal and track your progress.
							</p>
						</span>
                        <button type="">x</button>
					</div>
                    <div className="flex flex-col">
						<label htmlFor="goal-name" className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
							Goal Name
						</label>
						<input type="text" name="goal-name" id="goal-name" placeholder="e.g. Kyoto Summer Retreat" className="w-full h-5 text-white p-2 bg-(--bg-surface) rounded"/>
					</div>
                    <div className="flex flex-col">
						<label htmlFor="goal-name" className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
							Target Amount
						</label>
						<input type="number" name="target-amount" id="target-amount" placeholder="0.00" className="w-full h-5 text-white p-2 bg-(--bg-surface) rounded"/>
					</div>
                    <div className="flex flex-col">
						<label htmlFor="deadline" className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
							Deadline
						</label>
						<input type="date" name="deadline" id="deadline" className="w-full h-5 text-white p-2 bg-(--bg-surface) rounded"/>
					</div>
					 <div className="flex flex-col">
						<label htmlFor="inspirational-visual" className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
							Inspirational visual
						</label>
						<input type="file" name="inspirational-visual" id="inspirational-visual" className="w-full h-10 p-2 rounded"/>
					</div>
					<div className="flex justify-center items-center gap-4">
						<button type="button" className="bg-clip-text text-transparent bg-linear-to-r from-[#ffb59d] to-[#f06536]">
							Cancel
						</button>
						<button type="button" className="bg-linear-to-r from-[#ffb59d] to-[#f06536] text-yellow-700 font-semibold px-4 py-2 rounded">
							Create Goal
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default GoalModal;
