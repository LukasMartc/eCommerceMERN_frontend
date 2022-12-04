import { useEffect } from "react"
import { Stack } from '@mui/material';
import MyData from '../components/MyData';
import NewsletterProfile from '../components/NewsletterProfile';
import MyAddresses from '../components/MyAddresses';

const MyAccount = () => {

  useEffect(() => {
    document.title = 'Itech | Mi perfil - Mi cuenta';
  },[])

  return (
    <div className="my-account">
      <Stack margin="50px 70px" spacing={4}>
        <MyData />
        <NewsletterProfile />
        <MyAddresses />
      </Stack>
    </div>
  )
}

export default MyAccount