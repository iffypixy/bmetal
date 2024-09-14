import {ContentTemplate} from "@shared/ui";

export const CertificatesPage: React.FC = () => {
	return (
		<ContentTemplate
			breadcrumbs={[
				{
					label: "Главная",
					link: "/",
				},
				{
					label: "Полезная информация",
					link: "/terms",
				},
			]}
		>
			<div className="flex flex-col gap-8">
				<h1 className="text-4xl text-primary font-semibold">
					Полезная информация
				</h1>

				<div className="flex flex-col gap-6">
					<p className="text-primary font-medium">
						На сегодняшний день компания "ПАКС-металл" по праву
						считается лидером среди российских производителей
						металлической мебели. Мы гарантируем качество
						выпускаемой нами продукции, будь то металлические шкафы
						для одежды, архивные шкафы, металлические стеллажи,
						бухгалтерские шкафы КБ, металлические взломостойкие и
						огнестойкие сейфы, сумочницы, верстаки и т.д. Качество
						всех наших изделий подтверждено сертификатами.
					</p>
				</div>
			</div>
		</ContentTemplate>
	);
};
