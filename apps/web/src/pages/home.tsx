import {
	Button,
	ContentTemplate,
	Icon,
	Slider,
	SliderArrowLeft,
	SliderArrowRight,
} from "@shared/ui";

import safe from "@shared/assets/safe.png";
import shelf from "@shared/assets/shelf.png";
import toolkit from "@shared/assets/toolkit.png";
import catalogue from "@shared/assets/catalogue.png";
import rack from "@shared/assets/rack.jpeg";
import {Link} from "wouter";

export const HomePage: React.FC = () => {
	return (
		<ContentTemplate>
			<SliderSection />

			<div className="flex gap-x-6 mt-16 justify-end">
				<div className="flex flex-col gap-y-8">
					<h3 className="text-4xl font-semibold text-primary">
						Barys metal - это ...
					</h3>

					<p className="whitespace-pre-line">
						{`Торгово-производственная компания ИП Barys работает с 2017 года. Основные направления нашей деятельности:
                        - производство строительного оборудования;
						- производство металлоизделий и оборудования медицинского назначения:
                        - изготовление декоративных и спортивных изделий из
                        металла;
						- производство мебели из металла.
						`}
					</p>

					<Button color="secondary" className="w-fit py-2">
						Подробнее
					</Button>
				</div>

				<img
					src={catalogue}
					alt="Каталог"
					className="w-96 object-contain"
				/>
			</div>

			<div className="flex flex-wrap mt-16 -m-4">
				{Array.from({length: 5}).map((_, idx) => (
					<Link key={idx} to="/shelves" className="w-1/3 p-4">
						<div className="w-full flex flex-col items-center border border-paper-contrast/25 rounded-lg gap-y-4 p-6">
							<div className="flex justify-center items-center gap-x-2">
								{Array.from({length: 3}).map((_, idx) => (
									<img
										key={idx}
										src={rack}
										alt="Стеллаж"
										className="w-1/3 object-contain"
									/>
								))}
							</div>

							<h5 className="text-lg font-semibold text-paper-contrast">
								Стеллажи
							</h5>
						</div>
					</Link>
				))}
			</div>
		</ContentTemplate>
	);
};

const SliderSection: React.FC = () => {
	return (
		<Slider
			slidesToShow={1}
			className="max-w-full overflow-hidden rounded-2xl border border-paper-contrast/25"
			nextArrow={<SliderArrowRight />}
			prevArrow={<SliderArrowLeft />}
			autoplay
			autoplaySpeed={3000}
			speed={1000}
		>
			<div className="!flex justify-between bg-primary text-primary-contrast w-full h-[28rem] gap-x-8 p-12">
				<div className="flex flex-col gap-y-8 justify-center">
					<h3 className="font-semibold text-4xl">
						Идеальные решения из металла
					</h3>

					<p className="text-lg pr-40">
						Ваш надежный партнер в мире металлических изделий
					</p>

					<Button view="reversed" className="w-fit text-lg py-2">
						Заказать сейчас
					</Button>
				</div>

				<div className="flex items-center mt-12">
					<div className="relative">
						<img
							src={safe}
							alt="Сейф"
							className="w-80 h-auto object-contain justify-end"
						/>

						<div className="absolute right-[calc(100%+1rem)] bottom-6">
							<div className="relative">
								<Icon.Path className="text-primary-contrast" />

								<div className="absolute bottom-6 left-6 flex flex-col">
									<h6 className="text-secondary font-semibold">
										Сейф
									</h6>

									<span className="font-medium text-primary-contrast">
										25 000 тг
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="!flex justify-between bg-primary-contrast text-primary w-full h-[28rem] gap-x-8 p-12">
				<div className="flex flex-col gap-y-8 justify-center">
					<h3 className="font-semibold text-4xl">
						Высококачественные металлические изделия
					</h3>

					<p className="text-lg pr-40">
						Прочные и долговечные решения для дома и бизнеса
					</p>

					<Button className="w-fit text-lg py-2">
						Заказать сейчас
					</Button>
				</div>

				<div className="flex items-center mt-12">
					<div className="relative">
						<img
							src={shelf}
							alt="Полка"
							className="w-80 h-auto object-contain justify-end"
						/>

						<div className="absolute right-[calc(100%)] bottom-16">
							<div className="relative">
								<Icon.Path className="text-primary" />

								<div className="absolute bottom-6 left-6 flex flex-col">
									<h6 className="text-secondary font-semibold">
										Полка
									</h6>

									<span className="font-medium text-primary">
										25 000 тг
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="!flex justify-between bg-primary-contrast text-primary w-full h-[28rem] gap-x-8 p-12">
				<div className="flex flex-col gap-y-8 justify-center">
					<h3 className="font-semibold text-4xl">
						Широкий ассортимент металлических изделий
					</h3>

					<p className="text-lg pr-40">
						От мелочей до масштабных проектов – все из металла
					</p>

					<Button className="w-fit text-lg py-2">
						Заказать сейчас
					</Button>
				</div>

				<div className="flex items-center mt-12">
					<div className="relative">
						<img
							src={toolkit}
							alt="Шкаф"
							className="w-80 h-auto object-contain justify-end"
						/>

						<div className="absolute right-[calc(100%+1rem)] bottom-24">
							<div className="relative">
								<Icon.Path className="text-primary" />

								<div className="absolute bottom-6 left-6 flex flex-col">
									<h6 className="text-secondary font-semibold">
										Шкаф
									</h6>

									<span className="font-medium text-primary">
										25 000 тг
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slider>
	);
};
