import { DatePicker } from "rsuite";
import { IoCalendarOutline } from "react-icons/io5";
import { PermissionsErrorText } from "@/components/Errors/PermissionsError";

const DatePickerField = ({ label, value, onChange, disabled = false, disabledMessage = "" }) => {
	return (
		<>
			<DatePicker oneTap format="dd/MM/yyyy" caretAs={IoCalendarOutline} value={value} onChange={onChange} placeholder={label} disabled={disabled} />
			{disabled && (
				<div className="mt-2">
					<PermissionsErrorText message={disabledMessage} />
				</div>
			)}
		</>
	);
};

export default DatePickerField;
