import React, { useState, useEffect } from 'react'
import './App.css';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MUIDataTable from "mui-datatables";
import axie from "./images/axie.png";
import taekwon from "./images/taekwon.png";
import unchained from "./images/unchained.png";
import InventoryIcon from '@mui/icons-material/Inventory';
import useMetaMask from './hooks/useMetaMask';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import {useContractFunction, useContractCall, useContractCalls} from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';
import GameVerse from './artifacts/contracts/gameVerse.sol/gameVerse.json';
import {utils} from 'ethers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const tableColumns = [
  "Address Wallet", "NFT Name", "Price",
];

function App() {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const GameVerseABI = new utils.Interface(GameVerse.abi);
  const GameVerseAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const contract = new Contract(GameVerseAddress, GameVerseABI);

  const {state, send} = useContractFunction(contract, 'order', {transactionName: "order"})

  const [contractCall, setContractCall] = useState([]);

  const listLength = useContractCall({
    abi: GameVerseABI,
    address: GameVerseAddress,
    method: "getHistory",
    args: [],
  }) ?? [];

  useEffect(() => {
    const temp_array = [];
    if(listLength.length != 0){
    
      for(let i = 0; i < parseInt(listLength[0]._hex); i++){
        temp_array.push({
          abi: GameVerseABI,
          address: GameVerseAddress,
          method: "orderHistory",
          args: [i],
        })
      }
      setContractCall(temp_array)
    }
  }, [listLength])

  const hasil = useContractCalls(contractCall) ?? [];

  const data = []

  if(hasil[0] !== undefined){
    hasil.map((h, index) => {
      data.push([index, h[0], h[1], h[2]])
    })
    console.log(data)
  }
  else{
    console.log(false)
  }

  // function createData(address, name, price) {
  //   return { address, name, price };
  // }

  // const rows = [
  //   createData("Michael Krisna Cahyadi", "Axie", "0.0005 ETH"),
  // ];

  const buyNFT = (metaUrl, name, value) => {
    send(metaUrl, name, value, {value: utils.parseEther(value)});
  }

  return (
  <div>
    <Box
      sx={{
        display: 'block',
        width: '100%',
        height: '100vh',
        alignContent: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
      flexDirection={{ xs: "column", md: 'row'}}
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontSize={25}
              sx={{ fontWeight: 600, mr: 2, display: { xs: 'none', md: 'flex' }, color: '#ff954f' }}
            >
              GameVerse
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
  
                <MenuItem>
                  <Typography textAlign="center" color="text.primary">NFT Collections</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" color="text.primary">History</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 600,flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: '#ff954f' }}
            >
              GameVerse
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
              <MenuItem>
                <Typography textAlign="center" color="white">NFT Collections</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" color="white">History</Typography>
              </MenuItem>
            </Box> 

            <Box sx={{ flexGrow: 0 }}>
              {isActive ? (<><Typography sx={{fontSize: {xs: "10px", md: "15px"}, bgcolor: '#E96B13', color: 'white', paddingLeft: 1, borderRadius: '5px'}}>{account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}<IconButton onClick={disconnect}>
                <CancelRoundedIcon sx={{color: 'white', fontSize: {xs: "10px", md: "15px"}}}/>
              </IconButton></Typography> </>): (
              <Tooltip title="Connect to Your Metamask Wallet">
                <Button variant="contained" sx={{bgcolor: '#E96B13', color: 'white', ":hover": {bgcolor: '#925ce8'}}} onClick={connect}>Connect Wallet</Button>
              </Tooltip>)}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: 2
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
    
        <Typography variant="h5" my={2} px={6}>Buy NFT Collections</Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
        flexDirection={{ xs: "column", md: 'row'}}
      >
        <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto', marginTop: 2, marginBottom: {xs: 2, md:5}, border: '2px groove gray', paddingTop: 1 }}>
          <CardMedia
            component="img"
            alt="Axie #2761"
            height="200"
            image={axie}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Axie #2761 <Typography sx={{fontSize: "0.5em", color: '#1495ff'}}>Axie Infinity</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
              Axie Infinity is an NFT-based online video game developed by Vietnamese studio Sky Mavis, which uses Ethereum-based cryptocurrencies, Axie Infinity Shards and Smooth Love Potion.
            </Typography>
          </CardContent>
          <CardActions>
            <Typography paddingLeft="8px">0.0005 ETH</Typography>
            <Box
              sx={{
                display: 'flex',
                width: '65%',
                justifyContent: 'end',
                py: 1,
              }}
            >
            <Button size="small" variant="contained" onClick={() => buyNFT("https://gateway.pinata.cloud/ipfs/QmSqs9t55R6vPfTydHwW4ZXC8v7YGv9nYqjroRPYkYM7T7", "Axie #2761", "0.0005")}><InventoryIcon sx={{ fontSize: 15, mr: "5px" }}/>Buy</Button>
            </Box>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto', marginTop: 2, marginBottom: {xs: 2, md:5}, border: '2px groove gray', paddingTop: 1 }}>
          <CardMedia
            component="img"
            alt="TaeKwon"
            height="200"
            image={taekwon}
            style={{objectFit: "contain"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TaeKwon  <Typography sx={{fontSize: "0.5em", color: '#1495ff'}}>Tethan Arena</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
              Thetan Arena is an esport game based on blockchain technology. You can gather your friends, form a team, battle with others and earn money with just your skills.
            </Typography>
          </CardContent>
          <CardActions>
            <Typography paddingLeft="8px">0.0001 ETH</Typography>
            <Box
              sx={{
                display: 'flex',
                width: '65%',
                justifyContent: 'end',
                py: 1,
              }}
            >
            <Button size="small" variant="contained" onClick={() => buyNFT("https://gateway.pinata.cloud/ipfs/QmYALuPpyHkoYHXoFbi86SE7n2xxewajyRGxk9nGrrmhnY", "TaeKwon", "0.0001")}><InventoryIcon sx={{ fontSize: 15, mr: "5px" }}/>Buy</Button>
            </Box>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto', marginTop: 2, marginBottom: {xs: 2, md:5}, border: '2px groove gray', paddingTop: 1 }}>
          <CardMedia
            component="img"
            alt="Jackal"
            height="200"
            image={unchained}
            style={{objectFit: "contain"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jackal <Typography sx={{fontSize: "0.5em", color: '#1495ff'}}>Gods Unchained</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
              Gods Unchained is a free-to-play trading card game where players compete in epic duels using fantasy cards using Ethereum technology to bring true digital ownership to players.
            </Typography>
          </CardContent>
          <CardActions>
            <Typography paddingLeft="8px">0.00035 ETH</Typography>
            <Box
              sx={{
                display: 'flex',
                width: '65%',
                justifyContent: 'end',
                py: 1,
              }}
            >
            <Button size="small" variant="contained" onClick={() => buyNFT("https://gateway.pinata.cloud/ipfs/QmQ3mPYA3BrhmV1AUU5fitsxKxjn7ubdUNwJGYvjzzbymg", "Jackal", "0.00035")}><InventoryIcon sx={{ fontSize: 15, mr: "5px" }}/>Buy</Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
      
      <Box my={-4} p={6} 
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}>
        <Typography variant="h5" my={4}>Transaction History</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, border: '2px groove gray' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Wallet Address</TableCell>
                <TableCell>NFT Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row[0]}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row[1]}
                  </TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell align="right">{row[3]} ETH</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
