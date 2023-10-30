import React, { useState } from "react";
import DocumentUploadForm from "../forms/DocumentUploadForm";
// import Button from "../components/Button";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	Center,
	ModalCloseButton,
} from "@chakra-ui/react";

function DocumentUploadPage() {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Open Modal</Button>
			<Modal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				isCentered
				size="5xl"
			>
				<ModalOverlay />
				<ModalContent rounded="2xl">
					<ModalCloseButton
						color="white"
						background="#1c3d6e"
						position="absolute"
						top="32px"
						left="32px"
					/>
					<Center>
						<DocumentUploadForm />
					</Center>
				</ModalContent>
			</Modal>
		</>
	);
}

export default DocumentUploadPage;
