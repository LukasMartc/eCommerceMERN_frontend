import Stack from '@mui/material/Stack';

const Newsletter = () => {
    return (
        <div className='container-newslatter'>
            <Stack padding="30px 0" alignItems="center" justifyContent="center">
                <h4 className='title-newslatter'>Newsletter</h4>
                <Stack fontSize="17px">
                    <p className='description-newsletter'>No te pierdas lo último en tecnología. ¡Suscríbete!</p>
                </Stack>
                <div className='box'>
                    <form>
                        <div className="form-box">
                            <input type="text" name="newslatter" placeholder='Ingresa tu correo electrónico' />
                            <button type="submit">Suscríbete</button>
                        </div>
                    </form>
                </div>
            </Stack>
        </div>
  )
}

export default Newsletter