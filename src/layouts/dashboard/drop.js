import react from 'react'
import 'rsuite/dist/rsuite.min.css';
import Dropdown from 'rsuite/Dropdown';
import Popover from 'rsuite/Popover';
import Whisper from 'rsuite/Whisper';
import Button from '@mui/material/Button';

export default function App() {
	const speaker = (
		<Popover full>
			<Dropdown.Menu >
				<Dropdown.Menu title="New File">
					<Dropdown.Item >New File</Dropdown.Item>
					<Dropdown.Item >
						New File with Current Profile
					</Dropdown.Item>
				</Dropdown.Menu>
				<Dropdown.Item >Download As...</Dropdown.Item>
				<Dropdown.Item >Export PDF</Dropdown.Item>
				<Dropdown.Item >Export HTML</Dropdown.Item>
				<Dropdown.Item >Settings</Dropdown.Item>
				<Dropdown.Item >About</Dropdown.Item>
			</Dropdown.Menu>
		</Popover>
	)
	return (
		<div className="App">
			<h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
			<h3>React Suite Dropdown Used With Popover</h3>
			<Whisper placement="bottomStart"
				trigger="click" speaker={speaker}>
				<Button variant="contained">File</Button>
			</Whisper>
		</div>
	);
}


<Stack spacing={0.5}>
        <NavSection navConfig={tree2} />
          {tree2.map((option) => (
            <MenuItem key={option.value} selected={option.value === tree2[0].value} onClick={() => handleClose2()}>
              {option.label}
            </MenuItem>
          ))}
		  <Button
        ref={anchorRef}
        onClick={handleOpen1}
        sx={{
          padding: 2,
          marginLeft: 3.5,
          width: 100,
          height: 60,
          ...(open1 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <Iconify icon="emojione:deciduous-tree" />
        <h3>      Tree 1</h3>
      </Button>

      <MenuPopover
        open={open1}
        onClose={handleClose1}
        anchorEl={anchorRef.current}
        sx={{
          mt: -25,
          ml: 12,
          width: 120,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.5}>
          <NavSection navConfig={tree1} />
        </Stack>
      </MenuPopover> 
      
      


      <Button
        ref={anchorRef}
        onClick={handleOpen2}
        sx={{
          padding: 2,
          marginLeft: 3.5,
          width: 100,
          height: 60,
          ...(open2 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <Iconify icon="emojione:deciduous-tree" />
        <h3>      Tree 2</h3>
      </Button>

      <MenuPopover
        open={open2}
        onClose={handleClose2}
        anchorEl={anchorRef.current}
        sx={{
          mt: -17,
          ml: 12,
          width: 120,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.5}>
        <NavSection navConfig={tree2} />
        </Stack>
      </MenuPopover> 
    
      

      <Button
        ref={anchorRef}
        onClick={handleOpen3}
        sx={{
          padding: 2,
          marginLeft: 3.5,
          width: 100,
          height: 60,
          ...(open3 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <Iconify icon="emojione:deciduous-tree" />
        <h3>      Tree 3</h3>
      </Button>

      <MenuPopover
        open={open3}
        onClose={handleClose3}
        anchorEl={anchorRef.current}
        sx={{
          mt: -10,
          ml: 12,
          width: 120,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.5}>
          <NavSection navConfig={tree3} />
        </Stack>
      </MenuPopover> 
        </Stack>


  /* const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  }; */