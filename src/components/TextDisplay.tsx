import { OutlinedTextFieldProps, TextField } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

interface TextDisplayPropsType extends OutlinedTextFieldProps {}

const useStyles = makeStyles(() =>
	createStyles({
		display: {
			color: 'white',
			// backgroundColor: '#efefef',
			'& .MuiFormLabel-root.Mui-disabled': {
				color: 'white',
				borderRadius: 5,
			},
			'& .MuiInputBase-input': {
				color: 'white',
			},
		},
	})
);

// This component is for display read-only values in a material ui textfield. The user will not be able
// to edit the field and the mouse-over will not indicate they can either.

export const TextDisplay = ({
	value,
	label,
	...textProps
}: TextDisplayPropsType) => {
	const classes = useStyles();

	return (
		<TextField
			value={value}
			label={label}
			disabled
			className={classes.display}
			InputLabelProps={{ shrink: true }}
			{...textProps}
		/>
	);
};
