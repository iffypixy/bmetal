import {Link} from "wouter";

import {useAllCategories} from "@entities/category";

export const Sidebar: React.FC = () => {
	const {allCategories} = useAllCategories();

	return (
		<aside className="w-[320px] h-fit flex flex-col gap-y-8 bg-paper-secondary rounded-lg p-8">
			<h3 className="border-b border-b-paper-contrast/55 text-paper-contrast text-2xl pb-4 font-semibold">
				Каталог
			</h3>

			<ul className="flex flex-col gap-y-4">
				{allCategories
					?.map((category) => ({
						label: category.name,
						link: `/catalogue?categoryId=${category.id}`,
					}))
					.map(({label, link}, idx) => (
						<li key={idx}>
							<Link to={link}>{label}</Link>
						</li>
					))}
			</ul>
		</aside>
	);
};
