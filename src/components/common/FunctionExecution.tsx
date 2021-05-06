import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import jsonParse from "../../utils/jsonParse";
import parseFunction from "../../utils/parseFunction";

export interface Props {
	inputCount: number;
	children?: string;
    defaultValues?: any;
}

const FunctionExcecution: React.FC<Props> = ({ inputCount = 2, defaultValues, children }) => {
	const [values, setValues] = useState<any[]>(defaultValues || []);
	const [funct, setFunct] = useState(children || "");

	const input = values.map((value) => jsonParse(value));
	let fn:any = () => {}; 
    try {
        fn = parseFunction(funct);
    }catch(err){
        console.log(err.message)
        toast.error(err.message)
    }

    
    
	return (
		<Grid container>
			<Grid item xs={6}>
            <TextField
            style={{width: "100%", backgroundColor:"white"}}
            variant="outlined"
            multiline
            value={funct}
            onChange={event => setFunct(event?.target?.value)}
            >

            </TextField>
				{/* <pre>{funct}</pre> */}
			</Grid>
			<Grid item xs={6} style={{ paddingLeft: "20px" }}>
				<Grid container direction="column" alignItems="flex-start">
					<Grid container alignItems="flex-start">
						{Array.from(Array(inputCount).keys()).map((_, i) => (
							<TextField
								key={i}
								label={`Input ${i}`}
								style={{ width: "auto", margin: "20px" }}
								value={values[i]}
								onChange={(event) => {
									values[i] = event?.target?.value;
									setValues([...values]);
								}}
							></TextField>
						))}
					</Grid>
					<Box style={{ paddingLeft: "20px" }}>
						<Typography variant="subtitle2" gutterBottom>
							{"result --> "}
							{JSON.stringify(fn(...input))}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FunctionExcecution;
