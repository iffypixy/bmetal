import {useForm} from "react-hook-form";
import {useParams} from "wouter";

import {CmsTemplate} from "@features/cms";
import {useCategory} from "@entities/category";
import {Button} from "@shared/ui";
import {
	useDeleteCategory,
	useEditCategory,
} from "@features/cms/entities/category";
import {BACKEND_URL} from "@shared/config";

export const CategoryPage: React.FC = () => {
	const {categoryId} = useParams() as {categoryId: string};

	const {category} = useCategory({id: categoryId});

	const {editCategory} = useEditCategory();
	const {deleteCategory} = useDeleteCategory();

	const {formState, handleSubmit, register} = useForm<{
		name: string;
		files: FileList | null;
	}>({
		values: {
			name: category?.name || "",
			files: null,
		},
	});

	return (
		<CmsTemplate title="Редактирование категории">
			<form
				onSubmit={handleSubmit(() => {
					// editCategory()
				})}
				className="flex flex-col gap-2"
			>
				<label className="flex gap-2">
					Название
					<input
						type="text"
						{...register("name", {
							required: true,
						})}
						className="border"
					/>
				</label>

				<label className="flex gap-2">
					Картинка
					<input
						type="file"
						{...register("files", {
							required: true,
						})}
					/>
				</label>

				<img src={`${BACKEND_URL}${category?.photoPath}`} alt="Фотка" />

				<div className="flex gap-2">
					<Button
						className="mt-2 w-fit"
						size="small"
						disabled={!formState.isValid}
					>
						Редактировать
					</Button>

					<Button className="mt-2 w-fit" size="small">
						Удалить
					</Button>
				</div>
			</form>
		</CmsTemplate>
	);
};
