import { Stack, Button, Divider } from '@mui/material';

const NewsletterProfile = () => {
    return (
        <Stack>
            <Stack 
                fontWeight="600" 
                fontSize="20px"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
            >
                <h3 className='title-newsletter-profile'>Newsletter</h3>
                <Stack direction="row">
                    <Button variant="text" size='small' color='warning'>Editar</Button>
                </Stack>
            </Stack>
            <Divider />
            <Stack margin="10px 0" fontWeight="500" justifyContent="center" alignItems="flex-start">
                <p className='data-newslatter'>Actualmente no está suscripto a: Newsletter</p>
            </Stack>
        </Stack>
  )
}

export default NewsletterProfile