import {CmsTemplate} from "@features/cms";
import {useOrders} from "@features/cms/entities/order";

export const OrdersPage: React.FC = () => {
	const {orders} = useOrders();

	return <CmsTemplate title="Заказы">asdf</CmsTemplate>;
};
