import * as config from '../../config';

const CLIENT_ID = config.CLIENT_ID;
const REDIRECT_URI = 'https://founder-client-1.vercel.app/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
