import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alerts = ({alert}) => {
  return (
    <Stack width="100%" marginBottom="15px">
      <Alert severity={`${alert.error ? "error" : "success"}`}>
          {alert.msg}
      </Alert>
    </Stack>
  )
}

export default Alerts