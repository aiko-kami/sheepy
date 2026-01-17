"use client";

import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { TextAlign } from "@tiptap/extension-text-align";
import { Image } from "@tiptap/extension-image";
import { Typography } from "@tiptap/extension-typography";
import { Superscript } from "@tiptap/extension-superscript";
import { Subscript } from "@tiptap/extension-subscript";
import { ImageUploadNode } from "@/components/Tiptap/tiptap-node/image-upload-node/image-upload-node-extension";
import { Selection } from "@tiptap/extensions";
import "@/components/Tiptap/tiptap-node/heading-node/heading-node.scss";

// --- Lib ---
import { MAX_FILE_SIZE, handleImageUpload } from "@/lib/tiptap-utils";

import { PermissionsErrorText } from "@/components/Errors/PermissionsError";
import MenuBar from "@/components/Forms/RichTextEditorField/MenuBar";

const RichTextEditorField = ({ label, value, onChange, rows, placeholder = "", maxLength, editable = true, disabledMessage }) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({ types: ["heading", "paragraph"] }),
			Image,
			Typography,
			Superscript,
			Subscript,
			Selection,
			ImageUploadNode.configure({
				accept: "image/*",
				maxSize: MAX_FILE_SIZE,
				limit: 3,
				upload: handleImageUpload,
				onError: (error) => console.error("Upload failed:", error),
			}),
		],
		content: value,
		editable,
		onUpdate({ editor }) {
			onChange(editor.getHTML());
		},
		immediatelyRender: false, // Fix SSR warning
		editorProps: {
			attributes: {
				class: `p-2 w-full placeholder-gray-400 ${!editable ? "text-gray-400" : "text-white focus:outline-none focus:ring-0"}`,
			},
		},
	});

	if (!editor) return null;

	return (
		<>
			<div className="mb-2">
				{label && <label className={`${!editable ? "text-gray-500" : "text-white"} block mb-1`}>{label}</label>}
				{!editable && disabledMessage && (
					<div className="mt-1 ml-1">
						<PermissionsErrorText message={disabledMessage} />
					</div>
				)}
			</div>
			<EditorContext.Provider value={{ editor }}>
				{editable && <MenuBar editor={editor} />}
				<div className="tiptap-editor flex flex-col rounded-b-lg border border-gray-600 bg-slate-700/70 overflow-y-auto" style={{ height: rows ? `${rows * 40}px` : "200px" }}>
					<EditorContent editor={editor} />
				</div>
			</EditorContext.Provider>
			<div className="text-right text-sm text-gray-400 mt-0.5 mr-2">
				{value.length}/{maxLength}
			</div>
		</>
	);
};

export default RichTextEditorField;
