import axios from 'axios';
import { environment } from '../Environment';

const GameClient = axios.create({
  baseURL: environment.gameContext,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default GameClient;