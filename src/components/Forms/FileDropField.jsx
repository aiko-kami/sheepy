import { useState, useEffect } from "react";

import { IoPushOutline } from "react-icons/io5";

const isValidFileType = (file, fileTypesAllowed) => {
	if (!fileTypesAllowed.hasOwnProperty(file.type)) {
		return "Invalid file type.";
	}
	return null;
};

const isValidFileSize = (file, maxSize) => {
	if (file.size > maxSize) {
		return "File is too large.";
	}
	return null;
};

const FileDropField = ({ formInputs, setFormInputs, fileTypesAllowed, maxFileSizeAllowed }) => {
	const [file, setFile] = useState(null);
	const [thumbnail, setThumbnail] = useState(formInputs.projectCover); // To store preview URL for the image file
	const [isDragOver, setIsDragOver] = useState(false);
	const [fileError, setFileError] = useState("");

	const handleDragEnter = () => setIsDragOver(true);
	const handleDragLeave = () => setIsDragOver(false);

	const allowedExtensions = Object.values(fileTypesAllowed).join(", ");
	const acceptedMimeTypes = Object.keys(fileTypesAllowed).join(", ");
	const maxFileSizeMB = (maxFileSizeAllowed / 1024 / 1024).toFixed(0);

	const handleFileChange = (e) => {
		setFileError(""); // Clear any previous error messages
		const selectedFile = e.target.files[0]; // Only handle one file

		if (selectedFile) {
			// Check file type and file size
			const typeErrorMessage = isValidFileType(selectedFile, fileTypesAllowed);
			const sizeErrorMessage = isValidFileSize(selectedFile, maxFileSizeAllowed);

			// If there's an error with the file type or size, set the error message
			if (typeErrorMessage) {
				setFileError(typeErrorMessage);
			} else if (sizeErrorMessage) {
				setFileError(sizeErrorMessage);
			} else {
				// If both type and size are valid, set the file and generate thumbnail
				setFile(selectedFile);
				generateThumbnail(selectedFile);
				setFileError(""); // Clear any previous error message
			}
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setFileError("");
		const droppedFile = e.dataTransfer.files[0]; // Only handle one file
		if (droppedFile) {
			// Check file type and file size
			const typeErrorMessage = isValidFileType(droppedFile, fileTypesAllowed);
			const sizeErrorMessage = isValidFileSize(droppedFile, maxFileSizeAllowed);

			// If there's an error with file type or size, set the error message
			if (typeErrorMessage) {
				setFileError(typeErrorMessage);
			} else if (sizeErrorMessage) {
				setFileError(sizeErrorMessage);
			} else {
				// If both type and size are valid, set the file and generate thumbnail
				setFile(droppedFile);
				generateThumbnail(droppedFile);
				setFileError(""); // Clear any previous error message
			}
		}
		setIsDragOver(false);
	};

	const handleRemoveFile = () => {
		setFile(null);
		setThumbnail(null);
	};

	// Generate preview URL for the image file
	const generateThumbnail = (file) => {
		if (file.type.startsWith("image/")) {
			setThumbnail(URL.createObjectURL(file));
		} else {
			setThumbnail(null);
		}
	};

	useEffect(() => {
		setFormInputs((prevState) => ({
			...prevState,
			projectCover: file,
		}));
		// Cleanup object URL when component unmounts or file changes
		return () => {
			if (thumbnail) {
				URL.revokeObjectURL(thumbnail);
			}
		};
	}, [file, thumbnail, setFormInputs]);

	return (
		<>
			<div className="flex justify-center">
				<div
					className={`rounded-3xl border-2 border-dashed w-7/8 sm:w-2/3 h-70 relative ${isDragOver ? "border-green-400" : "border-blue-400"}`}
					onDrop={(e) => {
						handleDrop(e);
						setIsDragOver(false);
					}}
					onDragOver={(e) => {
						e.preventDefault();
						setIsDragOver(true);
					}}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					style={
						isDragOver
							? {
									backgroundImage: `repeating-linear-gradient(45deg, rgba(102, 187, 106, 0.2) 0, rgba(102, 187, 106, 0.2) 10px, transparent 10px, transparent 20px)`,
							  }
							: {}
					}
				>
					<div className="flex justify-center items-center h-full">
						<div className="flex flex-col justify-center items-center">
							<label htmlFor="browseCover" className="cursor-pointer">
								<IoPushOutline className={`text-6xl ${isDragOver ? "text-green-400" : "text-blue-400"}`} />
							</label>
							<div>Drag and drop file here</div>
							<div className="mb-2">or</div>
							<input type="file" hidden id="browseCover" onChange={handleFileChange} accept={acceptedMimeTypes} />
							<label
								htmlFor="browseCover"
								className="text-base px-4 py-2 mb-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded leading-snug shadow-lg transition duration-150 ease-in-out"
							>
								Choose a file
							</label>
							<div className="text-xs">Only {allowedExtensions} files are accepted</div>
							<div className="text-xs mb-2">File size must be under {maxFileSizeMB} MB</div>
							{/* Error message (displayed only if an error) */}
							<div className="absolute bottom-6">{fileError && <p className="text-xs text-red-600">{fileError}</p>}</div>
						</div>
					</div>
				</div>
			</div>

			{/* Display Thumbnail */}
			{thumbnail && (
				<div className="flex justify-center mt-4">
					<div className="relative">
						<img src={thumbnail} alt="Preview" className="w-full max-h-100 object-cover rounded-lg" />
						<button type="button" className="text-red-400 text-sm absolute right-2 top-2 inline-flex justify-center items-center hover:text-red-500" onClick={handleRemoveFile}>
							<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
							</svg>
							<span className="sr-only">Remove file</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

const FilesDropField = ({ onFilesSelected, fileTypesAllowed, maxFileSizeAllowed }) => {
	const [files, setFiles] = useState([]);
	const [isDragOver, setIsDragOver] = useState(false);
	const [fileError, setFileError] = useState("");

	const handleDragEnter = () => setIsDragOver(true);
	const handleDragLeave = () => setIsDragOver(false);

	const allowedExtensions = Object.values(fileTypesAllowed).join(", ");
	const maxFileSizeMB = (maxFileSizeAllowed / 1024 / 1024).toFixed(0);

	const handleFileChange = (e) => {
		setFileError(""); // Clear any previous error messages
		const selectedFiles = e.target.files;

		if (selectedFiles && selectedFiles.length > 0) {
			const newFiles = Array.from(selectedFiles);
			let errorFound = false;

			// Iterate over each file and check type and size
			for (const file of newFiles) {
				const typeErrorMessage = isValidFileType(file, fileTypesAllowed);
				const sizeErrorMessage = isValidFileSize(file, maxFileSizeAllowed);

				if (typeErrorMessage || sizeErrorMessage) {
					setFileError(typeErrorMessage || sizeErrorMessage);
					errorFound = true;
					break; // Stop processing if error found
				}
			}

			if (!errorFound) {
				// If no errors, update the state with the valid files
				setFiles((prevFiles) => [...prevFiles, ...newFiles]);
			}
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setFileError(""); // Clear any previous error messages
		const droppedFiles = e.dataTransfer.files;

		if (droppedFiles.length > 0) {
			const newFiles = Array.from(droppedFiles);
			let errorFound = false;

			// Iterate over each dropped file and check type and size
			for (const file of newFiles) {
				const typeErrorMessage = isValidFileType(file, fileTypesAllowed);
				const sizeErrorMessage = isValidFileSize(file, maxFileSizeAllowed);

				if (typeErrorMessage || sizeErrorMessage) {
					setFileError(typeErrorMessage || sizeErrorMessage);
					errorFound = true;
					break; // Stop processing if error found
				}
			}

			if (!errorFound) {
				// If no errors, update the state with the valid files
				setFiles((prevFiles) => [...prevFiles, ...newFiles]);
			}
		}
	};

	const handleRemoveFile = (index) => {
		setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
	};

	// Function to format file size to KB or MB
	const formatFileSize = (size) => {
		if (size < 1024) {
			return `${size} B`;
		} else if (size < 1048576) {
			return `${(size / 1024).toFixed(2)} KB`;
		} else {
			return `${(size / 1048576).toFixed(2)} MB`;
		}
	};

	useEffect(() => {
		onFilesSelected(files);
	}, [files, onFilesSelected]);

	return (
		<>
			<div className="flex justify-center">
				<div
					className={`rounded-3xl border-2 border-dashed w-7/8 sm:w-2/3 h-80 relative ${isDragOver ? "border-green-400" : "border-blue-400"}`}
					onDrop={(e) => {
						handleDrop(e);
						setIsDragOver(false);
					}}
					onDragOver={(e) => {
						e.preventDefault();
						setIsDragOver(true);
					}}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					style={
						isDragOver
							? {
									backgroundImage: `repeating-linear-gradient(45deg, rgba(102, 187, 106, 0.2) 0, rgba(102, 187, 106, 0.2) 10px, transparent 10px, transparent 20px)`,
							  }
							: {}
					}
				>
					<div className="flex justify-center items-center h-full">
						<div className="flex flex-col justify-center items-center text-center">
							<label htmlFor="browseFiles" className="cursor-pointer">
								<IoPushOutline className={`text-6xl ${isDragOver ? "text-green-400" : "text-blue-400"}`} />
							</label>
							<div>Drag and drop files here</div>
							<div className="mb-2">or</div>
							<input type="file" hidden id="browseFiles" onChange={handleFileChange} multiple />
							<label
								htmlFor="browseFiles"
								className="text-base px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded leading-snug shadow-lg transition duration-150 ease-in-out"
							>
								Choose a file
							</label>
							<div className="text-xs">Only {allowedExtensions} files are accepted</div>
							<div className="text-xs mb-2">File size must be under {maxFileSizeMB} MB</div>
							{/* Error message (displayed only if an error) */}
							<div className="absolute bottom-6">{fileError && <p className="text-xs text-red-600">{fileError}</p>}</div>
						</div>
					</div>
				</div>
			</div>

			{/* Display List of Files */}
			{files.length > 0 && (
				<div className="mt-4">
					<ul>
						{files.map((file, index) => (
							<li key={index} className="flex justify-between items-center mb-2">
								<span className="w-1/2 line-clamp-1">{file.name}</span>
								<span className="w-1/4 line-clamp-1">{file.type}</span>
								<span className="line-clamp-1">{formatFileSize(file.size)}</span>
								<button type="button" className="text-gray-300 text-sm inline-flex justify-center items-center hover:text-red-400" onClick={() => handleRemoveFile(index)}>
									<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
									</svg>
									<span className="sr-only">Remove file</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export { FileDropField, FilesDropField };
