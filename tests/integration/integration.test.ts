import { app, request, expect } from './config/helpers'
import * as HTTPStatus from 'http-status';

describe('Testes de Integracao do Controller', () => {

    'use strict';
    const config = require('../../config/env/config');
    const model = require('../../api/models');

    let id;

    const userTest = {
        id: 100,
        name: 'usuario Teste',
        email: 'teste@gmail.com',
        password: 'teste'
    }


    const userDefault = {
        id: 1,
        name: 'default user',
        email: 'default@gmail.com',
        password: 'default'
    }

    beforeEach((done) => {
        model.user.destroy({
            where: {}
        })
        .then(() => {
            return model.user.create(userDefault);
        })
        .then(user => {
            model.user.create(userTest)
                .then(() => {
                    done();
                });
        })
    })

    describe('Get /api/users', () => {
        it('Deve retornar todos os usuarios', done => {
            request(app)
                .get('/api/users/')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK );
                    expect(res.body.payload).to.be.an('array');
                    expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                    expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                    done(error);
                });
        });
    });

    describe('POST /api/users', () => {
        it('Deve inserir um usuario', done => {
            const user = {
                nome: 'teste'
            }
            request(app)
                .post('/api/users/')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK );
                    done(error);
                });
        });
    })

    describe('GET /api/users/:id', () => {
        it('Deve Retornar um usuario', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });

    describe('POST /api/users/:id', () => {
        it('Deve editar um usuario', done => {
            const user = {
                nome: 'teste'
            }
            request(app)
                .put(`/api/users/${1}`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });


    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um usuario', done => {
            request(app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });



})