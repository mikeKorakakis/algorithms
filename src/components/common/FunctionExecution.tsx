import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import jsonParse from "../../utils/jsonParse";
import parseFunction from "../../utils/parseFunction";

export interface Props {
    inputCount: number;
    children?: string;
}

const FunctionExcecution: React.FC<Props> = ({inputCount = 2, children}) => {
	const [values, setValues] = useState<any[]>(["[1,2,3]"]);
	const [text2, setText2] = useState<string>("[1,4,9]");
	const funct = `function same(arr1, arr2){
        console.le
        if (arr1.length !== arr2.length){
            return false;
        }
        for (let i = 0; i < arr1.length; i++){
            let correctIndex = arr2.indexOf(arr1[i] ** 2);
            console.log(correctIndex)
            if (correctIndex === -1) {
                return false;
            }
            arr2.splice(correctIndex,1)
        }
        return true
    }`;

	const fn = parseFunction(funct);
	return (
		<Grid container>
			<Grid item xs={6}>
				<pre>{funct}</pre>
			</Grid>
			<Grid item xs={6} style={{paddingLeft: "20px"}} >
				<Grid container direction="column" alignItems="flex-start">
					<Grid container alignItems="flex-start">
                        {
                           Array(inputCount).map((value, i) => (
                               <TextField
                               label={`text${i}`}
                               style={{ width: "100px", margin: "20px" }}
                               value={values[i]}
                               // onChange={(event) => setText(event?.target?.value)}
                           ></TextField>
                           ))
                        }
					</Grid>
					<Box style={{ paddingLeft: "20px" }}>
						<Typography variant="subtitle2" gutterBottom>
                        {"result --> "}
							{/* {JSON.stringify(fn(jsonParse(text), jsonParse(text2)))} */}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FunctionExcecution;
