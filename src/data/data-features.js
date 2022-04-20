import Features from "../models/features"
//images
import CheckRates from '../assets/images/check-rates.jpg';
import NeardyDrop from '../assets/images/neardy-drop.jpg';
import Order from '../assets/images/order.jpg';
import Help from '../assets/images/mail.jpg';
import Wallet from '../assets/images/wallet.png';
import Others from '../assets/images/others.png';

const GET_DATA_FEATURES = [
    new Features(1,CheckRates,'Check Rates'),
    new Features(2,NeardyDrop,'Neardy Drop'),
    new Features(3,Order,'Order'),
    new Features(4,Help,'Help Center'),
    new Features(5,Wallet,'Wallet'),
    new Features(6,Others,'Others'),
]

export default GET_DATA_FEATURES;