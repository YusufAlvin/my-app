import SvgIcon from '@mui/material/SvgIcon';
import Icons from '../assets'

const Icon = ({name, color}) => {
  return (
    <>
      <SvgIcon component={Icons[name]} htmlColor={color}/>
    </>
  )
}

export default Icon