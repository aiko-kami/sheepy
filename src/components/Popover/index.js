const Popover = ({ children, displayPopover, position }) => {
	return displayPopover === true ? <div className={`absolute text-gray-900 z-50 whitespace-nowrap bg-white rounded-sm shadow ${position}`}>{children}</div> : null;
};
export default Popover;
