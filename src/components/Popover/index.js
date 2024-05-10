const Popover = ({ children, displayPopover, position, style }) => {
	return displayPopover === true ? <div className={`absolute z-50 ${style} ${position}`}>{children}</div> : null;
};
export default Popover;
