import { Box } from '@mui/material';

const UserImage = ({ image, size = '60px' }) => {
  const url = process.env.REACT_APP_BASE_URL;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        alt='user'
        src={`${url}/assets/${image}`}
      />
      {/* src should be changed here when deployed in render */}
    </Box>
  );
};

export default UserImage;
