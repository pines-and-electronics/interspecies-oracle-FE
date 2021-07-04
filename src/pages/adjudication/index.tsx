import { Button, TextField } from '@material-ui/core'
import { useNavigate } from '@reach/router'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { useTextField } from '../../components'
import metamaskLogo from './metamask.png'
import useStyles from './styles'

const { ethers } = require("ethers");



export default function Login(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()
  const [userId, userIDProps] = useTextField('text', 'UserID')
  const [password, passwordProps] = useTextField('password', 'Password')
  const [injectedProvider, setInjectedProvider] = useState<any>();
  const [address, setAddress] = useState<string>();
  const [signer, setSigner] = useState<any>();
  const [signedIn, setSignedIn] = useState<Boolean>(false);

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions: {

    } // required
  });

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();
    setInjectedProvider(ethersProvider);
    setSigner(signer)
    const addr = await signer.getAddress();
    setAddress(addr);

    provider.on("chainChanged", (chainId: Number) => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code: any, reason: any) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const onSubmit = () => {
    console.log(userId, password)
    setSignedIn(true)
    navigate('/adjudication/chooseGame')
  }

  useEffect(()=> {
    if (signedIn && injectedProvider) {
      navigate('/adjucation/chooseGame')
    }
  },[signedIn, injectedProvider])

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <div>
          {injectedProvider && <Button onClick={logoutOfWeb3Modal}>Disconnect Metamask</Button>}
        </div>
        { address && <div>Address: {address}</div>}
        {/* <Metamask3D /> */}
        <div className={classes.logoWrapper}>
          <img src={metamaskLogo} className={classes.logo}/>
        </div>
        {
          !injectedProvider ?  <Button onClick={loadWeb3Modal}>Sign in to Metamask</Button> : null
        }
        <TextField {...userIDProps} />
        <TextField {...passwordProps} />
        <Button onClick={onSubmit}>Sign In</Button>


      </div>
    </div>
  )
}
