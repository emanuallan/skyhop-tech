import DocumentUploadPage from "./pages/DocumentUploadPage";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<DocumentUploadPage />
		</ChakraProvider>
	);
}

export default App;
