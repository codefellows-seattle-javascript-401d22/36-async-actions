'use strict';

const request = require('superagent');
const List = require('../model/list');
const PORT = process.env.PORT || 3000;
const serverToggle = require('../lib/server-toggle');
const server = require('../server');

require('jest');

const url = `http://localhost:${PORT}`;

const exampleList = {
  name: 'test list name',
};

describe('List Routes', function() {
  
  beforeAll( done => {
    serverToggle.serverOn(server, done);
  });

  afterAll( done => {
    serverToggle.serverOff(server, done);
  });

  describe('POST: /api/list', () => {
    describe('with a valid request body', () => {
      afterEach( done => {
        if (this.tempList) {
          List.remove({})
            .then( () => done())
            .catch(done);
          return;
        }
        done();
      });

      it('should return a list', done => {
        request.post(`${url}/api/list`)
          .send(exampleList)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.status).toEqual(200);
            expect(res.body.name).toEqual('test list name');
            this.tempList = res.body;
            done();
          });
      });

      it('should return a 400 error', done => {
        request.post(`${url}/api/list`)
          .send()
          .end((err, res) => {
            expect(res.status).toEqual(400);
            done();
          });
      });
    });
  });
  
  describe('GET: /api/list/:listId', () => {
    describe('with a valid body', () => {
      beforeEach( done => {
        exampleList.timestamp = new Date();
        new List(exampleList).save()
          .then( list => {
            this.tempList = list;
            done();
          })
          .catch(done);
      });

      afterEach( done => {
        delete exampleList.timestamp;
        if (this.tempList) {
          List.remove({})
            .then( () => done())
            .catch(done);
          return;
        }
        done();
      });

      it('should return a list', done => {
        request.get(`${url}/api/list/${this.tempList._id}`)
          .end( (err, res) => {
            if (err) return done(err);
            expect(res.status).toEqual(200);
            expect(res.body.name).toEqual('test list name');
            done();
          });
      });
    });
    describe('with with a valid request for an invalid id', () => {
      it('should return with a 404', done => {
        request.get(`${url}/api/list/123123123`)
          .end((err, res) => {
            expect(res.status).toEqual(404);
            done();
          });
      });
    });
  });

  describe('PUT: /api/list/:listId', () => {
    beforeEach( done => {
      exampleList.timestamp = new Date();
      new List(exampleList).save()
        .then( list => {
          this.tempList = list;
          done();
        })
        .catch(done);
    });

    afterEach( done => {
      delete exampleList.timestamp;
      if (this.tempList) {
        List.remove({})
          .then( () => done())
          .catch(done);
        return;
      }
      done();
    });
    describe('with a valid request, updated body', () => {
      it('should return an updated list', done => {
        request.put(`${url}/api/list/${this.tempList._id}`)
          .send(exampleList)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.status).toEqual(200);
            expect(res.body.name).toEqual(exampleList.name);
            this.tempList = res.body;
            done();
          });
      });
    });
    
    describe('with no request body provided', () => {
      it('should return a 400 error', done => {
        request.put(`${url}/api/list/${this.tempList._id}`)
          .send()
          .end((err, res) => {
            expect(res.status).toEqual(400);
            done();
          });
      });
    });

    describe('with a valid request but an invalid id', () => {
      it('should return a 404 error', done => {
        request.put(`${url}/api/list/asdqwrqwe`)
          .send(exampleList)
          .end((err, res) => {
            expect(res.status).toEqual(404);
            done();
          });
      });
    });
  });
});


