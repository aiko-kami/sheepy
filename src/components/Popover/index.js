const Popover = ({ children, displayPopover }) => {
	return displayPopover === true ? <div className="absolute transform -top-9 right-6 sm:left-0 sm:translate-x-7 text-gray-900 z-50 w-44 bg-white rounded-sm shadow">{children}</div> : null;
};
export default Popover;
