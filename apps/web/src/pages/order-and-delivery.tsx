import {ContentTemplate, Icon} from "@shared/ui";

export const OrderAndDeliveryPage: React.FC = () => {
	return (
		<ContentTemplate
			breadcrumbs={[
				{
					label: "Главная",
					link: "/",
				},
				{
					label: "Оплата и доставка",
					link: "/order-n-delivery",
				},
			]}
		>
			<div className="flex flex-col gap-8">
				<h1 className="text-primary font-semibold text-4xl">
					Оплата и доставка
				</h1>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<div className="bg-primary/40 w-5 h-5 rounded-full relative inline-flex">
								<Icon.Check className="w- h-auto absolute right-0 top-0.5 text-primary" />
							</div>

							<h4 className="font-semibold text-primary text-lg">
								Способы доставки
							</h4>
						</div>

						<div className="flex flex-col gap-2 pl-4">
							<ul className="flex flex-col font-semibold list-disc pl-4">
								<li>Самовывоз</li>
								<li>Доставка</li>
							</ul>

							<ul>
								<li>По г. Алматы: 1-2 рабочих дня.</li>
								<li>В регионы: 2-10 рабочих дней.</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<div className="bg-primary/40 w-5 h-5 rounded-full relative inline-flex">
								<Icon.Check className="w- h-auto absolute right-0 top-0.5 text-primary" />
							</div>

							<h4 className="font-semibold text-primary text-lg">
								Способы оплаты
							</h4>
						</div>

						<div className="flex flex-col gap-2 pl-4">
							<ul className="flex flex-col font-semibold list-disc pl-4">
								<li>Наличная оплата в офисе компании</li>
								<li>Безналичная оплата на оснавании счета</li>
								<li>Kaspi QR</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</ContentTemplate>
	);
};
