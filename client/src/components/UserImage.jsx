import { Box } from '@mui/material';
import { url } from '../App';

const UserImage = ({ image, size = '60px' }) => {
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
