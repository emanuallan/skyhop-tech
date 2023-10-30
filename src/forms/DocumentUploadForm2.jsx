import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";

/**
Was going to custom style everything initially but realized
it would be alot quicker if I just used a component library like
chakra, but leaving this here as further evidence of my work.
**/

function DocumentUploadForm2() {
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: "max-content" }}>
					<Text type="header">Document Upload</Text>
					<hr />
				</div>
			</div>

			<div style={{ display: "flex", gap: "24px" }}>
				<div style={{ width: "60%" }}>
					<select name="country" id="country" className="select">
						<option value="India">India</option>
						<option value="Sri Lanka">Sri Lanka</option>
						<option value="Australia">Australia</option>
					</select>
				</div>
				<div style={{ width: "40%" }}>
					<div>
						<Text type="bold-text">
							Split schedule using social distancing?{" "}
						</Text>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Text style={{ marginBottom: 16 }} type="bold-text">
					Data in the import file is correct. Please press Continue to import.
				</Text>
				<div
					style={{
						display: "flex",
						gap: 24,
					}}
				>
					<Button>Continue Import</Button>
					<Button type="secondary">Cancel</Button>
				</div>
			</div>
		</div>
	);
}

export default DocumentUploadForm2;
