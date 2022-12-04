import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';

const Products = ({product}) => {
    const { _id, name, price, image, inStock } = product;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={`/product/${_id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image.url}
                    alt={image.public_id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Typography variant="body2" color="text.secondary">
                            ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {inStock} Stock
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Products