import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import milkTeaGif from '../media/milktea.gif'
import banner from '../media/banner.png'
import me from '../media/me1.jpeg'
import cup4 from '../media/cup4.png'
import abi from '../utils/BuyMeACoffee.json'
import { ethers } from 'ethers';

export default function Home() {
    // Component state
    const [currentAccount, setCurrentAccount] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [memos, setMemos] = useState([]);
    const [value , setValue ] = useState('')

  // const contractAddress = '0xa49533Df28a324De58F00AC4fDfaD2412aE5586d';
    // const constactABI  = abi.abi;

  //   const isWallateConnected = async ()=>{
  //     try{
  //       const {ethereum} = window;
  //       const accounts = await ethereum.request({method: 'eth_accounts'});
  //       console.log("accounts", accounts );
  //       if(accounts.length > 0){
  //         const account = accounts[0];
  //         console.log('wallet is connected! ' + account)  
  //       } else {
  //         console.log('wallet is not connected!')
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   const connectWallete = async () => {
  //     try{
  //       const {ethereum} = window;
  //       if(!ethereum){
  //         console.log("please install metamask")
  //         return;
  //       }
  //     const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  //     setCurrentAccount(accounts[0]);
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // const buyBoba = async () => {
  //   try{
  //     const { ethereum } = window;
  //     if (ethereum){
  //       const provider = new ethers.providers.Web3Provider(ethereum, 'any');
  //       const signer = provider.getSigner();
  //       const BuyMeACoffee = new ethers.Contract(
  //         contractAddress,
  //         constactABI,
  //         signer
  //       )
  //       console.log('buying coffee..')
  //       const coffeeTxn = await BuyMeACoffee.buyCoffee(
  //         name ? name : 'Niku',
  //         message ? message : "Enjoy your boba tea!",
  //         { value : ethers.utils.parseEther(value) }
  //       );

  //       await coffeeTxn.wait();

  //       console.log('minted', coffeeTxn.hash);
  //       console.log('coffee purchased!');
  //       setName('')
  //       setMessage('')
  //       setValue(null)

  //     }
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <div className='conatiner'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className='box'>
  <div className='head'>
    <h1 className='head-title' >Buy Me A BoBa</h1>
    <img alt='milktea' className='head-gif' src={milkTeaGif.src} />
  </div>
  <div className='content'>
    <img src={banner.src} alt='banner' className='banner-img'/>
    <div className="content-wrapper">
      <div className='avatar-container'>
        <img alt='Gunwant' src={me.src} className='avatar-img' />
        <div>
          <h1 className='avatar-name'>Gunwant Wankhede</h1>
          <div className='avatar-description' >Creative developer and blockchain
          enthusiast</div>
          {/* <div>social</div> */}
        </div>
      </div>
      <div className='flex-wrapper'>
      
        <div className=' post-wrapper'>
         
          <div className='post-item'>
            <img alt='cup4' src={cup4.src} className="post-item-cup" />
            <div className='post-content'>
              <h1 className='post-title'>Lucie bought a coffees.</h1>
              {/* <div className='post-message'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repudiandae possimus autem est labore fuga voluptatum dolorum ducimus odio,
                 nostrum quia eveniet impedit voluptatem illo deleniti nobis nemo eius in? Consequuntur
                  quod ea numquam earum illum ratione, fuga laudantium magni totam, impedit corporis
                  dignissimos animi nam, recusandae ipsa iste ipsam.
                </div> */}
            </div>
          </div>
          <div className='post-item'>
          <img alt='cup4' src={cup4.src} className="post-item-cup" />
            <div>
              <h1>Lucie bought a coffees.</h1>
              
            </div>
          </div>
        </div>
      
      <div className='buy-wrapper' >
          <h1>Buy Gunwant a Boba</h1>
          <div className='buy-options-wrapper'>
          <img alt='cup4' src={cup4.src} className="buy-item-cup" />     
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L8 8M8 1L1 8" stroke="black" strokeOpacity="0.5"/>
</svg>

                 <button className='buy-btn'>1 ( 0.01 eth )</button>
            <button className='buy-btn'>2 ( 0.02 eth )</button>
            <button className='buy-btn'>3 ( 0.03 eth )</button>
          </div>
          <textarea className='buy-item-input' type='text' placeholder="Say something nice... (optional)"  />
          <button className='submit-btn'>Submit</button>
      </div>
      </div>
    </div>

  </div>

</div>

    </div>
  )
}
