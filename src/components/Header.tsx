import { Divider, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

interface HeaderPropsType {
	name: string;
	// routes: BreadcrumbsRouteType[];
	routes: any;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		divider: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	})
);

export const Header = ({ name, routes }: HeaderPropsType) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant='h3' gutterBottom>
				{name}
			</Typography>
			<Divider className={classes.divider} />
		</React.Fragment>
	);
};
