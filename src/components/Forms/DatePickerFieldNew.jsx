import { DatePicker } from "rsuite";
import { IoCalendarOutline } from "react-icons/io5";

const DatePickerField = ({ label, value, onChange, disabled = false }) => {
	return (
		<div className="mt-2">
			<DatePicker oneTap format="dd/MM/yyyy" caretAs={IoCalendarOutline} value={value} onChange={onChange} placeholder={label} disabled={disabled} />
		</div>
	);
};

export default DatePickerField;
