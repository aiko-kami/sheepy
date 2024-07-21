import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const DatePickerField = ({ label, value, onChange, disabled = false }) => {
	return (
		<div className="relative z-0 mb-6 w-full">
			<LocalizationProvider dateAdapter={AdapterLuxon}>
				<DatePicker
					label={label}
					value={value}
					onChange={onChange}
					disabled={disabled}
					slotProps={{ textField: { variant: "standard" } }}
					renderInput={(params) => (
						<TextField
							{...params}
							InputProps={{
								...params.InputProps,
								className: `block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer ${
									disabled ? "text-gray-500 line-through" : "text-white hover:shadow-lg"
								}`,
							}}
							InputLabelProps={{
								...params.InputLabelProps,
								className: `peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
									disabled ? "text-gray-500 line-through" : "text-gray-200"
								}`,
							}}
							className="relative z-0 mb-6 w-full"
						/>
					)}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default DatePickerField;
