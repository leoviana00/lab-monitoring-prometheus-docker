import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 1000 }, 
    { duration: '5m', target: 1000 },
    { duration: '2m', target: 2000 }, 
    { duration: '5m', target: 2000 },
    { duration: '2m', target: 3000 }, 
    { duration: '5m', target: 3000 },
    { duration: '2m', target: 4000 }, 
    { duration: '5m', target: 4000 },
    { duration: '10m', target: 0 }, 
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:8081'; 

  const responses = http.batch([
    ['GET', `${BASE_URL}/path1`, null, { tags: { name: '1' } }],
    // ['GET', `${BASE_URL}/path2`, null, { tags: { name: '2' } }],
  ]);

  sleep(1);
}