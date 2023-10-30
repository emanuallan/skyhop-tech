import { Flex, Text, Box, Center } from "@chakra-ui/react";
import React from "react";

function RadioButton({ checked, children, onClick, style }) {
	return (
		<Flex
			alignItems="center"
			cursor={"pointer"}
			style={style}
			onClick={() => onClick()}
		>
			<Box
				h="22px"
				w="22px"
				border={`2px solid ${checked ? "#1c3d6e" : "#D4D6DA"}`}
				borderRadius="full"
				background={"white"}
				mr="2"
			>
				<Center h="100%">
					{checked && (
						<Box
							h="12px"
							w="12px"
							borderRadius="full"
							background={"#1c3d6e"}
						></Box>
					)}
				</Center>
			</Box>
			<Text fontSize="md" color="#1C3D6E">
				{children}
			</Text>
		</Flex>
	);
}

export default RadioButton;
