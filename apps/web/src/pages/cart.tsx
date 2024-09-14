import {useState} from "react";
import {Link} from "wouter";

import {Button, ContentTemplate, Icon} from "@shared/ui";
import {useCartStore} from "@entities/cart";
import {BACKEND_URL} from "@shared/config";
import {format} from "@shared/lib/format";
import {Product} from "@entities/product";

export const CartPage: React.FC = () => {
	const [selectedItemsId, setSelectedItemsId] = useState<
		Array<Product["id"]>
	>([]);

	const {
		cart,
		removeProduct,
		incrementQuantity,
		decrementQuantity,
		setOrderedItemsId,
	} = useCartStore();

	const selectedItems = cart.filter((i) =>
		selectedItemsId.includes(i.product.id),
	);

	const total = selectedItems
		.map((item) => item.product.price * item.quantity)
		.reduce((prev, total) => prev + total, 0);

	const emptyCart = !cart.length;
	const emptySelected = !selectedItems.length;

	return (
		<ContentTemplate
			breadcrumbs={[
				{
					label: "Главная",
					link: "/",
				},
				{
					label: "Корзина",
					link: "/cart",
				},
			]}
		>
			<div className="flex flex-col gap-6">
				<h1 className="text-3xl font-semibold text-primary">Корзина</h1>

				<div className="flex flex-col gap-12">
					<div className="flex flex-col shadow-even-sm py-8 rounded-xl">
						<div className="flex justify-between border-b border-paper-contrast/35 p-8 !pt-0">
							<div className="flex gap-4 w-[50%]">
								<input
									type="checkbox"
									name="select-all"
									id="select-all"
									disabled={emptyCart}
									checked={
										selectedItemsId.length === cart.length
									}
									onChange={(event) => {
										const selected =
											event.currentTarget.checked;

										if (selected) {
											setSelectedItemsId(
												cart.map((i) => i.product.id),
											);
										} else {
											setSelectedItemsId([]);
										}
									}}
									className="w-4"
								/>

								<label
									htmlFor="select-all"
									className="font-medium"
								>
									Товары добавленные в корзину
								</label>
							</div>

							<div className="w-[15%] text-right">Цена</div>

							<div className="w-[25%] text-right">Кол-во</div>

							<div className="w-[10%]" />
						</div>

						<div className="flex flex-col gap-12 p-8 !pb-0">
							{cart.map((item, idx) => (
								<div
									key={idx}
									className="flex items-center justify-between"
								>
									<div className="flex gap-4 w-[50%] overflow-hidden text-ellipsis">
										<input
											type="checkbox"
											name="product-id"
											className="w-4"
											checked={selectedItemsId.includes(
												item.product.id,
											)}
											onChange={(event) => {
												const selected =
													event.currentTarget.checked;

												if (selected) {
													setSelectedItemsId([
														...selectedItemsId,
														item.product.id,
													]);
												} else {
													setSelectedItemsId(
														selectedItemsId.filter(
															(i) =>
																i !==
																item.product.id,
														),
													);
												}
											}}
										/>

										<div className="flex items-center gap-2">
											<img
												src={`${BACKEND_URL}${item.product.photoPath}`}
												alt="Фотка"
												className="max-w-20 max-h-20"
											/>

											<div className="flex flex-col">
												<h4 className="text-primary text-lg font-semibold line-clamp-2">
													{item.product.name}
												</h4>

												<div className="inline whitespace-nowrap text-sm">
													<span className="text-paper-contrast/70">
														Производитель:{" "}
													</span>

													<span className="font-medium">
														Baks Metal
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className="font-medium text-lg w-[15%] text-right">
										{format.number(item.product.price)} ₸
									</div>

									<div className="flex items-center gap-4 w-[25%] justify-end">
										<button
											onClick={() => {
												decrementQuantity(
													item.product.id,
												);
											}}
											className="bg-[#aec1ff] text-primary-contrast text-3xl leading-[0] aspect-square rounded-lg p-2"
										>
											−
										</button>

										<span className="text-lg font-medium">
											{item.quantity}
										</span>

										<button
											onClick={() => {
												incrementQuantity(
													item.product.id,
												);
											}}
											className="bg-[#aec1ff] text-primary-contrast text-3xl leading-[0] aspect-square rounded-lg p-2"
										>
											+
										</button>
									</div>

									<button
										onClick={() => {
											removeProduct(item.product.id);
										}}
										className="w-[10%] inline-flex justify-end"
									>
										<Icon.Trash className="w-5 h-auto text-paper-contrast/75" />
									</button>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-4 ml-auto">
						<div className="flex flex-col items-end gap-2">
							<div className="inline-flex items-center">
								<span className="text-paper-contrast/70">
									Сумма:{" "}
								</span>

								<span className="ml-4 text-lg font-semibold">
									{format.number(total)} ₸
								</span>
							</div>

							<div className="inline-flex items-center">
								<span className="text-paper-contrast/70">
									Итого:{" "}
								</span>

								<span className="ml-4 text-lg font-semibold">
									{format.number(total)} ₸
								</span>
							</div>
						</div>

						<Link to="/cart/order">
							<Button
								disabled={emptySelected}
								onClick={() => {
									setOrderedItemsId(selectedItemsId);
								}}
								className="text-base py-3"
							>
								Оформить заказ
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</ContentTemplate>
	);
};
