import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";

const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
	"& .MuiIconButton-root": {
		color: "#d1d5db", // Tailwind gray-600 color
	},
	"& .MuiInputLabel-root": {
		color: "#d1d5db", // Tailwind gray-600 color for label
	},
	"& .MuiInputLabel-root.Mui-focused": {
		color: "#3b82f6", // Tailwind blue-500 color for focused label
	},
	"& .MuiInputBase-input": {
		color: "#ffffff", // Tailwind white color for input text
	},
	"& .MuiInputBase-input.Mui-disabled": {
		color: "#6b7280", // Tailwind gray-500 color for disabled input text
	},
	"& .MuiInput-underline:before": {
		borderBottom: 0, // Tailwind gray-700 color for underline
	},
	"& .MuiInput-underline:hover:before": {
		borderBottom: 0, // Tailwind gray-700 color for underline on hover
	},
	"& .MuiInput-underline:after": {
		borderBottom: 0, // Tailwind blue-500 color for focused underline
	},
}));

const DatePickerField = ({ label, value, onChange, disabled = false }) => {
	return (
		<div className="relative z-0 w-full mt-2 border-0 border-b-2 border-gray-600 hover:shadow-lg hover:border-gray-500">
			<LocalizationProvider dateAdapter={AdapterLuxon}>
				<CustomDatePicker
					label={label}
					value={value}
					onChange={onChange}
					disabled={disabled}
					slotProps={{
						textField: {
							variant: "standard",
							InputProps: {
								className: `block pb-1 px-0 w-full bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer ${
									disabled ? "text-gray-500 line-through" : "text-white hover:shadow-lg"
								}`,
							},
							InputLabelProps: {
								className: `peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
									disabled ? "text-gray-500 line-through" : "text-gray-200"
								}`,
							},
							className: "relative z-0 mb-6 w-full",
						},
					}}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default DatePickerField;
