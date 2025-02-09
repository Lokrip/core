import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment, MouseEvent } from 'react';

interface OutlinedCardProps {
  name: string, 
  description: string,
  onDeleted?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const NewCard = ({name, description, onDeleted}: OutlinedCardProps) => (
  <Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button 
        onClick={onDeleted} 
        size="small"
      >Удалить</Button>
    </CardActions>
  </Fragment>
);

export default function OutlinedCard(props: OutlinedCardProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <NewCard {...props} />
      </Card>
    </Box>
  );
}