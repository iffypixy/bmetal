import {useMutation} from "@tanstack/react-query";

import {apiClient, Dto} from "@shared/api";
import {Category} from "@entities/category";
import {Subcategory} from "@entities/subcategory";

export type CreateProductDto = Dto<
	{
		name: string;
		price: number;
		file: File;
		categoryId: Category["id"];
		subCategoryId?: Subcategory["id"];
		description: string;
		kaspi: string;
		productProperties: Array<{
			key: string;
			value: string;
		}>;
	},
	Category
>;

export const createProduct = ({
	file,
	productProperties,
	...req
}: CreateProductDto["req"]) => {
	const formData = new FormData();

	formData.append("file", file);

	const json = JSON.stringify(productProperties);

	return apiClient.post<CreateProductDto["res"]>(
		"/api/v1/products",
		formData,
		{
			params: {
				...req,
				productProperties: json,
			},
		},
	);
};

export const useCreateProduct = () => {
	const {mutateAsync, ...mutation} = useMutation({
		mutationFn: createProduct,
	});

	return {
		createProduct: mutateAsync,
		...mutation,
	};
};
