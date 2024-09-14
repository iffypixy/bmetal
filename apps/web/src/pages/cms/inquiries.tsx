import {CmsTemplate} from "@features/cms";
import {useInquiries} from "@features/cms/entities/inquiry";

export const InquiriesPage: React.FC = () => {
	const {inquiries} = useInquiries();

	return <CmsTemplate title="Заявки">asdf</CmsTemplate>;
};
