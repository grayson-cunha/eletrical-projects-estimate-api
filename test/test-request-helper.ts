import supertest from 'supertest';
import App from '../src/app/app';

export function testApi(url: string, payload?: any) {
  return {
    get() {
      return supertest(App.getExpressInstance()).get(url);
    },
    post() {
      return supertest(App.getExpressInstance()).post(url).send(payload);
    },
    put() {
      return supertest(App.getExpressInstance()).put(url).send(payload);
    },
    delete() {
      return supertest(App.getExpressInstance()).delete(url);
    },
  };
}
