import React, { useState } from "react";
import {
	Divider,
	Text,
	Flex,
	Box,
	Center,
	Button,
	Stack,
	Select,
	StackDivider,
	VStack,
	Switch,
} from "@chakra-ui/react";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import FileDropbox from "../components/FileDropbox";
import RadioButton from "../components/RadioButton";

function DocumentUploadForm() {
	const [switchToggle, setSwitchToggle] = useState(false);
	const [splitSchedule, setSplitSchedule] = useState("yes");
	const [client, setClient] = useState("multiple");

	return (
		<Box width="1000px" padding="64px">
			<Center mb={"10"}>
				<Box w="max-content">
					<Text fontSize="3xl" fontWeight={"bold"} color="#1C3D6E">
						Document Upload
					</Text>
					<Divider height={"2px"} mt="2" />
				</Box>
			</Center>

			<Flex gap="16">
				<VStack
					w="59%"
					divider={
						<StackDivider border="2px" borderColor="gray.200" maxW="330px" />
					}
					spacing={4}
					align="stretch"
				>
					<Box>
						<Select
							fontWeight={"bold"}
							variant="outline"
							color="#1C3D6E"
							placeholder="Select Import Name:"
							border="2px solid #D4D6DA"
						>
							<option value="option1">Option 1</option>
						</Select>
					</Box>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Select a manifest that you'd like to import
						</Text>
						<Box
							border="2px solid #D4D6DA"
							padding={"16px"}
							borderRadius={"8px"}
						>
							<FileDropbox />
							<Center mt={4}>
								<Button
									background={"#1C3D6E"}
									color="white"
									minW="220px"
									minH="25px"
									padding="16px 32px"
								>
									Upload Manifest
								</Button>
							</Center>
						</Box>
						<Divider height={"1px"} mb="2" mt="4" color={"#E7E7E7"} />
						<Flex alignItems="center" padding={"8px 16px"}>
							<CalendarIcon color="#FF912C" boxSize={5} mr={3} />
							<VStack w="100%">
								<Flex
									justifyContent={"space-between"}
									alignItems={"center"}
									w="100%"
								>
									<Text fontSize="sm" color={"#D4D6DA"}>
										WN-DAL-0726-NH20166.csv
									</Text>

									<Text fontSize="xs" color="#858585">
										5.7MB
									</Text>
								</Flex>

								<Flex w="100%" borderRadius={"16px"}>
									<Box height="2px" w="1%" background="#FF912C"></Box>
									<Box height="2px" w="99%" background="#E7E7E7"></Box>
								</Flex>
							</VStack>
						</Flex>
						<Divider height={"1px"} mt="2" mb="1" color={"#E7E7E7"} />
					</Box>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Elapse Data Checking:
						</Text>
						<Text color="#00AA00">No Elapsed Dates!</Text>
					</Box>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Tolerance Window:
						</Text>
						<Flex alignItems={"center"}>
							<Switch
								sx={{
									"span.chakra-switch__track[data-checked]": {
										backgroundColor: "#1C3D6E",
									},
								}}
								size="md"
								mr={2}
								value={switchToggle}
								onChange={() => setSwitchToggle(!switchToggle)}
							/>{" "}
							<Text fontSize={"md"} color="#1C3D6E" width="83px">
								Toggle {switchToggle ? "ON" : "OFF"}
							</Text>
							<Box
								mx={4}
								height={"22px"}
								width={"2px"}
								background={"gray.200"}
							></Box>
							<TimeIcon
								color="#1C3D6E"
								style={{ transform: "rotate(140deg)" }}
								boxSize={5}
								mr={2}
							/>
							<Text color="#1C3D6E" fontSize={"sm"}>
								Select Tolerance Level
							</Text>
						</Flex>
					</Box>
				</VStack>

				<VStack
					w="41%"
					divider={
						<StackDivider border="2px" borderColor="gray.200" maxW="330px" />
					}
					spacing={4}
					align="stretch"
				>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Split schedule using social distancing?
						</Text>

						<Stack direction="row">
							<RadioButton
								checked={splitSchedule === "yes"}
								onClick={() => setSplitSchedule("yes")}
							>
								Yes
							</RadioButton>
							<RadioButton
								style={{ marginLeft: 8 }}
								checked={splitSchedule === "no"}
								onClick={() => setSplitSchedule("no")}
							>
								No
							</RadioButton>
						</Stack>
					</Box>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Location Checking:
						</Text>
						<Text color="#00AA00">All Available!</Text>
					</Box>
					<Box>
						<Text fontWeight={"bold"} mb="2" color="#1C3D6E">
							Client:
						</Text>

						<Stack direction="row" mb={5}>
							<RadioButton
								checked={client === "single"}
								onClick={() => setClient("single")}
							>
								Single
							</RadioButton>
							<RadioButton
								style={{ marginLeft: 8 }}
								checked={client === "multiple"}
								onClick={() => setClient("multiple")}
							>
								Multiple
							</RadioButton>
						</Stack>

						<Stack gap={4}>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text color="#1C3D6E" fontSize={"md"}>
									Testing Center 1
								</Text>
								<Flex alignItems={"center"}>
									<Select
										color="#1C3D6E"
										variant="outline"
										placeholder="Select Client"
										w={"150px"}
										mr="3"
										border="2px solid #D4D6DA"
									>
										<option value="option1">Option 1</option>
									</Select>
									<TimeIcon
										color="#1C3D6E"
										style={{ transform: "rotate(140deg)" }}
										boxSize={5}
									/>
								</Flex>
							</Flex>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text color="#1C3D6E" fontSize={"md"}>
									Testing Center 2
								</Text>
								<Flex alignItems={"center"}>
									<Select
										color="#1C3D6E"
										variant="outline"
										placeholder="Select Client"
										w={"150px"}
										mr="3"
										border="2px solid #D4D6DA"
									>
										<option value="option1">Option 1</option>
									</Select>
									<TimeIcon
										color="#1C3D6E"
										style={{ transform: "rotate(140deg)" }}
										boxSize={5}
									/>
								</Flex>
							</Flex>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text color="#1C3D6E" fontSize={"md"}>
									Testing Center 3
								</Text>
								<Flex alignItems={"center"}>
									<Select
										variant="outline"
										placeholder="Select Client"
										w={"150px"}
										mr="3"
										border="2px solid #D4D6DA"
										color="#1C3D6E"
									>
										<option value="option1">Option 1</option>
									</Select>
									<TimeIcon
										color="#1C3D6E"
										style={{ transform: "rotate(140deg)" }}
										boxSize={5}
									/>
								</Flex>
							</Flex>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text color="#1C3D6E" fontSize={"md"}>
									Testing Center 4
								</Text>
								<Flex alignItems={"center"}>
									<Select
										color="#1C3D6E"
										variant="outline"
										placeholder="Select Client"
										w={"150px"}
										mr="3"
										border="2px solid #D4D6DA"
									>
										<option value="option1">Option 1</option>
									</Select>
									<TimeIcon
										color="#1C3D6E"
										style={{ transform: "rotate(140deg)" }}
										boxSize={5}
									/>
								</Flex>
							</Flex>
						</Stack>
					</Box>
				</VStack>
			</Flex>

			<VStack mt="9">
				<Text fontSize="18px" fontWeight={"bold"} mb="4" color="#1C3D6E">
					Data in the import file is correct. Please press Continue to import.
				</Text>
				<Center gap="24px">
					<Button
						background={"#1C3D6E"}
						color="white"
						minW="220px"
						minH="50px"
						padding="16px 32px"
					>
						Continue Import
					</Button>
					<Button
						border="2px solid #faa03a"
						background={"white"}
						color="#faa03a"
						minW="220px"
						minH="50px"
						padding="16px 32px"
					>
						Cancel
					</Button>
				</Center>
			</VStack>
		</Box>
	);
}

export default DocumentUploadForm;
