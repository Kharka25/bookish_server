import request from 'supertest';

import server from '../src/server';

describe('User Registration', () => {
  it('return 200 status code when user signup is successful', async () => {
    const res = await request(server).post('/api/v1/users/auth/signup').send();
    expect(res.status).toBe(200);
  });
});
