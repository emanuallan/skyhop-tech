import { Box, Center, Text, VStack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CalendarIcon } from "@chakra-ui/icons";

function FileDropbox() {
	const [fileName, setFileName] = useState("");
	const [error, setError] = useState("");

	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		setError("");
		setFileName("");
		const file = acceptedFiles[0];

		if (file && rejectedFiles.length === 0) {
			setFileName(file.name);
		} else if (rejectedFiles.length > 0) {
			setError(rejectedFiles[0].errors[0].message);
		}
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<Box
				height="130px"
				border="2px dashed"
				borderColor={"gray.200"}
				borderRadius={"8px"}
			>
				<Center h="100%">
					<VStack>
						<CalendarIcon color="#FF912C" boxSize={5} />
						{error && <Text color="red">{error}</Text>}
						{fileName && (
							<Text color="#1C3D6E" textDecor={"underline"}>
								{fileName}
							</Text>
						)}
						{isDragActive ? (
							<Text color="#1C3D6E">Drop Here</Text>
						) : (
							<Text color="#1C3D6E">
								Drag & Drop Here Or{" "}
								<span style={{ fontWeight: "bold" }}>Browse</span>
							</Text>
						)}
					</VStack>
				</Center>
			</Box>
		</div>
	);
}

export default FileDropbox;
