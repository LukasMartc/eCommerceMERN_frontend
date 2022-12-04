import Stack from '@mui/material/Stack';

const ProductHeader = ({title, paragraph, img, width, height}) => {
  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    >
        <Stack
        alignItems="flex-start"
        justifyContent="center">
            <h3 className='products-header'>{title}</h3>
            <p>{paragraph}</p>
        </Stack>
        <Stack>
            <img src={img} alt="Iphone 14" width={width} height={height} />
        </Stack>
    </Stack>
  )
}

export default ProductHeader