import { ToolbarGroup, ToolbarSeparator } from "@/components/Tiptap/tiptap-ui-primitive/toolbar";
import { UndoRedoButton } from "@/components/Tiptap/tiptap-ui/undo-redo-button";
import { HeadingDropdownMenu } from "@/components/Tiptap/tiptap-ui/heading-dropdown-menu";
import { ListDropdownMenu } from "@/components/Tiptap/tiptap-ui/list-dropdown-menu";
import { BlockquoteButton } from "@/components/Tiptap/tiptap-ui/blockquote-button";
import { CodeBlockButton } from "@/components/Tiptap/tiptap-ui/code-block-button";
import { MarkButton } from "@/components/Tiptap/tiptap-ui/mark-button";
import { ColorHighlightPopover, ColorHighlightPopoverButton } from "@/components/Tiptap/tiptap-ui/color-highlight-popover";
import { LinkPopover, LinkButton } from "@/components/Tiptap/tiptap-ui/link-popover";
import { ImageUploadButton } from "@/components/Tiptap/tiptap-ui/image-upload-button";
import { TextAlignButton } from "@/components/Tiptap/tiptap-ui/text-align-button";

const MenuBar = ({ editor, isMobile = false }) => {
	if (!editor) return null;
	return (
		<>
			<div className="flex items-center bg-gray-600 rounded-t-md space-x-1 px-1 py-0.5">
				<ToolbarGroup>
					<UndoRedoButton action="undo" />
					<UndoRedoButton action="redo" />
				</ToolbarGroup>
				<ToolbarSeparator />
				<ToolbarGroup>
					<HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
					<ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} portal={isMobile} />
					<BlockquoteButton />
					<CodeBlockButton />
				</ToolbarGroup>
				<ToolbarSeparator />
				<ToolbarGroup>
					<MarkButton type="bold" />
					<MarkButton type="italic" />
					<MarkButton type="strike" />
					<MarkButton type="code" />
					<MarkButton type="underline" />
					{!isMobile ? <ColorHighlightPopover /> : <ColorHighlightPopoverButton onClick={onHighlighterClick} />}
					{!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
				</ToolbarGroup>
				<ToolbarSeparator />
				<ToolbarGroup>
					<MarkButton type="superscript" />
					<MarkButton type="subscript" />
				</ToolbarGroup>
				<ToolbarSeparator />
				<ToolbarGroup>
					<TextAlignButton align="left" />
					<TextAlignButton align="center" />
					<TextAlignButton align="right" />
					<TextAlignButton align="justify" />
				</ToolbarGroup>
				<ToolbarSeparator />
				<ToolbarGroup>
					<ImageUploadButton text="Add" />
				</ToolbarGroup>
			</div>
		</>
	);
};

export default MenuBar;
